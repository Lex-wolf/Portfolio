import aboutImg from "../assets/work.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <div className="border-b border-base-darker pb-4">
      <h2 className="my-20 text-center text-4xl text-accent-cyan">
        About
        <span className="text-base-light"> Me</span>
      </h2>
      <div className="flex flex-wrap">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
              onViewportEnter={() => setHasAnimated(true)}
              className="w-full lg:w-1/2 lg:p-8"
            >
              <div className="flex items-center justify-center">
                <motion.img 
                  className="rounded-2xl w-full max-w-md" 
                  src={aboutImg} 
                  alt="about"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(102, 252, 241, 0.08)"
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ willChange: 'transform' }}
                />
              </div>
            </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          onViewportEnter={() => setHasAnimated(true)}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-base-light">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
