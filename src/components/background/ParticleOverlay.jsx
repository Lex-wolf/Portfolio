import { useEffect, useRef, useState } from "react";

/**
 * Bubble mouse trail overlay. Fixed background layer; does not affect layout or content interaction.
 * z-index: -10 (above BaseGradient -30 and AuroraBackground -20, below content z-10).
 */
export function ParticleOverlay({ densityMultiplier = 1 }) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!mounted || prefersReducedMotion) {
      return undefined;
    }

    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.id = "particleCanvas";
    canvas.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -10;
      opacity: 0.6;
    `;
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.size = Math.random() * 3 + 1;
        this.color = Math.random() > 0.5 ? "#66FCF1" : "#45A29E";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.vx *= 0.98;
        this.vy *= 0.98;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const spawnRate = Math.max(0, Math.min(0.7 * densityMultiplier, 0.7));

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (Math.random() < spawnRate) {
        particles.push(new Particle(x, y));
        scheduleFrame();
      }
    };

    let animationId = null;

    const scheduleFrame = () => {
      if (animationId != null) return;
      animationId = window.requestAnimationFrame(tick);
    };

    const tick = () => {
      animationId = null;
      if (document.visibilityState === "hidden") {
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw();
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }
      if (particles.length > 0) {
        scheduleFrame();
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden" && animationId != null) {
        window.cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("visibilitychange", handleVisibility);
      if (animationId != null) {
        window.cancelAnimationFrame(animationId);
        animationId = null;
      }
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, [densityMultiplier, prefersReducedMotion, mounted]);

  if (!mounted) {
    return null;
  }

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: -10,
      }}
      aria-hidden="true"
    />
  );
}

export default ParticleOverlay;
