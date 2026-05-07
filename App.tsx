import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Science } from './components/Science';
import { AiMagic } from './components/AiMagic';
import { FamilyLoop } from './components/FamilyLoop';
import { Testimonial } from './components/Testimonial';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Science />
        <AiMagic />
        <FamilyLoop />
        <Testimonial />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;