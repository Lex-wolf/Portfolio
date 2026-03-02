import { TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiPlaywright, SiVite, SiNodedotjs, SiNextdotjs, SiPostman, SiGithub, SiFigma, SiPostgresql } from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3, IoPhonePortraitOutline } from "react-icons/io5";
import { FaFileExcel, FaJira, FaWordpress, FaLowVision, FaBlind, FaUniversalAccess, FaGitAlt, FaGithub, FaFigma, FaStickyNote, FaLightbulb, FaWaveSquare, FaEye, FaMicrophone, FaShopify, FaApple, FaMobileAlt } from "react-icons/fa";
import { BiTestTube, BiCodeAlt, BiAccessibility, BiCog } from "react-icons/bi";
import { motion } from "framer-motion";

// Import custom icons
import TrelloIcon from "../assets/icons/Trello-Emblem.png";
import LighthouseIcon from "../assets/icons/lighthouse.svg";
import FigmaIcon from "../assets/icons/FIGMA.png";
import NotionIcon from "../assets/icons/notion.png";
import ClickupIcon from "../assets/icons/Clickup-logo.png";
import VsCodeIcon from "../assets/icons/app-icon.png";
import AxeIcon from "../assets/icons/AXECORE.png";
import RadixIcon from "../assets/icons/RADIX UI.png";

const Technologies = () => {
  const technologyCategories = [
    {
      title: "Frontend Development",
      technologies: [
        { name: "React", icon: RiReactjsFill, color: "text-blue-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400" },
        { name: "Vite", icon: SiVite, color: "text-purple-400" },
        { name: "Radix UI", icon: RadixIcon, color: "text-purple-400", isImage: true },
        { name: "Shopify", icon: FaShopify, color: "text-emerald-400" },
        { name: "HTML5", icon: TiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: IoLogoCss3, color: "text-blue-400" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      ]
    },
    {
      title: "QA & Automation",
      technologies: [
        { name: "Playwright", icon: SiPlaywright, color: "text-green-400" },
        { name: "Postman", icon: SiPostman, color: "text-orange-400" },
        { name: "GitHub Actions", icon: SiGithub, color: "text-gray-300" },
        { name: "TestRail", icon: BiTestTube, color: "text-blue-400" },
        { name: "JIRA", icon: FaJira, color: "text-blue-500" },
        { name: "Excel", icon: FaFileExcel, color: "text-green-600" },
        { name: "XCTest", icon: FaApple, color: "text-cyan-400" },
        { name: "XCUITest", icon: IoPhonePortraitOutline, color: "text-cyan-400" },
        { name: "SQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "REST API Testing", icon: SiPostman, color: "text-orange-400" },
        { name: "iOS Simulator", icon: FaMobileAlt, color: "text-gray-300" },
        { name: "TestFlight", icon: FaApple, color: "text-gray-300" },
      ]
    },
    {
      title: "Accessibility & Auditing",
      technologies: [
        { name: "WCAG 2.1/2.2", icon: BiAccessibility, color: "text-teal-400" },
        { name: "Lighthouse", icon: LighthouseIcon, color: "text-yellow-400", isImage: true },
        { name: "axe-core", icon: AxeIcon, color: "text-red-400", isImage: true },
        { name: "WAVE", icon: FaWaveSquare, color: "text-blue-400" },
        { name: "Screen Readers", icon: FaMicrophone, color: "text-purple-400" },
      ]
    },
    {
      title: "Collaboration & Tools",
      technologies: [
        { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "Figma", icon: FigmaIcon, color: "text-purple-400", isImage: true },
        { name: "Notion", icon: NotionIcon, color: "text-gray-400", isImage: true },
        { name: "ClickUp", icon: ClickupIcon, color: "text-blue-400", isImage: true },
        { name: "Trello", icon: TrelloIcon, color: "text-blue-500", isImage: true },
        { name: "VS Code", icon: VsCodeIcon, color: "text-blue-400", isImage: true },
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
      <style jsx>{`
        .technology-icon,
        .technology-icon * {
          background: none !important;
          background-color: transparent !important;
          box-shadow: none !important;
        }
        .technology-icon svg,
        .technology-icon img {
          background: transparent !important;
          background-color: transparent !important;
          mix-blend-mode: normal;
          display: block;
        }
        .technology-icon:hover,
        .technology-icon:hover * {
          background: none !important;
          background-color: transparent !important;
        }
        .technology-icon:hover {
          box-shadow: 0 0 15px rgba(102, 252, 241, 0.4), 0 0 25px rgba(69, 162, 158, 0.25) !important;
        }
      `}</style>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-4"
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

            <div className="space-y-16">
              {technologyCategories.map((category, categoryIndex) => (
                <motion.div key={category.title} variants={fadeInUp} className="text-center">
                  <h3 className="text-xl font-semibold text-accent-teal mb-8">{category.title}</h3>
                  <div 
                    className="flex flex-wrap justify-center items-center gap-3 pb-8"
                    style={{
                      alignItems: 'center'
                    }}
                  >
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        variants={fadeInUp}
                        whileHover={{
                          scale: 1.08,
                          y: -4
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative cursor-pointer flex flex-col items-center"
                      >
                        <div 
                          className="technology-icon rounded-lg border border-accent-cyan/20 p-3 transition-all duration-300 ease-in-out group-hover:border-accent-cyan group-hover:animate-glow group-focus:outline-none group-focus:ring-2 group-focus:ring-accent-cyan group-focus:ring-offset-2 group-focus:ring-offset-base-dark"
                          style={{
                            background: 'none',
                            backgroundColor: 'transparent',
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'none',
                            backdropFilter: 'none'
                          }}
                        >
                          {tech.isImage ? (
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className={`w-10 h-10 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#66FCF1] group-hover:drop-shadow-[0_0_25px_#45A29E]`}
                              title={tech.name}
                              style={{ 
                                willChange: 'transform, opacity',
                                transform: 'scale(1)',
                                filter: 'none',
                                background: 'transparent',
                                mixBlendMode: 'normal',
                                display: 'block',
                                objectFit: 'contain'
                              }}
                            />
                          ) : (
                            <tech.icon
                              className={`w-10 h-10 ${tech.color} transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#66FCF1] group-hover:drop-shadow-[0_0_25px_#45A29E]`}
                              title={tech.name}
                              aria-label={tech.name}
                              style={{ 
                                willChange: 'transform, opacity',
                                transform: 'scale(1)',
                                filter: 'none',
                                background: 'transparent',
                                mixBlendMode: 'normal',
                                display: 'block'
                              }}
                            />
                          )}
                        </div>
                        {/* Tooltip positioned below with proper spacing */}
                        <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-base-dark/90 text-accent-cyan text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg z-20 border border-accent-cyan/30">
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
