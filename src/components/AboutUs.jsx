import React from "react";

const AboutUs = () => {
  return (
    // Yeh class har screen size par layout ko aache se handle karegi
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 text-gray-800">
      
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      
      <p className="text-lg mb-6 text-justify">
        <strong>Metahaven Workspaces</strong> is India’s trusted virtual office
        provider, enabling businesses to establish a legitimate presence without
        the cost of a physical office. We offer PAN India virtual office
        solutions ideal for GST registration, company incorporation, business
        communication, and mail handling.
      </p>

      <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1 text-justify">
        <li>Virtual Office for GST Registration</li>
        <li>Registered Office Address for Company Incorporation (MCA/ROC)</li>
        <li>Business Address for Courier & Mail Handling</li>
        <li>PAN India Network of Verified Locations</li>
        <li>Permanent Signage & Dedicated Desk Add-ons</li>
        <li>Legal Documents: Rent Agreement, NOC, Utility Bill</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Why Choose Metahaven?</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1 text-justify">
        <li>100% Compliant & Verified Spaces</li>
        <li>Affordable yearly plans (starting ₹5,000/year)</li>
        <li>Fast documentation & onboarding</li>
        <li>Dedicated support for clients & partners</li>
        <li>Transparent pricing for space partners</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Popular Locations</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Connaught Place, Delhi</li>
        <li>Andheri East, Mumbai</li>
        <li>HSR Layout, Bangalore</li>
        <li>Banjara Hills, Hyderabad</li>
        <li>Anna Nagar, Chennai</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
      <p className="mb-6 text-justify">
        We aim to empower startups, entrepreneurs, and enterprises with
        cost-effective and legally compliant virtual office solutions across
        India.
      </p>
      
    </section>
  );
};

export default AboutUs;