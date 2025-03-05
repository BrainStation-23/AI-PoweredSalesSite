import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-32 px-4 bg-[#0a0b0f]">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Transform Your Idea into{' '}
        <span className="text-purple-600">Software in 30 Days</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Empower your Enterprise Operations Teams to slash costs, boost efficiency,
        and automate workflows with expertly crafted AI solutions.
      </p>
      <div className="flex justify-center gap-4">
        <a 
          href="https://calendly.com/shahadat-bs23/30min"
          target="_blank"
          rel="noopener noreferrer" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
        >
          Schedule a Meeting
        </a>
        <a 
          href="#pricing" 
          className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          See Our Plans
        </a>
      </div>
    </section>
  );
};

export default Hero