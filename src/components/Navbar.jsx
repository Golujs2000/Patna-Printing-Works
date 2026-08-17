import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { businessDetails, services } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (anchorId) => {
    setIsServicesDropdownOpen(false);
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm transition-all">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link 
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 shadow-sm group-hover:scale-105 transition-transform">
            <img
              src="/patna printing logo.jpeg"
              alt="Patna Printing Works Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans font-bold text-lg text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
              {businessDetails.name}
            </span>
            <span className="font-sans font-medium text-[11px] tracking-wider text-emerald-600 uppercase leading-none mt-1">
              Est. {businessDetails.est} • Digital & Offset Hub
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 font-sans font-semibold text-sm text-slate-700">
          
          {/* Services Dropdown Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleAnchorClick('services')}
              className="flex items-center gap-1.5 hover:text-blue-600 py-1 transition-colors group cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform text-slate-500 group-hover:text-blue-600 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 z-50 text-left grid grid-cols-1 gap-1">
                <div className="px-3 py-1.5 font-sans font-bold text-[10px] uppercase text-slate-400 tracking-wider border-b border-slate-100 mb-1">
                  Dedicated Service Landing Pages
                </div>
                {services.map((srv) => (
                  <Link
                    key={srv.id}
                    to={`/services/${srv.id}`}
                    onClick={() => setIsServicesDropdownOpen(false)}
                    className="p-2.5 rounded-xl hover:bg-blue-50 text-slate-800 hover:text-blue-600 transition-all flex items-start gap-2.5 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <div className="font-sans font-bold text-xs leading-tight">
                        {srv.title}
                      </div>
                      <div className="font-sans text-[10px] text-slate-500 mt-0.5 truncate max-w-[220px]">
                        {srv.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => handleAnchorClick('calculator')}
            className="hover:text-blue-600 relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all cursor-pointer"
          >
            Price Calculator
          </button>
          <button 
            onClick={() => handleAnchorClick('process')}
            className="hover:text-blue-600 relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all cursor-pointer"
          >
            Our Process
          </button>
          <button 
            onClick={() => handleAnchorClick('contact')}
            className="hover:text-blue-600 relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all cursor-pointer"
          >
            About & Contact
          </button>
        </div>

        {/* Action Buttons: Phone & WhatsApp */}
        <div className="flex items-center gap-2 font-sans">
          {/* Direct Phone Call Button */}
          <a 
            href={`tel:${businessDetails.phoneDial}`}
            className="flex items-center gap-1.5 font-sans font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-xl border border-slate-200 shadow-sm transition-all"
            title="Call Patna Printing Works"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="hidden sm:inline">{businessDetails.phone}</span>
            <span className="sm:hidden text-[11px]">Call</span>
          </a>

          {/* Direct WhatsApp Button */}
          <a 
            href={businessDetails.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-sans font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 ml-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 shadow-lg text-left max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3 font-sans font-semibold text-sm">
            
            {/* Mobile Services Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <div className="font-sans font-bold text-xs uppercase text-slate-400 mb-2">
                Service Landing Pages
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2">
                {services.map((srv) => (
                  <Link
                    key={srv.id}
                    to={`/services/${srv.id}`}
                    onClick={() => setIsOpen(false)}
                    className="py-1.5 font-sans text-xs text-slate-700 hover:text-blue-600 font-bold flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span>{srv.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <button 
              onClick={() => handleAnchorClick('calculator')}
              className="hover:text-blue-600 py-2 border-b border-slate-100 text-left"
            >
              Price Calculator
            </button>
            <button 
              onClick={() => handleAnchorClick('process')}
              className="hover:text-blue-600 py-2 border-b border-slate-100 text-left"
            >
              Our Process
            </button>
            <button 
              onClick={() => handleAnchorClick('contact')}
              className="hover:text-blue-600 py-2 border-b border-slate-100 text-left"
            >
              About & Contact
            </button>
            
            <div className="flex flex-col gap-2 pt-2">
              <a 
                href={`tel:${businessDetails.phoneDial}`}
                className="flex items-center justify-center gap-2 bg-slate-100 border border-slate-200 py-2.5 rounded-xl text-xs font-bold text-slate-800"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call: {businessDetails.phone}</span>
              </a>
              <a 
                href={businessDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-bold shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp: {businessDetails.phoneAlt}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
