import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'wedding-card',
      title: 'Wedding Card Printing',
      description: 'Elegant custom marriage cards with luxury finishes, textured cards, and modern laser-cut envelopes.',
      accent: 'bg-retro-peach',
      features: ['Textured Cardstocks', 'Gold Foil & Embossing', 'Laser Cut Designs', 'Box-style Invitations'],
      minOrder: '100 Cards',
      renderIllustration: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-peach" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Card background / folder foldout */}
          <path d="M15 20h30v60H15z" />
          <path d="M45 20h40l-10 10v50H45z" />
          {/* Heart symbol in middle */}
          <path d="M40 45c-2-2-5-2-7 0s-2 5 0 7l7 7 7-7c2-2 2-5 0-7s-5-2-7 0z" fill="#D35230" />
          {/* Invitation lines */}
          <path d="M22 35h16M22 45h8M55 40h20M55 50h15" />
          {/* Decorative stars */}
          <path d="M72 25l2 2-2 2 2-2z" fill="#EAAA28" />
        </svg>
      )
    },
    {
      id: 'flex-banner',
      title: 'Flex Banner Printing',
      description: 'Durable, vibrant, weather-resistant outdoor flex banners for shops, events, political campaigns, and birthdays.',
      accent: 'bg-retro-teal',
      features: ['Standard & Star Flex', 'Glossy & Matte Finishes', 'Metal Eyelets / Grommets', 'High Resolution Solvent Print'],
      minOrder: '20 Sq. Ft.',
      renderIllustration: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-teal" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Banner body */}
          <rect x="10" y="25" width="80" height="40" rx="2" />
          {/* Banner stand poles */}
          <path d="M15 65v20M85 65v20M15 25V15M85 25V15" />
          {/* Ropes from poles to corners */}
          <path d="M5 15l10 10M95 15L85 25M5 85l10-20M95 85L85 65" />
          {/* Eyelets */}
          <circle cx="15" cy="30" r="2" fill="#FAF7F2" />
          <circle cx="85" cy="30" r="2" fill="#FAF7F2" />
          <circle cx="15" cy="60" r="2" fill="#FAF7F2" />
          <circle cx="85" cy="60" r="2" fill="#FAF7F2" />
          {/* Big star graphic inside */}
          <path d="M50 35l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#EAAA28" />
        </svg>
      )
    },
    {
      id: 'rollup-standee',
      title: 'Rollup Standee',
      description: 'Highly portable exhibition banners mounted on premium aluminum spring-loaded rollup bases.',
      accent: 'bg-retro-sand',
      features: ['Premium Matte Vinyl Print', 'Sturdy Aluminum Base', 'Carry Bag Included', 'Easy 1-Min Assembly'],
      minOrder: '1 Standee',
      renderIllustration: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-sand" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Stand base */}
          <rect x="35" y="80" width="30" height="6" rx="1" />
          {/* Stand support feet */}
          <path d="M40 86l-6 4M60 86l6 4" />
          {/* Pull up banner canvas */}
          <rect x="38" y="15" width="24" height="65" />
          {/* Support rod in back */}
          <path d="M50 15V80" strokeDasharray="3 3" />
          {/* Top bar */}
          <rect x="36" y="10" width="28" height="5" />
          {/* Graphic layers on standee */}
          <path d="M42 25h16M42 35l5 5 5-5M42 55h10" />
          <circle cx="54" cy="54" r="3" fill="#D35230" />
        </svg>
      )
    },
    {
      id: 'handbill',
      title: 'Handbill / Flyer Printing',
      description: 'High-speed mass advertising flyers for newspaper inserts, local distribution, and store launches.',
      accent: 'bg-retro-mustard',
      features: ['Maplitho & Glossy Paper', 'Single / Multi-color Offset', 'A4, A5, & A6 Standard Sizes', 'Cost-effective Bulk Packs'],
      minOrder: '1,000 Pcs',
      renderIllustration: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-mustard" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Back sheet */}
          <path d="M25 15h35l12 12v50H25z" fill="#EADFC9" />
          {/* Front overlapping sheet */}
          <path d="M15 25h35l12 12v50H15z" />
          {/* Text lines */}
          <path d="M23 45h20M23 55h28M23 65h12" />
          {/* Flyer header / sale burst */}
          <path d="M52 48l2-4 4 1-1-4 3-2-4-1 1-4-4 2-2-3-1 4-4-1 2 4-3 2 4 1-1 4z" fill="#D35230" />
        </svg>
      )
    },
    {
      id: 'visiting-card',
      title: 'Visiting Cards',
      description: 'Premium business cards that command respect. Glossy, matte, velvet laminated, and spot UV finishes.',
      accent: 'bg-retro-peach',
      features: ['350GSM Card Stock', 'Matte/Gloss Lamination', 'Rounded Corner Cut', 'Premium Spot UV / Gold Foil'],
      minOrder: '100 Pcs',
      renderIllustration: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-peach" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Card base */}
          <rect x="10" y="25" width="80" height="50" rx="3" />
          {/* Profile picture circle placeholder */}
          <circle cx="28" cy="50" r="8" fill="#5F7A61" />
          {/* Text lines */}
          <path d="M45 40h35M45 50h25M45 60h15" />
          <rect x="75" y="32" width="6" height="6" fill="#D35230" />
        </svg>
      )
    },
    {
      id: 'poster',
      title: 'Poster Printing',
      description: 'High-definition digital posters for bedroom walls, office motivation, events, and commercial advertisements.',
      accent: 'bg-retro-teal',
      features: ['12x18 inch, A3, A2, A1 Sizes', '220GSM Matte/Photo Paper', 'Fade-Resistant Pigment Ink', 'Self-Adhesive Option'],
      minOrder: '5 Pcs',
      renderIllustration: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-teal" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Poster Frame border */}
          <rect x="22" y="15" width="56" height="70" />
          {/* Poster Inner artwork */}
          <rect x="28" y="21" width="44" height="58" fill="#FDFBF7" />
          <circle cx="50" cy="40" r="10" fill="#EAAA28" />
          <path d="M32 65l10-10 8 8 14-14 8 8V75H32z" fill="#D35230" />
        </svg>
      )
    },
    {
      id: 'sticker',
      title: 'Stickers & Labels',
      description: 'Custom die-cut stickers for branding, jar labeling, packaging seals, product labels, and custom shapes.',
      accent: 'bg-retro-sand',
      features: ['Waterproof Vinyl Option', 'Mirror Coat Chrome Stickers', 'Pre-cut Sheet Labels', 'Die-cut Custom Shapes'],
      minOrder: '100 Pcs',
      renderIllustration: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-sand" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Sticky circle base */}
          <path d="M50 15A35 35 0 0 0 17 65" strokeDasharray="3 3" />
          {/* Circle body with peel effect */}
          <path d="M17 65A35 35 0 0 0 85 50c0-8-6-20-13-25" />
          {/* Peeled part backing flap */}
          <path d="M72 25C62 30 57 42 52 50s20 10 30 0L72 25z" fill="#EAAA28" />
          <text x="28" y="55" fontFamily="Space Grotesk" fontWeight="bold" fontSize="10" stroke="none" fill="#1E1E1E">PPW</text>
          <path d="M38 32l2 2-2 2 2-2z" fill="#D35230" />
        </svg>
      )
    },
    {
      id: 'digital-offset',
      title: 'Offset & Digital Booklets',
      description: 'High-speed digital color print for catalog mockups, combined with heavy-duty offset for bill books & registers.',
      accent: 'bg-retro-mustard',
      features: ['Carbonless Bill Books', 'Brochures & Booklets', 'Receipt & Voucher Pads', 'Multi-page Binding Services'],
      minOrder: '10 Books',
      renderIllustration: () => (
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-mustard" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Printing machine body */}
          <rect x="20" y="42" width="60" height="32" rx="2" />
          {/* Rollers */}
          <circle cx="38" cy="30" r="11" fill="#5F7A61" />
          <circle cx="38" cy="30" r="3" fill="#1E1E1E" />
          <circle cx="62" cy="30" r="11" fill="#EADFC9" />
          <circle cx="62" cy="30" r="3" fill="#1E1E1E" />
          {/* Output paper sheet feeding */}
          <path d="M30 74v12h40V74" />
          <path d="M36 80h28M36 83h16" />
          <path d="M38 15v4M38 41v4M27 30h4M45 30h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative w-full py-16 md:py-24 border-b-3 border-retro-charcoal bg-retro-cream">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 font-sans">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-grotesk font-black text-sm tracking-widest text-retro-terracotta uppercase bg-retro-peach retro-border-sm px-3 py-1 shadow-retro-sm">
            Our Specialties
          </span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-retro-charcoal mt-6">
            WHAT WE DO BEST
          </h2>
          <p className="font-sans text-sm text-retro-charcoal/80 mt-4">
            We deliver high-definition digital prints and heavy-duty industrial offset prints with crisp detailing, rich colors, and sturdy materials.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-retro-cream retro-border p-6 flex flex-col justify-between retro-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-retro-lg transition-all duration-200"
            >
              <div>
                {/* Service Header Info */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[9px] text-retro-charcoal/40 font-black uppercase tracking-wider">
                    SPECIALTY BATCH
                  </span>
                  <span className="font-mono text-[10px] bg-retro-sand px-2 py-0.5 border border-retro-charcoal text-retro-charcoal font-black uppercase shadow-retro-sm">
                    Min: {service.minOrder}
                  </span>
                </div>

                {/* Prominent SVG Illustration Block */}
                <div className="w-full h-32 flex justify-center items-center py-4 mb-6 bg-retro-sand/20 border-2 border-dashed border-retro-charcoal/30 relative overflow-hidden">
                  <div className="absolute inset-0 dot-grid pointer-events-none opacity-20" />
                  <div className="relative z-10 transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-200">
                    {service.renderIllustration()}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="font-syne font-black text-xl text-retro-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-retro-charcoal/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 border-t border-dashed border-retro-charcoal/30 pt-4 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-[11px] font-grotesk font-bold text-retro-charcoal/90">
                      <span className="w-1.5 h-1.5 bg-retro-terracotta rounded-none"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full mt-auto retro-btn bg-retro-sand hover:bg-retro-mustard text-xs text-retro-charcoal py-2.5 px-3 flex justify-center items-center gap-2 shadow-retro-sm hover:shadow-retro-sm"
              >
                <span>Select & Inquire</span>
                <ArrowUpRight className="w-4 h-4 text-retro-terracotta" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
