import React from 'react';

export const Testimonial: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I used to ask 'How are you?' and get a 'Fine.' Now we talk about the stories she unlocks in the app. It gave us something new to talk about.",
      name: "Jennifer, 45",
      role: "Caring for Mom (72)",
      avatar: "👩‍🦰"
    },
    {
      id: 2,
      quote: "Dad has trouble typing, but he loves the voice recorder. He just tells his stories, and we get to keep them forever. It's priceless.",
      name: "Mark, 52",
      role: "Caring for Dad (84)",
      avatar: "👨‍🦳"
    },
    {
      id: 3,
      quote: "I learned things about my grandmother's childhood I never knew. This app is bridging the gap between our generations.",
      name: "Sarah, 28",
      role: "Granddaughter",
      avatar: "👩‍🎓"
    }
  ];

  return (
    <section className="py-24 bg-pop-bg relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 text-6xl opacity-5 font-display text-pop-orange">❝</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-5 font-display text-pop-orange">❞</div>

        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wide">Real Families</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-pop-text mt-4">Stories Saved, Hearts Connected.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t) => (
                    <div key={t.id} className="bg-white rounded-3xl p-8 shadow-card border-2 border-gray-100 relative hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <div className="absolute -top-5 left-8 bg-pop-orange text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-display shadow-lg">"</div>
                        <p className="text-lg text-gray-600 font-bold mb-6 leading-relaxed mt-4 flex-grow">
                            {t.quote}
                        </p>
                        <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-50">
                            <div className="w-12 h-12 bg-pop-bg rounded-full flex items-center justify-center text-2xl border-2 border-gray-100">
                                {t.avatar}
                            </div>
                            <div>
                                <div className="font-bold text-pop-text">{t.name}</div>
                                <div className="text-pop-orange font-bold text-xs uppercase">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};