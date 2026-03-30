import { HIGHLIGHTS } from "../constants";
import { motion } from "framer-motion";
import { useHydrated } from "../context/HydrationContext";

// Animation variant for card entry
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Highlights = () => {
  const hydrated = useHydrated();

  return (
    <section className="px-4 pb-24 mx-auto max-w-6xl border-b border-base-darker">
      <motion.h2
        whileInView={hydrated ? { opacity: 1, y: 0 } : undefined}
        initial={hydrated ? { opacity: 0, y: -40 } : false}
        animate={!hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-semibold text-base-soft"
      >
        Highlights
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        whileInView={hydrated ? "visible" : undefined}
        initial={hydrated ? "hidden" : false}
        animate={hydrated ? undefined : "visible"}
        viewport={hydrated ? { once: true } : undefined}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        style={{ 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'stretch'
        }}
      >
        {HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  boxShadow: "0 6px 14px rgba(102, 252, 241, 0.12)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative cursor-pointer highlight-card flex flex-col h-full animate-float"
                style={{ 
                  willChange: 'transform, opacity',
                  animationDelay: `${index * 0.2}s`
                }}
              >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 via-white/20 to-white/10 p-[1px]">
              <div className="bg-base-dark rounded-xl h-full w-full"></div>
            </div>
            
            {/* Card content */}
            <div className="relative bg-base-darker/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-base-darker group-hover:border-accent-cyan transition-all duration-300 ease-in-out group-focus:outline-none group-focus:ring-2 group-focus:ring-accent-cyan group-focus:ring-offset-2 group-focus:ring-offset-base-dark flex flex-col justify-between h-full">
              {/* Title */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-base-light">
                  {highlight.title}
                </h3>
              </div>
              
              {/* Content area that grows to fill space */}
              <div className="flex-1 flex flex-col justify-start">
                <ul className="space-y-3 mb-0">
                  {highlight.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-base-light text-sm leading-relaxed">
                      <span className="mt-1 flex-shrink-0 text-base-light/50">•</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-cyan/10 via-accent-teal/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Highlights;
