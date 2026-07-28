import React, { useState } from 'react';
import { Phone, Menu, X, MessageSquare, MessageCircle } from 'lucide-react';
import { businessDetails } from '../data/siteData';

export default function Navbar({ onNavigateHome }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Price Calculator', href: '#calculator' },
    { label: 'Our Process', href: '#process' },
    { label: 'About & Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    if (onNavigateHome) {
      onNavigateHome();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-sm transition-all">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={() => handleNavClick('#')} 
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
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans font-semibold text-sm text-slate-700">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => handleNavClick(link.href)}
              className="hover:text-blue-600 relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a 
            href={`tel:${businessDetails.phoneDial}`}
            className="flex items-center gap-2 font-sans font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl border border-slate-200 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{businessDetails.phone}</span>
          </a>
          <a 
            href="#inquiry"
            className="flex items-center gap-2 font-sans font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Quick Inquiry</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 shadow-lg text-left">
          <div className="flex flex-col gap-3 font-sans font-semibold text-sm">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => { setIsOpen(false); handleNavClick(link.href); }}
                className="hover:text-blue-600 py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a 
                href={`tel:${businessDetails.phoneDial}`}
                className="flex items-center justify-center gap-2 bg-slate-100 border border-slate-200 py-2.5 rounded-xl text-xs font-bold text-slate-700"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call: {businessDetails.phone}</span>
              </a>
              <a 
                href={businessDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl text-center text-xs font-bold shadow-md block"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

