import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SuccessMessage = ({onClose}) => {
  const navigate = useNavigate();

  const handleReturn = () => {
    if (onClose) {
      onClose(); // Mobile: just close the popup
    } else {
      navigate('/'); // Desktop: go to homepage
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center justify-center p-6 text-center bg-white dark:bg-zinc-900 rounded-lg shadow-xl"
    >
      {/* Green Tick Animation */}
      <motion.div
        className="text-green-500 text-7xl mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        ✔
      </motion.div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Thank you for your query!</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Our team will get back to you shortly.
      </p>
      <button
        onClick={handleReturn}
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
      >
        Return to Home Page
      </button>
    </motion.div>
  );
};

export default SuccessMessage;
