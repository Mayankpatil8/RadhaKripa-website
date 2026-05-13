import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const clients = [
  {
    country: 'Finland',
    flag: '🇫🇮',
    title: 'SaaS Startup',
    description: 'Developing a scalable AI-driven analytics platform for B2B enterprises.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    country: 'UK',
    flag: '🇬🇧',
    title: 'E-commerce Brand',
    description: 'Architecting a headless commerce solution for a premium fashion retailer.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    country: 'USA',
    flag: '🇺🇸',
    title: 'Tech Platform',
    description: 'Building a real-time collaborative workspace ecosystem for remote teams.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    title: 'Industrial Solutions',
    description: 'Creating an IoT dashboard interface for manufacturing automation.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  }
];

export default function CurrentlyWorkingWith() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-slate-50">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
          <div className="inline-flex items-center gap-2 text-purple-600 text-sm font-bold tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-purple-600"></span>
            Global Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Currently <span className="text-gradient">Working With</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-20 w-[200vw] md:w-[150vw]">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="relative w-[300px] md:w-[450px] h-[400px] shrink-0 rounded-3xl overflow-hidden group bg-white shadow-xl"
            >
              <img 
                src={client.image} 
                alt={client.title} 
                className="w-full h-1/2 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg">
                <span className="text-lg leading-none">{client.flag}</span>
                {client.country}
              </div>
              
              <div className="p-8 h-1/2 flex flex-col justify-between bg-white relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{client.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {client.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 ml-auto">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
