import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import PageHeader from '../components/PageHeader';

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Expertise" 
        subtitle="End-to-end digital services designed for modern businesses. From high-converting e-commerce to bespoke SaaS interfaces."
        image="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=2070"
        label="What we do"
      />
      <Services />
      <Process />
    </>
  );
}
