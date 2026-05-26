import React from 'react';
import { processSteps } from '../data/siteData';

export default function Process() {
  const steps = processSteps;

  return (
    <section id="process" className="relative w-full py-16 md:py-24 border-b-3 border-retro-charcoal bg-retro-cream">
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-grotesk font-black text-sm tracking-widest text-[#FAF7F2] bg-retro-terracotta retro-border-sm px-3 py-1 shadow-retro-sm">
            How It Works
          </span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-retro-charcoal mt-6">
            OUR EASY PROCESS
          </h2>
          <p className="font-sans text-sm text-retro-charcoal/80 mt-2">
            Getting premium custom prints in Patna has never been this simple. Follow these steps to get started.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number} 
                className="bg-retro-cream retro-border p-6 flex flex-col justify-between items-start retro-shadow relative"
              >
                {/* Vintage step circle */}
                <div className="absolute -top-5 -left-3 font-syne font-black text-4xl text-retro-charcoal bg-retro-cream px-2 py-1 retro-border-sm rotate-[-8deg] shadow-retro-sm">
                  {step.number}
                </div>

                <div className="mt-4 w-full">
                  <div className={`p-3 retro-border-sm ${step.bgColor} text-retro-charcoal w-fit shadow-retro-sm mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-syne font-black text-xl text-retro-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-retro-charcoal/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 font-mono text-[9px] text-retro-charcoal/50 font-bold uppercase tracking-wider">
                  ★ STEP COMPLETE ★
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
