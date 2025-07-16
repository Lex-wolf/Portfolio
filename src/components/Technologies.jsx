import { TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiCypress, SiPlaywright } from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { FaFileExcel, FaJira, FaWordpress, FaLowVision, FaBlind, FaUniversalAccess } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-sky-400" aria-label="JavaScript" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-blue-500" aria-label="React" />
        </motion.div>

        <motion.div variants={iconVariants(1.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoCss3 className="text-7xl text-violet-800" aria-label="CSS3" />
        </motion.div>

        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TiHtml5 className="text-7xl text-sky-400" aria-label="HTML5" />
        </motion.div>

        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiVite className="text-7xl text-blue-500" aria-label="Vite" />
        </motion.div>

        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-violet-800" aria-label="Tailwind CSS" />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaFileExcel className="text-7xl text-blue-500" aria-label="Excel" />
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJira className="text-7xl text-violet-800" aria-label="Jira" />
        </motion.div>

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaWordpress className="text-7xl text-blue-500" aria-label="WordPress" />
        </motion.div>

        <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCypress className="text-7xl text-green-400" aria-label="Cypress" />
        </motion.div>

        <motion.div variants={iconVariants(2.1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPlaywright className="text-7xl text-purple-400" aria-label="Playwright" />
        </motion.div>

        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaUniversalAccess className="text-7xl text-sky-400" aria-label="Accessibility" />
        </motion.div>

        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaLowVision className="text-7xl text-violet-500" aria-label="Low Vision Support" />
        </motion.div>

        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaBlind className="text-7xl text-purple-500" aria-label="Screen Reader Support" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
