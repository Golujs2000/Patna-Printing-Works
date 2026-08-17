import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import TopContactBar from './components/TopContactBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Process from './components/Process';
import InquiryForm from './components/InquiryForm';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import ServiceLandingPage from './components/ServiceLandingPage';
import { businessDetails } from './data/siteData';

// Helper component to scroll to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Home Page Component
function HomePage({ prefilledService, prefilledDetails, onSelectService, onSelectEstimate }) {
  useEffect(() => {
    document.title = 'Patna Printing Works | Best Doctor File, Flex Banner & Printing Press in Patna';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Showcase Grid */}
      <Services onSelectService={onSelectService} />

      {/* Dynamic Estimator Calculator */}
      <Calculator onSubmitEstimate={onSelectEstimate} />

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
  );
}

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
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col items-center">
      <ScrollToTop />
      
      {/* Top Navigation Header */}
      <Navbar />

      {/* Prominent Quick Contact Bar (Phone Number & WhatsApp) */}
      <TopContactBar />

      {/* Main Content Area with React Router */}
      <main className="w-full flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                prefilledService={prefilledService}
                prefilledDetails={prefilledDetails}
                onSelectService={handleSelectService}
                onSelectEstimate={handleSelectEstimate}
              />
            } 
          />
          <Route 
            path="/services/:serviceId" 
            element={
              <ServiceLandingPage 
                onSubmitEstimate={handleSelectEstimate}
              />
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
