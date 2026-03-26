import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let message = 'Something went wrong. Please try again.';
        try {
          const body = await res.json();
          message = body.error || message;
        } catch {
          // server returned non-JSON error
        }
        throw new Error(message);
      }

      setStatus('success');
    } catch (err) {
      setErrorMessage(err.message || 'Failed to send message. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
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
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        whileHover={{
          scale: status === 'submitting' ? 1 : 1.02,
          boxShadow: status === 'submitting' ? "0 4px 12px rgba(0,0,0,0.3)" : "0 8px 25px rgba(20, 184, 166, 0.3)"
        }}
        whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
        className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ease-in-out ${
          status === 'submitting'
            ? 'bg-base-darker text-base-light/50 cursor-not-allowed'
            : 'bg-gradient-to-r from-accent-teal to-accent-cyan text-base-dark hover:shadow-[0_0_10px_#66FCF1] hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-base-dark'
        }`}
      >
        {status === 'submitting' ? (
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

      {/* Error Display */}
      {status === 'error' && (
        <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}
    </motion.form>
  );
};

export default ContactForm;
