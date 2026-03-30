import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { useHydrated } from "../context/HydrationContext";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const hydrated = useHydrated();
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-spacing border-b border-neutral-900">
      <motion.h2
        whileInView={hydrated ? { opacity: 1, y: 0 } : undefined}
        initial={hydrated ? { opacity: 0, y: -100 } : false}
        animate={!hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6 }}
        className="section-heading-spacing section-heading-tone text-center"
        style={{ willChange: 'transform, opacity' }}
      >
        {t("contact.heading")}
      </motion.h2>
      <div className="space-y-4 text-center tracking-tighter">
        <motion.p
          whileInView={hydrated ? { opacity: 1, x: 0 } : undefined}
          initial={hydrated ? { opacity: 0, x: -100 } : false}
          animate={!hydrated ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl text-xl text-base-soft sm:text-[25px]"
        >
          {t("contact.body")}
        </motion.p>
            <motion.a
              href={"mailto:" + CONTACT.email}
              className="body-link-tone break-all rounded-sm border-b border-white/20 px-2 py-1 text-2xl font-bold tracking-tight transition-all duration-300 ease-in-out hover:border-accent-cyan hover:text-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/20 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark sm:text-[30px]"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 8px rgba(102, 252, 241, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {CONTACT.email}
            </motion.a>
      </div>

      {/* Contact Form */}
      <motion.div
        whileInView={hydrated ? { opacity: 1, y: 0 } : undefined}
        initial={hydrated ? { opacity: 0, y: 50 } : false}
        animate={!hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 md:mt-12"
      >
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default Contact;
