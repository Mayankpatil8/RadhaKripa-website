import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Layers, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    icon: Zap,
    title: 'Speed without compromise.',
    body:
      'Every site we ship is tested against Google Core Web Vitals. We obsess over first contentful paint, layout shifts, and time-to-interactive — because a fast website is not just a technical goal, it\'s a business advantage that directly impacts leads and conversions.',
    stat: '98/100',
    statLabel: 'PageSpeed Score — Eurocore Global',
  },
  {
    icon: Layers,
    title: 'Design that earns trust.',
    body:
      'From Iskcon Temple Pune\'s spiritual identity to Microcraft\'s B2B precision — we tailor every interface to its audience. We don\'t use templates. Every layout, colour, and interaction is deliberate, grounded in the psychology of the people who will use it.',
    stat: '9+',
    statLabel: 'Unique brand identities delivered',
  },
  {
    icon: Users,
    title: 'Long-term partnerships.',
    body:
      'We don\'t hand over a ZIP file and disappear. Clients like Microcraft, Eurocore Global, and Indo Euro Hub continue to work with us for updates, SEO improvements, and new features. We\'re a growth partner, not a one-off vendor.',
    stat: '100%',
    statLabel: 'On-time delivery rate',
  },
  {
    icon: TrendingUp,
    title: 'Measurable results.',
    body:
      'Our work on Indo Euro Hub reduced their bounce rate by 30%. Microcraft saw a 45% increase in B2B enquiries. We build for outcomes — not just aesthetics — because the only metric that matters to our clients is growth.',
    stat: '45%',
    statLabel: 'Avg lead increase post-launch',
  },
];

// Real portfolio images as social proof
const proofImages = [
  { src: '/portfolio1.png',  label: 'Microcraft.in',            link: 'https://microcraft.in/' },
  { src: 'portfolio2.png',   label: 'EurocoreGlobal.com',       link: 'https://eurocoreglobal.com/' },
  { src: 'portfolio3.png',   label: 'IndoEuroHub',              link: 'https://indoeurohub.netlify.app/' },
  { src: '/portfolio5.png',  label: 'Iskcon Temple Pune',       link: 'https://iskconweb.netlify.app/' },
];

export default function OurThinking() {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-4 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold tracking-wider uppercase mb-5">
                <span className="w-8 h-px bg-blue-600" />
                Our Approach
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-4">
                Results-first{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  development.
                </span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                We're a Pune-based startup that has shipped 9+ live products for clients across India, Finland, and the UK — every one of them built with real strategy behind the pixels.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                About Us
              </Link>
            </motion.div>
          </div>

          {/* ── 4-pillar grid ── */}
          <div className="lg:col-span-8 lg:pl-10 lg:border-l border-slate-200/60 grid sm:grid-cols-2 gap-8">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                    style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12))' }}
                  >
                    <Icon size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <span
                      className="text-2xl font-black"
                      style={{
                        background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {p.stat}
                    </span>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">{p.statLabel}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Real Project Image Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">Live projects we've shipped</span>
            <span className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {proofImages.map((img, i) => (
              <motion.a
                key={i}
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,23,42,0.12)' }}
                className="group relative rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm block"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 inset-x-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate">{img.label}</span>
                    <ArrowUpRight size={14} className="text-white flex-shrink-0" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
