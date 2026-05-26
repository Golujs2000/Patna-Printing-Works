import React from 'react';
import { ArrowUp, Printer, Phone, MapPin, Heart, MessageCircle } from 'lucide-react';
import { businessDetails, services } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-retro-charcoal text-retro-cream border-t-3 border-retro-charcoal py-12 md:py-16 relative">
      <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-retro-cream/20 pb-8 mb-8 gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-retro-mustard retro-border-sm p-1.5 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
              <Printer className="w-5 h-5 text-retro-charcoal" />
            </div>
            <div className="text-left">
              <h3 className="font-syne font-black text-lg tracking-wider text-retro-cream uppercase leading-none">
                {businessDetails.name}
              </h3>
              <span className="font-mono text-[10px] text-retro-mustard uppercase tracking-widest block mt-1">
                BARI PATH, PATNA • SINCE {businessDetails.est}
              </span>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 font-grotesk font-bold text-xs bg-retro-cream text-retro-charcoal border-2 border-retro-charcoal px-4 py-2 hover:bg-retro-mustard transition-all shadow-[2px_2px_0px_0px_#FAF7F2] hover:translate-y-[-1px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Center Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-12">
          
          {/* Column 1: Services List */}
          <div>
            <h4 className="font-grotesk font-black text-sm text-retro-mustard uppercase tracking-wider mb-4 border-b border-retro-cream/10 pb-2">
              PRINT SERVICES
            </h4>
            <ul className="font-sans text-sm space-y-2 text-retro-cream/80">
              {services.map((service) => (
                <li key={service.id}>• {service.title}</li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Info summary */}
          <div>
            <h4 className="font-grotesk font-black text-sm text-retro-mustard uppercase tracking-wider mb-4 border-b border-retro-cream/10 pb-2">
              GET IN TOUCH
            </h4>
            <div className="font-sans text-sm space-y-3 text-retro-cream/80">
              <div className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-retro-mustard shrink-0 mt-0.5" />
                <span className="leading-tight">{businessDetails.addressShort}</span>
              </div>
              <div className="flex gap-2.5">
                <Phone className="w-4 h-4 text-retro-mustard shrink-0 mt-0.5" />
                <a href={`tel:${businessDetails.phoneDial}`} className="hover:text-retro-mustard transition-all hover:underline">
                  {businessDetails.phone}
                </a>
              </div>
              <div className="flex gap-2.5">
                <MessageCircle className="w-4 h-4 text-retro-mustard shrink-0 mt-0.5" />
                <a 
                  href={businessDetails.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-retro-mustard transition-all hover:underline"
                >
                  Chat live on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Summary / Bio */}
          <div>
            <h4 className="font-grotesk font-black text-sm text-retro-mustard uppercase tracking-wider mb-4 border-b border-retro-cream/10 pb-2">
              OUR MISSION
            </h4>
            <p className="font-sans text-xs text-retro-cream/70 leading-relaxed mb-4">
              {businessDetails.mission}
            </p>
            <div className="font-mono text-[9px] text-retro-mustard uppercase bg-white/5 p-3 border border-white/10">
              {businessDetails.factoryPricingTagline}
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-retro-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs font-grotesk text-retro-cream/50">
          <div>
            © {new Date().getFullYear()} Patna Printing Works. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-retro-terracotta fill-retro-terracotta" /> in Patna for local businesses.
          </div>
        </div>

      </div>
    </footer>
  );
}
