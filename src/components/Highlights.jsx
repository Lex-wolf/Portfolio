import { HIGHLIGHTS } from "../constants";
import { motion } from "framer-motion";

// hidden explanation: Animation variant for card entry
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Highlights = () => {
  return (
    <section className="px-4 pb-24 mx-auto max-w-5xl border-b border-neutral-900">
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
            variants={fadeIn} // hidden explanation: Fade each card in with a slight rise
            className="bg-neutral-900 p-6 rounded-xl shadow-md border border-neutral-800"
          >
            <h3 className="text-lg font-medium text-white mb-3">
              {highlight.title}
            </h3>
            <ul className="list-disc list-inside text-neutral-400 text-sm space-y-2">
              {highlight.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Highlights;
