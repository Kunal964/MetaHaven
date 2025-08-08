// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate ko import kiya
import { insertContactForm } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessMessage from './SuccessMessage';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    company_name: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // useNavigate ko initialize kiya

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertContactForm(formData);
      setFormData({ name: '', email: '', phone: '', state: '', company_name: '', message: '' });
      setSubmitted(true);
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert('Failed to send message. Please try again later.');
    }
  };

  // Scroll lock for popup mode
  useEffect(() => {
    if (onClose) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [onClose]);

  // 👇 YAHAN PAR MAIN LOGIC CHANGE KIYA HAI
  // Close popup or redirect after 3 seconds on success
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        if (onClose) {
          // Agar form popup mein hai, toh sirf popup band karo
          onClose();
        } else {
          // Agar form page par hai, toh home page par redirect karo
          navigate('/');
        }
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [submitted, onClose, navigate]); // navigate ko dependency array mein add kiya

  const formContent = (
    <>
      {/* Form Header */}
      <div className="text-left mb-4">
        <h2 className="text-3xl text-gray-900">
    <strong className="font-bold">We'd love</strong> to hear from you.
  </h2>
        <p className="text-gray-600 mt-2">
          Describe your requirements, and a dedicated workspace specialist will contact you shortly to provide a solution.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2 ">
        <div>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="Name" required />
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="Email" required />
        </div>
        <div>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="Mobile Number" required />
        </div>
        <div>
          <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="Preffered State/City" required />
        </div>
        <div>
          <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="Company Name" required />
        </div>
        
        <div>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="Your requirements" required ></textarea>
        </div>
        <div className="pt-1">
          <button type="submit" className="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-0.5">
            Send Message
          </button>
        </div>
      </form>
    </>
  );

  // Agar popup mein hai (onClose prop mila hai), toh motion.div ke saath render karo
  if (onClose) {
    return (
      <AnimatePresence>
        {submitted ? (
          <SuccessMessage onClose={onClose} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full max-w-lg bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-xl relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {formContent}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Agar page par hai, toh seedha content render karo
  return submitted ? <SuccessMessage /> : formContent;
};

export default ContactForm;
