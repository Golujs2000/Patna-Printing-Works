import React, { useState } from 'react';
import { Phone, Menu, X, MessageSquare } from 'lucide-react';
import { businessDetails } from '../data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Price Calculator', href: '#calculator' },
    { label: 'Our Process', href: '#process' },
    { label: 'About & Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-retro-cream border-b-3 border-retro-charcoal px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="retro-border-sm overflow-hidden shadow-[2px_2px_0px_0px_#1E1E1E] group-hover:translate-y-[-2px] group-hover:shadow-[4px_4px_0px_0px_#1E1E1E] transition-all" style={{width: '44px', height: '44px'}}>
            <img
              src="/patna printing logo.jpeg"
              alt="Patna Printing Works Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-syne font-extrabold text-lg md:text-xl tracking-tight text-retro-charcoal uppercase leading-none">
              {businessDetails.name}
            </span>
            <span className="font-grotesk font-medium text-xs tracking-wider text-retro-terracotta uppercase leading-none mt-1">
              Est. {businessDetails.est}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-grotesk font-bold text-retro-charcoal">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="hover:text-retro-terracotta relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-retro-terracotta hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href={`tel:${businessDetails.phoneDial}`}
            className="flex items-center gap-2 font-grotesk font-bold text-sm bg-retro-card retro-border-sm px-4 py-2 hover:bg-retro-sand transition-all text-retro-charcoal"
          >
            <Phone className="w-4 h-4 text-retro-terracotta" />
            <span>{businessDetails.phone}</span>
          </a>
          <a 
            href="#inquiry"
            className="retro-btn bg-retro-mustard text-sm py-2 px-4 text-retro-charcoal shadow-[2px_2px_0px_0px_#1E1E1E] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#1E1E1E]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Quick Inquiry</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 retro-border-sm bg-retro-card text-retro-charcoal shadow-[2px_2px_0px_0px_#1E1E1E]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-retro-card border-2 border-retro-charcoal p-4 rounded-none shadow-retro font-grotesk font-bold">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-retro-terracotta block py-2 border-b border-retro-charcoal/20"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href={`tel:${businessDetails.phoneDial}`}
                className="flex items-center justify-center gap-2 bg-retro-cream border-2 border-retro-charcoal py-2 px-4 text-center text-sm"
              >
                <Phone className="w-4 h-4 text-retro-terracotta" />
                <span>Call: {businessDetails.phone}</span>
              </a>
              <a 
                href="#inquiry"
                onClick={() => setIsOpen(false)}
                className="bg-retro-mustard border-2 border-retro-charcoal py-2 px-4 text-center text-sm shadow-[2px_2px_0px_0px_#1E1E1E] text-retro-charcoal block"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
