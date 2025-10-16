import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mblzqpan");

  // Optional: Redirect to thank you page after success
  useEffect(() => {
    if (state.succeeded) {
      // Uncomment the line below if you want to redirect to a thank you page
      // window.location.href = '/thank-you';
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-teal-400 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2">Thanks for reaching out!</h3>
        <p className="text-neutral-400">
          I'll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto"
    >
      {/* Honeypot field for spam protection */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
            placeholder="Your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
            placeholder="your.email@example.com"
          />
          <ValidationError 
            prefix="Email" 
            field="email" 
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Tell me about your project or just say hello..."
        />
        <ValidationError 
          prefix="Message" 
          field="message" 
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ 
          scale: state.submitting ? 1 : 1.02,
          boxShadow: state.submitting ? "0 4px 12px rgba(0,0,0,0.3)" : "0 8px 25px rgba(20, 184, 166, 0.3)"
        }}
        whileTap={{ scale: state.submitting ? 1 : 0.98 }}
        className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
          state.submitting
            ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
            : 'bg-teal-400 text-neutral-900 hover:bg-teal-300 cursor-pointer'
        }`}
      >
        {state.submitting ? (
          <>
            <div className="w-5 h-5 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>

      {/* General Error Display */}
      {state.errors && state.errors.length > 0 && (
        <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">
            Please check the form for errors and try again.
          </p>
        </div>
      )}
    </motion.form>
  );
};

export default ContactForm;
