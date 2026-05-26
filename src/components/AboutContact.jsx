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
    <section id="contact" className="relative w-full py-16 md:py-24 border-b-3 border-retro-charcoal bg-retro-card">
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-grotesk font-black text-sm tracking-widest text-retro-terracotta uppercase bg-retro-peach retro-border-sm px-3 py-1 shadow-retro-sm">
            Find Us
          </span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-retro-charcoal mt-6">
            ABOUT & LOCATION
          </h2>
          <p className="font-sans text-sm text-retro-charcoal/80 mt-2">
            Visit our physical store in Bari Path, Dariyapur for bulk order negotiations, paper catalog reviews, and design consulting.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Info and Landmarks */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-retro-cream retro-border p-6 md:p-8 retro-shadow flex-1">
              <h3 className="font-syne font-black text-2xl text-retro-charcoal mb-6 border-b-2 border-retro-charcoal pb-3 uppercase">
                Visit Our Shop
              </h3>

              <div className="space-y-6 text-left">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="bg-retro-sand p-2.5 retro-border-sm h-fit text-retro-terracotta shadow-retro-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider">Address</h4>
                    <p className="font-sans text-sm text-retro-charcoal/80 mt-1 leading-relaxed">
                      {businessDetails.address}
                    </p>
                    <a 
                      href={businessDetails.googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 font-grotesk font-bold text-xs text-retro-terracotta hover:underline mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 border-t border-dashed border-retro-charcoal/30 pt-6">
                  <div className="bg-retro-sand p-2.5 retro-border-sm h-fit text-retro-teal shadow-retro-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider">Contact Number</h4>
                    <p className="font-sans text-sm text-retro-charcoal/80 mt-1">
                      <strong>Phone:</strong> {businessDetails.phone} / {businessDetails.phoneAlt}
                    </p>
                    <span className="text-xs font-mono text-retro-charcoal/50 block mt-1">Call for quotes, orders, and inquiries.</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 border-t border-dashed border-retro-charcoal/30 pt-6">
                  <div className="bg-retro-sand p-2.5 retro-border-sm h-fit text-retro-sage shadow-retro-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider">Operating Hours</h4>
                    <p className="font-sans text-sm text-retro-charcoal/80 mt-1">
                      {businessDetails.hoursLines.weekdays}
                    </p>
                    <p className="font-sans text-sm text-retro-terracotta mt-0.5 font-bold">
                      {businessDetails.hoursLines.sunday}
                    </p>
                  </div>
                </div>

                {/* Landmark info */}
                <div className="flex gap-4 border-t border-dashed border-retro-charcoal/30 pt-6">
                  <div className="bg-retro-sand p-2.5 retro-border-sm h-fit text-retro-charcoal shadow-retro-sm">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider">Landmarks</h4>
                    <p className="font-sans text-xs text-retro-charcoal/80 mt-1 leading-relaxed">
                      {businessDetails.landmarks}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-retro-cream retro-border p-4 retro-shadow-lg flex flex-col justify-between h-full min-h-[350px]">
              {/* Map Title bar */}
              <div className="flex justify-between items-center bg-retro-sand border-b-2 border-retro-charcoal px-4 py-2 mb-4 font-grotesk font-bold text-xs text-retro-charcoal uppercase">
                <span>📍 Live Location Map</span>
                <span className="text-[10px] text-retro-terracotta">BARI PATH, PATNA</span>
              </div>

              {/* Iframe inside Retro Container */}
              <div className="flex-1 w-full relative retro-border-sm overflow-hidden min-h-[300px]">
                <iframe 
                  title="Patna Printing Works Google Map"
                  src={businessDetails.googleMapsEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0 filter contrast-125 saturate-50"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Action Buttons: WhatsApp and Instagram */}
              <div className="grid grid-cols-2 gap-4 mt-4 pt-2">
                <a 
                  href={businessDetails.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-[#25D366] text-[#FAF7F2] text-xs py-3 px-1 flex items-center justify-center gap-1.5 shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#1E1E1E]"
                >
                  <MessageSquare className="w-4 h-4 text-[#FAF7F2]" />
                  <span className="hidden sm:inline">WhatsApp Chat</span>
                  <span className="sm:hidden">WhatsApp</span>
                </a>
                
                <a 
                  href={businessDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn bg-[#E1306C] text-[#FAF7F2] text-xs py-3 px-1 flex items-center justify-center gap-1.5 shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#1E1E1E]"
                >
                  <InstagramIcon className="w-4 h-4 text-[#FAF7F2]" />
                  <span className="hidden sm:inline">Instagram Profile</span>
                  <span className="sm:hidden">Instagram</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
