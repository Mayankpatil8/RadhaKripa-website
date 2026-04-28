import React from 'react';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Our Story" 
        subtitle="We build more than just websites. We engineer premium digital ecosystems that elevate brands and drive substantial growth."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2068"
        label="About Our Agency"
      />
      <About />
      <WhyChooseUs />
    </>
  );
}
