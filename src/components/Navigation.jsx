import React, { useState, useEffect } from "react";
import { Building2, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";
import { Mail, Phone } from "lucide-react";

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
            ? "bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800"
            : "bg-white dark:bg-black"
        } shadow-md fixed w-full z-50 transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 🖥️ Desktop View */}
          <div className="hidden md:flex items-center py-4">
            {/* ✅ Left: Logo */}
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-indigo-600 animate-pulse" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-800 to-indigo-900 text-transparent bg-clip-text">
                MetaHaven
              </span>
            </div>

            {/* ✅ Center-Right: Navigation Links with reduced spacing */}
            <div className="flex space-x-8 ml-auto mr-8">
              <Link
                to="/"
                className="relative text-black dark:text-white hover:text-indigo-600 transition duration-300 
          after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
          after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
              <Link
                to="/"
                className="relative text-black dark:text-white hover:text-indigo-600 transition duration-300 
          after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
          after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Virtual Offices
              </Link>
              <Link
                to="/"
                className="relative text-black dark:text-white hover:text-indigo-600 transition duration-300 
          after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
          after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Locations
              </Link>
              <Link
                to="/contact"
                className="relative text-black dark:text-white hover:text-indigo-600 transition duration-300 
          after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
          after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact Us
              </Link>
            </div>

            {/* ✅ Right: Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-indigo-600" />
                <span>VirtualSpace@MetaHaven.in</span>
              </div>
              <span className="text-gray-400">|</span>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4 text-pink-600" />
                <span>+91-9811179310</span>
              </div>
            </div>
          </div>

          {/* Mobile View Toggle Button (hamburger) */}
          <div className="flex md:hidden justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-indigo-600 animate-pulse" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-800 to-indigo-900 text-transparent bg-clip-text">
                MetaHaven
              </span>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-white hover:text-indigo-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            className={`md:hidden px-4 pb-4 pt-2 shadow-lg rounded-b-xl transition-all duration-300 
      backdrop-blur-md bg-white/10 dark:bg-zinc-800/30 border border-white/20 dark:border-zinc-700/40 
      ring-1 ring-white/10 space-y-3`}
          >
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-black dark:text-white hover:text-indigo-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-black dark:text-white hover:text-indigo-600 transition duration-300"
            >
              Virtual Offices
            </Link>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-black dark:text-white hover:text-indigo-600 transition duration-300"
            >
              Locations
            </Link>
            <Link
              to={isMobile ? "#" : "/contact"}
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  setShowPopup(true);
                } else {
                  setIsMenuOpen(false);
                }
              }}
              className="block text-black dark:text-white hover:text-indigo-600 transition duration-300"
            >
              Contact Us
            </Link>

            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <span className="text-xs sm:text-sm break-all">
                    VirtualSpace@MetaHaven.in
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4 text-pink-600" />
                  <span className="text-xs sm:text-sm">+91-9811179310</span>
                </div>
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