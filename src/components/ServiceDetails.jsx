import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Send, 
  Calculator as CalcIcon, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  FileText,
  Maximize2
} from 'lucide-react';
import { serviceDetailsMap } from '../data/serviceDetailsData';
import { businessDetails, services } from '../data/siteData';

export default function ServiceDetails({ serviceId, onBack, onNavigateToCalculator, onInquireService }) {
  const service = serviceDetailsMap[serviceId] || serviceDetailsMap['doctor-file'];
  
  const [activeMockupIndex, setActiveMockupIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('specs');
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeMockup = service.mockups[activeMockupIndex] || service.mockups[0];

  const handleWhatsAppOrder = () => {
    const message = `Hello Patna Printing Works! I am interested in:
*${service.title}* (${service.subtitle})

- Min Order: ${service.specs.minQuantity}
- Turnaround SLA: ${service.specs.turnaround}
- Paper Options: ${service.specs.gsm}

Please provide a quote and sample proofs.`;

    const whatsappUrl = `https://wa.me/${businessDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    if (onInquireService) {
      onInquireService(service.title);
    }
  };

  const handleOpenCalculator = () => {
    if (onNavigateToCalculator) {
      onNavigateToCalculator(service.id, service.title);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8 md:py-12 font-sans">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-slate-200">
          
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600" />
            <span>← Back to All Services</span>
          </button>

          {/* Breadcrumb path */}
          <div className="flex items-center gap-2 font-sans text-xs text-slate-500 font-medium">
            <span className="cursor-pointer hover:underline" onClick={onBack}>Home</span>
            <span>/</span>
            <span className="cursor-pointer hover:underline" onClick={onBack}>Services</span>
            <span>/</span>
            <span className="font-bold text-blue-600">{service.title}</span>
          </div>

        </div>

        {/* Hero Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Interactive Image Mockup Gallery (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Main Featured Mockup Display */}
            <div className="relative bg-white rounded-2xl border border-slate-200 p-4 shadow-xl group overflow-hidden">
              <div className="relative w-full h-[340px] sm:h-[440px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center">
                
                {/* Active Image */}
                <img
                  src={activeMockup.url}
                  alt={activeMockup.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                  <span className="font-sans text-[10px] bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold uppercase shadow-sm">
                    {service.category}
                  </span>
                  <span className="font-sans text-[10px] bg-emerald-600 text-white px-2.5 py-1 rounded-md font-bold uppercase shadow-sm">
                    SLA: {service.specs.turnaround}
                  </span>
                </div>

                {/* Expand Lightbox Button */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-3 right-3 bg-white text-slate-800 p-2.5 rounded-xl border border-slate-200 shadow-md hover:bg-slate-50 transition-all"
                  title="View full screen mockup"
                >
                  <Maximize2 className="w-4 h-4 text-slate-800" />
                </button>
              </div>

              {/* Active Mockup Title & Caption Banner */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 mt-3 text-left">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-sans font-bold text-xs text-slate-900 uppercase">
                    Mockup View {activeMockupIndex + 1} of {service.mockups.length}: {activeMockup.title}
                  </span>
                  <span className="font-sans text-[10px] text-blue-600 font-bold uppercase bg-blue-50 px-2 py-0.5 rounded">
                    HD Preview
                  </span>
                </div>
                <p className="font-sans text-xs text-slate-600">
                  {activeMockup.caption}
                </p>
              </div>

            </div>

            {/* Mockup Thumbnails Selector */}
            <div className="grid grid-cols-3 gap-3">
              {service.mockups.map((mock, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMockupIndex(idx)}
                  className={`text-left p-2 rounded-xl border transition-all relative overflow-hidden ${
                    activeMockupIndex === idx
                      ? 'bg-blue-50 border-blue-500 shadow-md'
                      : 'bg-white border-slate-200 opacity-70 hover:opacity-100 hover:bg-slate-50'
                  }`}
                >
                  <div className="w-full h-16 sm:h-20 overflow-hidden rounded-lg border border-slate-200 mb-1.5 bg-slate-100">
                    <img
                      src={mock.url}
                      alt={mock.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-sans font-bold text-[11px] text-slate-800 block truncate">
                    {mock.title}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Title, Quick Specs & Immediate CTAs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xl">
            
            <div>
              {/* Category Pill */}
              <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full font-sans text-xs font-bold text-blue-600 uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                <span>{service.category}</span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 leading-tight mb-2">
                {service.title}
              </h1>
              <p className="font-sans font-bold text-sm text-blue-600 mb-4">
                {service.subtitle}
              </p>

              {/* Summary */}
              <p className="font-sans text-xs text-slate-600 leading-relaxed mb-6 border-b border-slate-100 pb-4">
                {service.summary}
              </p>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-sans text-[10px] uppercase font-bold text-slate-400 block">MIN ORDER</span>
                  <span className="font-sans font-black text-sm text-slate-900">{service.specs.minQuantity}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-sans text-[10px] uppercase font-bold text-slate-400 block">TURNAROUND</span>
                  <span className="font-sans font-black text-sm text-emerald-600">{service.specs.turnaround}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-sans text-[10px] uppercase font-bold text-slate-400 block">PAPER / GSM</span>
                  <span className="font-sans font-bold text-xs text-slate-900 truncate block">{service.specs.gsm}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span className="font-sans text-[10px] uppercase font-bold text-slate-400 block">PRINT METHOD</span>
                  <span className="font-sans font-bold text-xs text-slate-900 truncate block">{service.specs.printTech.split('&')[0]}</span>
                </div>
              </div>

              {/* Highlights checklist */}
              <div className="space-y-2 mb-6">
                <span className="font-sans font-bold text-xs text-slate-700 uppercase tracking-wider block mb-2">
                  KEY FEATURES & FINISHES
                </span>
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-sans text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-100 mt-auto">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-4 rounded-xl font-sans font-bold text-sm flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Inquire Specs on WhatsApp</span>
              </button>

              <button
                onClick={handleOpenCalculator}
                className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 px-4 rounded-xl font-sans font-bold text-xs border border-blue-200 flex items-center justify-center gap-2 transition-all"
              >
                <CalcIcon className="w-4 h-4 text-blue-600" />
                <span>Calculate Price Estimate for {service.title}</span>
              </button>
            </div>

          </div>

        </div>

        {/* Tabbed Detailed Specification Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-xl mb-12">
          
          {/* Tabs Selector Header */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-8">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-5 py-2.5 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all ${
                activeTab === 'specs'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Paper & Finishing Specs
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-5 py-2.5 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all ${
                activeTab === 'pricing'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Wholesale Rate Chart
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-5 py-2.5 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all ${
                activeTab === 'applications'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Uses & Target Clients
            </button>
            <button
              onClick={() => setActiveTab('faqs')}
              className={`px-5 py-2.5 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all ${
                activeTab === 'faqs'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Frequently Asked Questions
            </button>
          </div>

          {/* Tab 1: Specs Matrix */}
          {activeTab === 'specs' && (
            <div className="space-y-6 text-left">
              <h3 className="font-sans font-black text-xl text-slate-900 uppercase">
                Technical Specifications & Customization
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Paper Types */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h4 className="font-sans font-bold text-sm text-blue-600 uppercase mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Paper Stocks & Materials</span>
                  </h4>
                  <ul className="space-y-2 font-sans text-xs text-slate-700">
                    {service.specs.paperTypes.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Finishes */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h4 className="font-sans font-bold text-sm text-blue-600 uppercase mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Lamination & Finishing</span>
                  </h4>
                  <ul className="space-y-2 font-sans text-xs text-slate-700">
                    {service.specs.finishes.map((fn, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span>{fn}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sizes */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h4 className="font-sans font-bold text-sm text-blue-600 uppercase mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Standard Available Sizes</span>
                  </h4>
                  <ul className="space-y-2 font-sans text-xs text-slate-700">
                    {service.specs.standardSizes.map((sz, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span>{sz}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Print Tech & SLA */}
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h4 className="font-sans font-bold text-sm text-blue-600 uppercase mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Production & Print Tech</span>
                  </h4>
                  <div className="space-y-2 font-sans text-xs text-slate-700">
                    <p><strong>Print Press:</strong> {service.specs.printTech}</p>
                    <p><strong>Turnaround SLA:</strong> {service.specs.turnaround}</p>
                    <p><strong>Minimum Order:</strong> {service.specs.minQuantity}</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Tab 2: Pricing Table */}
          {activeTab === 'pricing' && (
            <div className="text-left space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="font-sans font-black text-xl text-slate-900 uppercase">
                    Wholesale Price Tiers
                  </h3>
                  <p className="font-sans text-xs text-slate-500">
                    Transparent rates direct from our Bari Path printing hub with bulk volume discounts.
                  </p>
                </div>
                <button
                  onClick={handleOpenCalculator}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center gap-2 shadow-md transition-all"
                >
                  <CalcIcon className="w-4 h-4" />
                  <span>Open Price Calculator</span>
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 font-bold uppercase text-slate-700">
                      <th className="p-3.5 border-r border-slate-200">Quantity Batch</th>
                      <th className="p-3.5 border-r border-slate-200">Unit Rate</th>
                      <th className="p-3.5 border-r border-slate-200">Estimated Total</th>
                      <th className="p-3.5">Package Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.priceTiers.map((tier, idx) => (
                      <tr 
                        key={idx}
                        className={`border-b border-slate-100 font-medium ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                        }`}
                      >
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">{tier.qty}</td>
                        <td className="p-3.5 border-r border-slate-200 text-blue-600 font-bold">{tier.rate}</td>
                        <td className="p-3.5 border-r border-slate-200 font-bold text-slate-900">{tier.estTotal}</td>
                        <td className="p-3.5 text-slate-600 font-sans text-xs">{tier.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-200 font-sans text-xs text-blue-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Prices shown exclude GST & local courier shipping. Free pickup available at Bari Path, Dariyapur.</span>
              </div>
            </div>
          )}

          {/* Tab 3: Recommended Applications */}
          {activeTab === 'applications' && (
            <div className="text-left space-y-6">
              <h3 className="font-sans font-black text-xl text-slate-900 uppercase">
                Recommended Use Cases & Clients
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {service.applications.map((app, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center font-sans font-bold text-xs text-blue-700 shrink-0">
                      0{idx + 1}
                    </div>
                    <span className="font-sans font-semibold text-xs text-slate-800">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Service FAQs */}
          {activeTab === 'faqs' && (
            <div className="text-left space-y-4">
              <h3 className="font-sans font-black text-xl text-slate-900 uppercase mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full p-4 flex justify-between items-center text-left font-sans font-bold text-xs text-slate-800 hover:bg-slate-100 transition-all"
                    >
                      <span>Q: {faq.q}</span>
                      {expandedFaq === idx ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </button>

                    {expandedFaq === idx && (
                      <div className="p-4 pt-0 font-sans text-xs text-slate-600 leading-relaxed border-t border-slate-200/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Other Printing Services Links */}
        <div className="border-t border-slate-200 pt-8 text-left">
          <h4 className="font-sans font-black text-lg text-slate-900 uppercase mb-4">
            EXPLORE OTHER PRINT SERVICES
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {services.filter(s => s.id !== service.id).map((other) => (
              <button
                key={other.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  if (onNavigateToCalculator) {
                    onNavigateToCalculator(other.id);
                  }
                }}
                className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 text-left transition-all shadow-sm group flex items-center justify-between"
              >
                <span className="font-sans font-bold text-xs text-slate-800 truncate">
                  {other.title}
                </span>
                <span className="font-sans text-xs text-blue-600 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Image Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl border border-slate-200 p-6 shadow-2xl text-left">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans font-bold px-3 py-1 rounded-xl text-xs"
            >
              CLOSE ✕
            </button>
            <h3 className="font-sans font-bold text-lg text-slate-900 mb-3">
              {activeMockup.title}
            </h3>
            <div className="w-full max-h-[70vh] overflow-hidden rounded-xl border border-slate-200 mb-3 bg-slate-50">
              <img
                src={activeMockup.url}
                alt={activeMockup.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>
            <p className="font-sans text-xs text-slate-600">
              {activeMockup.caption}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
