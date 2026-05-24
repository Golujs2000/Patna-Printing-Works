import React, { useState, useEffect } from 'react';
import { Send, FileCheck, HelpCircle } from 'lucide-react';

export default function InquiryForm({ prefilledService, prefilledDetails }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Wedding Card Printing',
    quantity: '',
    specs: '',
  });

  const [errors, setErrors] = useState({});

  // Sync pre-filled data when they click from Services or Calculator
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        service: prefilledService,
        specs: prefilledDetails || prev.specs,
      }));
    }
  }, [prefilledService, prefilledDetails]);

  const servicesList = [
    'Wedding Card Printing',
    'Flex Banner Printing',
    'Rollup Standee',
    'Handbill / Flyer Printing',
    'Visiting Cards',
    'Poster Printing',
    'Stickers & Labels',
    'Offset & Digital Booklets',
    'Other Custom Prints'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please tell us your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.quantity.trim()) newErrors.quantity = 'Minimum quantity is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');

    // Format the WhatsApp text nicely
    const message = `Hello Patna Printing Works! I want to submit a print inquiry:
- *Name*: ${formData.name.trim()}
- *Contact Phone*: ${cleanPhone}
- *Service Type*: ${formData.service}
- *Estimated Quantity*: ${formData.quantity.trim()}
${formData.specs.trim() ? `- *Specifications*: ${formData.specs.trim()}` : ''}

Please verify the details and reply with a quote.`;

    const whatsappUrl = `https://wa.me/919472249802?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inquiry" className="relative w-full py-16 md:py-24 border-b-3 border-retro-charcoal bg-retro-cream">
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="font-grotesk font-black text-sm tracking-widest text-[#FAF7F2] bg-retro-terracotta retro-border-sm px-3 py-1 shadow-retro-sm">
            Place Order / Inquire
          </span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-retro-charcoal mt-6">
            WHATSAPP INQUIRY
          </h2>
          <p className="font-sans text-sm text-retro-charcoal/80 mt-2">
            No registration needed! Fill out this form and tap submit to send a structured inquiry directly to our WhatsApp chat.
          </p>
        </div>

        {/* Neo-brutalist Invoice-Style Form Card */}
        <div className="bg-retro-card retro-border p-6 md:p-10 retro-shadow-lg max-w-2xl mx-auto relative overflow-hidden">
          
          {/* Header Banner inside card */}
          <div className="border-b-3 border-retro-charcoal pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-syne font-black text-2xl text-retro-charcoal uppercase leading-none">ORDER VOUCHER</h3>
              <p className="font-mono text-[10px] text-retro-charcoal/60 mt-1 uppercase">PATNA PRINTING WORKS • BARI PATH, PATNA</p>
            </div>
            <div className="bg-retro-cream retro-border-sm px-3 py-1.5 font-mono text-xs font-bold text-retro-terracotta shadow-retro-sm">
              NO: PPW-{new Date().getFullYear()}-{Math.floor(1000 + Math.random() * 9000)}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Full Name */}
            <div>
              <label htmlFor="fullname" className="block font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider mb-2">
                1. Your Name *
              </label>
              <input
                id="fullname"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Raj Kumar"
                className={`w-full bg-retro-cream retro-border-sm p-3 font-grotesk font-bold text-retro-charcoal focus:outline-none focus:bg-retro-cream transition-all placeholder-retro-charcoal/30 ${
                  errors.name ? 'border-retro-terracotta bg-retro-peach/20' : ''
                }`}
              />
              {errors.name && <p className="text-retro-terracotta font-grotesk text-xs font-bold mt-1">⚠️ {errors.name}</p>}
            </div>

            {/* Grid for Phone and Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider mb-2">
                  2. Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9472249802"
                  className={`w-full bg-retro-cream retro-border-sm p-3 font-grotesk font-bold text-retro-charcoal focus:outline-none focus:bg-retro-cream transition-all placeholder-retro-charcoal/30 ${
                    errors.phone ? 'border-retro-terracotta bg-retro-peach/20' : ''
                  }`}
                />
                {errors.phone && <p className="text-retro-terracotta font-grotesk text-xs font-bold mt-1">⚠️ {errors.phone}</p>}
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="inquiry-service" className="block font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider mb-2">
                  3. Select Service
                </label>
                <select
                  id="inquiry-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-retro-cream retro-border-sm p-3 font-grotesk font-bold text-retro-charcoal focus:outline-none transition-all"
                >
                  {servicesList.map((srv) => (
                    <option key={srv} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid for Quantity */}
            <div>
              <label htmlFor="quantity" className="block font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider mb-2">
                4. Estimated Quantity *
              </label>
              <input
                id="quantity"
                type="text"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g. 500 Cards, 2 Banners (10x4 ft), etc."
                className={`w-full bg-retro-cream retro-border-sm p-3 font-grotesk font-bold text-retro-charcoal focus:outline-none focus:bg-retro-cream transition-all placeholder-retro-charcoal/30 ${
                  errors.quantity ? 'border-retro-terracotta bg-retro-peach/20' : ''
                }`}
              />
              {errors.quantity && <p className="text-retro-terracotta font-grotesk text-xs font-bold mt-1">⚠️ {errors.quantity}</p>}
            </div>

            {/* Custom Specifications / Message */}
            <div>
              <label htmlFor="specs" className="block font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider mb-2">
                5. Specifications / Dimensions / Paper Type (Optional)
              </label>
              <textarea
                id="specs"
                rows="4"
                value={formData.specs}
                onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                placeholder="e.g. Size 8x3 feet, Matte Cardstock with Gold Embossed names, please deliver by Friday..."
                className="w-full bg-retro-cream retro-border-sm p-3 font-grotesk font-bold text-retro-charcoal focus:outline-none focus:bg-retro-cream transition-all placeholder-retro-charcoal/30 resize-none"
              ></textarea>
            </div>

            {/* Dashed line and Submit */}
            <div className="border-t-2 border-dashed border-retro-charcoal/40 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-retro-charcoal/60">
                <FileCheck className="w-4 h-4 text-retro-sage" />
                <span>Instant dispatch via official API links</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto retro-btn bg-retro-mustard hover:bg-retro-mustard/90 text-retro-charcoal px-8 py-3.5 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5 text-retro-charcoal" />
                <span>Send WhatsApp Message</span>
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}
