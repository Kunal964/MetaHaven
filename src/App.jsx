import React from 'react';
import { Search, Building2, Users, Calendar, PhoneCall, MapPin, ArrowRight, Building } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">VirtualSpace</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Virtual Offices</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Locations</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Explore Premium Virtual Office Spaces
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Access professional business addresses and virtual workspaces across India
            </p>
            <div className="max-w-3xl mx-auto bg-white rounded-full shadow-lg p-2">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for a location..."
                  className="w-full px-4 py-2 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Virtual Spaces?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Building className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Prime Locations</h3>
              <p className="text-gray-600">Get prestigious business addresses in prime locations across major cities.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <PhoneCall className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Professional Support</h3>
              <p className="text-gray-600">Dedicated call handling and mail management services available.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Calendar className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Flexible Access</h3>
              <p className="text-gray-600">Book meeting rooms and workspace whenever you need them.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Locations */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Popular Locations</h2>
            <p className="mt-4 text-gray-600">Find virtual offices in these prime business districts</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'].map((city) => (
              <div key={city} className="group cursor-pointer">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={`https://source.unsplash.com/800x600/?${city},office`}
                    alt={city}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{city}</h3>
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-xl text-blue-100 mb-8">Book your virtual office space today and grow your business</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">VirtualSpace</span>
              </div>
              <p className="text-gray-400">Your trusted partner in virtual office solutions</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Virtual Offices</li>
                <li>Meeting Rooms</li>
                <li>Business Address</li>
                <li>Mail Handling</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@virtualspace.com</li>
                <li>+91 XXX XXX XXXX</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;