import React from 'react';
import { Building2, FileText, MapPin } from "lucide-react";
import FeatureCard from './FeatureCard';

const Features = () => {
  const featureData = [
    {
      icon: Building2,
      title: "New Company Registration Plan",
      description:
        "Register your company at premium addresses in any city in India without taking a physical office space.",
      points: [
        "New Company Registration Address",
        "New GST Registration, GST Registration for APOB",
        "Mail & Courier Handling, Address on Business Cards, Letter Heads",
      ],
    },
    {
      icon: FileText,
      title: "GST Registration Plan",
      description:
        "Expand your existing business to new states in the country. GST registration for Additional place of business (APOB)",
      points: [
        "New GST Registration, GST Registration for APOB",
        "Mail & Courier Handling, Address on Business Cards, Letter Heads",
      ],
    },
    {
      icon: MapPin,
      title: "Business Address Plan",
      description:
        "Get a professional business address for your company at prime locations",
      points: [
        "Mail & Courier Handling, Address on Business Cards, Letter Heads",
      ],
    },
  ];


  return (
   <div className="py-24 bg-gradient-to-r from-indigo-100 via-white to-cyan-100 dark:from-indigo-900 dark:via-zinc-900 dark:to-cyan-900">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Choose a Virtual Office based on your needs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featureData.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              points={feature.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;