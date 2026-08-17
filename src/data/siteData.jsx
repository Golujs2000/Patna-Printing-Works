import React from 'react';
import { 
  Settings, 
  MessageSquare, 
  ClipboardCheck, 
  CheckSquare, 
  Zap, 
  Award, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Clock, 
  Landmark, 
  Navigation 
} from 'lucide-react';

export const businessDetails = {
  name: 'Patna Printing Works',
  shortName: 'Patna Printing',
  subName: 'Works • Est. 2024',
  est: '2024',
  address: 'Bari Path, beside Card Mahal, near Patna Collegiate School, Dariyapur Gola, Dujra Diara, Patna, Bihar 800004',
  addressShort: 'Bari Path, beside Card Mahal, near Patna Collegiate School, Dariyapur, Patna, Bihar',
  landmarks: '📍 Directly beside Card Mahal, and just a short walk from Patna Collegiate School. Located inside the vibrant printing market hub of Dariyapur Gola on Bari Path.',
  phone: '094722 49802',
  phoneAlt: '+91 94722 49802',
  phoneDial: '+919472249802',
  whatsappNumber: '919472249802',
  whatsappLink: 'https://wa.me/919472249802?text=Hello%20Patna%20Printing%20Works!%20I%20would%20like%20to%20inquire%20about%20printing%20services.',
  instagramUsername: 'patna_printing_works',
  instagramUrl: 'https://www.instagram.com/patna_printing_works/',
  googleMapsUrl: 'https://maps.google.com/?q=Patna+Printing+Works+Bari+Path+Patna',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.4833767476553!2d85.15670329999999!3d25.615354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590029addc37%3A0x9c5e79421008b9d9!2sPatna%20Printing%20Works!5e1!3m2!1sen!2sin!4v1779645238466!5m2!1sen!2sin',
  hours: 'Monday – Saturday: 08:00 AM – 09:00 PM\nSunday: Closed',
  hoursLines: {
    weekdays: 'Monday – Saturday: 08:00 AM – 09:00 PM',
    sunday: 'Sunday: Closed'
  },
  mission: 'We aim to provide local shops, businesses, event coordinators, and families in Patna with high-speed digital printing & heavy-duty offset services at affordable wholesale prices.',
  factoryPricingTagline: '★ NO MIDDLEMEN • DIRECT FROM FACTORY PRICING ★'
};

export const heroContent = {
  tickerItems: [
    '🩺 Custom Doctor File & Medical Case Folder Printing',
    '🔥 Wedding Card Printing Specialists',
    '⚡ High Quality Flex Banners',
    '💎 Premium Visiting Cards & Flyers',
    '📦 Bulk Printing Discounts Available',
    '📍 Beside Card Mahal, Bari Path, Patna'
  ],
  badge: "Patna's Premium Custom Print Shop",
  title: {
    prefix: 'WE PRINT',
    highlight: 'YOUR IDEAS',
    suffix: 'ON PAPER & FLEX.'
  },
  description: 'From luxury Wedding Invitation Cards and Doctor Case File Folders to vibrant Flex Banners, Rollup Standees, Welcome Boards, and wholesale Visiting Cards — Patna Printing Works delivers state-of-the-art digital printing across Bihar & Jharkhand, right from the heart of Bari Path, Dariyapur.',
  features: [
    { title: 'Fast Turnaround', desc: 'Ready in 24-48 Hours', icon: Zap },
    { title: 'Wholesale Prices', desc: 'Bulk Printing Discounts', icon: Award },
    { title: 'Premium Quality', desc: 'HD Digital + Offset', icon: ShieldCheck }
  ],
  dealsCard: {
    badge: 'SUPER DEAL!',
    header: 'DIGITAL PRINTING',
    title: 'Invitation Cards',
    subtitle: 'Birthday • Wedding • Grih Pravesh',
    list: [
      { label: '🎉 Invitation Cards (B\'day / Wedding / GP)', price: '₹300 / 50 pcs' },
      { label: '🩺 Doctor Case File / Prescription Folders', price: '₹1,200 / 100 pcs' },
      { label: '🪧 Welcome Board (incl. Wooden Stand)', price: '₹1,800 / pc' },
      { label: '🖼️ Rollup Standee (6ft × 3ft)', price: '₹1,200 / pc' },
      { label: '🗓️ Promo Table', price: '₹2,800 / pc' }
    ],
    actionLabel: 'Calculate Your Estimate',
    footer: '★ FREE DELIVERY ACROSS BIHAR & JHARKHAND ★'
  }
};

