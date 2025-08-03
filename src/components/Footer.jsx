import React, { useState } from 'react';
import { insertSubscriber } from '../lib/supabase'; // Apne Supabase client ko import karein

// Lucide React se icons import karein
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // User ko feedback dene ke liye

  // Form submit hone par yeh function chalega
  const handleSubmit = async (e) => {
    e.preventDefault(); // Page ko refresh hone se rokein
    setMessage('Subscribing...');

    try {
      // Naye function ko call karein
      await insertSubscriber({ email: email });
      
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      // Duplicate email ke error ko handle karein
      if (error.code === '23505') { 
        setMessage('This email is already subscribed.');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    }

    // 3 second baad message hata dein
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          
          {/* === LEFT SIDE BLOCK === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
            
            {/* Column 1: Logo & Socials */}
            <div>
              <img
                src="/images/Logo.png" // White logo yahan use karein
                alt="Metahaven Logo"
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="max-w-xs text-sm">
                Your trusted partner in virtual office solutions.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="hover:text-white"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/metahavenofficial?igsh=OWhnYzN1emJyNmhh" className="hover:text-white"><Instagram size={20} /></a>
                <a href="#" className="hover:text-white"><Twitter size={20} /></a>
                <a href="https://www.linkedin.com/company/metahaven-workspaces/posts/?feedView=all" className="hover:text-white"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Virtual Offices</a></li>
                <li><a href="#" className="hover:text-white">Meeting Rooms</a></li>
                <li><a href="#" className="hover:text-white">Business Address</a></li>
                <li><a href="#" className="hover:text-white">Mail Handling</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* === RIGHT SIDE BLOCK === */}
          <div className="w-full lg:w-80 lg:flex-shrink-0">
            {/* Newsletter Form */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Join the newsletter</h3>
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-slate-700 text-white font-bold px-6 py-2 rounded-r-md hover:bg-slate-500"
                >
                  Subscribe
                </button>
              </form>
              {message && <p className="text-sm mt-2 text-white">{message}</p>}
            </div>
            
            {/* Contact Details */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-white mb-4">Feel free to connect with us</h3>
              <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-3">
                      <Phone size={16} />
                      <a href="tel:8368299618" className="hover:text-white">+91-8368299618</a>
                  </li>
                  <li className="flex items-center space-x-3">
                      <Mail size={16} />
                      <a href="mailto:VirtualOffice@MetaHaven.in" className="hover:text-white">VirtualOffice@MetaHaven.in</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MetaHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;