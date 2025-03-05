import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonRow = ({ 
  title, 
  traditional, 
  aiPowered 
}: { 
  title: string;
  traditional: { time: string; description: string };
  aiPowered: { time: string; description: string };
}) => (
  <div className="mb-8">
    <h3 className="text-white text-xl mb-4">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-[#1a1c25] p-6 rounded-xl border border-red-900/20">
        <div className="flex items-center mb-2">
          <X className="text-red-500 mr-2" size={16} />
          <span className="text-red-500">{traditional.time}</span>
        </div>
        <p className="text-gray-400">{traditional.description}</p>
      </div>
      <div className="bg-[#1a1c25] p-6 rounded-xl border border-purple-900/20">
        <div className="flex items-center mb-2">
          <Check className="text-purple-500 mr-2" size={16} />
          <span className="text-purple-500">{aiPowered.time}</span>
        </div>
        <p className="text-gray-400">{aiPowered.description}</p>
      </div>
    </div>
  </div>
);

const Comparison = () => {
  return (
    <section className="py-20 px-4 bg-[#0a0b0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Traditional vs AI-Powered Development
        </h2>
        <ComparisonRow
          title="Requirements Gathering"
          traditional={{ time: "2-3 weeks", description: "Multiple meetings, extensive documentation" }}
          aiPowered={{ time: "2-3 days", description: "AI-assisted requirement analysis" }}
        />
        <ComparisonRow
          title="Development"
          traditional={{ time: "3-4 months", description: "Manual coding, frequent iterations" }}
          aiPowered={{ time: "2 weeks", description: "AI-accelerated development with ready components" }}
        />
        <ComparisonRow
          title="Testing & QA"
          traditional={{ time: "4-6 weeks", description: "Manual testing, bug fixes" }}
          aiPowered={{ time: "1 week", description: "Automated testing with AI validation" }}
        />
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-white mb-8">
            Total Time: <span className="text-purple-600">30 Days</span> vs{' '}
            <span className="text-red-500">6+ Months</span>
          </p>
          <a 
            href="https://calendly.com/shahadat-bs23/30min"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
          >
            Schedule Your AI-Powered Development
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;