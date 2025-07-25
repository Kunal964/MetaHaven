import React, { useState } from 'react';
import ExpertForm from './ExpertForm.jsx';
import { AnimatePresence } from 'framer-motion';

// Arrow icon for the link-style button
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const ExpertBanner = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100 dark:bg-zinc-800 border-t border-b border-gray-200 dark:border-zinc-700">
        <div className="container mx-auto px-4">
          {/* --- Responsive Flex Container --- */}
          {/* Yeh line mobile aur desktop, dono ke liye layout theek karegi */}
          <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left py-3 gap-2 sm:gap-4">
            
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Can't decide on a workspace? Let our experts guide you.
            </p>
            
            {/* ml-4 (margin) ko hata diya hai kyunki ab 'gap' use ho raha hai */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="group flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 whitespace-nowrap"
            >
              Talk to an expert
              <ArrowRightIcon />
            </button>

          </div>
        </div>
      </div>

      {/* Form Popup Logic (Isme koi change nahi hai) */}
      <AnimatePresence>
        {isFormOpen && <ExpertForm onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default ExpertBanner;
