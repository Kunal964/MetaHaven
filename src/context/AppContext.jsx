import React, { createContext, useState, useEffect, useContext } from 'react';
import ContactForm from '../components/ContactForm'; // ContactForm ko yahan import karein

// 1. Context banayein
const AppContext = createContext();

// 2. Provider component banayein jo state ko manage karega
export const AppProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Yeh logic ab central ho gaya hai
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value = {
    isMobile,
    showPopup,
    openPopup: () => setShowPopup(true),
    closePopup: () => setShowPopup(false),
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      {/* Popup ko ab yahin se globally manage karenge */}
      {showPopup && isMobile && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-fade-in">
          <ContactForm onClose={() => setShowPopup(false)} />
        </div>
      )}
    </AppContext.Provider>
  );
};

// 3. Ek custom hook banayein taaki context ko use karna aasan ho
export const useAppContext = () => {
  return useContext(AppContext);
};