import React, { useState } from 'react';
import ContactForm from './ContactForm';

const CTASection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gradient-to-r from-indigo-100 via-white to-cyan-100 dark:from-indigo-900 dark:via-zinc-900 dark:to-cyan-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Book your virtual office space today and grow your business
          </p>
          {!showForm ? (
           <button
  className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:brightness-110 transition-all duration-300"
  onClick={() => setShowForm(true)}
>
  Contact Us
</button>

          ) : (
            <ContactForm onClose={() => setShowForm(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
