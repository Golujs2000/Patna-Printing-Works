import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/siteData';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="relative w-full py-16 md:py-24 border-b-3 border-retro-charcoal bg-retro-cream">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 font-sans">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-grotesk font-black text-sm tracking-widest text-retro-terracotta uppercase bg-retro-peach retro-border-sm px-3 py-1 shadow-retro-sm">
            Our Specialties
          </span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-retro-charcoal mt-6">
            WHAT WE DO BEST
          </h2>
          <p className="font-sans text-sm text-retro-charcoal/80 mt-4">
            We deliver high-definition digital prints and heavy-duty industrial offset prints with crisp detailing, rich colors, and sturdy materials.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-retro-cream retro-border p-6 flex flex-col justify-between retro-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-retro-lg transition-all duration-200"
            >
              <div>
                {/* Service Header Info */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[9px] text-retro-charcoal/40 font-black uppercase tracking-wider">
                    SPECIALTY BATCH
                  </span>
                  <span className="font-mono text-[10px] bg-retro-sand px-2 py-0.5 border border-retro-charcoal text-retro-charcoal font-black uppercase shadow-retro-sm">
                    Min: {service.minOrder}
                  </span>
                </div>

                {/* Service Image */}
                <div className="w-full h-36 mb-6 overflow-hidden border-2 border-dashed border-retro-charcoal/30 relative">
                  <div className="absolute inset-0 dot-grid pointer-events-none opacity-10 z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title & Desc */}
                <h3 className="font-syne font-black text-xl text-retro-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-retro-charcoal/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 border-t border-dashed border-retro-charcoal/30 pt-4 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-[11px] font-grotesk font-bold text-retro-charcoal/90">
                      <span className="w-1.5 h-1.5 bg-retro-terracotta rounded-none"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full mt-auto retro-btn bg-retro-sand hover:bg-retro-mustard text-xs text-retro-charcoal py-2.5 px-3 flex justify-center items-center gap-2 shadow-retro-sm hover:shadow-retro-sm"
              >
                <span>Select & Inquire</span>
                <ArrowUpRight className="w-4 h-4 text-retro-terracotta" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
