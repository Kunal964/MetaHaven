import React from 'react';
import LocationCard from './LocationCard';

const PopularLocations = () => {
  const cities = ['Delhi', 'Noida', 'Gurgaon', 'Mumbai'];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Popular Locations</h2>
          <p className="mt-4 text-gray-600">Find virtual offices in these prime business districts</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {cities.map((city) => (
            <LocationCard key={city} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularLocations;