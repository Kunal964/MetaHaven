import React, { useState } from "react";

const faqs = [
  {
    question: "What is a virtual office?",
    answer:
      "A virtual office provides a professional business address and related services without requiring physical office space. It’s ideal for startups, freelancers, and businesses looking to expand PAN India without the cost of a traditional office.",
  },
  {
    question: "Is a virtual office legal for GST registration in India?",
    answer:
      "Yes, virtual offices are legally accepted for GST registration in India. Metahaven provides all required documentation like NOC, utility bills, rent agreement, and signage as per GST compliance.",
  },
  {
    question: "What is the pricing for your virtual office service?",
    answer:
      "Our plans start from ₹799/month. Pricing may vary depending on city and services chosen (GST registration, business address, or signage).",
  },
  {
    question: "Do you offer PAN India virtual office services?",
    answer:
      "Yes, Metahaven offers virtual office services across all major cities in India including Delhi, Mumbai, Bangalore, Hyderabad, Pune, and more.",
  },
  {
    question: "How long does it take to set up a virtual office?",
    answer:
      "Typically, we deliver all necessary documents within 24 to 72 hours after successful onboarding and payment.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Absolutely! Our support team is available 7 days a week to assist you with any queries or documentation help you may need.",
  },
  {
    question: "What documents are provided in the virtual office package?",
    answer:
      "We provide Rent Agreement, NOC, Utility Bill, and Signage if opted. These documents are accepted by GST, MCA, and banks.",
  },
  {
    question: "Can I receive couriers at the virtual office address?",
    answer:
      "Yes, we offer courier handling services at selected locations. You can choose this add-on while subscribing.",
  },
  {
    question: "Is my business data safe with Metahaven?",
    answer:
      "100%. We follow strict privacy policies and industry best practices to ensure your business information remains secure and confidential.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions - Metahaven Virtual Offices</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-300">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full py-3 text-left focus:outline-none"
          >
            <span className="text-lg font-medium">{index + 1}. {faq.question}</span>
            <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className="pb-3 text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
