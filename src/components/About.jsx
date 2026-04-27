import aboutImg from "../assets/work.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { useHydrated } from "../context/HydrationContext";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const hydrated = useHydrated();
  const { t } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <section id="about" className="section-spacing border-b border-base-darker">
      <h2 className="section-heading-spacing section-heading-tone text-center">
        {t("about.heading")}
      </h2>
      <div className="flex flex-wrap gap-y-8 md:gap-y-10">
            <motion.div
              initial={hydrated ? { opacity: 0, x: -100 } : false}
              animate={
                !hydrated ? { opacity: 1, x: 0 } : hasAnimated ? { opacity: 1, x: 0 } : {}
              }
              transition={{ duration: 0.9 }}
              onViewportEnter={() => setHasAnimated(true)}
              className="w-full lg:w-1/2 lg:p-6"
            >
              <div className="flex items-center justify-center">
                <motion.img
                  className="rounded-2xl w-full max-w-md"
                  src={aboutImg}
                  alt={t("about.heading")}
                  width={1280}
                  height={852}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(102, 252, 241, 0.08)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
        <motion.div
          initial={hydrated ? { opacity: 0, x: 100 } : false}
          animate={
            !hydrated ? { opacity: 1, x: 0 } : hasAnimated ? { opacity: 1, x: 0 } : {}
          }
          transition={{ duration: 0.9 }}
          onViewportEnter={() => setHasAnimated(true)}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p
              className="body-text-tone max-w-2xl pt-2 md:pt-4"
            >
              {t("about.body")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
