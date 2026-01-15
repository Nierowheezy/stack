
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VirtualTerminalDetail from './components/VirtualTerminalDetail';
import PhysicalTerminalDetail from './components/PhysicalTerminalDetail';
import TerminalAPIDetail from './components/TerminalAPIDetail';
import { Feature as ImageComparisonFeature } from './components/ui/feature-with-image-comparison';
import { AdvancedFeatures } from './components/ui/features-10';
import { BusinessUseCases } from './components/BusinessUseCases';
import Pricing from './components/Pricing';
import TestimonialsSection from './components/TestimonialsSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-700">
      <Header isScrolled={isScrolled} />
      <main>
        <div id="hero"><Hero /></div>
        <div id="features"><Features /></div>
        <div id="virtual-terminal"><VirtualTerminalDetail /></div>
        <div id="physical-terminal"><PhysicalTerminalDetail /></div>
        <div id="terminal-api"><TerminalAPIDetail /></div>
        <ImageComparisonFeature />
        <AdvancedFeatures />
        <BusinessUseCases />
        <div id="pricing"><Pricing /></div>
        <TestimonialsSection />
        <div id="faq"><FAQ /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
