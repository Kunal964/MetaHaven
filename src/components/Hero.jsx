import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sample city data with icon paths
const cities = [
  { name: "Gurgaon", icon: "/icons/Gurgaon.svg" },
  { name: "Delhi", icon: "/icons/Delhi.svg" },
  { name: "Noida", icon: "/icons/noida.svg" },
  { name: "Bangalore", icon: "/icons/Bangalore.svg" },
  { name: "Mumbai", icon: "/icons/Mumbai.svg" },
  { name: "Ahmedabad", icon: "/icons/Ahmedabad.svg" },
];


const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleCityClick = (cityName) => {
    navigate(`/location/${cityName.toLowerCase()}`);
  };

  return (
    <div
      className="pt-8 relative bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url('/images/HeroSection.jpeg')`,
        minHeight: "100vh",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-0 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up">
          Explore Premium Virtual Office Spaces
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 animate-fade-in-up delay-100">
          Access professional business addresses and virtual workspaces across
          India
        </p>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto mt-8 px-4">
          <div
            className="w-full flex items-center gap-2 px-4 py-2 rounded-full
       bg-white/10 backdrop-blur-lg border border-white/30
       shadow-lg ring-1 ring-white/10 transition-all duration-300"
          >
            <MapPin className="h-5 w-5 text-white/80" />
            <input
              type="text"
              placeholder="Search for a location..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-white/70 
        focus:outline-none"
            />
            <button
              onClick={() => {
                if (filteredCities.length > 0)
                  handleCityClick(filteredCities[0].name);
              }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md
        border border-white/20 shadow hover:scale-110 transition"
            >
              <Search className="h-4 w-4 text-white/90" />
            </button>
          </div>

          {/* Autocomplete Suggestions */}
          {query && (
            <ul
              className="absolute left-0 right-0 mt-2 bg-white text-black rounded-xl 
    shadow-lg animate-slide-fade z-20 max-h-60 overflow-y-auto text-left"
            >
              {filteredCities.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleCityClick(city.name)}
                  className="px-6 py-2 cursor-pointer hover:bg-gray-100 transition-all"
                >
                  {city.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Clickable City Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-6 justify-items-center mt-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
              onClick={() => handleCityClick(city.name)}
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <img
                  src={city.icon}
                  alt={city.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <span className="mt-1 text-sm text-white font-medium">
                {city.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
