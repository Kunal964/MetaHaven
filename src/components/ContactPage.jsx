// src/pages/ContactPage.jsx
import React from 'react';
import ContactForm from '../components/ContactForm'; // Naya wala form import kiya

const ContactPage = () => {
  return (
    // Main container
    <div className="bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Grid layout for form and image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Form */}
          <div className="w-full">
            {/* Yahan onClose prop nahi denge, taaki yeh page mode mein render ho */}
            <ContactForm />
          </div>

          {/* Right Side: Image */}
          <div className="w-full h-full hidden md:block">
            <img
              src="/images/Office_1.jpg" // Make sure this image path is correct in your public folder
              alt="Our office space"
              className="rounded-xl shadow-2xl w-full h-full max-h-[600px] object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/e2e8f0/475569?text=MetaHaven+Office'; }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
