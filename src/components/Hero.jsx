import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pfolio.jpeg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 40px;
      height: 40px;
      border: 2px solid rgba(102, 252, 241, 0.35);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
      background: transparent;
    `;
    document.body.appendChild(cursor);

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      background: rgba(102, 252, 241, 0.6);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.1s ease;
    `;
    cursor.appendChild(dot);

    let x = 0, y = 0;
    let targetX = 0, targetY = 0;

    const animate = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      cursor.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    // Keep default cursor visible
    document.body.style.cursor = 'auto';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    animate();
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="border-b border-base-darker pb-4 lg:mb-35 lg:-ml-6 xl:-ml-10 2xl:-ml-16">
      <div className="flex flex-wrap lg:gap-x-12 xl:gap-x-16">
        <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-3xl">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="font-light leading-tight tracking-tight mb-6 text-center lg:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent-cyan cursor-pointer transition-shadow duration-200 hover:drop-shadow-[0_0_20px_rgba(102,252,241,0.4)]"
            >
              Alejandro Curiel
            </motion.h1>

            <motion.div
              variants={container(0.5)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              className="text-center leading-snug"
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-semibold max-w-2xl mt-1 text-center lg:text-left bg-gradient-to-r from-accent-teal to-accent-cyan bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  textShadow: "0 0 12px rgba(102, 252, 241, 0.8)",
                }}
              >
                Senior QA Engineer &amp; Web Systems
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-300 mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Manual &amp; Automated Testing | API &amp; SQL Validation | CI/CD | React | Accessibility
              </motion.p>
            </motion.div>

            <motion.p
              variants={container(1)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              className="text-lg leading-relaxed text-gray-300 max-w-xl mt-5"
            >
              I work at the intersection of quality and creation, bringing QA thinking into how systems are designed and shipped.
            </motion.p>

            <motion.p
              variants={container(1.1)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              className="text-lg leading-relaxed text-gray-300 max-w-xl mt-4"
            >
              Most of my work lives between testing and building—partnering with teams, supporting growing platforms, and keeping web experiences stable, accessible, and easy to use.
            </motion.p>

            <motion.div
              variants={container(1.3)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 mt-8 self-center lg:self-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-teal to-accent-cyan text-base-dark font-semibold shadow-lg transition-all duration-200 hover:shadow-[0_0_10px_#66FCF1] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-teal to-accent-cyan text-base-dark font-semibold shadow-lg transition-all duration-200 hover:shadow-[0_0_10px_#66FCF1] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:flex-shrink-0 lg:min-w-[280px]">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={!hasAnimated ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(102, 252, 241, 0.1)"
              }}
              className="rounded-2xl w-full max-w-lg animate-float"
              src={profilePic}
              alt="Alejandro Curiel"
              style={{ willChange: 'transform, opacity' }}
            />
          </div>
        </div>
      </div>
      {/* Stats row */}
      <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-center text-base-light">
        <div>
          <p className="text-3xl md:text-4xl font-semibold tracking-tight">10+</p>
          <p className="text-sm text-neutral-400 mt-1">Years Experience</p>
        </div>
        <div className="hidden sm:block h-10 w-px bg-neutral-800" />
        <div>
          <p className="text-3xl md:text-4xl font-semibold tracking-tight">100+</p>
          <p className="text-sm text-neutral-400 mt-1">Releases Supported</p>
        </div>
        <div className="hidden sm:block h-10 w-px bg-neutral-800" />
        <div>
          <p className="text-3xl md:text-4xl font-semibold tracking-tight">QA + Dev</p>
          <p className="text-sm text-neutral-400 mt-1">Hybrid Expertise</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
