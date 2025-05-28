import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <Icon className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;