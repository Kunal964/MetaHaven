import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularLocations from './components/PopularLocations';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Gurgaon from './components/locations/Gurgaon';
import Delhi from './components/locations/Delhi';
import Noida from './components/locations/Noida';

import ContactPage from './components/ContactPage';
import Ahmedabad from './components/locations/Ahmedabad';
import Mumbai from './components/locations/Mumbai';
import Bangalore from './components/locations/Bangalore';

function App() {
  const [darkMode, setDarkMode] = useState(false);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [pathname]);

  return null;
}

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
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* 👇 Routing logic goes here */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                {/* <PopularLocations /> */}
                <CTASection />
              </>
            }
          />
          <Route path="/contact" element={<ContactPage />} />

           {/* 👇 Location screens */}
          <Route path="/location/gurgaon" element={<Gurgaon />} />
          <Route path="/location/delhi" element={<Delhi />} />
          <Route path="/location/noida" element={<Noida />} />
          <Route path="/location/ahmedabad" element={<Ahmedabad />} />
          <Route path="/location/mumbai" element={<Mumbai />} />
          <Route path="/location/bangalore" element={<Bangalore />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;