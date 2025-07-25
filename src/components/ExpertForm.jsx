// src/components/ExpertForm.jsx
import React, { useState, useEffect } from 'react';
import { insertExpertDetails } from '../lib/supabase';
import { motion } from 'framer-motion';
import SuccessMessage from './SuccessMessage';

const ExpertForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertExpertDetails(formData);
      setFormData({ name: '', email: '', phone: '' });
      setSubmitted(true);
    } catch (error) {
      // User-friendly error message in the console
      console.error("Form submission error:", error);
      alert('Failed to send details. Please check your connection and try again.');
    }
  };
  
  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close popup after 3 seconds on successful submission
   useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        {submitted ? (
            <SuccessMessage onClose={onClose} />
        ) : (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-2xl relative"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Form Header */}
                <div className="text-left mb-8">
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">
                        How can we help you?
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                        Speak with a workspace solution expert.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            placeholder="*Enter your name"
                            required
                        />
                    </div>
                    {/* Phone Input */}
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            placeholder="*Enter your mobile number"
                            required
                        />
                    </div>
                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            placeholder="*Enter your work email"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                        >
                            Request Callback
                        </button>
                    </div>
                </form>
            </motion.div>
        )}
    </div>
  );
};

export default ExpertForm;
