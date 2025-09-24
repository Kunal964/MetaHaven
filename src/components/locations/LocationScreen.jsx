import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../ContactForm'; // adjust if path is different

const LocationScreen = ({ title, description, image }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContactClick = () => {
    if (isMobile) {
      setShowPopup(true);
    } else {
      navigate("/contact");
    }
  };

  return (
    <div className="pt-24 flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto px-6 pb-16">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={`Virtual Office in ${title}`}
          className="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-snug">
          Virtual Office in {title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
          {description}
        </p>
        <button
          onClick={handleContactClick}
         className="bg-slate-700 text-white px-8 py-3 rounded-full shadow-md 
           hover:bg-slate-500 hover:shadow-lg hover:scale-105 
           transition-all duration-300 ease-in-out transform"
        >
          Contact Us →
        </button>
      </div>

      {/* Mobile popup */}
      {showPopup && isMobile && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <ContactForm onClose={() => setShowPopup(false)} />
        </div>
      )}
    </div>
  );
};

export default LocationScreen;
