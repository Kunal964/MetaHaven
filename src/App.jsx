// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Page Components
import HomePage from './components/pages/HomePage.jsx'; // Naya HomePage import kiya
import ContactPage from './components/ContactPage';

// Location Page Components
import Gurgaon from './components/locations/Gurgaon';
import Delhi from './components/locations/Delhi';
import Noida from './components/locations/Noida';
import Ahmedabad from './components/locations/Ahmedabad';
import Mumbai from './components/locations/Mumbai';
import Bangalore from './components/locations/Bangalore';
import AboutUs from './components/AboutUs.jsx';
import TermsOfService from './components/TermsOfService.jsx';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Using 'auto' for instant scroll to top, 'smooth' can feel slow on page change
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark class on <html> tag
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation aur Footer har page par dikhenge */}
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

        <main>
          <Routes>
            {/* Root route ab HomePage component render karega */}
            <Route path="/" element={<HomePage />} />
            
            {/* Baaki saare routes waise hi rahenge */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/terms" element={<TermsOfService/>} />

            {/* Location screens */}
            <Route path="/location/gurgaon" element={<Gurgaon />} />
            <Route path="/location/delhi" element={<Delhi />} />
            <Route path="/location/noida" element={<Noida />} />
            <Route path="/location/ahmedabad" element={<Ahmedabad />} />
            <Route path="/location/mumbai" element={<Mumbai />} />
            <Route path="/location/bangalore" element={<Bangalore />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;