export const services = [
  {
    id: 'doctor-file',
    title: 'Doctor File Printing in Patna',
    description: 'Custom medical prescription folders, patient case file folders, and hospital report covers with single/double inner pockets printed in Bari Path, Patna.',
    accent: 'bg-retro-peach',
    features: ['300 / 350 GSM Art Cardstock', 'Single & Double Inner Pockets', 'Gloss / Velvet Matte Lamination', 'PMCH / Clinic History Field Tables'],
    minOrder: '100 Folders',
    image: '/service_doctor_file.webp',
    renderIllustration: () => (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-peach" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="18" y="15" width="64" height="70" rx="3" />
        <path d="M18 55h64" strokeDasharray="3 3" />
        <path d="M50 25v20M40 35h20" stroke="#D35230" strokeWidth="4" strokeLinecap="square" />
        <path d="M28 65h44M28 73h28" />
      </svg>
    )
  },
  {
    id: 'wedding-card',
    title: 'Wedding Card Printing in Patna',
    description: 'Luxury Shaadi Cards & invitation printing at Bari Path Patna — textured papers, metallic gold/silver foil, laser-cut gates, and printed envelopes.',
    accent: 'bg-retro-peach',
    features: ['500+ Bihari Shaadi Card Designs', 'Real Golden & Silver Sheet Foiling', 'Laser Cut Gates & Luxury Envelopes', 'Hindi, English & Sanskrit Printing'],
    minOrder: '50 Cards',
    image: '/service_invitation_cards.webp',
    renderIllustration: () => (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-peach" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 20h30v60H15z" />
        <path d="M45 20h40l-10 10v50H45z" />
        <path d="M40 45c-2-2-5-2-7 0s-2 5 0 7l7 7 7-7c2-2 2-5 0-7s-5-2-7 0z" fill="#D35230" />
        <path d="M22 35h16M22 45h8M55 40h20M55 50h15" />
        <path d="M72 25l2 2-2 2 2-2z" fill="#EAAA28" />
      </svg>
    )
  },
  {
    id: 'flex-banner',
    title: 'Flex Banner Printing in Patna',
    description: 'Weatherproof outdoor flex banners, shop signboards, Star Flex, and backlit glow boards printed at Bari Path Patna with nickel eyelets.',
    accent: 'bg-retro-teal',
    features: ['Glossy & Heavy Star Flex (440GSM)', 'Rain & UV Proof Outdoor Solvent Print', 'Reinforced Edges & Metal Grommets', 'Same-Day Express Dispatch Patna'],
    minOrder: '20 Sq. Ft.',
    image: '/service_flex_banner.webp',
    renderIllustration: () => (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-teal" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="25" width="80" height="40" rx="2" />
        <path d="M15 65v20M85 65v20M15 25V15M85 25V15" />
        <path d="M5 15l10 10M95 15L85 25M5 85l10-20M95 85L85 65" />
        <circle cx="15" cy="30" r="2" fill="#FAF7F2" />
        <circle cx="85" cy="30" r="2" fill="#FAF7F2" />
        <circle cx="15" cy="60" r="2" fill="#FAF7F2" />
        <circle cx="85" cy="60" r="2" fill="#FAF7F2" />
        <path d="M50 35l4 9 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="#EAAA28" />
      </svg>
    )
  },
  {
    id: 'rollup-standee',
    title: 'Rollup Standee Printing in Patna',
    subtitle: 'Portable Self-Standing Exhibition Banners',
    description: 'Portable 6x3 ft aluminum base rollup standees for trade shows, clinics, showrooms, and coaching institutes in Patna.',
    accent: 'bg-retro-sand',
    features: ['Non-Curl HD Matte Photo Media', 'Sturdy Aluminum Retractable Base', 'Padded Nylon Carry Bag Included', '1-Min Quick Assembly'],
    minOrder: '1 Standee',
    image: '/service_rollup_standee.webp',
    renderIllustration: () => (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-sand" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="35" y="80" width="30" height="6" rx="1" />
        <path d="M40 86l-6 4M60 86l6 4" />
        <rect x="38" y="15" width="24" height="65" />
        <path d="M50 15V80" strokeDasharray="3 3" />
        <rect x="36" y="10" width="28" height="5" />
        <path d="M42 25h16M42 35l5 5 5-5M42 55h10" />
        <circle cx="54" cy="54" r="3" fill="#D35230" />
      </svg>
    )
  },
  {
    id: 'handbill',
    title: 'Handbill & Pamphlet Printing in Patna',
    description: 'High-volume advertising pamphlets for newspaper insertion, store launches, and coaching center admissions across Patna & Bihar.',
    accent: 'bg-retro-mustard',
    features: ['Maplitho & Glossy Art Paper', 'Single / Multi-Color Offset Press', 'Newspaper Insert Standard Sizes', 'Wholesale Bulk Rates Patna'],
    minOrder: '1,000 Pcs',
    image: '/service_handbills.webp',
    renderIllustration: () => (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-mustard" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 15h35l12 12v50H25z" fill="#EADFC9" />
        <path d="M15 25h35l12 12v50H15z" />
        <path d="M23 45h20M23 55h28M23 65h12" />
        <path d="M52 48l2-4 4 1-1-4 3-2-4-1 1-4-4 2-2-3-1 4-4-1 2 4-3 2 4 1-1 4z" fill="#D35230" />
      </svg>
    )
  },
  {
    id: 'visiting-card',
    title: 'Visiting Card Printing in Patna',
    description: 'Premium business cards that command respect — 300GSM matte, glossy, velvet touch, rounded corners, and 3D Spot UV in Bari Path Patna.',
    accent: 'bg-retro-peach',
    features: ['300 / 350 GSM Imported Art Board', 'Matte, Gloss & Velvet Lamination', 'Die-Cut Round Corner Finishing', 'Executive 3D Spot UV & Gold Foil'],
    minOrder: '100 Pcs',
    image: '/service_visiting_cards.webp',
    renderIllustration: () => (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-peach" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="25" width="80" height="50" rx="3" />
        <circle cx="28" cy="50" r="8" fill="#5F7A61" />
        <path d="M45 40h35M45 50h25M45 60h15" />
        <rect x="75" y="32" width="6" height="6" fill="#D35230" />
      </svg>
    )
  },
  {
    id: 'poster',
    title: 'HD Poster Printing in Patna',
    description: 'Vibrant digital photo posters for office decor, coaching toppers, and event promotions in A3 (12x18"), A2, and A1 sizes at Bari Path Patna.',
    accent: 'bg-retro-teal',
    features: ['220 GSM High-Gloss Photo Paper', 'Wide Format HD Pigment Ink', 'Self-Adhesive Vinyl Poster Option', 'Fast 24-Hr Turnaround Patna'],
    minOrder: '5 Pcs',
    image: '/service_posters.webp',
    renderIllustration: () => (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-teal" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="22" y="15" width="56" height="70" />
        <rect x="28" y="21" width="44" height="58" fill="#FDFBF7" />
        <circle cx="50" cy="40" r="10" fill="#EAAA28" />
        <path d="M32 65l10-10 8 8 14-14 8 8V75H32z" fill="#D35230" />
      </svg>
    )
  },
  {
    id: 'sticker',
    title: 'Custom Sticker & Label Printing in Patna',
    description: 'Custom die-cut waterproof vinyl stickers, product labels, food jar seals, and chrome stickers printed at Bari Path Patna.',
    accent: 'bg-retro-sand',
    features: ['100% Waterproof & Tearproof Vinyl', 'Custom Die-Cut & Kiss-Cut Shapes', 'Strong Adhesive Backing Jars & Boxes', 'Clear & Metallic Mirror Chrome'],
    minOrder: '100 Pcs',
    image: '/service_stickers.webp',
    renderIllustration: () => (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-sand" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 15A35 35 0 0 0 17 65" strokeDasharray="3 3" />
        <path d="M17 65A35 35 0 0 0 85 50c0-8-6-20-13-25" />
        <path d="M72 25C62 30 57 42 52 50s20 10 30 0L72 25z" fill="#EAAA28" />
        <text x="28" y="55" fontFamily="Outfit" fontWeight="bold" fontSize="10" stroke="none" fill="#1E1E1E">PPW</text>
        <path d="M38 32l2 2-2 2 2-2z" fill="#D35230" />
      </svg>
    )
  },
  {
    id: 'digital-offset',
    title: 'Bulk Offset Printing Press in Patna',
    description: 'Industrial heavy offset printing for GST bill books, carbonless NCR receipt pads, brochures, catalogs, and booklets in Bari Path Patna.',
    accent: 'bg-retro-mustard',
    features: ['Carbonless NCR Duplicate/Triplicate', 'Sequential Numbering & Perforation', 'Multi-page Booklets & Catalogs', 'Direct Factory Wholesale Rates'],
    minOrder: '10 Books',
    image: '/service_offset_bulk.webp',
    renderIllustration: () => (
      <svg viewBox="0 0 100 100" className="w-24 h-24 text-retro-charcoal stroke-current fill-retro-mustard" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="20" y="42" width="60" height="32" rx="2" />
        <circle cx="38" cy="30" r="11" fill="#5F7A61" />
        <circle cx="38" cy="30" r="3" fill="#1E1E1E" />
        <circle cx="62" cy="30" r="11" fill="#EADFC9" />
        <circle cx="62" cy="30" r="3" fill="#1E1E1E" />
        <path d="M30 74v12h40V74" />
        <path d="M36 80h28M36 83h16" />
        <path d="M38 15v4M38 41v4M27 30h4M45 30h4" />
      </svg>
    )
  }
];

