import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Zap } from 'lucide-react';
import { businessDetails } from '../data/siteData';

export default function TopContactBar() {
  return (
    <div className="w-full bg-slate-900 border-b border-slate-800 py-3 px-4 text-white font-sans relative z-40 md:hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap-2.5">
        
        {/* Left: Location & Working Tagline */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-300 text-center md:text-left">
          <div className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700 text-blue-400 font-semibold">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>Bari Path, Patna</span>
          </div>
          <span className="hidden sm:inline text-slate-500">•</span>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Open Mon-Sat 8:00 AM - 9:00 PM</span>
          </div>
        </div>

        {/* Right: Direct Call Number & WhatsApp Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto justify-center">
          
          {/* Phone Call Button */}
          <a
            href={`tel:${businessDetails.phoneDial}`}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4 text-white shrink-0" />
            <span>Call: {businessDetails.phone}</span>
          </a>

          {/* WhatsApp Chat Button */}
          <a
            href={businessDetails.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
            <span>WhatsApp Chat</span>
          </a>

        </div>

      </div>
    </div>
  );
}
