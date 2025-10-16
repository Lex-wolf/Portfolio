import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-10 text-center text-4xl text-accent-cyan"
        style={{ willChange: 'transform, opacity' }}
      >
        Have a project in mind?
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-[25px] bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          className="my-4 text-[25px]"
        >
          {/* {CONTACT.phoneNo}{" "} */}
        </motion.p>
        <a 
          href={"mailto:" + CONTACT.email} 
          className="border-b border-accent-cyan/30 text-base-light text-[30px] tracking-tight font-bold hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-accent-cyan/20 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark rounded-sm px-2 py-1"
        >
          {CONTACT.email}
        </a>
      </div>

      {/* Contact Form */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-semibold text-center text-white mb-8">
          Or send me a message
        </h3>
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default Contact;
