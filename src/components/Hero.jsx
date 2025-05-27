import React from 'react';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/HeroSection.jpeg')`,
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
       
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-100 mb-6">
          Explore Premium Virtual Office Spaces
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Access professional business addresses and virtual workspaces across India
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto bg-white rounded-full shadow-lg p-2">
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="Search for a location..."
              className="w-full px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
