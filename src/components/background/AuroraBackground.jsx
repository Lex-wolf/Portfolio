import { useEffect, useRef, useState } from "react";
import { scheduleIdleTask } from "../../utils/scheduleIdleTask.js";

function getAllowWebGL() {
  if (typeof window === "undefined") return false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrow = window.matchMedia("(max-width: 768px)").matches;
  const cores = typeof navigator.hardwareConcurrency === "number" ? navigator.hardwareConcurrency : 8;
  const lowPower = cores <= 4;
  return !reduced && !narrow && !lowPower;
}

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Full-screen aurora WebGL background layer (desktop only). CSS fallback on mobile / low-power / reduced motion.
 */
export function AuroraBackground({ opacity = 1 }) {
  const [mounted, setMounted] = useState(false);
  const [allowWebGL, setAllowWebGL] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const containerRef = useRef(null);
  const sceneRef = useRef({
    camera: null,
    scene: null,
    renderer: null,
    material: null,
    geometry: null,
    animationId: null,
    resizeHandler: null,
    resizeTimeoutId: null,
    resizeRafId: null,
  });

  useEffect(() => {
    setAllowWebGL(getAllowWebGL());
    setReducedMotion(getReducedMotion());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !allowWebGL) {
      return undefined;
    }

    let script = null;
    let cancelled = false;
    const sceneState = sceneRef.current;

    const initThreeJS = () => {
      if (cancelled || !containerRef.current || !window.THREE) return;

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

          vec4 tanh4(vec4 x) {
            vec4 e2x = exp(2.0 * x);
            return (e2x - 1.0) / (e2x + 1.0);
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

            o = tanh4(pow(o / 100.0, vec4(1.6)));
            gl_FragColor = o * 1.5;
          }
        `,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      threeScene.add(mesh);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
      });
      renderer.setClearColor(0x000000, 1);
      const pr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(pr);
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
      canvas.style.willChange = "transform";

      sceneState.camera = camera;
      sceneState.scene = threeScene;
      sceneState.renderer = renderer;
      sceneState.material = material;
      sceneState.geometry = geometry;

      const applyResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h);
        material.uniforms.iResolution.value.set(w, h);
      };

      const onWindowResize = () => {
        if (sceneState.resizeTimeoutId != null) {
          clearTimeout(sceneState.resizeTimeoutId);
        }
        sceneState.resizeTimeoutId = window.setTimeout(() => {
          sceneState.resizeTimeoutId = null;
          if (sceneState.resizeRafId != null) {
            cancelAnimationFrame(sceneState.resizeRafId);
          }
          sceneState.resizeRafId = requestAnimationFrame(() => {
            sceneState.resizeRafId = null;
            applyResize();
          });
        }, 120);
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

    const appendThreeScript = () => {
      if (cancelled) return;
      script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js";
      script.onload = () => {
        if (cancelled || !containerRef.current || !window.THREE) return;
        initThreeJS();
      };
      document.head.appendChild(script);
    };

    const cancelIdle = scheduleIdleTask(appendThreeScript, { timeout: 2800 });

    return () => {
      cancelled = true;
      cancelIdle();
      if (sceneState.resizeTimeoutId != null) {
        clearTimeout(sceneState.resizeTimeoutId);
        sceneState.resizeTimeoutId = null;
      }
      if (sceneState.resizeRafId != null) {
        cancelAnimationFrame(sceneState.resizeRafId);
        sceneState.resizeRafId = null;
      }
      if (sceneState.animationId != null) {
        cancelAnimationFrame(sceneState.animationId);
        sceneState.animationId = null;
      }
      if (sceneState.resizeHandler) {
        window.removeEventListener("resize", sceneState.resizeHandler, false);
        sceneState.resizeHandler = null;
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
  }, [mounted, allowWebGL]);

  const showCssFallback = !mounted || !allowWebGL;

  const fallbackClassName = [
    "fixed inset-0 -z-20 pointer-events-none aurora-css-fallback",
    mounted && !reducedMotion ? "aurora-css-fallback--animated" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (showCssFallback) {
    return (
      <div
        className={fallbackClassName}
        aria-hidden="true"
        style={{
          opacity,
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
      <div ref={containerRef} className="absolute h-full w-full" />
    </div>
  );
}

export default AuroraBackground;
