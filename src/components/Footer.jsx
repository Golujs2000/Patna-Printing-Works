import React from 'react';
import { ArrowUp, Printer, Phone, MapPin, Heart, MessageCircle } from 'lucide-react';
import { businessDetails, services } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-900 text-slate-300 border-t border-slate-800 py-12 md:py-16 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-8 mb-8 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
              <Printer className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-sans font-bold text-lg text-white tracking-tight leading-none">
                {businessDetails.name}
              </h3>
              <span className="font-sans text-xs text-blue-400 uppercase tracking-wider block mt-1">
                BARI PATH, PATNA • EST. {businessDetails.est}
              </span>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 font-sans font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-xl border border-slate-700 transition-all shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-blue-400" />
          </button>
        </div>

        {/* Center Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-12">
          
          {/* Column 1: Services List */}
          <div>
            <h4 className="font-sans font-bold text-xs text-emerald-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              PRINT SERVICES
            </h4>
            <ul className="font-sans text-xs space-y-2.5 text-slate-400">
              {services.map((service) => (
                <li key={service.id} className="hover:text-white transition-colors cursor-pointer">
                  • {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact Info summary */}
          <div>
            <h4 className="font-sans font-bold text-xs text-emerald-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              CONTACT & LOCATION
            </h4>
            <div className="font-sans text-xs space-y-3 text-slate-400">
              <div className="flex gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{businessDetails.addressShort}</span>
              </div>
              <div className="flex gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <a href={`tel:${businessDetails.phoneDial}`} className="hover:text-blue-400 transition-all hover:underline">
                  {businessDetails.phone}
                </a>
              </div>
              <div className="flex gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a 
                  href={businessDetails.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-all hover:underline"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Summary / Bio */}
          <div>
            <h4 className="font-sans font-bold text-xs text-emerald-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              OUR PROMISE
            </h4>
            <p className="font-sans text-xs text-slate-400 leading-relaxed mb-4">
              {businessDetails.mission}
            </p>
            <div className="font-sans text-xs font-bold text-blue-400 bg-slate-800/80 p-3 rounded-xl border border-slate-800 text-center">
              {businessDetails.factoryPricingTagline}
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs font-sans text-slate-500">
          <div>
            © {new Date().getFullYear()} Patna Printing Works. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for businesses in Patna & Bihar.
          </div>
        </div>

      </div>
    </footer>
  );
}

