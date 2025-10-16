import { TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiCypress, SiPlaywright, SiVite, SiNodedotjs } from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { FaFileExcel, FaJira, FaWordpress, FaLowVision, FaBlind, FaUniversalAccess, FaGitAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  const technologyCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", icon: RiReactjsFill, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "HTML5", icon: TiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: IoLogoCss3, color: "text-blue-400" },
        { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400" },
        { name: "Vite", icon: SiVite, color: "text-purple-400" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      ]
    },
    {
      title: "QA & Testing",
      technologies: [
        { name: "Playwright", icon: SiPlaywright, color: "text-green-400" },
        { name: "Cypress", icon: SiCypress, color: "text-emerald-400" },
        { name: "Jira", icon: FaJira, color: "text-blue-400" },
        { name: "Excel", icon: FaFileExcel, color: "text-green-600" },
      ]
    },
    {
      title: "Accessibility",
      technologies: [
        { name: "Universal Access", icon: FaUniversalAccess, color: "text-teal-400" },
        { name: "Low Vision Support", icon: FaLowVision, color: "text-purple-400" },
        { name: "Screen Reader Support", icon: FaBlind, color: "text-indigo-400" },
      ]
    },
    {
      title: "Tools",
      technologies: [
        { name: "WordPress", icon: FaWordpress, color: "text-blue-500" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "GitHub", icon: FaGithub, color: "text-gray-400" },
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2 variants={fadeInUp} className="my-20 text-center text-4xl text-accent-cyan">
          Technologies
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp}
          className="text-center text-base-light text-lg mb-12 max-w-2xl mx-auto"
        >
          Here's the stack I build and test with — from modern frameworks to QA automation tools.
        </motion.p>

        <div className="space-y-12">
          {technologyCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={fadeInUp} className="text-center">
              <h3 className="text-xl font-semibold text-accent-teal mb-6">{category.title}</h3>
              <div className="flex flex-wrap items-center justify-center gap-4 pb-8">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    variants={fadeInUp}
                    whileHover={{ 
                      scale: 1.05,
                      y: -4,
                      boxShadow: "0 8px 25px rgba(102, 252, 241, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative cursor-pointer flex flex-col items-center"
                  >
                    <div className="rounded-xl border-2 border-base-darker p-4 bg-base-dark/50 backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:border-accent-cyan group-hover:bg-base-darker/80 group-focus:outline-none group-focus:ring-2 group-focus:ring-accent-cyan group-focus:ring-offset-2 group-focus:ring-offset-base-dark">
                      <tech.icon 
                        className={`text-4xl ${tech.color} transition-colors duration-300 group-hover:drop-shadow-[0_0_6px_#45A29E]`}
                        title={tech.name}
                        aria-label={tech.name}
                        style={{ willChange: 'transform, opacity' }}
                      />
                    </div>
                    {/* Tooltip positioned below with proper spacing */}
                    <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-base-dark/90 backdrop-blur-sm text-accent-cyan text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg z-20 border border-accent-cyan/30">
                      {tech.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
