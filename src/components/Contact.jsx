import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="section-heading-spacing section-heading-tone text-center"
        style={{ willChange: 'transform, opacity' }}
      >
        Have a project in mind?
      </motion.h2>
      <div className="space-y-4 text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-2xl text-xl text-base-soft sm:text-[25px]"
        >
          Available for freelance and full-time roles. Working worldwide, remotely.
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
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 md:mt-12"
      >
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default Contact;
