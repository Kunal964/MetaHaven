import React from 'react';
import { ArrowRight } from 'lucide-react';
import LocationCard from './LocationCard';

const PopularLocations = () => {
  const cities = ['Delhi', 'Noida', 'Gurgaon', 'Mumbai', 'Bangalore', 'Ahmedabad'];

  const scrollRight = () => {
    const container = document.getElementById('scrollContainer');
    container.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="py-24 bg-white from-indigo-100 via-white to-cyan-100 dark:from-indigo-900 dark:via-zinc-900 dark:to-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Popular Locations</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Find virtual offices in these prime business districts
          </p>
        </div>

        {/* Scroll Button */}
        <div className="relative">
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-zinc-800/80 border border-gray-300 dark:border-zinc-700 p-2 rounded-full shadow hover:scale-110 transition"
          >
            <ArrowRight className="h-5 w-5 text-gray-900 dark:text-white" />
          </button>

          {/* Scrollable Container */}
          <div
            id="scrollContainer"
            className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide px-1"
          >
            {cities.map((city) => (
              <div key={city} className="flex-shrink-0 w-[calc(50%-0.75rem)] sm:w-[calc(50%-0.75rem)] md:w-[23%]">
                <LocationCard city={city} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularLocations;
