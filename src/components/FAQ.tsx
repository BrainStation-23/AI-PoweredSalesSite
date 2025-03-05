import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-medium">{question}</span>
        <ChevronDown
          className={`text-gray-400 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <p className="text-gray-400 pb-6">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What makes your MVP service different?",
      answer: "Our AI-powered development approach dramatically reduces development time while maintaining high quality. We combine human expertise with AI tools for optimal results."
    },
    {
      question: "What's included in the MVP package?",
      answer: "Our MVP package includes requirements analysis, UI/UX design, full development, testing, and deployment. You get a production-ready application with core features."
    },
    {
      question: "Do I own the code?",
      answer: "Yes, you receive 100% ownership of all code and intellectual property upon project completion. We provide full source code access throughout development."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern tech stack including React, Node.js, Python, and various AI tools. The specific technologies are chosen based on your project requirements."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-[#0a0b0f]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