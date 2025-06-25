import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LocationCard = ({ city }) => {
  const navigate = useNavigate();

  const handleCityClick = () => {
    navigate(`/location/${city.toLowerCase()}`);
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={handleCityClick}
    >
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={`/images/${city}.jpg`}
          alt={city}
          className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {city}
        </h3>
        <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </div>
  );
};

export default LocationCard;
