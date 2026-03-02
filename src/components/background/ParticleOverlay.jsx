import { useEffect, useRef } from "react";

/**
 * Bubble mouse trail overlay. Fixed background layer; does not affect layout or content interaction.
 * z-index: -10 (above BaseGradient -30 and AuroraBackground -20, below content z-10).
 */
export function ParticleOverlay() {
  const containerRef = useRef(null);

  useEffect(() => {
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

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (Math.random() > 0.3) {
        particles.push(new Particle(x, y));
      }
    };

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw();
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (animationId != null) cancelAnimationFrame(animationId);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

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
