import { useEffect, useRef } from "react";

/**
 * Full-page Three.js aurora shader layer (loaded from CDN).
 * Renderer uses alpha: true and setClearColor(0,0,0,0) for transparent background.
 */
export function WebGLEffects() {
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
    let script = null;

    const initThreeJS = () => {
      if (!containerRef.current || !window.THREE) return;

      const THREE = window.THREE;
      const container = containerRef.current;

      container.innerHTML = "";

      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const scene = new THREE.Scene();

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
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      const canvas = renderer.domElement;
      canvas.style.position = "fixed";
      canvas.style.inset = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.zIndex = "-20";
      canvas.style.pointerEvents = "none";

      sceneRef.current.camera = camera;
      sceneRef.current.scene = scene;
      sceneRef.current.renderer = renderer;
      sceneRef.current.material = material;
      sceneRef.current.geometry = geometry;

      const onWindowResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h);
        material.uniforms.iResolution.value.set(w, h);
      };

      sceneRef.current.resizeHandler = onWindowResize;
      window.addEventListener("resize", onWindowResize, false);

      const animate = () => {
        sceneRef.current.animationId = requestAnimationFrame(animate);
        material.uniforms.iTime.value += 0.016;
        renderer.render(scene, camera);
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
      if (sceneRef.current.animationId != null) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.animationId = null;
      }
      if (sceneRef.current.resizeHandler) {
        window.removeEventListener("resize", sceneRef.current.resizeHandler, false);
      }
      if (sceneRef.current.renderer) {
        sceneRef.current.renderer.dispose();
        if (sceneRef.current.renderer.domElement?.parentNode) {
          sceneRef.current.renderer.domElement.parentNode.removeChild(sceneRef.current.renderer.domElement);
        }
      }
      if (sceneRef.current.material) sceneRef.current.material.dispose();
      if (sceneRef.current.geometry) sceneRef.current.geometry.dispose();
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: -20,
      }}
      aria-hidden="true"
    >
      <div ref={containerRef} className="w-full h-full absolute" />
    </div>
  );
}

export default WebGLEffects;
