import React, { useState } from 'react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset after 4 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 1500);
  };

  return (
    <footer id="signup-footer" className="py-20 bg-white border-t-2 border-gray-100 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-pop-text mb-6">Start the Legacy Today.</h2>
            <p className="text-xl text-gray-500 font-bold mb-8">No credit card needed. Just a curiosity to connect.</p>
            
            <form onSubmit={handleSignup} className="bg-pop-bg p-3 rounded-3xl border-2 border-gray-100 inline-block w-full shadow-card">
                <div className="flex flex-col md:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-white text-pop-text font-bold px-6 py-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pop-orange/20 transition border border-gray-200 placeholder-gray-300"
                    />
                    <Button 
                        type="submit" 
                        variant={ButtonVariant.PRIMARY}
                        isLoading={status === 'loading'}
                        className="text-xl px-8 py-4"
                    >
                        {status === 'success' ? 'Check your inbox! 🌱' : 'Create Free Account'}
                    </Button>
                </div>
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-70">
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    <span className="text-xs font-bold text-gray-500">Bank-Level Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span className="text-xs font-bold text-gray-500">Private & Secure</span>
                </div>
                 <div className="flex items-center gap-2">
                     <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                    <span className="text-xs font-bold text-gray-500">No Ads Ever</span>
                </div>
            </div>
            
            <p className="mt-6 text-sm font-bold text-gray-400">Compatible with iPad, iPhone & Android. Accessibility First.</p>
        </div>

        {/* Success Toast Animation */}
        <div 
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-white border-4 border-pop-green text-pop-text px-8 py-4 rounded-3xl shadow-2xl transition-all duration-500 z-50 flex items-center gap-4 ${status === 'success' ? 'translate-y-8 opacity-100' : '-translate-y-40 opacity-0 pointer-events-none'}`}
        >
            <div className="text-4xl">🌱</div>
            <div>
                <h4 className="font-display font-bold text-xl text-pop-green">Welcome to the Family!</h4>
                <p className="font-bold text-gray-400 text-sm">We've sent a magic link to your inbox.</p>
            </div>
        </div>
    </footer>
  );
};