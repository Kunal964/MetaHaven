import React, { useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';

const Navigation = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <nav className="bg-gradient-to-r from-indigo-100 via-white to-cyan-100 shadow-md relative z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-indigo-600 animate-pulse" />
           <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">MetaHaven</span>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Virtual Offices', 'Locations', 'Contact'].map((item) => (
              <a
                key={item}
                href='#'
                className="text-gray-700 hover:text-indigo-600 transform transition duration-300"
              >
                {item}
              </a>
            ))}
            
           <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition duration-300">
              Get Started
            </button>
           {/* Dark Mode Toggle (Desktop) */}
<button
  onClick={toggleDarkMode}
  className="ml-4 text-xl hover:scale-110 transition-transform"
>
  {darkMode ? '☀️' : '🌙'}
</button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 hover:text-indigo-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cross Button */}
        <div className="flex justify-end px-4 pt-4">
          {/* Dark Mode Toggle (Mobile) */}
<button
  onClick={() => {
    toggleDarkMode();
    setIsMenuOpen(false);
  }}
  className="text-2xl mt-4"
>
  {darkMode ? '☀️' : '🌙'}
</button>


        </div>

        <div className="px-4 pt-4 pb-3 space-y-3">
          {["Home", "Virtual Offices", "Locations", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition"
            >
              {item}
            </a>
          ))}
          <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
