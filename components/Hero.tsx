import React from 'react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

export const Hero: React.FC = () => {
  const scrollToSignup = () => {
    const element = document.getElementById('signup-footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <header className="pt-32 pb-20 bg-dots relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                <div className="relative z-10 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-yellow-100 border-2 border-yellow-200 px-4 py-2 rounded-full mb-6 transform -rotate-1">
                        <span className="text-xl">⏳</span>
                        <span className="font-bold text-yellow-800 text-sm uppercase tracking-wide">Don't let the stories fade</span>
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-pop-text">
                        Turn Mom's memories into her{' '}
                        <span className="text-pop-blue relative whitespace-nowrap inline-block">
                            Medicine.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-pop-orange opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                            </svg>
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 font-bold mb-8 leading-relaxed">
                        The first app that uses <strong>Reminiscence Therapy</strong> to keep grandparents sharp, while building a digital legacy for your kids. <br/><span className="text-pop-orange">Connect the generations before it's too late.</span>
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button onClick={scrollToSignup} variant={ButtonVariant.PRIMARY} className="text-xl px-8 py-4 rounded-2xl">
                            Start Mom's Free Account
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                        </Button>
                    </div>
                    <p className="mt-4 text-sm text-gray-400 font-bold">No credit card required • Cancel anytime</p>
                </div>

                {/* Hero Visual: The Connection */}
                <div className="relative h-[500px] w-full flex items-center justify-center">
                    <div className="absolute w-[500px] h-[500px] bg-pop-blue/10 rounded-full blur-3xl animate-pulse"></div>

                    <svg className="w-full h-full drop-shadow-xl animate-bounce-slow" viewBox="0 0 450 350">
                        {/* Background Doodles */}
                        <g opacity="0.15">
                             <path d="M50,50 Q70,30 90,50 T130,50" stroke="#FF9600" strokeWidth="4" fill="none" />
                             <circle cx="350" cy="80" r="8" fill="#CE82FF" />
                             <circle cx="400" cy="120" r="12" fill="#4DA6FF" />
                             <path d="M380,280 L400,300 M400,280 L380,300" stroke="#58CC02" strokeWidth="4" />
                             <path d="M80,280 Q100,260 120,280" stroke="#FF9600" strokeWidth="4" fill="none"/>
                        </g>

                        {/* Connection Line (Fun Looping Doodle) */}
                        <path d="M130 150 C 160 90, 220 90, 260 120" fill="none" stroke="#4DA6FF" strokeWidth="3" strokeDasharray="8, 6" strokeLinecap="round" className="connector-line"/>
                        
                        {/* Explanatory Text: "She talks..." */}
                         <g transform="translate(10, 160) rotate(-12)">
                            <text x="0" y="0" fontFamily="Fredoka" fontSize="16" fill="#FF9600" fontWeight="bold">She just talks...</text>
                            <path d="M90,0 Q100,-5 110,-5" fill="none" stroke="#FF9600" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)"/>
                         </g>

                         {/* Explanatory Text: "...He keeps forever!" */}
                         <g transform="translate(350, 120) rotate(6)">
                            <text x="0" y="15" fontFamily="Fredoka" fontSize="16" fill="#CE82FF" fontWeight="bold">He keeps forever!</text>
                            <path d="M-5,25 Q-20,30 -35,35" fill="none" stroke="#CE82FF" strokeWidth="2" strokeDasharray="3,3"/>
                         </g>

                        {/* Grandma Phone */}
                        <g transform="translate(60, 90) rotate(-8)">
                            {/* Phone Body */}
                            <rect x="0" y="0" width="130" height="240" rx="25" fill="white" stroke="#4B4B4B" strokeWidth="6"/>
                            <rect x="8" y="8" width="114" height="224" rx="20" fill="#FFF9F0"/>
                            
                            {/* Grandma Character */}
                            <g transform="translate(57, 70)">
                                <circle cx="0" cy="-35" r="15" fill="#E5E7EB"/>
                                <path d="M-35,10 Q-35,-30 0,-30 Q35,-30 35,10" fill="#E5E7EB"/>
                                <path d="M-30,10 Q-30,40 0,40 Q30,40 30,10 L30,-5 Q0,-5 -30,-5 Z" fill="#FFD6A5"/>
                                <g stroke="#4B4B4B" strokeWidth="2" fill="none">
                                    <circle cx="-15" cy="10" r="10" fill="white" fillOpacity="0.3"/>
                                    <circle cx="15" cy="10" r="10" fill="white" fillOpacity="0.3"/>
                                    <path d="M-5,10 L5,10"/>
                                    <path d="M-30,10 L-25,10"/>
                                    <path d="M25,10 L30,10"/>
                                </g>
                                <circle cx="-15" cy="10" r="2" fill="#4B4B4B"/>
                                <circle cx="15" cy="10" r="2" fill="#4B4B4B"/>
                                <path d="M-10,25 Q0,32 10,25" fill="none" stroke="#FF9600" strokeWidth="2" strokeLinecap="round"/>
                            </g>

                            {/* Interface Lines */}
                            <rect x="25" y="130" width="80" height="8" rx="4" fill="#E5E7EB"/>
                            <rect x="35" y="145" width="60" height="8" rx="4" fill="#E5E7EB"/>
                            
                            {/* Recording Button with Sound Waves */}
                            <g transform="translate(25, 170)">
                                <rect width="80" height="30" rx="15" fill="#58CC02" className="animate-pulse"/>
                                <text x="40" y="20" textAnchor="middle" fontFamily="Fredoka" fontSize="14" fill="white" fontWeight="bold">Recording</text>
                                
                                {/* Sound Waves Doodle */}
                                <path d="M-10,5 Q-15,15 -10,25" fill="none" stroke="#58CC02" strokeWidth="3" strokeLinecap="round" opacity="0.6">
                                    <animate attributeName="d" values="M-10,5 Q-15,15 -10,25; M-15,0 Q-25,15 -15,30" dur="1s" repeatCount="indefinite" />
                                </path>
                                <path d="M90,5 Q95,15 90,25" fill="none" stroke="#58CC02" strokeWidth="3" strokeLinecap="round" opacity="0.6">
                                    <animate attributeName="d" values="M90,5 Q95,15 90,25; M95,0 Q105,15 95,30" dur="1s" repeatCount="indefinite" />
                                </path>
                            </g>
                        </g>

                        {/* Grandchild Phone */}
                        <g transform="translate(260, 60) rotate(8)">
                            {/* Phone Body */}
                            <rect x="0" y="0" width="130" height="240" rx="25" fill="white" stroke="#4B4B4B" strokeWidth="6"/>
                            <rect x="8" y="8" width="114" height="224" rx="20" fill="#F0F9FF"/>
                            
                            {/* Header removed per user request */}
                            <rect x="8" y="8" width="114" height="50" rx="20" fill="none"/>

                            {/* Screen Content - Video of Grandma speaking */}
                            <rect x="20" y="40" width="90" height="70" rx="10" fill="#4DA6FF"/>
                            <path d="M45,60 Q65,50 85,60 L85,90 L45,90 Z" fill="#89CFF0" opacity="0.5"/> 
                            <circle cx="65" cy="65" r="15" fill="#FFE0BD"/> 
                            <circle cx="65" cy="65" r="15" fill="none" stroke="white" strokeWidth="2"/>
                            
                            {/* Magic Sparkles on screen */}
                            <g transform="translate(95, 30)">
                                <path d="M0,-10 L3,-3 L10,0 L3,3 L0,10 L-3,3 L-10,0 L-3,-3 Z" fill="#FFD700">
                                    <animateTransform attributeName="transform" type="scale" values="0;1;0" dur="2s" repeatCount="indefinite" />
                                </path>
                            </g>

                            {/* Kid's Reaction Bubble */}
                            <path d="M15,130 Q15,120 25,120 L105,120 Q115,120 115,130 L115,160 Q115,170 105,170 L25,170 Q15,170 15,160 Z" fill="#CE82FF"/>
                            <text x="65" y="150" textAnchor="middle" fontFamily="Fredoka" fontSize="14" fill="white" fontWeight="bold">Tell me more!</text>
                            
                            {/* Kid Avatar at bottom */}
                            <g transform="translate(65, 200)">
                                <circle cx="0" cy="0" r="20" fill="#FFD6A5"/>
                                <path d="M-20,-5 Q0,-25 20,-5" fill="#8B4513"/> 
                                <circle cx="-7" cy="0" r="2" fill="#4B4B4B"/>
                                <circle cx="7" cy="0" r="2" fill="#4B4B4B"/>
                                <path d="M-5,10 Q0,15 5,10" fill="none" stroke="#4B4B4B" strokeWidth="2" strokeLinecap="round"/>
                            </g>
                        </g>
                        
                    </svg>
                </div>
            </div>
        </div>
    </header>

    {/* Urgency Strip */}
    <div className="bg-pop-text text-white py-10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 text-yellow-400">Why This Matters Now</h2>
            <p className="text-lg md:text-xl font-bold opacity-90 max-w-3xl mx-auto">
                The average person loses 15% of their childhood memories every decade. Your mom's stories about 1965 won't wait. <br/>
                <span className="underline decoration-pop-blue decoration-4 underline-offset-4">Start capturing them today before they fade.</span>
            </p>
        </div>
    </div>
    </>
  );
};