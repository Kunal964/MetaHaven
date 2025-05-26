import React from 'react';
import { ArrowRight } from 'lucide-react';

const LocationCard = ({ city }) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={`https://source.unsplash.com/800x600/?${city},office`}
          alt={city}
          className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{city}</h3>
        <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

export default LocationCard;