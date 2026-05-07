import React from 'react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSignup = () => {
    const element = document.getElementById('signup-footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b-2 border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <svg className="w-10 h-10 text-pop-orange" viewBox="0 0 100 100">
                        <path d="M50 90 C20 90 10 60 10 40 C10 20 30 10 50 10 C70 10 90 20 90 40 C90 60 80 90 50 90 Z" fill="#FF9600" stroke="#CC7700" strokeWidth="0"/>
                        <circle cx="35" cy="40" r="5" fill="white"/>
                        <circle cx="65" cy="40" r="5" fill="white"/>
                        <path d="M40 60 Q50 70 60 60" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    </svg>
                    <span className="font-display text-2xl font-bold text-pop-text">MemoryKeeper</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <button onClick={() => scrollToSection('science')} className="font-bold text-gray-500 hover:text-pop-blue transition">The Science</button>
                    <button onClick={() => scrollToSection('ai-demo')} className="font-bold text-gray-500 hover:text-pop-purple transition">AI Magic ✨</button>
                    <button onClick={() => scrollToSection('family')} className="font-bold text-gray-500 hover:text-pop-blue transition">For Families</button>
                    <Button 
                        onClick={scrollToSignup} 
                        variant={ButtonVariant.SECONDARY} 
                        className="py-2 px-4 text-sm"
                    >
                        Start Free Account
                    </Button>
                </div>
            </div>
        </div>
    </nav>
  );
};