import React from 'react';
import { Building, PhoneCall, Calendar } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const featureData = [
    {
      icon: Building,
      title: 'Prime Locations',
      description: 'Get prestigious business addresses in prime locations across major cities.'
    },
    {
      icon: PhoneCall,
      title: 'Professional Support',
      description: 'Dedicated call handling and mail management services available.'
    },
    {
      icon: Calendar,
      title: 'Flexible Access',
      description: 'Book meeting rooms and workspace whenever you need them.'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Virtual Spaces?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featureData.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;