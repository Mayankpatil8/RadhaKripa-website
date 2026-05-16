import React from 'react';
import { motion } from 'motion/react';

// Real clients from actual portfolio work
const logos = [
  { name: 'Microcraft',    url: 'https://microcraft.in/',                      initial: 'M'  },
  { name: 'Eurocore',      url: 'https://eurocoreglobal.com/',                 initial: 'E'  },
  { name: 'Indo Euro Hub', url: 'https://indoeurohub.netlify.app/',            initial: 'IE' },
  { name: 'Iskcon Pune',   url: 'https://iskconweb.netlify.app/',              initial: 'IS' },
  { name: 'Kadambari',     url: 'https://kadambaribhojnalaya.netlify.app/',    initial: 'K'  },
  { name: 'Anant Classes', url: 'https://eloquent-otter-523e02.netlify.app/',  initial: 'AC' },
  { name: 'Juice Lover',   url: 'https://juicelover.netlify.app/',             initial: 'JL' },
  { name: 'MarketPlace',   url: 'https://marketpalce1.netlify.app/',           initial: 'MP' },
];

export default function ClientLogos() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-14 bg-white border-y border-slate-100 overflow-hidden relative">

      {/* Top gradient rule */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 10%, #3b82f6 40%, #8b5cf6 60%, transparent 90%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-[11px] font-black tracking-[0.22em] uppercase text-slate-400">
          Trusted by growing businesses across India
        </p>
      </div>

      <div className="relative flex w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 28, repeat: Infinity }}
          className="flex items-center gap-14 md:gap-20 px-8 shrink-0 whitespace-nowrap"
        >
          {doubled.map((logo, index) => (
            <a
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-all duration-300"
            >
              {/* Logo circle with initials */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-black tracking-wide text-white transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 2px 10px rgba(99,102,241,0.25)',
                }}
              >
                {logo.initial}
              </div>
              <span
                className="text-[17px] font-bold tracking-tight text-slate-300 group-hover:text-slate-700 transition-colors duration-300"
              >
                {logo.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
