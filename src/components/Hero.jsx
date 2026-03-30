import profilePic from "../assets/pfolio.jpeg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useHydrated } from "../context/HydrationContext";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const hydrated = useHydrated();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  // Custom cursor effect
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if (window.innerWidth < 768 || "ontouchstart" in window) {
      return undefined;
    }

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
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-base-darker pb-8 pt-6 sm:pb-10 sm:pt-8 lg:-ml-6 lg:pt-10 xl:-ml-10 2xl:-ml-16"
    >
      <div className="flex flex-wrap items-center gap-y-10 lg:gap-x-12 xl:gap-x-16">
        <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-3xl">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              id="hero-heading"
              variants={container(0)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="mb-4 text-center font-light leading-[1.05] tracking-tight text-4xl text-accent-cyan transition-shadow duration-200 hover:drop-shadow-[0_0_20px_rgba(102,252,241,0.4)] sm:mb-6 sm:text-5xl md:text-6xl lg:text-left lg:text-7xl xl:text-8xl"
            >
              Alejandro Curiel
            </motion.h1>

            <motion.div
              variants={container(0.5)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              className="max-w-2xl text-center leading-snug lg:text-left"
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.h2
                className="hero-title-line mt-1 max-w-2xl text-center text-[1.85rem] leading-tight md:text-3xl lg:text-left"
                initial={hydrated ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  textShadow: "0 0 12px rgba(102, 252, 241, 0.8)",
                }}
              >
                Senior QA Engineer &amp; Software Developer
              </motion.h2>
              <motion.p 
                className="hero-subheadline mx-auto mt-3 max-w-xl text-balance lg:mx-0"
                initial={hydrated ? { opacity: 0, y: 20 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I build web products and make sure they work.
              </motion.p>
            </motion.div>

            <motion.p
              variants={container(1)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              className="body-text-tone mt-5 max-w-xl text-center lg:text-left"
            >
              10+ years of QA experience on platforms used by hundreds of thousands of people. Pearl Jam, Eric Church, Thomas Rhett.
            </motion.p>

            <motion.p
              variants={container(1.1)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              className="body-text-tone mt-4 max-w-xl text-center lg:text-left"
            >
              I also build client websites from scratch. Both sides of the work, depending on what you need.
            </motion.p>

            <div className="mt-8 flex w-full justify-center lg:hidden">
              <motion.img
                initial={hydrated ? (!hasAnimated ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }) : false}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(102, 252, 241, 0.1)"
                }}
                className="w-full max-w-[320px] animate-float rounded-2xl sm:max-w-md"
                src={profilePic}
                alt="Alejandro Curiel"
                style={{ willChange: 'transform, opacity' }}
              />
            </div>

            <motion.div
              variants={container(1.3)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              className="mt-8 flex w-full max-w-sm flex-col gap-3 self-center sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start lg:self-start"
            >
              <a
                href="#projects"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-accent-teal to-accent-cyan px-6 py-3 text-center text-sm font-semibold text-base-dark shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_10px_#66FCF1] focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark sm:w-auto sm:text-base"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-accent-teal to-accent-cyan px-6 py-3 text-center text-sm font-semibold text-base-dark shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_10px_#66FCF1] focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark sm:w-auto sm:text-base"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 hidden w-full lg:mt-0 lg:block lg:w-auto lg:flex-shrink-0 lg:min-w-[280px]">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={hydrated ? (!hasAnimated ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }) : false}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(102, 252, 241, 0.1)"
              }}
              className="w-full max-w-sm animate-float rounded-2xl sm:max-w-md lg:max-w-[28rem]"
              src={profilePic}
              alt="Alejandro Curiel"
              style={{ willChange: 'transform, opacity' }}
            />
          </div>
        </div>
      </div>
      {/* Stats row */}
      <div className="mt-12 grid grid-cols-1 gap-4 text-center text-base-light sm:grid-cols-3 md:mt-14 md:gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight">10+</p>
          <p className="text-sm text-neutral-400 mt-1">Years Experience</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight">100+</p>
          <p className="text-sm text-neutral-400 mt-1">Releases Supported</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight">QA + Dev</p>
          <p className="text-sm text-neutral-400 mt-1">Hybrid Expertise</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
