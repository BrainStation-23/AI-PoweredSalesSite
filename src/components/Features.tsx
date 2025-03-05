import React from 'react';
import { MonitorPlay, Code2, Clock, Shield } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-[#12141c] p-6 rounded-xl">
    <div className="text-purple-600 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: MonitorPlay,
      title: "AI-Powered Development",
      description: "Leverage cutting-edge AI to accelerate development and reduce costs"
    },
    {
      icon: Code2,
      title: "Full Code Ownership",
      description: "You own 100% of the code and intellectual property"
    },
    {
      icon: Clock,
      title: "30-Day Delivery",
      description: "Get your MVP up and running in just 30 days"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Built with security and scalability in mind"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-[#0a0b0f]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features