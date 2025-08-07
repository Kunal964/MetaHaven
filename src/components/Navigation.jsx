import React, { useState, useEffect } from "react";
import { Building2, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";
import { Mail, Phone } from "lucide-react";

const Navigation = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
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
          <div className="hidden md:flex items-center h-16">
            <div
              className="flex items-center -ml-6"
              // 1. Iski height ko bhi 64px se 80px karna hoga
              style={{ height: "128px", overflow: "hidden" }}
            >
              <Link to="/">
                <img
                  src="/images/MH_Logo.png"
                  alt="Metahaven"
                  className="h-36 w-auto object-contain cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex space-x-8 ml-auto mr-8">
              <Link
                to="/"
                className="relative text-black dark:text-white hover:text-indigo-600 transition duration-300 
          after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
          after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full font-semibold"
              >
                Home
              </Link>
              <Link
                to="/"
                className="relative text-black dark:text-white hover:text-indigo-600 transition duration-300 
          after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
          after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full font-semibold"
              >
                Virtual Offices
              </Link>
              <Link
                to="/"
                className="relative text-black dark:text-white hover:text-indigo-600 transition duration-300 
          after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
          after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full font-semibold"
              >
                Locations
              </Link>
              <Link
                to="/contact"
                className="relative text-black dark:text-white hover:text-indigo-600 transition duration-300 
          after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
          after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full font-semibold"
              >
                Contact Us
              </Link>
            </div>

            {/* ✅ Right: Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center space-x-1 font-semibold">
                <Mail className="h-4 w-4 text-indigo-600 " />
                <a
                  href="mailto:VirtualOffice@MetaHaven.in"
                  className="hover:underline"
                >
                  VirtualOffice@MetaHaven.in
                </a>
              </div>
              <span className="text-gray-400">|</span>
              <div className="flex items-center space-x-1 font-semibold">
                <Phone className="h-4 w-4 text-pink-600" />
                <a href="tel:8368299618" className="hover:underline">
                  +91-8368299618
                </a>
              </div>
            </div>
          </div>

          <div className="flex md:hidden justify-between items-center h-16">
            <div
              className="flex items-center -ml-4"
              // 1. Iski height ko bhi 64px se 80px karna hoga
              style={{ height: "128px", overflow: "hidden" }}
            >
              <Link to="/">
                <img
                  src="/images/MH_Logo.png"
                  alt="Metahaven"
                  className="h-32 w-auto object-contain cursor-pointer"
                />
              </Link>
            </div>
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
              className="block text-black dark:text-white hover:text-indigo-600 transition duration-300 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-black dark:text-white hover:text-indigo-600 transition duration-300 font-semibold"
            >
              Virtual Offices
            </Link>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-black dark:text-white hover:text-indigo-600 transition duration-300 font-semibold"
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
              className="block text-black dark:text-white hover:text-indigo-600 transition duration-300 font-semibold"
            >
              Contact Us
            </Link>

            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-1 font-semibold">
                  <Mail className="h-4 w-4 text-indigo-600" />
                  <a
                    href="mailto:VirtualOffice@MetaHaven.in"
                    className="hover:underline"
                  >
                    VirtualOffice@MetaHaven.in
                  </a>
                </div>
                <div className="flex items-center space-x-1 font-semibold">
                  <Phone className="h-4 w-4 text-pink-600" />
                  <a href="tel:8368299618" className="hover:underline">
                    +91-8368299618
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {showPopup && isMobile && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <ContactForm onClose={() => setShowPopup(false)} />
        </div>
      )}
    </>
  );
};

export default Navigation;