import React, { useState } from 'react';
import { Button } from './Button';
import { ButtonVariant } from '../types';
import { generateMemorySpark, polishStory } from '../services/geminiService';

export const AiMagic: React.FC = () => {
  const [sparkTopic, setSparkTopic] = useState('');
  const [sparkResult, setSparkResult] = useState('');
  const [isSparkLoading, setIsSparkLoading] = useState(false);

  const [storyNotes, setStoryNotes] = useState('');
  const [storyResult, setStoryResult] = useState('');
  const [isStoryLoading, setIsStoryLoading] = useState(false);

  const handleSpark = async () => {
    if (!sparkTopic.trim()) return;
    setIsSparkLoading(true);
    const result = await generateMemorySpark(sparkTopic);
    setSparkResult(result);
    setIsSparkLoading(false);
  };

  const handlePolish = async () => {
    if (!storyNotes.trim()) return;
    setIsStoryLoading(true);
    const result = await polishStory(storyNotes);
    setStoryResult(result);
    setIsStoryLoading(false);
  };

  return (
    <section id="ai-demo" className="py-20 bg-pop-purple/5 border-t-4 border-pop-purple/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-pop-purple/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
                <div className="inline-block bg-white border-2 border-pop-purple px-4 py-1 rounded-full mb-4 shadow-sm">
                    <span className="font-display font-bold text-pop-purple text-sm">✨ Powered by Gemini</span>
                </div>
                <h2 className="text-4xl font-display font-bold text-pop-text mb-4">Experience the Magic Studio</h2>
                <p className="text-xl text-gray-600 font-bold max-w-2xl mx-auto">
                    See how our AI Helper assists Mom in telling her story. Try it yourself right here!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                
                {/* Feature 1: Memory Spark */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 flex flex-col h-full">
                    <div className="bg-pop-purple p-4 border-b-4 border-pop-purple-shadow text-white text-center">
                        <h3 className="font-display font-bold text-xl">⚡ Memory Spark</h3>
                        <p className="text-sm opacity-90 font-bold">Cure writer's block instantly</p>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <label htmlFor="spark-input" className="text-gray-600 font-bold mb-4 text-sm block">Enter a topic (e.g. "Summer", "1970s", "First Job"):</label>
                        <div className="flex gap-2 mb-6">
                            <input 
                                type="text" 
                                id="spark-input"
                                value={sparkTopic}
                                onChange={(e) => setSparkTopic(e.target.value)}
                                placeholder="Try 'High School'..." 
                                className="flex-1 bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-bold text-pop-text focus:border-pop-purple focus:outline-none transition"
                            />
                            <Button 
                                onClick={handleSpark} 
                                variant={ButtonVariant.PURPLE} 
                                isLoading={isSparkLoading}
                                disabled={!sparkTopic.trim()}
                                className="py-3 px-4 text-base"
                            >
                                Spark ✨
                            </Button>
                        </div>
                        
                        <div className="bg-pop-bg border-2 border-dashed border-pop-purple/30 rounded-xl p-6 flex-1 flex items-center justify-center text-center min-h-[150px]">
                            {sparkResult ? (
                                <p className="text-lg font-bold text-pop-text animate-pulse-fast animation-iteration-1">{`"${sparkResult}"`}</p>
                            ) : (
                                <span className="text-gray-400 font-bold italic">"Your question will appear here..."</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Feature 2: Story Polisher */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 flex flex-col h-full">
                    <div className="bg-pop-blue p-4 border-b-4 border-pop-blue-shadow text-white text-center">
                        <h3 className="font-display font-bold text-xl">🪄 Story Polisher</h3>
                        <p className="text-sm opacity-90 font-bold">Turn rough notes into gold</p>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <label htmlFor="story-input" className="text-gray-600 font-bold mb-4 text-sm block">Type a messy thought (e.g. "went beach dropped ice cream"):</label>
                        <textarea 
                            id="story-input"
                            rows={2} 
                            value={storyNotes}
                            onChange={(e) => setStoryNotes(e.target.value)}
                            placeholder="I baked a pie but it burned..." 
                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 font-bold text-pop-text focus:border-pop-blue focus:outline-none transition mb-4 resize-none"
                        />
                        <Button 
                            onClick={handlePolish} 
                            variant={ButtonVariant.SECONDARY} 
                            isLoading={isStoryLoading}
                            disabled={!storyNotes.trim()}
                            className="w-full py-3 mb-6"
                        >
                            Polish Magic 🪄
                        </Button>
                        
                        <div className="bg-pop-bg border-2 border-dashed border-pop-blue/30 rounded-xl p-6 flex-1 flex items-center justify-center text-center min-h-[100px]">
                            {storyResult ? (
                                <p className="text-lg font-bold text-pop-text animate-pulse-fast animation-iteration-1">{`"${storyResult}"`}</p>
                            ) : (
                                <span className="text-gray-400 font-bold italic">"Polished story appears here..."</span>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};