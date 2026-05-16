import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const clients = [
  {
    country: 'Finland',
    flag: '🇫🇮',
    category: 'Web Development',
    title: 'Indo Euro Hub — Trade Portal',
    link: 'https://indoeurohub.netlify.app/',
    status: 'Completed',
    stack: ['React', 'Tailwind CSS', 'Vite'],
    description:
      'Built a fully responsive international trade portal for Indo Euro Hub, connecting businesses between India and Europe. The site features a clean, modern UI with intuitive global navigation, optimised for a multilingual business audience.',
    highlights: [
      'Responsive international trade portal',
      'Reduced bounce rate by 30% post-launch',
      'Optimised for EU & Indian business users',
    ],
    image: 'portfolio3.png',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    category: 'AIML',
    title: 'Road Accident Severity Prediction',
    link: 'https://roadsafetyy.netlify.app/',
    status: 'Completed',
    stack: ['Python', 'Scikit-learn', 'React', 'Flask'],
    description:
      'Engineered a machine learning web application that predicts road accident severity using real-world traffic and environmental data. Built for public safety research, it provides an interactive dashboard where users can input conditions and receive instant AI-powered risk assessments.',
    highlights: [
      'ML model with 87% prediction accuracy',
      'Interactive React + Flask dashboard',
      'Real UK road safety dataset integration',
    ],
    image: 'portfolio6.png',
  },
  {
    country: 'London',
    flag: '🇬🇧',
    category: 'E-commerce',
    title: 'MarketPlace Platform',
    link: 'https://marketpalce1.netlify.app/',
    status: 'Completed',
    stack: ['React', 'Node.js', 'Tailwind CSS'],
    description:
      'Developed a feature-rich multi-vendor marketplace platform with a clean, conversion-focused UI. The platform supports product listings, category filtering, and a streamlined checkout flow — built to serve a growing London-based client base.',
    highlights: [
      'Multi-vendor product listing system',
      'Fast category filtering & search',
      'Mobile-first, conversion-optimised layout',
    ],
    image: '/portfolio4.png',
  },
  {
    country: 'India',
    flag: '🇮🇳',
    category: 'Education',
    title: 'Anant Coaching Classes',
    link: 'https://eloquent-otter-523e02.netlify.app/',
    status: 'Completed',
    stack: ['React', 'Tailwind CSS', 'Netlify'],
    description:
      'Designed and deployed a professional website for Anant Coaching Classes in Pune, India. The site helps students easily discover courses, view the timetable, and contact the institute — significantly improving the centre\'s digital visibility and student enquiries.',
    highlights: [
      'Clear course & schedule information',
      'Mobile-friendly for student access',
      'Increased online enquiries post-launch',
    ],
    image: 'portfolio8.png',
  },
];

export default function WorkingOn() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-bold tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-blue-400" />
            Global Partnerships
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Currently{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Working On
              </span>
            </h2>
            <p className="text-slate-400 max-w-sm text-lg">
              Active projects across four continents — delivering at the highest standard.
            </p>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap gap-3 mb-10">
          {clients.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`flex items-center gap-3 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${active === idx
                  ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                  : 'bg-slate-800 border-white/5 text-slate-300 hover:border-blue-500/40 hover:text-white'
                }`}
            >
              <span className="text-xl leading-none">{c.flag}</span>
              {c.country}
            </button>
          ))}
        </div>

        {/* Active Client Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
          >
            {/* Image side */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img
                src={clients[active].image}
                alt={clients[active].title}
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

              {/* Country badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="text-xl">{clients[active].flag}</span>
                <span className="text-white font-bold text-sm">{clients[active].country}</span>
              </div>
            </div>

            {/* Content side */}
            <div className="bg-slate-800/80 backdrop-blur-xl p-8 md:p-12 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                  {clients[active].category}
                </span>
                <span className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${clients[active].status === 'In Progress'
                    ? 'text-green-400 bg-green-500/10 border border-green-500/20'
                    : clients[active].status === 'Completed'
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                      : 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                  }`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${clients[active].status === 'In Progress' ? 'bg-green-400'
                      : clients[active].status === 'Completed' ? 'bg-blue-400'
                        : 'bg-amber-400'
                    }`} />
                  {clients[active].status}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                {clients[active].title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                {clients[active].description}
              </p>

              <ul className="space-y-3 mb-8">
                {clients[active].highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {clients[active].stack.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-700 border border-white/10 rounded-lg text-xs font-semibold text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Live link */}
              {(clients[active] as any).link && (
                <a
                  href={(clients[active] as any).link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-white transition-colors group w-max"
                >
                  Visit Live Site
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
