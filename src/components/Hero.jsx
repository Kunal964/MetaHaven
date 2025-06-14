import React from 'react';
import { MapPin, Search } from 'lucide-react';

const Hero = () => {
  return (
    <div
      className="pt-8 relative bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url('/images/HeroSection.jpeg')`,
        minHeight: "100vh",
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
          Access professional business addresses and virtual workspaces across
          India
        </p>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto mt-8 px-4">
          <div
            className="w-full flex items-center gap-2 px-4 py-2 rounded-full
               bg-white/10 backdrop-blur-lg border border-white/30
               shadow-lg ring-1 ring-white/10 transition"
          >
            <MapPin className="h-5 w-5 text-white/80" />
            <input
              type="text"
              placeholder="Search for a location..."
              className="flex-1 bg-transparent text-white placeholder-white/70 
                 focus:outline-none"
            />
            <button
              onClick={() => console.log("Search clicked")}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md
                 border border-white/20 shadow hover:scale-110 transition"
            >
              <Search className="h-4 w-4 text-white/90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
