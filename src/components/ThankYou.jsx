import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md mx-auto p-8"
      >
        <CheckCircle className="w-20 h-20 text-teal-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-neutral-300 text-lg mb-8">
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400 text-neutral-900 font-semibold rounded-lg hover:bg-teal-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
