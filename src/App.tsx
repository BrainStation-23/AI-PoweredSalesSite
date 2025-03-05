import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <footer className="bg-[#0a0b0f] text-gray-400 text-center py-8">
        <p>© 2025 <a href="https://brainstation-23.com/" target="_blank" rel="noopener noreferrer">Brain Station 23</a>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;