import React from 'react';
import { MapPin, Phone, Clock, Landmark, Navigation, MessageSquare } from 'lucide-react';
import { businessDetails } from '../data/siteData';

const InstagramIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function AboutContact() {

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 border-b border-slate-200 bg-slate-50 font-sans">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans font-bold text-xs tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Physical Hub & Map
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-slate-900 mt-4 tracking-tight">
            LOCATION & CONTACT
          </h2>
          <p className="font-sans text-sm text-slate-600 mt-2">
            Visit our printing shop in Bari Path, Dariyapur for catalog reviews, paper sample testing, and bulk order negotiation.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xl flex-1 text-left">
              <h3 className="font-sans font-bold text-xl text-slate-900 mb-6 border-b border-slate-100 pb-3">
                Visit Our Print Hub
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-slate-700 uppercase tracking-wider">Address</h4>
                    <p className="font-sans text-sm text-slate-600 mt-1 leading-relaxed">
                      {businessDetails.address}
                    </p>
                    <a 
                      href={businessDetails.googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 font-sans font-bold text-xs text-blue-600 hover:underline mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-slate-700 uppercase tracking-wider">Phone Lines</h4>
                    <p className="font-sans text-sm text-slate-800 mt-1 font-bold">
                      {businessDetails.phone} / {businessDetails.phoneAlt}
                    </p>
                    <span className="text-xs font-sans text-slate-500 block mt-0.5">Call for quick pricing, order status & samples.</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-slate-700 uppercase tracking-wider">Working Hours</h4>
                    <p className="font-sans text-sm text-slate-800 font-semibold mt-1">
                      {businessDetails.hoursLines.weekdays}
                    </p>
                    <p className="font-sans text-sm text-red-500 font-semibold mt-0.5">
                      {businessDetails.hoursLines.sunday}
                    </p>
                  </div>
                </div>

                {/* Landmark info */}
                <div className="flex gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-slate-700 uppercase tracking-wider">Landmarks</h4>
                    <p className="font-sans text-xs text-slate-600 mt-1 leading-relaxed">
                      {businessDetails.landmarks}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xl flex flex-col justify-between h-full min-h-[360px]">
              
              {/* Map Header */}
              <div className="flex justify-between items-center bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 mb-4 font-sans font-bold text-xs text-slate-800">
                <span>📍 Live Google Location Map</span>
                <span className="text-[11px] text-blue-600 uppercase">BARI PATH, PATNA</span>
              </div>

              {/* Map Iframe Container */}
              <div className="flex-1 w-full relative rounded-xl border border-slate-200 overflow-hidden min-h-[300px] bg-slate-100">
                <iframe 
                  title="Patna Printing Works Google Map"
                  src={businessDetails.googleMapsEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <a 
                  href={businessDetails.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                
                <a 
                  href={businessDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <InstagramIcon className="w-4 h-4 text-white" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

