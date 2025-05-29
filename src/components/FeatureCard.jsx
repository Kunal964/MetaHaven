import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition duration-900 transform 
                mb-6 sm:mb-0">

      <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mb-3 sm:mb-4" />
      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-4 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-900 dark:text-gray-300 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;
