import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Process from './components/Process';
import InquiryForm from './components/InquiryForm';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

export default function App() {
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledDetails, setPrefilledDetails] = useState('');

  const handleSelectService = (serviceName) => {
    setPrefilledService(serviceName);
    setPrefilledDetails(`Hi! I would like to inquire about printing services for ${serviceName}.`);
    
    // Scroll smoothly to Inquiry Form
    setTimeout(() => {
      document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectEstimate = (estimateData) => {
    setPrefilledService(estimateData.service);
    setPrefilledDetails(estimateData.details);
    
    // Scroll smoothly to Inquiry Form
    setTimeout(() => {
      document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Layout Content */}
      <main className="w-full flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Services Showcase */}
        <Services onSelectService={handleSelectService} />

        {/* Dynamic Estimator Calculator */}
        <Calculator onSubmitEstimate={handleSelectEstimate} />

        {/* Our Process */}
        <Process />

        {/* Primary Inquiry Form */}
        <InquiryForm 
          prefilledService={prefilledService} 
          prefilledDetails={prefilledDetails} 
        />

        {/* Location & Map Section */}
        <AboutContact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919472249802?text=Hello%20Patna%20Printing%20Works!%20I%20would%20like%20to%20inquire%20about%20printing%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-[#FAF7F2] p-4 rounded-none border-3 border-retro-charcoal shadow-retro hover:translate-x-[-2.5px] hover:translate-y-[-2.5px] hover:shadow-retro-lg active:translate-x-[1px] active:translate-y-[1px] active:shadow-retro-sm transition-all flex items-center gap-2 font-grotesk font-black text-sm uppercase"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden md:inline">Chat With Us</span>
      </a>
    </div>
  );
}
