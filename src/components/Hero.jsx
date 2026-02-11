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
    <div className="border-b border-base-darker pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg-mt-16 lg:text-8xl bg-gradient-to-r from-accent-teal to-accent-cyan bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-shift"
              style={{
                willChange: 'background-position',
                background: 'linear-gradient(90deg, #45A29E 0%, #66FCF1 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 10s ease-in-out infinite'
              }}
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
              <motion.p 
                className="text-2xl font-semibold bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Senior QA Engineer | Automation & Web Systems
              </motion.p>
              <motion.p 
                className="text-base font-medium text-base-light mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Manual & Automated QA | Playwright | API Testing | Accessibility | React
              </motion.p>
            </motion.div>

            <motion.p
              variants={container(1)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={container(1.5)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 0 12px #66FCF1"
              }}
              whileTap={{ scale: 0.98 }}
              href="mailto:info@alexcuriel.com"
              className="mt-4 px-6 py-3 text-lg font-medium bg-gradient-to-r from-accent-teal to-accent-cyan text-base-dark rounded-lg self-center mb-6 md:mb-10 transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark"
            >
              Let's Work Together
            </motion.a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
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
    </div>
  );
};

export default Hero;
