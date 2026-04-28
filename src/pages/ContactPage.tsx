import React from 'react';
import Contact from '../components/Contact';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Let's Talk" 
        subtitle="Ready to start your next premium project? Drop us a message, and our team will get back to you to discuss your vision."
        image="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=2070"
        label="Contact Us"
      />
      <div className="bg-[#FCFBF8] border-b-2 border-[#2D241F]">
        <Contact />
      </div>
    </>
  );
}
