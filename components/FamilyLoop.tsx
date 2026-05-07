import React from 'react';

export const FamilyLoop: React.FC = () => {
  return (
    <section id="family" className="py-20 bg-pop-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-dots"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold text-white mb-4">The "Curiosity Loop"</h2>
                <p className="text-xl text-white/90 font-bold max-w-2xl mx-auto">
                    It's not just a diary; it's a conversation. Here is how MemoryKeeper creates daily connection points.
                </p>
            </div>

            {/* The 3-Step Loop Visual */}
            <div className="grid md:grid-cols-3 gap-4 items-center justify-center relative">
                
                {/* Connecting Dotted Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-20 right-20 h-0.5 border-t-4 border-dashed border-white/30 -z-10"></div>

                {/* Step 1: Kid Asks */}
                <div className="bg-white p-6 rounded-3xl shadow-xl transform rotate-2 border-b-8 border-gray-200 hover:-translate-y-2 transition duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <span className="bg-pop-purple text-white px-3 py-1 rounded-full font-bold text-xs uppercase">Step 1</span>
                        <span className="text-4xl">👦</span>
                    </div>
                    <p className="font-bold text-gray-600 text-sm mb-2">Grandson sends a nudge:</p>
                    <div className="bg-pop-purple/10 p-3 rounded-xl text-pop-purple font-bold text-lg italic">
                        "Grandma, what was your first car?"
                    </div>
                </div>

                {/* Step 2: Grandma Plays */}
                <div className="bg-white p-6 rounded-3xl shadow-xl transform -rotate-2 border-b-8 border-gray-200 hover:-translate-y-2 transition duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <span className="bg-pop-orange text-white px-3 py-1 rounded-full font-bold text-xs uppercase">Step 2</span>
                        <span className="text-4xl">👵</span>
                    </div>
                    <p className="font-bold text-gray-600 text-sm mb-2">She answers & plays:</p>
                    <div className="bg-pop-orange/10 p-3 rounded-xl text-pop-orange font-bold text-lg">
                        <span className="inline-block animate-pulse mr-2">🔴</span>
                        "A red Ford! And I drove it to..."
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-bold">She earns brain points for recalling details!</p>
                </div>

                {/* Step 3: Family Feed */}
                <div className="bg-white p-6 rounded-3xl shadow-xl transform rotate-1 border-b-8 border-gray-200 hover:-translate-y-2 transition duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <span className="bg-pop-green text-white px-3 py-1 rounded-full font-bold text-xs uppercase">Step 3</span>
                        <span className="text-4xl">👨‍👩‍👧‍👦</span>
                    </div>
                    <p className="font-bold text-gray-600 text-sm mb-2">The Loop Continues:</p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-green-50 p-2 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
                            <span className="text-sm font-bold text-gray-700">Story Saved Forever</span>
                        </div>
                        <div className="flex items-center gap-3 bg-blue-50 p-2 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></div>
                            <span className="text-sm font-bold text-gray-700">Grandson asks: "Who bought it?"</span>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        <span className="text-xs font-bold text-pop-blue uppercase tracking-wider">Cycle repeats! ↺</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};