'use client';

import { useEffect, useRef, useState } from 'react';
import { Anchor, Compass, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Anchor,
    title: 'Tell Us About Your Vessel',
    description: 'Share your vessel details, usage patterns, and coverage needs through our simple online form',
  },
  {
    number: 2,
    icon: Compass,
    title: 'Compare Top Insurers',
    description: "We match you with NZ's leading marine insurance providers to find the best coverage and rates",
  },
  {
    number: 3,
    icon: TrendingUp,
    title: 'Get Covered & Save',
    description: 'Choose the best policy and enjoy savings with our exclusive partner rates across NZ',
  },
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1626869710563-be671a0cd919?w=1920&h=1080&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/72 via-slate-800/60 to-sky-900/68" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-2">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-sky-200 max-w-2xl mx-auto">
            Get personalized insurance quotes in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connector lines between cards (desktop only) */}
          <div className="hidden md:block absolute top-[72px] left-[calc(33.33%-12px)] w-[calc(33.33%+24px)] z-0">
            <div
              className={`h-0.5 bg-gradient-to-r from-sky-400 to-sky-400 transition-all duration-1000 ease-out ${
                isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`}
              style={{ transitionDelay: '800ms' }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`
                  relative z-10 flex flex-col items-center
                  transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
              >
                {/* Step Number Badge */}
                <div
                  className={`
                    relative w-[72px] h-[72px] mb-6
                    transition-all duration-500 ease-out
                    ${isVisible ? 'scale-100' : 'scale-0'}
                  `}
                  style={{ transitionDelay: `${index * 200 + 400}ms` }}
                >
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full bg-sky-100 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-sky-200" />
                  {/* Inner circle */}
                  <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center shadow-lg shadow-sky-200">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl border-2 border-slate-200 p-6 sm:p-7 text-center flex-1 w-full hover:border-sky-400 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300 group">
                  {/* Icon */}
                  <div className="mx-auto w-14 h-14 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5 group-hover:bg-sky-100 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-sky-600" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector between cards on mobile */}
                {index < 2 && (
                  <div className="md:hidden my-3 text-sky-400">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
