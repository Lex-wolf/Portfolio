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

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg-mt-16 lg:text-8xl"
            >
              Alejandro Curiel
            </motion.h1>

            <motion.div
              variants={container(0.5)}
              initial={!hasAnimated ? "hidden" : "visible"}
              animate="visible"
              className="text-center leading-snug"
            >
              <p className="text-3xl font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                Frontend Developer & QA Specialist
              </p>
              <p className="text-2xl font-medium text-neutral-300 mt-2">
                Accessibility • Automation • UX Testing
              </p>
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
              whileHover={{ scale: 1.1 }}
              href="mailto:info@alexcuriel.com"
              className="mt-4 px-6 py-3 text-lg font-medium bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent border border-white rounded-lg self-center mb-6 md:mb-10"
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
              className="rounded-2xl"
              src={profilePic}
              alt="Alejandro Curiel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