export const calculatorConfig = {
  SERVICE_CONFIGS: {
    'doctor-file': {
      name: 'Doctor File / Case Folder',
      options: [
        { id: 'standard-300gsm', name: 'Standard 300GSM (Single Pocket)', price: 12 },
        { id: 'premium-laminated', name: 'Premium Laminated 350GSM (Single Pocket)', price: 16 },
        { id: 'double-pocket-uv', name: 'Elite 350GSM Double Pocket + Spot UV', price: 22 }
      ],
      minQty: 100,
      maxQty: 5000,
      defaultQty: 500,
      qtyLabel: 'Folders'
    },
    'invitation-cards': {
      name: 'Invitation Card Printing',
      options: [
        { id: 'standard', name: 'Standard Textured Card Stock', price: 6 },
        { id: 'golden-sheet', name: 'Golden Sheet Invitation', price: 9 },
        { id: 'silver-sheet', name: 'Silver Sheet Invitation', price: 9 },
        { id: 'fancy-laser', name: 'Fancy / Laser Cut Card', price: 15 }
      ],
      minQty: 50,
      maxQty: 2000,
      defaultQty: 100,
      qtyLabel: 'Cards'
    },
    'flex-banner': {
      name: 'Flex Banner (by Sq. Ft.)',
      options: [
        { id: 'standard-flex', name: 'Standard Glossy Flex', price: 15 },
        { id: 'star-flex', name: 'Star Heavy Flex (Premium)', price: 25 },
        { id: 'backlit-flex', name: 'Backlit Glow Flex', price: 45 }
      ],
      hasDimensions: true,
      minQty: 1,
      maxQty: 10,
      defaultQty: 1,
      qtyLabel: 'Banners'
    },
    'rollup-standee': {
      name: 'Rollup Standee (6ft × 3ft)',
      options: [
        { id: 'standard-rollup', name: 'Standard Matte Print (6×3 ft)', price: 1200 },
        { id: 'premium-rollup', name: 'Premium Matte Print (6×3 ft)', price: 1500 }
      ],
      minQty: 1,
      maxQty: 50,
      defaultQty: 1,
      qtyLabel: 'Standees'
    },
    'visiting-cards': {
      name: 'Visiting / Business Cards',
      options: [
        { id: 'glossy', name: 'Standard Glossy Laminated (300GSM)', price: 1.5 },
        { id: 'matte', name: 'Premium Matte Laminated (300GSM)', price: 2.2 },
        { id: 'spot-uv', name: 'Elite Spot UV & Velvet', price: 4.5 }
      ],
      minQty: 100,
      maxQty: 5000,
      defaultQty: 500,
      qtyLabel: 'Cards'
    },
    'handbills': {
      name: 'Handbills & Pamphlets',
      options: [
        { id: 'single-color', name: 'Single-Color Maplitho (Eco)', price: 0.6 },
        { id: 'multi-80gsm', name: 'Multicolor 80GSM Art Paper', price: 1.2 },
        { id: 'glossy-130gsm', name: 'Heavy-duty 130GSM Glossy', price: 2.0 }
      ],
      minQty: 1000,
      maxQty: 10000,
      defaultQty: 2000,
      qtyLabel: 'Sheets'
    },
    'posters': {
      name: 'High-Resolution Posters',
      options: [
        { id: 'a3-standard', name: 'A3 Size (12x18 inch) Poster', price: 20 },
        { id: 'a2-premium', name: 'A2 Size Premium Poster', price: 60 },
        { id: 'a1-jumbo', name: 'A1 Size Matte Poster', price: 120 }
      ],
      minQty: 5,
      maxQty: 500,
      defaultQty: 50,
      qtyLabel: 'Posters'
    },
    'stickers': {
      name: 'Stickers & Labels',
      options: [
        { id: 'paper-label', name: 'Standard Paper Sticker', price: 2.0 },
        { id: 'vinyl-waterproof', name: 'Waterproof Vinyl Decal', price: 5.0 },
        { id: 'die-cut-vinyl', name: 'Premium Die-Cut Vinyl', price: 8.0 }
      ],
      minQty: 100,
      maxQty: 10000,
      defaultQty: 500,
      qtyLabel: 'Stickers'
    },
    'offset-bulk': {
      name: 'Offset Printing for Bulk',
      options: [
        { id: 'bill-books', name: 'Carbonless Bill Books / Receipt Pads', price: 40 },
        { id: 'brochures', name: 'Brochures & Booklets', price: 25 },
        { id: 'handbill-bulk', name: 'Handbill Bulk Offset Print', price: 0.6 },
        { id: 'calendar', name: 'Calendar Printing', price: 80 }
      ],
      minQty: 10,
      maxQty: 1000,
      defaultQty: 50,
      qtyLabel: 'Pcs'
    }
  }
};

export const processSteps = [
  {
    number: '01',
    title: 'Choose & Estimate',
    description: 'Select your printing service and use the calculator to get a price estimate.',
    icon: Settings,
    bgColor: 'bg-retro-peach',
  },
  {
    number: '02',
    title: 'WhatsApp Consult',
    description: 'Submit your requirements. We discuss custom paper types, GSM weight, and design proofs.',
    icon: MessageSquare,
    bgColor: 'bg-retro-teal',
  },
  {
    number: '03',
    title: 'Approve Design',
    description: 'Our design specialists check details and send you a digital preview for confirmation.',
    icon: ClipboardCheck,
    bgColor: 'bg-retro-sand',
  },
  {
    number: '04',
    title: 'Print & Deliver',
    description: 'We run your job on digital/offset presses and ship across Patna & wider Bihar.',
    icon: CheckSquare,
    bgColor: 'bg-retro-mustard',
  }
];

export const servicesListSimple = [
  'Doctor File / Prescription Folder',
  'Wedding Card Printing',
  'Flex Banner Printing',
  'Rollup Standee',
  'Handbill / Flyer Printing',
  'Visiting Cards',
  'Poster Printing',
  'Stickers & Labels',
  'Offset Printing for Bulk',
  'Other Custom Prints'
];
