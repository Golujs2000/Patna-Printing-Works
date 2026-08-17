import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Eye } from 'lucide-react';
import { services } from '../data/siteData';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="relative w-full py-16 md:py-24 border-b border-slate-200 bg-white">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 font-sans">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans font-bold text-xs tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Our Specialty Services
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-slate-900 mt-4 tracking-tight">
            WHAT WE DO BEST
          </h2>
          <p className="font-sans text-sm text-slate-600 mt-3">
            High-definition digital prints and heavy industrial offset printing crafted with precision, vibrant color fidelity, and heavy-duty cardstocks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Service Header Info */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-sans text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    SPECIALTY BATCH
                  </span>
                  <span className="font-sans text-[10px] bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 font-bold uppercase">
                    Min: {service.minOrder}
                  </span>
                </div>

                {/* Service Image */}
                <Link 
                  to={`/services/${service.id}`}
                  className="w-full h-40 mb-5 overflow-hidden rounded-xl border border-slate-200 relative block cursor-pointer group-hover:border-blue-500 transition-colors bg-slate-50"
                >
                  <img
                    src={service.image}
                    alt={`${service.title} | Patna Printing Works Bari Path`}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <span className="bg-white text-blue-600 font-sans font-bold text-xs uppercase px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-blue-600" /> View Landing Page
                    </span>
                  </div>
                </Link>

                {/* Title & Desc */}
                <Link 
                  to={`/services/${service.id}`}
                  className="font-sans font-bold text-lg text-slate-900 mb-2 block text-left hover:text-blue-600 transition-colors"
                >
                  {service.title}
                </Link>
                <p className="font-sans text-xs text-slate-600 mb-5 leading-relaxed text-left">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6 text-left">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-[11px] font-sans font-medium text-slate-700">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Buttons */}
              <div className="space-y-2 mt-auto">
                <Link
                  to={`/services/${service.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-sans font-bold py-2.5 px-3 rounded-xl flex justify-center items-center gap-2 shadow-md transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Landing Page & Specs</span>
                </Link>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-sans font-semibold py-2 px-3 rounded-xl flex justify-center items-center gap-1 border border-slate-200 transition-all cursor-pointer"
                >
                  <span>Quick Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

