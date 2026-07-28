import React, { useState, useEffect } from 'react';
import { Send, FileCheck } from 'lucide-react';
import { servicesListSimple, businessDetails } from '../data/siteData';

export default function InquiryForm({ prefilledService, prefilledDetails }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Doctor File / Prescription Folder',
    quantity: '',
    specs: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        service: prefilledService,
        specs: prefilledDetails || prev.specs,
      }));
    }
  }, [prefilledService, prefilledDetails]);

  const servicesList = servicesListSimple;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!formData.quantity.trim()) newErrors.quantity = 'Estimated quantity is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');

    const message = `Hello Patna Printing Works! I want to submit a print inquiry:
- *Name*: ${formData.name.trim()}
- *Contact Phone*: ${cleanPhone}
- *Service Type*: ${formData.service}
- *Estimated Quantity*: ${formData.quantity.trim()}
${formData.specs.trim() ? `- *Specifications*: ${formData.specs.trim()}` : ''}

Please verify the details and reply with a quote.`;

    const whatsappUrl = `https://wa.me/${businessDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="inquiry" className="relative w-full py-16 md:py-24 border-b border-slate-200 bg-white font-sans">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-20" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="font-sans font-bold text-xs tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Direct Order Voucher
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl text-slate-900 mt-4 tracking-tight">
            WHATSAPP PRINT INQUIRY
          </h2>
          <p className="font-sans text-sm text-slate-600 mt-2">
            No registration required. Fill out your job details below to send a formatted inquiry directly to our WhatsApp printing desk.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-xl max-w-2xl mx-auto text-left relative overflow-hidden">

          {/* Header Banner */}
          <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-sans font-bold text-xl text-slate-900 leading-none">ORDER VOUCHER</h3>
              <p className="font-sans text-xs text-slate-500 mt-1 uppercase">PATNA PRINTING WORKS • BARI PATH, PATNA</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg font-mono text-xs font-bold text-blue-700">
              REF: PPW-{new Date().getFullYear()}-{Math.floor(1000 + Math.random() * 9000)}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullname" className="block font-sans font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
                1. Your Full Name *
              </label>
              <input
                id="fullname"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Dr. Rajesh Kumar / Amit Sharma"
                className={`w-full bg-slate-50 border rounded-xl p-3 font-sans font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-400 ${
                  errors.name ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                }`}
              />
              {errors.name && <p className="text-red-500 font-sans text-xs font-semibold mt-1">⚠️ {errors.name}</p>}
            </div>

            {/* Grid for Phone and Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block font-sans font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
                  2. Contact Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9472249802"
                  className={`w-full bg-slate-50 border rounded-xl p-3 font-sans font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-400 ${
                    errors.phone ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                {errors.phone && <p className="text-red-500 font-sans text-xs font-semibold mt-1">⚠️ {errors.phone}</p>}
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="inquiry-service" className="block font-sans font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
                  3. Select Print Service
                </label>
                <select
                  id="inquiry-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 font-sans font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  {servicesList.map((srv) => (
                    <option key={srv} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label htmlFor="quantity" className="block font-sans font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
                4. Estimated Quantity *
              </label>
              <input
                id="quantity"
                type="text"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g. 500 Doctor Files, 2 Flex Banners (10x4 ft), etc."
                className={`w-full bg-slate-50 border rounded-xl p-3 font-sans font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-400 ${
                  errors.quantity ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                }`}
              />
              {errors.quantity && <p className="text-red-500 font-sans text-xs font-semibold mt-1">⚠️ {errors.quantity}</p>}
            </div>

            {/* Custom Specifications */}
            <div>
              <label htmlFor="specs" className="block font-sans font-bold text-xs text-slate-700 uppercase tracking-wider mb-2">
                5. Specifications / Custom Paper / Notes (Optional)
              </label>
              <textarea
                id="specs"
                rows="4"
                value={formData.specs}
                onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                placeholder="e.g. Single pocket doctor files, 300GSM Art Card, Matte lamination with doctor details..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 font-sans font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-400 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="border-t border-slate-100 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-sans text-xs text-slate-500 font-medium">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Instant dispatch to Patna Printing Works desk</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Send WhatsApp Message</span>
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}

