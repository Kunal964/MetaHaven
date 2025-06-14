import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';

const CTASection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContactClick = () => {
    if (isMobile) {
      setShowPopup(true);
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-white to-cyan-100 dark:from-indigo-900 dark:via-zinc-900 dark:to-cyan-900 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Book your virtual office space today and grow your business
        </p>
        <button
          onClick={handleContactClick}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:brightness-110 transition-all duration-300"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile popup */}
      {showPopup && isMobile && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-600 dark:text-gray-300 text-xl font-bold"
            >
              &times;
            </button>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default CTASection;
