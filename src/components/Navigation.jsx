import React, { useState, useEffect } from "react";
import { Building2, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";



const Navigation = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

const [isMobile, setIsMobile] = useState(false);
const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  handleResize(); // Initial check
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <nav
        className={`${
          isHome
            ? "bg-white/30 backdrop-blur-lg border-b border-white/30 shadow-md dark:bg-zinc-900/40 dark:border-zinc-700"
            : "bg-white"
        } shadow-md fixed w-full z-50 transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-indigo-600 animate-pulse" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-800 to-indigo-900 text-transparent bg-clip-text">
                MetaHaven
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-black hover:text-indigo-600 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-black hover:text-indigo-600 transition duration-300"
              >
                Virtual Offices
              </Link>
              <Link
                to="/"
                className="text-black hover:text-indigo-600 transition duration-300"
              >
                Locations
              </Link>
              <Link
                to="/contact"
                className="text-black hover:text-indigo-600 transition duration-300"
              >
                Contact Us
              </Link>

              <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition duration-300">
                Log in
              </button>

              <button
                onClick={toggleDarkMode}
                className="ml-4 text-xl hover:scale-110 transition-transform"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            className={`md:hidden px-4 pb-4 pt-2 shadow-lg rounded-b-xl transition-all duration-300 
    backdrop-blur-md bg-white/10 dark:bg-zinc-800/30 border border-white/20 dark:border-zinc-700/40 ring-1 ring-white/10 ${
              isHome
                ? ""
                : ""
            }`}
          >
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
            >
              Virtual Offices
            </Link>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
            >
              Locations
            </Link>
            <Link
              to={isMobile ? "#" : "/contact"}
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault(); // prevent navigation
                  setIsMenuOpen(false);
                  setShowPopup(true);
                } else {
                  setIsMenuOpen(false); // close menu normally
                }
              }}
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 transition"
            >
              Contact Us
            </Link>

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
    </>
  );
};





export default Navigation;
