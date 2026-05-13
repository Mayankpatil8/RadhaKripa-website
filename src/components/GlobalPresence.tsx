import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const locations = [
  { city: 'Helsinki', country: 'Finland', x: '53%', y: '15%' },
  { city: 'London', country: 'UK', x: '45%', y: '25%' },
  { city: 'Berlin', country: 'Germany', x: '50%', y: '28%' },
  { city: 'Pune', country: 'India', x: '70%', y: '45%' },
  { city: 'Indore', country: 'India', x: '71%', y: '42%' },
];

export default function GlobalPresence() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Premium Dark Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 text-blue-400 text-sm font-bold tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-blue-400"></span>
            Our Reach
            <span className="w-8 h-px bg-blue-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Presence</span>
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Engineering scalable digital solutions for visionary brands across Europe, North America, and Asia.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-sm p-4 md:p-8 overflow-hidden flex items-center justify-center">
          {/* Abstract Map Background SVG */}
          <svg className="w-full h-full opacity-30 text-slate-500" viewBox="0 0 1000 500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M150,100 Q200,80 250,120 T350,150 T450,130 T550,180 T650,150 T750,200 T850,170 T950,220 V500 H50 V150 Q100,120 150,100 Z" opacity="0.1"/>
            <path d="M80,200 Q150,180 220,230 T360,250 T500,210 T640,280 T780,240 T920,300 V500 H50 V250 Q65,225 80,200 Z" opacity="0.2"/>
            {/* Very simplified world map abstract representation to give the "feel" without a heavy SVG */}
            <rect x="100" y="80" width="300" height="200" rx="40" opacity="0.1"/>
            <rect x="450" y="50" width="200" height="150" rx="30" opacity="0.1"/>
            <rect x="480" y="220" width="150" height="200" rx="30" opacity="0.1"/>
            <rect x="680" y="100" width="250" height="300" rx="50" opacity="0.1"/>
          </svg>

          {/* Glowing Pins */}
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: loc.x, top: loc.y }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-md group-hover:bg-blue-400/40 transition-colors duration-300"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                </div>
                
                {/* Tooltip */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 pointer-events-none z-20">
                  <div className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap border border-white/10 shadow-xl flex items-center gap-2">
                    <MapPin size={14} className="text-blue-400" />
                    {loc.city}, <span className="text-slate-400 font-normal">{loc.country}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text fallback / list for accessibility and clarity */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {locations.map((loc, index) => (
            <div key={index} className="px-6 py-3 bg-slate-900 border border-white/5 rounded-full flex items-center gap-3 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-white font-medium">{loc.city}</span>
              <span className="text-slate-500 text-sm">{loc.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
