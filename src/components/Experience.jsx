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
  const [hasAnimated, setHasAnimated] = useState(false);

  // Convert long descriptions to bullet points
  const formatDescription = (description) => {
    // Clean up the description and split into meaningful sentences
    const cleaned = description.replace(/\n\s*/g, ' ').trim();
    const sentences = cleaned.split(/[.!?]+/).filter(s => s.trim().length > 10);
    return sentences.map(sentence => sentence.trim()).slice(0, 4); // Max 4 bullets
  };


  return (
    <motion.div
      className="mx-auto max-w-5xl px-4 pb-24 border-b border-neutral-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}
      variants={containerStagger}
    >
      <motion.h2
        variants={fadeInUp}
        className="my-20 text-center text-4xl font-semibold text-white"
      >
        Experience & Impact
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-purple-400 to-teal-400"></div>
        
        <div className="space-y-16">
          {EXPERIENCES && EXPERIENCES.length > 0 ? EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative flex items-start gap-6"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full"></div>
                </div>
              </div>

              <div className="flex-1 bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-teal-400/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h6 className="text-xl font-semibold text-white mb-1">
                      {experience.role}
                    </h6>
                    <p className="text-teal-400 font-medium">
                      @ {experience.company}
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500 mt-2 sm:mt-0">
                    {experience.year}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {formatDescription(experience.description).map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-neutral-300">
                      <span className="text-teal-400 mt-1">•</span>
                      <span className="text-sm leading-relaxed">
                        {bullet}
                        {bulletIndex === 0 && index === 0 && (
                          <span className="text-teal-400 font-semibold"> +30% performance improvement</span>
                        )}
                        {bulletIndex === 1 && index === 0 && (
                          <span className="text-purple-400 font-semibold"> 100+ projects delivered</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerStagger}
                >
                  {experience.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      variants={fadeInUp}
                      className="rounded-full bg-gradient-to-r from-teal-400/20 to-purple-400/20 px-3 py-1 text-xs text-teal-300 border border-teal-400/30"
                      aria-label={`Technology: ${tech}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )) : (
            <div className="text-center text-neutral-400 py-8">
              <p>No experience data available</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
