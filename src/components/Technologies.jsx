import { TiHtml5 } from "react-icons/ti";
import { SiJavascript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiClickup } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
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
      <h2 className="my-20 text-center text-4xl">Techologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.4)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-sky-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandReactNative className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(1.9)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoCss3 className="text-7xl text-violet-800" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.3)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TiHtml5 className="text-7xl text-sky-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.3)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiVite className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.3)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-violet-800" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.3)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiClickup className="text-7xl text-sky-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaSlack className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJira className="text-7xl text-violet-800" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;

//https://www.youtube.com/watch?v=_63mEm3AMSY&list=PLht1XLyOVKfeJ6RlbF70gfcWG23Z1dWqk&index=12
//52:54
