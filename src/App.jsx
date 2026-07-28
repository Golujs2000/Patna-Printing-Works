import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Process from './components/Process';
import InquiryForm from './components/InquiryForm';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import ServiceDetails from './components/ServiceDetails';
import { businessDetails } from './data/siteData';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledDetails, setPrefilledDetails] = useState('');

  // Handle direct hash navigation e.g. #service-doctor-file
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#service-')) {
        const id = hash.replace('#service-', '');
        setSelectedServiceId(id);
      } else if (hash === '' || hash === '#') {
        setSelectedServiceId(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenDetails = (serviceId) => {
    setSelectedServiceId(serviceId);
    window.location.hash = `service-${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setSelectedServiceId(null);
    window.location.hash = 'services';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceName) => {
    setPrefilledService(serviceName);
    setPrefilledDetails(`Hi! I would like to inquire about printing services for ${serviceName}.`);
    
    // If in details view, close it to show form
    if (selectedServiceId) {
      setSelectedServiceId(null);
      window.location.hash = 'inquiry';
    }
    
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

  const handleNavigateToCalculator = (serviceId, serviceTitle) => {
    setSelectedServiceId(null);
    window.location.hash = 'calculator';
    if (serviceTitle) {
      setPrefilledService(serviceTitle);
    }
    setTimeout(() => {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col items-center">
      {/* Top Navigation */}
      <Navbar onNavigateHome={() => setSelectedServiceId(null)} />

      {/* Main Content Area */}
      <main className="w-full flex-1">
        {selectedServiceId ? (
          <ServiceDetails
            serviceId={selectedServiceId}
            onBack={handleBackToMain}
            onNavigateToCalculator={handleNavigateToCalculator}
            onInquireService={handleSelectService}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero />

            {/* Services Showcase Grid */}
            <Services 
              onSelectService={handleSelectService}
              onOpenDetails={handleOpenDetails}
            />

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
          </>
        )}
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={businessDetails.whatsappLink}
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

