import React from 'react';
import { Code2, Clock, Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full py-4 px-6 flex justify-between items-center bg-[#0a0b0f] z-50 border-b border-gray-800">
      <div className="text-white font-bold text-xl">Brain Station 23</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
        <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
        <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
      </nav>
      <a 
        href="mailto:sales@brainstation-23.com?subject=Schedule a Free Meeting"
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
      >
        Schedule a Free Meeting
      </a>
    </header>
  );
};

export default Header;