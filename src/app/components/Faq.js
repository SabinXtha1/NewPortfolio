"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your current role?",
      answer:
        "I take all kinds of development and designing related projects. This includes UI/UX designing, frontend development, and graphic designing.",
    },
    {
      question: "How much does it cost for a high-performing website?",
      answer:
        "The cost varies based on the complexity and features required. Contact me for a detailed quote.",
    },
    {
      question: "How long will the work take from start to finish?",
      answer:
        "The timeline depends on the project scope, but I strive to deliver high-quality work as efficiently as possible.",
    },
    {
      question: "Are you available to join as full-time?",
      answer:
        "I am currently available for freelance and project-based work. Let's discuss the details!",
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center bg-black text-white px-6 md:px-20">
      {/* Title */}
      
      {/* FAQ List */}
      <div className=" max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#121212] rounded-xl p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                0{index + 1}. {faq.question}
              </h2>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="text-gray-400 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
