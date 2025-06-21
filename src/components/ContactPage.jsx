import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-16 min-h-screen overflow-y-auto bg-white dark:bg-zinc-900 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start justify-center gap-10">
        
        {/* Left Side - Form + Message */}
        <div className="w-full md:w-1/2 min-h-[550px] flex flex-col justify-start">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We'd love to hear from you! Fill out the form and our team will get in touch shortly.
          </p>
          <ContactForm />
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 min-h-[550px]">
          <img
            src="/images/Office_1.jpg"
            alt="Virtual Office"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
