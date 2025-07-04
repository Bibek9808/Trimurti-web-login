import React from 'react';
import { 
  AceternityNavbar, 
  HeroSection, 
  SVGMaskSection, 
  ProductsSection, 
  ServicesSection, 
  Footer 
} from './components';

export default function InitialHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <AceternityNavbar />
      <HeroSection />
      <SVGMaskSection />
      <ProductsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
} 