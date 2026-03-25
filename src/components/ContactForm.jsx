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
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-base-soft" />
        <h3 className="mb-2 text-2xl font-semibold text-base-soft">Thanks for reaching out!</h3>
        <p className="text-base-light/70">
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
      className="mx-auto max-w-2xl"
    >
      {/* Honeypot field for spam protection */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
      />

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-base-light mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-lg border border-base-darker bg-base-darker px-4 py-3 text-base-light transition-all duration-200 placeholder-base-light/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-cyan"
            placeholder="Your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-base-light mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-base-darker bg-base-darker px-4 py-3 text-base-light transition-all duration-200 placeholder-base-light/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-cyan"
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
        <label htmlFor="message" className="block text-sm font-medium text-base-light mb-2">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-none rounded-lg border border-base-darker bg-base-darker px-4 py-3 text-base-light transition-all duration-200 placeholder-base-light/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-cyan"
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
        className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out ${
          state.submitting
            ? 'bg-base-darker text-base-light/50 cursor-not-allowed'
            : 'bg-gradient-to-r from-accent-teal to-accent-cyan text-base-dark hover:shadow-[0_0_10px_#66FCF1] hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark'
        }`}
      >
        {state.submitting ? (
          <>
            <div className="w-5 h-5 border-2 border-base-light/50 border-t-transparent rounded-full animate-spin" />
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
