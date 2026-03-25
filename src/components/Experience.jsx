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
      className="section-spacing mx-auto max-w-5xl border-b border-neutral-900 px-0 sm:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}
      variants={containerStagger}
    >
      <motion.h2
        variants={fadeInUp}
        className="section-heading-spacing section-heading-tone text-center"
      >
        Experience & Impact
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div 
          className="absolute bottom-0 left-8 top-0 hidden w-0.5 bg-gradient-to-b from-white/10 via-white/25 to-white/10 sm:block"
          style={{
            background: 'linear-gradient(180deg, rgba(240, 240, 240, 0.12) 0%, rgba(240, 240, 240, 0.28) 50%, rgba(240, 240, 240, 0.12) 100%)',
            backgroundSize: '100% 200%',
            animation: 'gradientMove 8s ease infinite',
            willChange: 'background-position'
          }}
        ></div>
        
        <div className="space-y-10 md:space-y-12">
          {EXPERIENCES && EXPERIENCES.length > 0 ? EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative flex items-start gap-3 sm:gap-6"
            >
              {/* Timeline dot */}
              <div className="relative z-10 hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-white/20 to-white/10 sm:flex">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-base-dark">
                  <div className="h-6 w-6 rounded-full bg-base-soft/60"></div>
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-base-darker bg-base-darker/50 p-4 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-accent-cyan/50 hover:shadow-lg hover:shadow-accent-cyan/10 focus-within:outline-none focus-within:ring-2 focus-within:ring-accent-cyan focus-within:ring-offset-2 focus-within:ring-offset-base-dark sm:p-6">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h6 className="mb-1 text-lg font-semibold text-base-light sm:text-xl">
                      {experience.role}
                    </h6>
                    <p className="body-text-tone font-medium">
                      @ {experience.company}
                    </p>
                  </div>
                  <span className="mt-1 text-xs uppercase tracking-[0.2em] text-base-light/70 sm:mt-0 sm:text-sm">
                    {experience.year}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {formatDescription(experience.description).map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span className="mt-1 text-base-light/50">•</span>
                      <span className="body-text-tone">
                        {bullet}
                        {bulletIndex === 0 && index === 0 && (
                          <span className="font-semibold text-base-soft"> +30% performance improvement</span>
                        )}
                        {bulletIndex === 1 && index === 0 && (
                          <span className="font-semibold text-base-soft"> 100+ projects delivered</span>
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
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-base-muted"
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
