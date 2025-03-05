import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features 
}: { 
  title: string;
  price: number;
  description: string;
  features: string[];
}) => (
  <div className="bg-[#12141c] p-8 rounded-xl border border-gray-800 flex flex-col h-full">
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-white">${price.toLocaleString()}</span>
        <span className="text-gray-400">/mo</span>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="text-purple-500 mr-2" size={16} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <a 
      href="https://calendly.com/shahadat-bs23/30min"
      target="_blank"
      rel="noopener noreferrer" 
      className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition text-center"
    >
      Schedule a Meeting
    </a>
  </div>
);

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 px-4 bg-[#0a0b0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Transparent Pricing
        </h2>
        <div className="flex justify-center mb-12">
          <div className="bg-[#12141c] p-1 rounded-lg inline-flex">
            <button
              className={`px-4 py-2 rounded-md transition ${
                billing === 'monthly'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400'
              }`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md transition flex items-center ${
                billing === 'yearly'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400'
              }`}
              onClick={() => setBilling('yearly')}
            >
              <span>Yearly</span>
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PricingCard
            title="Basic"
            price={billing === 'monthly' ? 10000 : 8000}
            description="Complete MVP in 4 weeks"
            features={[
              "4 Strategic Planning Sessions",
              "2-3 Core Features Implementation",
              "AI Integration Setup",
              "Stripe Payment Integration",
              "Email Integration"
            ]}
          />
          <PricingCard
            title="Pro"
            price={billing === 'monthly' ? 20000 : 16000}
            description="Custom enterprise solution"
            features={[
              "Custom Internal Tool Development",
              "Process Automation Systems",
              "Data Pipeline Integration",
              "Admin Dashboard Creation",
              "Role-Based Access Control",
              "API Integration Framework"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing