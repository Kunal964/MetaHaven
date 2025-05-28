import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularLocations from './components/PopularLocations';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features />
      <PopularLocations />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;