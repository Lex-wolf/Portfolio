import { HIGHLIGHTS } from "../constants";
import { motion } from "framer-motion";

// Animation variant for card entry
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Highlights = () => {

  return (
    <section className="px-4 pb-24 mx-auto max-w-6xl border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-semibold text-white"
      >
        Highlights
      </motion.h2>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        whileInView="visible"
        initial="hidden"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {HIGHLIGHTS.map((highlight, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            className="group relative"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-teal-400 to-purple-500 rounded-xl p-[1px]">
              <div className="bg-neutral-900 rounded-xl h-full w-full"></div>
            </div>
            
            {/* Card content */}
            <div className="relative bg-neutral-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-neutral-800 group-hover:border-teal-400/50 transition-all duration-300">
              {/* Title */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">
                  {highlight.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {highlight.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-300 text-sm leading-relaxed">
                    <span className="text-teal-400 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-teal-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Highlights;
