import React, { useState } from 'react';
import ContactForm from './ContactForm'; // import the form

const CTASection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your virtual office space today and grow your business
          </p>
          {!showForm ? (
            <button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
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
