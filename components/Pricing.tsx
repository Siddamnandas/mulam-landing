import React from 'react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

export const Pricing: React.FC = () => {
    const scrollToSignup = () => {
        const element = document.getElementById('signup-footer');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <section className="py-20 bg-white border-t-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-display font-bold text-pop-text mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-500 font-bold mb-12">Start for free, upgrade when you love it.</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition text-left flex flex-col">
                <h3 className="text-2xl font-display font-bold text-pop-text">Free Starter</h3>
                <div className="text-4xl font-display font-bold text-pop-blue mt-4 mb-2">$0</div>
                <p className="text-gray-500 font-bold text-sm mb-6">Forever free. No credit card.</p>
                <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-center gap-2 font-bold text-gray-600"><span className="text-green-500">✓</span> 3 Family Members</li>
                    <li className="flex items-center gap-2 font-bold text-gray-600"><span className="text-green-500">✓</span> 10 Memories / Month</li>
                    <li className="flex items-center gap-2 font-bold text-gray-600"><span className="text-green-500">✓</span> Basic AI Polish</li>
                </ul>
                <Button variant={ButtonVariant.SECONDARY} onClick={scrollToSignup} className="w-full">Start Free</Button>
            </div>

            {/* Family Tier - Highlighted */}
            <div className="bg-pop-bg border-4 border-pop-orange rounded-3xl p-8 transform md:-translate-y-4 shadow-orange relative text-left flex flex-col">
                <div className="absolute top-0 right-0 bg-pop-orange text-white px-4 py-1 rounded-bl-xl rounded-tr-lg font-bold text-sm">MOST POPULAR</div>
                <h3 className="text-2xl font-display font-bold text-pop-text">Family</h3>
                <div className="text-4xl font-display font-bold text-pop-orange mt-4 mb-2">$9<span className="text-lg text-gray-400 font-body">/mo</span></div>
                <p className="text-gray-500 font-bold text-sm mb-6">For the whole family.</p>
                <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-center gap-2 font-bold text-gray-800"><span className="text-pop-orange">✓</span> Unlimited Family Members</li>
                    <li className="flex items-center gap-2 font-bold text-gray-800"><span className="text-pop-orange">✓</span> Unlimited Memories</li>
                    <li className="flex items-center gap-2 font-bold text-gray-800"><span className="text-pop-orange">✓</span> Advanced AI Interviewer</li>
                    <li className="flex items-center gap-2 font-bold text-gray-800"><span className="text-pop-orange">✓</span> High-Res Photo Storage</li>
                </ul>
                <Button variant={ButtonVariant.PRIMARY} onClick={scrollToSignup} className="w-full">Start Free Trial</Button>
            </div>

            {/* Legacy Tier */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition text-left flex flex-col">
                <h3 className="text-2xl font-display font-bold text-pop-text">Legacy</h3>
                <div className="text-4xl font-display font-bold text-pop-purple mt-4 mb-2">$19<span className="text-lg text-gray-400 font-body">/mo</span></div>
                <p className="text-gray-500 font-bold text-sm mb-6">Printed books included.</p>
                <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-center gap-2 font-bold text-gray-600"><span className="text-green-500">✓</span> Everything in Family</li>
                    <li className="flex items-center gap-2 font-bold text-gray-600"><span className="text-green-500">✓</span> 1 Hardcover Book / Year</li>
                    <li className="flex items-center gap-2 font-bold text-gray-600"><span className="text-green-500">✓</span> Priority Support</li>
                </ul>
                 <Button variant={ButtonVariant.PURPLE} onClick={scrollToSignup} className="w-full">Get Legacy</Button>
            </div>
        </div>
      </div>
    </section>
  );
};