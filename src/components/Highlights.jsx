import { HIGHLIGHTS } from "../constants";
import { motion } from "framer-motion";

const Highlights = () => {
  return (
    <div className="p-6 border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl"
      >
        Highlights
      </motion.h2>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {HIGHLIGHTS.map((highlight, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-white p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>
            <ul className="list-disc list-inside" style={{ color: "#A3A3A3" }}>
              {highlight.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Highlights;
