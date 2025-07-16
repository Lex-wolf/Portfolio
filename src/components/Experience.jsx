import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation variant used to fade content in from below
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Animation for staggered child components
const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Experience = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Tracks if animation has already triggered

  return (
    <motion.div
      className="mx-auto max-w-4xl px-4 pb-24 border-b border-neutral-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}
      variants={containerStagger} // hidden explanation: wraps all child animations in staggered order
    >
      <motion.h2
        variants={fadeInUp}
        className="my-20 text-center text-4xl font-semibold text-white"
      >
        Experience
      </motion.h2>

      <div className="space-y-16">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6"
          >
            <div className="sm:w-1/4">
              <p className="text-sm text-neutral-500 whitespace-nowrap">
                {experience.year}
              </p>
            </div>

            <div className="sm:w-3/4">
              <h6 className="mb-1 text-lg font-medium text-neutral-200">
                {experience.role}
                <span className="ml-2 text-sm text-purple-300 font-normal">
                  @ {experience.company}
                </span>
              </h6>

              <p className="text-neutral-400 leading-relaxed">
                {experience.description}
              </p>

              <motion.div
                className="mt-3 flex flex-wrap gap-2"
                variants={containerStagger} // hidden explanation: optional staggered entry for tech tags
              >
                {experience.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    variants={fadeInUp}
                    className="rounded bg-neutral-800 px-3 py-1 text-xs text-purple-400 border border-purple-700"
                    aria-label={`Technology: ${tech}`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
