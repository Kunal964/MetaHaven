import React from 'react';


import Hero from '../Hero.jsx';
import ExpertBanner from '../ExpertBanner.jsx'; 
import Features from '../Features.jsx';
// import PopularLocations from '../components/PopularLocations';
import CTASection from '../CTASection.jsx';
import FaqPage from '../FaqPage.jsx'; // FAQ component import kiya

const HomePage = () => {
  return (
    <>
      <Hero />
      <ExpertBanner /> {/* Hero section ke theek neeche */}
      <Features />
      {/* <PopularLocations /> */}
      <CTASection />
      <FaqPage /> {/* FAQ section ko yahan add kiya */}
    </>
  );
};

export default HomePage;