import { useLayoutEffect, useRef, useState } from "react";
import { Apple, Award, BookOpenCheck, Plane, ShoppingBag, Smartphone } from "lucide-react";
import {
  SiJavascript,
  SiPlaywright,
  SiVite,
  SiNodedotjs,
  SiPostman,
  SiTypescript,
  SiGooglechrome,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiVercel,
  SiLighthouse,
  SiTrello,
  SiClickup,
  SiJenkins,
  SiNotion,
} from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  FaJira,
  FaGitAlt,
  FaApple,
  FaUniversalAccess,
  FaAssistiveListeningSystems,
} from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useHydrated } from "../context/HydrationContext";
import { useLanguage } from "../context/LanguageContext";
import { useAudienceView } from "../context/AudienceViewContext";
import { QA_SKILL_HIGHLIGHTS, WEB_SKILL_HIGHLIGHTS } from "../constants/audienceFilters";

// Import custom icons
import AxeIcon from "../assets/icons/AXECORE.png";

const Technologies = () => {
  const hydrated = useHydrated();
  const { t } = useLanguage();
  const { audience } = useAudienceView();
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedMaxPx, setExpandedMaxPx] = useState(0);
  const expandedContentRef = useRef(null);

  useLayoutEffect(() => {
    if (!isExpanded) {
      setExpandedMaxPx(0);
      return;
    }
    const el = expandedContentRef.current;
    if (!el) return;
    setExpandedMaxPx(el.scrollHeight);
  }, [isExpanded]);

  const skillHighlightSet =
    audience === "web" ? WEB_SKILL_HIGHLIGHTS : QA_SKILL_HIGHLIGHTS;

  const technologyIconShellClass = (techName) =>
    [
      "technology-icon rounded-lg border p-3 transition-all duration-300 ease-in-out group-hover:border-accent-cyan group-hover:animate-glow group-focus:outline-none group-focus:ring-2 group-focus:ring-accent-cyan group-focus:ring-offset-2 group-focus:ring-offset-base-dark",
      skillHighlightSet.has(techName)
        ? "border-accent-teal ring-2 ring-accent-teal/60 shadow-[0_0_18px_rgba(69,162,158,0.35)]"
        : "border-white/10",
    ].join(" ");

  const technologyCategories = [
    {
      id: "development",
      technologies: [
        { name: "React", icon: RiReactjsFill, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
        { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400" },
        { name: "Vite", icon: SiVite, color: "text-purple-400" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Shopify", icon: ShoppingBag, color: "text-emerald-400" },
      ],
    },
    {
      id: "qaAutomation",
      technologies: [
        { name: "Playwright", icon: SiPlaywright, color: "text-green-400" },
        { name: "Postman", icon: SiPostman, color: "text-orange-400" },
        { name: "JIRA", icon: FaJira, color: "text-blue-500" },
        { name: "TestRail", icon: BiTestTube, color: "text-blue-400" },
        { name: "Chrome DevTools", icon: SiGooglechrome, color: "text-blue-400" },
        { name: "Xcode", icon: FaApple, color: "text-gray-300" },
        { name: "GitHub Actions", icon: SiGithub, color: "text-white" },
        { name: "iOS", icon: Apple, color: "text-gray-300" },
        { name: "Android", icon: Smartphone, color: "text-green-400" },
        { name: "TestFlight", icon: Plane, color: "text-sky-400" },
        { name: "WCAG 2.1", icon: BookOpenCheck, color: "text-amber-300" },
        { name: "CPACC Certified", icon: Award, color: "text-teal-400" },
      ],
    },
    {
      id: "accessibility",
      technologies: [
        { name: "axe-core", icon: AxeIcon, color: "text-red-400", isImage: true },
        { name: "Lighthouse", icon: SiLighthouse, color: "text-orange-400" },
        { name: "NVDA", icon: FaUniversalAccess, color: "text-blue-400" },
        { name: "VoiceOver", icon: FaAssistiveListeningSystems, color: "text-gray-300" },
      ],
    },
    {
      id: "collaboration",
      technologies: [
        { name: "Trello", icon: SiTrello, color: "text-blue-400" },
        { name: "ClickUp", icon: SiClickup, color: "text-purple-400" },
        { name: "Jenkins", icon: SiJenkins, color: "text-red-400" },
        { name: "Notion", icon: SiNotion, color: "text-white" },
        { name: "VS Code", icon: VscVscode, color: "text-blue-400" },
      ],
    },
    {
      id: "backend",
      technologies: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "SQL", icon: TbSql, color: "text-cyan-400" },
      ],
    },
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
    <section className="section-spacing border-b border-neutral-800">
      <motion.div
        initial={hydrated ? "hidden" : false}
        animate={hydrated ? undefined : "visible"}
        whileInView={hydrated ? "visible" : undefined}
        viewport={hydrated ? { once: true } : undefined}
        variants={staggerContainer}
        className="mx-auto w-full max-w-7xl px-0 sm:px-4"
      >
        <motion.h2 variants={fadeInUp} className="section-heading-spacing section-heading-tone text-center">
          {t("technologies.heading")}
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp}
          className="body-text-tone mx-auto mb-8 max-w-2xl text-center md:mb-10"
        >
          {t("technologies.subheading")}
        </motion.p>

        <div className="space-y-8 md:space-y-10">
          {technologyCategories.slice(0, 2).map((category) => (
            <motion.div key={category.id} variants={fadeInUp} className="text-center">
              <h3 className="mb-6 text-[0.75rem] uppercase tracking-[0.1em] text-white/50">
                {t(`technologies.categories.${category.id}`)}
              </h3>
              <div
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                style={{
                  alignItems: "center",
                }}
              >
                {category.technologies.map((tech) => (
                  <motion.div
                    key={`${category.id}-${tech.name}`}
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex cursor-pointer flex-col items-center"
                  >
                    <div
                      className={technologyIconShellClass(tech.name)}
                      style={{
                        background: "none",
                        backgroundColor: "transparent",
                        width: "72px",
                        height: "72px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "none",
                        backdropFilter: "none",
                      }}
                    >
                      {tech.isImage ? (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          className="h-8 w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#66FCF1] group-hover:drop-shadow-[0_0_25px_#45A29E] sm:h-10 sm:w-10"
                          title={tech.name}
                          style={{
                            willChange: "transform, opacity",
                            transform: "scale(1)",
                            filter: "none",
                            background: "transparent",
                            mixBlendMode: "normal",
                            display: "block",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <tech.icon
                          className={`h-8 w-8 ${tech.color} transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#66FCF1] group-hover:drop-shadow-[0_0_25px_#45A29E] sm:h-10 sm:w-10`}
                          title={tech.name}
                          aria-label={tech.name}
                          style={{
                            willChange: "transform, opacity",
                            transform: "scale(1)",
                            filter: "none",
                            background: "transparent",
                            mixBlendMode: "normal",
                            display: "block",
                          }}
                        />
                      )}
                    </div>
                    <div className="absolute top-full z-20 mt-3 hidden whitespace-nowrap rounded-lg border border-accent-cyan/30 bg-base-dark/90 px-3 py-2 text-xs font-medium text-accent-cyan opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
                      {tech.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <div
            className="overflow-hidden"
            style={{
              maxHeight: isExpanded ? `${expandedMaxPx}px` : "0px",
              transition: "max-height 0.4s ease",
            }}
          >
            <div ref={expandedContentRef} className="space-y-8 md:space-y-10 pt-2">
              {technologyCategories.slice(2).map((category) => (
                <motion.div key={category.id} variants={fadeInUp} className="text-center">
                  <h3 className="mb-6 text-[0.75rem] uppercase tracking-[0.1em] text-white/50">
                    {t(`technologies.categories.${category.id}`)}
                  </h3>
                  <div
                  className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                    style={{
                      alignItems: "center",
                    }}
                  >
                    {category.technologies.map((tech) => (
                      <motion.div
                        key={`${category.id}-${tech.name}`}
                        variants={fadeInUp}
                        whileHover={{
                          scale: 1.08,
                          y: -4,
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex cursor-pointer flex-col items-center"
                      >
                        <div
                          className={technologyIconShellClass(tech.name)}
                          style={{
                            background: "none",
                            backgroundColor: "transparent",
                            width: "72px",
                            height: "72px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "none",
                            backdropFilter: "none",
                          }}
                        >
                          {tech.isImage ? (
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              loading="lazy"
                              decoding="async"
                              fetchPriority="low"
                              className="h-8 w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#66FCF1] group-hover:drop-shadow-[0_0_25px_#45A29E] sm:h-10 sm:w-10"
                              title={tech.name}
                              style={{
                                willChange: "transform, opacity",
                                transform: "scale(1)",
                                filter: "none",
                                background: "transparent",
                                mixBlendMode: "normal",
                                display: "block",
                                objectFit: "contain",
                              }}
                            />
                          ) : (
                            <tech.icon
                              className={`h-8 w-8 ${tech.color} transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#66FCF1] group-hover:drop-shadow-[0_0_25px_#45A29E] sm:h-10 sm:w-10`}
                              title={tech.name}
                              aria-label={tech.name}
                              style={{
                                willChange: "transform, opacity",
                                transform: "scale(1)",
                                filter: "none",
                                background: "transparent",
                                mixBlendMode: "normal",
                                display: "block",
                              }}
                            />
                          )}
                        </div>
                        <div className="absolute top-full z-20 mt-3 hidden whitespace-nowrap rounded-lg border border-accent-cyan/30 bg-base-dark/90 px-3 py-2 text-xs font-medium text-accent-cyan opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
                          {tech.name}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 text-center">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="skills-toggle"
            style={{
              display: "block",
              fontSize: "1.25rem",
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.7)",
              WebkitTextFillColor: "rgba(255, 255, 255, 0.7)",
              textAlign: "center",
              margin: "2rem auto",
              cursor: "pointer",
              transition: "all 0.3s ease",
              background: "none",
              border: "none",
              padding: "0.5rem 1rem",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.color = "#FFFFFF";
              event.currentTarget.style.WebkitTextFillColor = "#FFFFFF";
              event.currentTarget.style.textShadow =
                "0 0 10px rgba(45, 212, 191, 0.9)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
              event.currentTarget.style.WebkitTextFillColor =
                "rgba(255, 255, 255, 0.7)";
              event.currentTarget.style.textShadow = "none";
            }}
          >
            {isExpanded ? t("technologies.seeLess") : t("technologies.seeMore")}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
