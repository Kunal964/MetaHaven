import React from 'react';
import ContactForm from './ContactForm';


const ContactPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-zinc-900 flex flex-col md:flex-row items-center justify-center p-6 gap-10">
      
      {/* Left Side - Contact Form */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We'd love to hear from you! Fill out the form and our team will get in touch shortly.
        </p>
        <ContactForm onClose={() => {}} /> {/* `onClose` won't be used here */}
      </div>

      {/* Right Side - Overlayed Images */}
      <div className="w-full md:w-1/2 relative h-[500px]">
        <img
          src="/images/Office_1.jpg"
          alt="Virtual Office"
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />

        {/* Add more overlays as needed */}
      </div>
    </div>
  );
};

export default ContactPage;
