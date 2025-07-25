import React from 'react';
import { Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="images/CompanyLogo.png"
                alt="Metahaven Logo"
                className="h-16 w-auto object-contain cursor-pointer"
              />
            </div>
            <p className="text-gray-400">
              Your trusted partner in virtual office solutions
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Virtual Offices</li>
              <li>Meeting Rooms</li>
              <li>Business Address</li>
              <li>Mail Handling</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:VirtualOffice@MetaHaven.in"
                  className="hover:text-indigo-500 transition"
                >
                  VirtualOffice@MetaHaven.in
                </a>
              </li>
              <li>
                <a
                  href="tel:8368299618"
                  className="hover:text-indigo-500 transition"
                >
                   +91-8368299618
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;