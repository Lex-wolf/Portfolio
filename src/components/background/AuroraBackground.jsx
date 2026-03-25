import { useEffect, useRef } from "react";

/**
 * Full-screen aurora WebGL background layer. Does not affect layout or scroll.
 * Transparent over BaseGradient; z-index -20; pointer-events none.
 */
export function AuroraBackground({ opacity = 1 }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const containerRef = useRef(null);
  const sceneRef = useRef({
    camera: null,
    scene: null,
    renderer: null,
    material: null,
    geometry: null,
    animationId: null,
    resizeHandler: null,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    let script = null;
    const sceneState = sceneRef.current;

    const initThreeJS = () => {
      if (!containerRef.current || !window.THREE) return;

      const THREE = window.THREE;
      const container = containerRef.current;

      container.innerHTML = "";

      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const threeScene = new THREE.Scene();

      const material = new THREE.ShaderMaterial({
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        },
        vertexShader: `
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          precision highp float;
          uniform float iTime;
          uniform vec2 iResolution;

          #define NUM_OCTAVES 3

          float rand(vec2 n) {
            return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
          }

          float noise(vec2 p) {
            vec2 ip = floor(p);
            vec2 u = fract(p);
            u = u*u*(3.0-2.0*u);

            float res = mix(
              mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
              mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
            return res * res;
          }

          float fbm(vec2 x) {
            float v = 0.0;
            float a = 0.3;
            vec2 shift = vec2(100);
            mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
            for (int i = 0; i < NUM_OCTAVES; ++i) {
              v += a * noise(x);
              x = rot * x * 2.0 + shift;
              a *= 0.4;
            }
            return v;
          }

          void main() {
            vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
            vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
            vec2 v;
            vec4 o = vec4(0.0);

            float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

            for (float i = 0.0; i < 35.0; i++) {
              v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
              float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0));
              vec4 auroraColors = vec4(
                0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
                0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
                0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
                1.0
              );
              vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
              float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6;
              o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
            }

            o = tanh(pow(o / 100.0, vec4(1.6)));
            gl_FragColor = o * 1.5;
          }
        `,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      threeScene.add(mesh);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      const canvas = renderer.domElement;
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "-20";

      sceneState.camera = camera;
      sceneState.scene = threeScene;
      sceneState.renderer = renderer;
      sceneState.material = material;
      sceneState.geometry = geometry;

      const onWindowResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h);
        material.uniforms.iResolution.value.set(w, h);
      };

      sceneState.resizeHandler = onWindowResize;
      window.addEventListener("resize", onWindowResize, false);

      const animate = () => {
        sceneState.animationId = requestAnimationFrame(animate);
        material.uniforms.iTime.value += 0.016;
        renderer.render(threeScene, camera);
      };

      animate();
    };

    script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js";
    script.onload = () => {
      if (containerRef.current && window.THREE) {
        initThreeJS();
      }
    };
    document.head.appendChild(script);

    return () => {
      if (sceneState.animationId != null) {
        cancelAnimationFrame(sceneState.animationId);
        sceneState.animationId = null;
      }
      if (sceneState.resizeHandler) {
        window.removeEventListener("resize", sceneState.resizeHandler, false);
      }
      if (sceneState.renderer) {
        sceneState.renderer.dispose();
        if (sceneState.renderer.domElement?.parentNode) {
          sceneState.renderer.domElement.parentNode.removeChild(sceneState.renderer.domElement);
        }
      }
      if (sceneState.material) sceneState.material.dispose();
      if (sceneState.geometry) sceneState.geometry.dispose();
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div
        className="fixed inset-0 -z-20 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity,
          background:
            "radial-gradient(circle at 20% 20%, rgba(102, 252, 241, 0.14), transparent 45%), radial-gradient(circle at 80% 30%, rgba(69, 162, 158, 0.18), transparent 40%), radial-gradient(circle at 50% 80%, rgba(102, 252, 241, 0.08), transparent 45%)",
        }}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 -z-20 pointer-events-none"
      aria-hidden="true"
      style={{ opacity }}
    >
      <div ref={containerRef} className="w-full h-full absolute" />
    </div>
  );
}

export default AuroraBackground;
