import React from 'react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

export const Science: React.FC = () => {
  const scrollToSignup = () => {
    const element = document.getElementById('signup-footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="science" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-40 left-0 w-64 h-64 bg-pop-orange/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-0 w-80 h-80 bg-pop-blue/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
                <span className="bg-pop-purple/10 text-pop-purple px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase inline-block mb-6">
                    Proven Method
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-pop-text mb-8">
                    Reminiscence Therapy 🧠
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 font-bold max-w-3xl mx-auto leading-relaxed">
                    Sudoku is boring. We use the strongest neural pathways they have: <br className="hidden md:block" />
                    <span className="text-pop-orange underline decoration-wavy decoration-2 underline-offset-8">Their Own Life Story.</span>
                </p>
            </div>

            <div className="space-y-32">
                {/* Feature 1: Photo Prompt */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        {/* Doodle: The Magic Lens */}
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-lg">
                                {/* Background Blobs */}
                                <path d="M50 150 Q30 100 100 80 T250 100 T350 200 T250 350 T100 300 T50 150" fill="#FFF9F0" stroke="#FF9600" strokeWidth="3" strokeDasharray="8 8" />
                                
                                {/* Photo Stack */}
                                <g transform="translate(100, 120) rotate(-10)">
                                    <rect x="0" y="0" width="180" height="220" fill="white" stroke="#4B4B4B" strokeWidth="4" rx="2"/>
                                    <rect x="20" y="20" width="140" height="140" fill="#E5E7EB"/>
                                </g>
                                
                                {/* Main Polaroid */}
                                <g transform="translate(140, 100) rotate(5)" className="hover:rotate-0 transition-transform duration-500 cursor-pointer">
                                    <rect x="0" y="0" width="200" height="240" fill="white" stroke="#4B4B4B" strokeWidth="4" rx="2" className="shadow-xl"/>
                                    <rect x="20" y="20" width="160" height="160" fill="#4DA6FF" fillOpacity="0.2"/>
                                    
                                    {/* Image Content (Mountains) */}
                                    <path d="M20 180 L60 100 L100 180" fill="#58CC02" stroke="#4B4B4B" strokeWidth="3" strokeLinejoin="round"/>
                                    <path d="M80 180 L130 80 L180 180" fill="#FF9600" stroke="#4B4B4B" strokeWidth="3" strokeLinejoin="round"/>
                                    <circle cx="140" cy="60" r="15" fill="#FFD700" stroke="#4B4B4B" strokeWidth="3"/>

                                    {/* Caption Lines */}
                                    <line x1="30" y1="200" x2="170" y2="200" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round"/>
                                    <line x1="30" y1="215" x2="120" y2="215" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round"/>
                                </g>

                                {/* Magic Sparkles */}
                                <g className="animate-pulse">
                                    <path d="M340 80 L350 60 L360 80 L380 90 L360 100 L350 120 L340 100 L320 90 Z" fill="#FF9600"/>
                                    <path d="M50 250 L55 240 L60 250 L70 255 L60 260 L55 270 L50 260 L40 255 Z" fill="#4DA6FF"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="bg-pop-orange text-white w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl mb-6 shadow-orange">1</div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-pop-text mb-4">Snap a Pic, <br/>Spark a Memory.</h3>
                        <p className="text-lg text-gray-600 font-bold leading-relaxed mb-6">
                            Blank pages are scary. Old photos are magic. We use computer vision to turn a dusty photo into a conversation starter.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</div>
                                <span className="font-bold text-gray-600">Snap a photo of an old album page</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</div>
                                <span className="font-bold text-gray-600">AI spots the era (e.g., "1960s Wedding")</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</div>
                                <span className="font-bold text-gray-600">It asks her: "Who is that dancing with you?"</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Feature 2: Voice Recording */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-1">
                        <div className="bg-pop-blue text-white w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl mb-6 shadow-blue">2</div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-pop-text mb-4">Shaky Hands? <br/>Just Talk.</h3>
                        <p className="text-lg text-gray-600 font-bold leading-relaxed mb-6">
                            Typing on glass screens is frustrating for seniors. We bypass it completely with our "One-Tap" recorder.
                        </p>
                         <div className="bg-pop-bg p-6 rounded-2xl border-2 border-gray-100">
                            <p className="font-display font-bold text-pop-text mb-2">How it helps:</p>
                            <p className="text-sm text-gray-500 font-bold">
                                Our AI automatically cleans up the "umms," "ahhs," and long pauses, turning a rambling 20-minute chat into a beautiful, readable story.
                            </p>
                        </div>
                    </div>
                    <div className="order-2 relative">
                        {/* Doodle: The Retro Mic */}
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-lg">
                                {/* Sound Waves Background */}
                                <g opacity="0.1">
                                    <circle cx="200" cy="200" r="120" fill="none" stroke="#4DA6FF" strokeWidth="40" />
                                    <circle cx="200" cy="200" r="160" fill="none" stroke="#4DA6FF" strokeWidth="20" />
                                </g>

                                {/* The Mic Stand */}
                                <rect x="190" y="280" width="20" height="100" fill="#4B4B4B" />
                                <path d="M150 380 L250 380" stroke="#4B4B4B" strokeWidth="8" strokeLinecap="round" />

                                {/* The Mic Body */}
                                <rect x="150" y="100" width="100" height="180" rx="50" fill="white" stroke="#4B4B4B" strokeWidth="6" />
                                <rect x="160" y="110" width="80" height="160" rx="40" fill="#FFD6A5" />
                                
                                {/* Grid Lines on Mic */}
                                <g stroke="#E5E7EB" strokeWidth="3">
                                    <line x1="160" y1="150" x2="240" y2="150" />
                                    <line x1="160" y1="190" x2="240" y2="190" />
                                    <line x1="160" y1="230" x2="240" y2="230" />
                                    <line x1="200" y1="110" x2="200" y2="270" />
                                </g>

                                {/* Active Recording Indicator */}
                                <circle cx="200" cy="190" r="15" fill="#FF4D4D" className="animate-pulse" />

                                {/* Floating Notes */}
                                <g className="animate-bounce-slow">
                                    <path d="M300 150 Q320 130 300 110" fill="none" stroke="#CE82FF" strokeWidth="4" />
                                    <circle cx="300" cy="160" r="5" fill="#CE82FF" />
                                </g>
                                <g className="animate-wiggle">
                                    <text x="80" y="150" fontFamily="Fredoka" fontSize="60" fill="#4DA6FF" transform="rotate(-15 80 150)">Blah</text>
                                    <text x="60" y="220" fontFamily="Fredoka" fontSize="60" fill="#4DA6FF" transform="rotate(-25 60 220)">Blah</text>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Feature 3: Family Connection */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                        {/* Doodle: Paper Plane Connection */}
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-lg">
                                {/* Path Line */}
                                <path d="M80 300 Q 200 350, 320 150" fill="none" stroke="#4B4B4B" strokeWidth="3" strokeDasharray="10,10" className="animate-pulse"/>
                                
                                {/* House 1 (Grandma) */}
                                <g transform="translate(40, 260)">
                                    <path d="M0 40 L40 0 L80 40 L80 80 L0 80 Z" fill="#FFF9F0" stroke="#4B4B4B" strokeWidth="4" />
                                    <rect x="30" y="50" width="20" height="30" fill="#FF9600" />
                                    <text x="40" y="110" textAnchor="middle" fontFamily="Fredoka" fontSize="16" fill="#4B4B4B" fontWeight="bold">Grandma</text>
                                </g>

                                {/* House 2 (You) */}
                                <g transform="translate(280, 80)">
                                    <rect x="0" y="20" width="60" height="80" fill="white" stroke="#4B4B4B" strokeWidth="4" rx="5" />
                                    <circle cx="30" cy="50" r="15" fill="#CE82FF" />
                                    <text x="30" y="130" textAnchor="middle" fontFamily="Fredoka" fontSize="16" fill="#4B4B4B" fontWeight="bold">Family</text>
                                </g>

                                {/* Paper Plane */}
                                <g className="animate-bounce-slow">
                                    <path d="M180 220 L220 200 L190 240 L180 220" fill="#58CC02" stroke="#4B4B4B" strokeWidth="3" strokeLinejoin="round">
                                         <animateMotion path="M-20 20 Q 100 70, 220 -130" dur="3s" repeatCount="indefinite" rotate="auto" />
                                    </path>
                                </g>

                                {/* Heart Notifications */}
                                <g transform="translate(340, 60)">
                                    <path d="M0 10 Q-10 -10 0 -20 Q10 -10 0 10" fill="#FF4D4D" className="animate-bounce" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="bg-pop-green text-white w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl mb-6 shadow-green">3</div>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-pop-text mb-4">The "Curiosity Loop" <br/>Keeps Going.</h3>
                        <p className="text-lg text-gray-600 font-bold leading-relaxed mb-6">
                            It’s not just a diary; it’s a conversation. Grandkids ask questions, Grandma answers, and the family bond grows stronger.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">💌</div>
                                <div>
                                    <h4 className="font-bold text-pop-text">You send a nudge</h4>
                                    <p className="text-sm text-gray-500 font-bold">"Hey Mom, tell me about your first car."</p>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">🎙️</div>
                                <div>
                                    <h4 className="font-bold text-pop-text">She replies easily</h4>
                                    <p className="text-sm text-gray-500 font-bold">She gets a notification, taps once, and talks.</p>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">💖</div>
                                <div>
                                    <h4 className="font-bold text-pop-text">Forever Saved</h4>
                                    <p className="text-sm text-gray-500 font-bold">The audio and text are saved to your private family vault.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-24 text-center">
                <Button onClick={scrollToSignup} variant={ButtonVariant.PRIMARY} className="px-10 py-5 text-xl rounded-2xl shadow-xl hover:scale-105 transform transition">
                    Start Recording Free
                </Button>
            </div>
        </div>
    </section>
  );
};