import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Experience = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
