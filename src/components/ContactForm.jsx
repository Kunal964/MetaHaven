import React, { useState, useEffect } from 'react';
import { insertContactForm } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessMessage from './SuccessMessage';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [visible, setVisible] = useState(true);
   const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await insertContactForm(formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(true);
    } catch (error) {
      alert('Failed to send message. Try again later.');
    }
  };
  
useEffect(() => {
  // Only lock scroll if ContactForm is used in popup mode
  if (onClose) {
    document.body.style.overflow = visible ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }
}, [visible, onClose]);


 return (
    <AnimatePresence>
      {submitted ? (
        <SuccessMessage onClose = {onClose} />
      ) : (
        visible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full md:max-w-3xl bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-lg shadow-xl max-h-screen overflow-y-auto relative"
          >
            <div className="flex justify-end mb-2 md:hidden">
              <button
                onClick={() => {
                  setVisible(false);
                  if (onClose) onClose();
                }}
                className="text-gray-600 dark:text-gray-300 text-2xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <h2 className="text-3xl font-semibold text-center text-indigo-600 dark:text-indigo-400 mb-6">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="+91 1234567890"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-[1.02] shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
