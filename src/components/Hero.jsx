import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b-3 border-retro-charcoal py-12 md:py-20 lg:py-24 bg-retro-cream">
      {/* Decorative dot grids in background */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      
      {/* Top Ticker / Marquee Banner */}
      <div className="absolute top-0 left-0 w-full bg-retro-terracotta border-b-3 border-retro-charcoal overflow-hidden py-2 text-[#FAF7F2] font-grotesk font-black text-xs md:text-sm tracking-widest uppercase select-none">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap">
          <span className="mx-4 flex items-center gap-2">🔥 Wedding Card Printing Specialists</span>
          <span className="mx-4">•</span>
          <span className="mx-4 flex items-center gap-2">⚡ High Quality Flex Banners</span>
          <span className="mx-4">•</span>
          <span className="mx-4 flex items-center gap-2">💎 Premium Visiting Cards & Flyers</span>
          <span className="mx-4">•</span>
          <span className="mx-4 flex items-center gap-2">📦 Bulk Printing Discounts Available</span>
          <span className="mx-4">•</span>
          <span className="mx-4 flex items-center gap-2">📍 Beside Card Mahal, Bari Path, Patna</span>
          <span className="mx-4">•</span>
          {/* Duplicate for seamless looping */}
          <span className="mx-4 flex items-center gap-2">🔥 Wedding Card Printing Specialists</span>
          <span className="mx-4">•</span>
          <span className="mx-4 flex items-center gap-2">⚡ High Quality Flex Banners</span>
          <span className="mx-4">•</span>
          <span className="mx-4 flex items-center gap-2">💎 Premium Visiting Cards & Flyers</span>
          <span className="mx-4">•</span>
          <span className="mx-4 flex items-center gap-2">📦 Bulk Printing Discounts Available</span>
          <span className="mx-4">•</span>
          <span className="mx-4 flex items-center gap-2">📍 Beside Card Mahal, Bari Path, Patna</span>
          <span className="mx-4">•</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bold Typography & Advertising Cop */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Vintage Badge */}
          <div className="inline-flex items-center gap-2 bg-retro-peach retro-border-sm px-3.5 py-1.5 mb-6 shadow-retro-sm">
            <Sparkles className="w-4 h-4 text-retro-terracotta fill-retro-terracotta" />
            <span className="font-grotesk font-extrabold text-xs md:text-sm tracking-wide text-retro-charcoal uppercase">
              Patna's Premium Custom Print Shop
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-syne font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-retro-charcoal tracking-tight mb-6">
            WE PRINT <br />
            <span className="text-retro-terracotta relative">
              YOUR IDEAS
              <span className="absolute left-0 bottom-0 w-full h-2 bg-retro-mustard -z-10 transform -rotate-1"></span>
            </span> <br />
            ON PAPER & FLEX.
          </h1>

          {/* Supporting Text */}
          <p className="font-sans text-base md:text-lg text-retro-charcoal/90 max-w-xl mb-8 leading-relaxed">
            From luxury, textured <strong>Wedding Invitation Cards</strong> to vibrant, heavy-duty <strong>Flex Banners</strong>, 
            <strong>Rollup Standees</strong>, and wholesale <strong>Visiting Cards</strong>. Patna Printing Works provides state-of-the-art digital & offset printing right in the heart of Bari Path, Dariyapur.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#inquiry"
              className="retro-btn bg-retro-mustard hover:bg-retro-mustard/90 text-retro-charcoal text-base md:text-lg px-8 py-3.5 flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a 
              href="#calculator"
              className="retro-btn bg-retro-cream hover:bg-retro-sand text-retro-charcoal text-base md:text-lg px-8 py-3.5 flex items-center justify-center gap-2 border-retro-charcoal"
            >
              <span>Instant Estimate</span>
              <ArrowRight className="w-5 h-5 text-retro-terracotta" />
            </a>
          </div>

          {/* Mini Features List */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-8 border-t-2 border-retro-charcoal/20 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <div className="bg-retro-sand p-1.5 retro-border-sm text-retro-terracotta">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-grotesk font-black text-xs md:text-sm text-retro-charcoal uppercase leading-none">Fast Turnaround</h4>
                <span className="text-[10px] md:text-xs text-retro-charcoal/70">Ready in 24-48 Hours</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <div className="bg-retro-sand p-1.5 retro-border-sm text-retro-teal">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-grotesk font-black text-xs md:text-sm text-retro-charcoal uppercase leading-none">Wholesale Prices</h4>
                <span className="text-[10px] md:text-xs text-retro-charcoal/70">Bulk Printing Discounts</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <div className="bg-retro-sand p-1.5 retro-border-sm text-retro-sage">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-grotesk font-black text-xs md:text-sm text-retro-charcoal uppercase leading-none">Premium Quality</h4>
                <span className="text-[10px] md:text-xs text-retro-charcoal/70">HD Digital + Offset</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Retro Graphic Poster / Showcase */}
        <div className="lg:col-span-5 flex justify-center items-center z-10">
          <div className="relative w-full max-w-sm bg-retro-card retro-border p-6 md:p-8 retro-shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
            {/* Corner Badge */}
            <div className="absolute -top-5 -right-5 bg-retro-terracotta text-[#FAF7F2] font-syne font-extrabold text-xs md:text-sm px-4 py-2 rotate-12 retro-border shadow-retro-sm">
              SUPER DEAL!
            </div>

            {/* Poster Header */}
            <div className="text-center border-b-2 border-dashed border-retro-charcoal/50 pb-4 mb-4">
              <span className="font-grotesk font-black text-xs text-retro-terracotta uppercase tracking-widest">PATNA PRINTING WORKS</span>
              <h3 className="font-serif font-black text-2xl md:text-3xl text-retro-charcoal mt-1">Wedding Cards</h3>
              <p className="font-grotesk font-bold text-xs text-retro-charcoal/70 mt-1">Starts at just ₹10 per card</p>
            </div>

            {/* Service Details List inside Card */}
            <div className="space-y-3 font-grotesk text-sm text-retro-charcoal/90 mb-6">
              <div className="flex justify-between items-center bg-retro-cream p-2 retro-border-sm shadow-retro-sm">
                <span>⚡ Premium Glossy Visiting Cards</span>
                <span className="font-bold text-retro-terracotta">₹150 / 100pcs</span>
              </div>
              <div className="flex justify-between items-center bg-retro-cream p-2 retro-border-sm shadow-retro-sm">
                <span>🚩 HD Outdoor Flex Banners</span>
                <span className="font-bold text-retro-terracotta">₹15 / sq.ft</span>
              </div>
              <div className="flex justify-between items-center bg-retro-cream p-2 retro-border-sm shadow-retro-sm">
                <span>📢 High-Impact Handbills (Flyers)</span>
                <span className="font-bold text-retro-terracotta">₹0.60 / pc</span>
              </div>
              <div className="flex justify-between items-center bg-retro-cream p-2 retro-border-sm shadow-retro-sm">
                <span>🏷️ Custom Vinyl Die-Cut Stickers</span>
                <span className="font-bold text-retro-terracotta">₹2 / pc</span>
              </div>
            </div>

            {/* Action inside poster */}
            <a 
              href="#calculator" 
              className="w-full bg-retro-mustard hover:bg-retro-mustard/90 text-retro-charcoal text-center font-grotesk font-extrabold py-3 border-2 border-retro-charcoal shadow-retro-sm block transition-all"
            >
              Calculate Your Estimate
            </a>

            <div className="text-center mt-4">
              <span className="text-[10px] font-mono text-retro-charcoal/60 uppercase">★ FAST SHIPPING ACROSS BIHAR ★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
