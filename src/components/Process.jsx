import React from 'react';
import { processSteps } from '../data/siteData';

export default function Process() {
  const steps = processSteps;

  return (
    <section id="process" className="relative w-full py-16 md:py-24 border-b border-slate-200 bg-slate-50 font-sans">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans font-bold text-xs tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Workstream Guide
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-slate-900 mt-4 tracking-tight">
            OUR PRINT WORKFLOW
          </h2>
          <p className="font-sans text-sm text-slate-600 mt-2">
            Ordering custom prints in Patna is fast, transparent, and hassle-free.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number} 
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between items-start shadow-sm hover:shadow-xl transition-all relative text-left"
              >
                {/* Step badge */}
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-sans font-extrabold text-sm flex items-center justify-center shadow-md mb-4">
                  {step.number}
                </div>

                <div className="w-full">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 w-fit border border-blue-100 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 font-sans text-[11px] text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1">
                  <span>✓ FAST TURNAROUND</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

