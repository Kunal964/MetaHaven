import React from 'react';
import { CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, points = [] }) => {
  return (
    <div
      className="bg-gray-50 dark:bg-zinc-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-md 
                hover:shadow-xl hover:-translate-y-1 
                transition duration-900 transform 
                flex flex-col justify-between"
    >
      <div>
        <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mb-3 sm:mb-4" />
        <hr className="h-px my-4 bg-black border-0 dark:bg-gray-600" />
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>

        {description && (
          <p className="text-gray-900 dark:text-gray-300 text-sm sm:text-base mb-4 text-justify">
            {description}
          </p>
        )}

        <ul className="space-y-2 text-gray-900 dark:text-gray-300 text-sm sm:text-base">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="grid grid-cols-[auto,1fr] gap-2 text-justify leading-snug"
            >
              <CheckCircle className="w-4 h-4 mt-1 text-black dark:text-white" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-6 px-5 py-2 border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-zinc-800 transition">
        Explore Workspaces
      </button>
    </div>
  );
};

export default FeatureCard;
