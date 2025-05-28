import React from 'react';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url('/HeroSection.jpeg')`,
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-0 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-100 dark:text-white mb-6 animate-fade-in-up">
          Explore Premium Virtual Office Spaces
        </h1>
        <p className="text-lg md:text-xl text-blue-100 dark:text-gray-300 mb-8 animate-fade-in-up delay-100">
          Access professional business addresses and virtual workspaces across India
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 flex items-center space-x-2 transition-colors duration-300">
          <MapPin className="h-6 w-6 text-gray-400 dark:text-gray-300 ml-4" />
          <input
            type="text"
            placeholder="Search for a location..."
            className="flex-1 px-4 py-2 rounded-full focus:outline-none bg-transparent text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-blue-700 transition duration-200">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
