import React from 'react';


import Hero from '../Hero.jsx';
import ExpertBanner from '../ExpertBanner.jsx'; // Iska naam .jsx kar diya hai
import Features from '../Features.jsx';
// import PopularLocations from '../components/PopularLocations';
import CTASection from '../CTASection.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ExpertBanner /> {/* Hero section ke theek neeche */}
      <Features />
      {/* <PopularLocations /> */}
      <CTASection />
    </>
  );
};

export default HomePage;