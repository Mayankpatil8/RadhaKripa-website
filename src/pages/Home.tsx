import React from 'react';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import OurThinking from '../components/OurThinking';
import Services from '../components/Services';
import FeaturedCaseStudy from '../components/FeaturedCaseStudy';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ClientLogos />
      <OurThinking />
      {/* <Services /> */}
      <FeaturedCaseStudy />
      {/* <Portfolio /> */}
      <Testimonials />
      <CTA />
    </div>
  );
}
