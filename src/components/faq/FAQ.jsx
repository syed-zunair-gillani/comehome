// FAQ.js
import React, { useState } from 'react';

const FAQ = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto">
      {faqData.map((item, index) => (
        <div key={index} className="mb-4 border rounded">
          <button
            className="w-full p-4 text-left font-medium bg-white focus:outline-none"
            onClick={() => toggleQuestion(index)}
          >
            {item.question}
            <span className="float-right">{openIndex === index ? '−' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 ${
              openIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4 bg-gray-100">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
