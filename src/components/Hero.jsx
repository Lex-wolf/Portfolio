import profilePicJpeg from "../assets/pfolio.jpeg";
import profilePicWebp from "../assets/pfolio.webp";

const HERO_IMG_WIDTH = 896;
const HERO_IMG_HEIGHT = 783;
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useHydrated } from "../context/HydrationContext";
import { useLanguage } from "../context/LanguageContext";
import { useAudienceView } from "../context/AudienceViewContext";
import AudienceToggle from "./AudienceToggle";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const hydrated = useHydrated();
  const { t } = useLanguage();
  const { audience } = useAudienceView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  // Custom cursor effect
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if (window.innerWidth < 768 || "ontouchstart" in window) {
      return undefined;
    }

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 40px;
      height: 40px;
      border: 2px solid rgba(102, 252, 241, 0.35);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
      background: transparent;
    `;
    document.body.appendChild(cursor);

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      background: rgba(102, 252, 241, 0.6);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.1s ease;
    `;
    cursor.appendChild(dot);

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId = 0;
    let unmounted = false;

    const tick = () => {
      rafId = 0;
      if (unmounted || document.visibilityState === "hidden") {
        return;
      }
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      rafId = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (unmounted || document.visibilityState === "hidden" || rafId !== 0) {
        return;
      }
      rafId = window.requestAnimationFrame(tick);
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        startLoop();
      } else if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      cursor.style.opacity = "1";
      startLoop();
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    document.body.style.cursor = "auto";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("visibilitychange", handleVisibility);

    startLoop();

    return () => {
      unmounted = true;
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("visibilitychange", handleVisibility);
      document.body.style.cursor = "auto";
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-base-darker pb-8 pt-6 sm:pb-10 sm:pt-8 lg:-ml-6 lg:pt-10 xl:-ml-10 2xl:-ml-16"
    >
      <div className="flex flex-wrap items-center gap-y-10 lg:gap-x-12 xl:gap-x-16">
        <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-3xl">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              id="hero-heading"
              variants={container(0)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="mb-3 text-center text-5xl font-semibold leading-[1.05] tracking-tight text-accent-cyan transition-shadow duration-200 hover:drop-shadow-[0_0_20px_rgba(102,252,241,0.4)] sm:mb-4 sm:text-5xl md:text-6xl lg:mb-6 lg:font-light lg:text-left lg:text-7xl xl:text-8xl"
            >
              Alejandro Curiel
            </motion.h1>

            <motion.div
              variants={container(0.35)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              className="mb-5 mt-1 w-full max-w-2xl"
            >
              <AudienceToggle />
            </motion.div>

            <motion.div
              variants={container(0.5)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              className="max-w-2xl text-center leading-snug lg:text-left"
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={audience}
                  className="hero-title-line mt-1 max-w-2xl text-center text-xl leading-snug sm:text-2xl md:text-3xl lg:mt-1 lg:text-left"
                  initial={hydrated ? { opacity: 0, y: 14 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{
                    textShadow: "0 0 12px rgba(102, 252, 241, 0.8)",
                  }}
                >
                  {audience === "web" ? t("hero.titleWeb") : t("hero.title")}
                </motion.h2>
              </AnimatePresence>
              <div
                className={`hero-subheadline mx-auto max-w-xl text-balance lg:mx-0 ${
                  audience === "web"
                    ? "mt-2 min-h-0"
                    : "mt-3 min-h-[3.5rem] sm:min-h-[4rem]"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={audience}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="text-balance"
                  >
                    {audience === "web" ? t("hero.subtitleWeb") : t("hero.subtitleQa")}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              variants={container(1)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              className={
                audience === "web"
                  ? "mt-2 max-w-xl text-center lg:text-left"
                  : "mt-5 max-w-xl text-center lg:text-left"
              }
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={audience}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4"
                >
                  <p className="body-text-tone">
                    {audience === "web" ? t("hero.line1Web") : t("hero.line1")}
                  </p>
                  <p className="body-text-tone">
                    {audience === "web" ? t("hero.line2Web") : t("hero.line2")}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="mt-8 flex w-full justify-center lg:hidden">
              <motion.div
                initial={hydrated ? (!hasAnimated ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }) : false}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(102, 252, 241, 0.1)",
                }}
                className="w-full max-w-[320px] sm:max-w-md"
              >
                <picture>
                  <source srcSet={profilePicWebp} type="image/webp" />
                  <img
                    src={profilePicJpeg}
                    alt="Alejandro Curiel"
                    width={HERO_IMG_WIDTH}
                    height={HERO_IMG_HEIGHT}
                    className="h-auto w-full animate-float rounded-2xl object-cover"
                    decoding="async"
                    fetchPriority="high"
                    loading="eager"
                  />
                </picture>
              </motion.div>
            </div>

            <motion.div
              variants={container(1.3)}
              initial={hydrated ? (!hasAnimated ? "hidden" : "visible") : false}
              animate="visible"
              className="mt-8 flex w-full max-w-sm flex-col gap-3 self-center sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start lg:self-start"
            >
              <a
                href="#projects"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-accent-teal to-accent-cyan px-6 py-3 text-center text-sm font-semibold text-base-dark shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_10px_#66FCF1] focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark sm:w-auto sm:text-base"
              >
                {t("nav.work")}
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-accent-teal to-accent-cyan px-6 py-3 text-center text-sm font-semibold text-base-dark shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_10px_#66FCF1] focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark sm:w-auto sm:text-base"
              >
                {t("nav.contact")}
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 hidden w-full lg:mt-0 lg:block lg:w-auto lg:flex-shrink-0 lg:min-w-[280px]">
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={hydrated ? (!hasAnimated ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }) : false}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(102, 252, 241, 0.1)",
              }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-[28rem]"
            >
              <picture>
                <source srcSet={profilePicWebp} type="image/webp" />
                <img
                  src={profilePicJpeg}
                  alt="Alejandro Curiel"
                  width={HERO_IMG_WIDTH}
                  height={HERO_IMG_HEIGHT}
                  className="h-auto w-full animate-float rounded-2xl object-cover"
                  decoding="async"
                  fetchPriority="low"
                  loading="lazy"
                />
              </picture>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Stats row */}
      <div className="mt-12 grid grid-cols-1 gap-4 text-center text-base-light sm:grid-cols-3 md:mt-14 md:gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight">10+</p>
          <p className="text-sm text-neutral-400 mt-1">{t("hero.stats.years")}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight">100+</p>
          <p className="text-sm text-neutral-400 mt-1">{t("hero.stats.releases")}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight">CPACC</p>
          <p className="text-sm text-neutral-400 mt-1">{t("hero.stats.hybrid")}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
