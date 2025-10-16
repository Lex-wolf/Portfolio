import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl text-white"
      >
        Have a project in mind?
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-[25px] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
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
          className="border-b text-white text-[30px] tracking-tight font-bold hover:text-purple-500"
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
