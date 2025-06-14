import React, { useState } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-100 via-white to-cyan-100 shadow-md fixed w-full z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-indigo-600 animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
              MetaHaven
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              Home
            </Link>
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              Virtual Offices
            </Link>
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              Locations
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition duration-300">
              Contact Us
            </Link>

            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition duration-300">
              Log in
            </button>

            <button
              onClick={toggleDarkMode}
              className="ml-4 text-xl hover:scale-110 transition-transform"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
     {isMenuOpen && (
  <div className="md:hidden bg-gradient-to-r from-indigo-100 via-white to-cyan-100 dark:from-indigo-900 dark:via-zinc-900 dark:to-cyan-900 px-4 pb-4 pt-2 shadow-lg transition-all duration-300">
    <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition">Home</Link>
    <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition">Virtual Offices</Link>
    <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition">Locations</Link>
    <Link to="/contact" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition">Contact Us</Link>

    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
      <div className="flex items-center space-x-4">
        <p className="mb-0">📧 Admin@mhworkspace.com</p>
        <span className="text-gray-400">|</span>
        <p className="mb-0">📞 +91 123456789</p>
      </div>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navigation;
