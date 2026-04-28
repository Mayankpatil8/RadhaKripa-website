import React from 'react';
import { motion } from 'motion/react';
import { Hexagon, Triangle, Circle, Square, Star, Diamond, Cloud, Zap } from 'lucide-react';

const logos = [
  { name: 'NovaTech', icon: Hexagon },
  { name: 'Aura', icon: Circle },
  { name: 'Lumina', icon: Star },
  { name: 'Artisan', icon: Triangle },
  { name: 'Sterling', icon: Square },
  { name: 'Vertex', icon: Diamond },
  { name: 'CloudSync', icon: Cloud },
  { name: 'Zapier', icon: Zap },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-bold tracking-widest uppercase text-slate-400">Trusted by innovative companies worldwide</p>
      </div>

      <div className="relative flex w-full">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex items-center gap-16 md:gap-24 px-8 shrink-0 whitespace-nowrap"
        >
          {/* Double array for seamless loop */}
          {[...logos, ...logos].map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-slate-300 hover:text-blue-500 transition-colors duration-300 grayscale hover:grayscale-0">
                <Icon size={32} />
                <span className="text-2xl font-display font-bold tracking-tight">{logo.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
