import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';
import { heroContent } from '../data/siteData';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 border-b border-slate-200 py-16 md:py-24">
      {/* Subtle modern dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Ticker / Marquee Banner */}
      <div className="w-full bg-slate-900 text-white overflow-hidden py-2.5 font-sans font-semibold text-xs md:text-sm tracking-wide uppercase select-none">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap">
          {heroContent.tickerItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="mx-4 flex items-center gap-2 text-emerald-400 font-bold">{item}</span>
              <span className="mx-2 text-slate-600">•</span>
            </React.Fragment>
          ))}
          {heroContent.tickerItems.map((item, index) => (
            <React.Fragment key={`dup-${index}`}>
              <span className="mx-4 flex items-center gap-2 text-emerald-400 font-bold">{item}</span>
              <span className="mx-2 text-slate-600">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Tech Hero Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span className="font-sans font-bold text-xs text-blue-700 uppercase tracking-wider">
              {heroContent.badge}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl leading-[1.08] text-slate-900 tracking-tight mb-6">
            WE PRINT <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent">
              YOUR BIG IDEAS
            </span> <br />
            ON PAPER & FLEX.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base md:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed">
            {heroContent.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#inquiry"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a 
              href="#calculator"
              className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-sans font-bold text-base px-8 py-3.5 rounded-xl border border-slate-300 shadow-sm transition-all"
            >
              <span>Instant Price Calculator</span>
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </a>
          </div>

          {/* Feature Pills */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12 pt-8 border-t border-slate-200 w-full">
            {heroContent.features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs md:text-sm text-slate-900 leading-none">{feat.title}</h4>
                    <span className="text-[11px] text-slate-500">{feat.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Modern Tech Showcase Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xl">
            {/* Corner Badge */}
            <div className="absolute -top-4 -right-4 bg-emerald-600 text-white font-sans font-bold text-xs px-4 py-1.5 rounded-full shadow-md">
              {heroContent.dealsCard.badge}
            </div>

            {/* Poster Header */}
            <div className="text-left border-b border-slate-100 pb-4 mb-6">
              <span className="font-sans font-bold text-xs text-blue-600 uppercase tracking-wider block">
                {heroContent.dealsCard.header}
              </span>
              <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900 mt-1">
                {heroContent.dealsCard.title}
              </h3>
              <p className="font-sans text-xs text-slate-500 mt-1">
                {heroContent.dealsCard.subtitle}
              </p>
            </div>

            {/* Price Deals List */}
            <div className="space-y-3 font-sans text-xs text-slate-700 mb-6">
              {heroContent.dealsCard.list.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="font-medium text-slate-800">{item.label}</span>
                  <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Action */}
            <a 
              href="#calculator" 
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center font-sans font-bold text-sm py-3 rounded-xl shadow-md block transition-all"
            >
              {heroContent.dealsCard.actionLabel}
            </a>

            <div className="text-center mt-4">
              <span className="text-[11px] font-sans font-semibold text-slate-400 uppercase">
                {heroContent.dealsCard.footer}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

