import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import ProjectsNew from "./components/ProjectsNew";
import Contact from "./components/Contact";

const App = () => {
  // Particle trail effect
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      opacity: 0.6;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const particles = [];
    let mouseX = 0;
    let mouseY = 0;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.size = Math.random() * 3 + 1;
        this.color = Math.random() > 0.5 ? '#66FCF1' : '#45A29E';
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

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Add new particles
      if (Math.random() > 0.3) {
        particles.push(new Particle(mouseX, mouseY));
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw();
        
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }
      
      requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className="inset-0 -z-10 h-full w-full bg-base-dark" style={{ scrollBehavior: 'smooth' }}>
      <div className="overflow-x-hidden text-base-light antialiased selection:bg-accent-cyan selection:text-base-dark">
        {/* Animated gradient background */}
        <div 
          className="fixed top-0 -z-10 h-full w-full"
          style={{ 
            background: 'radial-gradient(circle at top left, #0b0c10 0%, #1f2833 100%)',
            animation: 'gradientShift 12s ease infinite alternate',
            willChange: 'background-position'
          }}
        ></div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <ProjectsNew />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
