import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Users, Code2, Trophy, Globe, ArrowRight,
  CheckCircle2, Sparkles, Calendar, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ── Animated counter ─────────────────────────────────────────────────────────
const Counter = memo(function Counter({
  value, label, sub, icon: Icon, gradient, delay,
}: {
  value: string; label: string; sub: string;
  icon: React.ElementType; gradient: string; delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    const target = parseInt(value.replace(/\D/g, ''), 10);
    if (!target) return;
    const duration = 1800;
    const increment = target / (duration / 16);
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const suffix = value.replace(/\d/g, '');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-7 flex flex-col gap-3 hover:border-white/20 hover:-translate-y-1 transition-all duration-400 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]"
    >
      {/* Corner glow */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${gradient} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-1 shadow-lg`}>
        <Icon size={22} className="text-white" strokeWidth={1.8} />
      </div>
      <div className="text-4xl font-extrabold text-white tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-sm font-bold text-white/80 tracking-wide">{label}</div>
      <div className="text-xs text-slate-500 leading-relaxed">{sub}</div>
    </motion.div>
  );
});

// ── Timeline item ─────────────────────────────────────────────────────────────
const TimelineItem = memo(function TimelineItem({
  year, title, desc, index,
}: {
  year: string; title: string; desc: string; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-5 group"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
          <Calendar size={16} className="text-white" />
        </div>
        {index < 2 && <div className="w-px flex-grow bg-gradient-to-b from-blue-500/40 to-transparent mt-2" />}
      </div>
      {/* Card */}
      <div className="pb-8 flex-grow">
        <span className="inline-block text-xs font-bold text-blue-400 tracking-widest uppercase mb-2 bg-blue-400/10 px-3 py-1 rounded-full">
          {year}
        </span>
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
});

// ── Data ───────────────────────────────────────────────────────────────────────
const stats = [
  {
    value: '5+', label: 'Years of Excellence', sub: 'Building digital products since 2019',
    icon: Trophy, gradient: 'from-amber-500 to-orange-600',
  },
  {
    value: '250+', label: 'Projects Delivered', sub: 'Across e-commerce, SaaS & corporate',
    icon: Code2, gradient: 'from-blue-500 to-indigo-600',
  },
  {
    value: '50+', label: 'Global Clients', sub: 'India, EU, USA, UAE and beyond',
    icon: Globe, gradient: 'from-emerald-500 to-teal-600',
  },
  {
    value: '100+', label: 'Happy Clients', sub: 'Long-term partnerships, not one-offs',
    icon: Users, gradient: 'from-purple-500 to-pink-600',
  },
];

const timeline = [
  {
    year: '2024', title: 'The Spark',
    desc: 'Radhekripa was founded by a passionate team with one mission: build premium digital experiences that actually drive business results.',
  },
  {
    year: '2025', title: 'Rapid Growth',
    desc: 'Expanded to a 20+ specialist team, delivered 100+ projects, and earned the trust of brands across India, Europe and the USA.',
  },
  {
    year: '2026', title: 'Global Scale',
    desc: 'Now serving enterprise and startup clients worldwide with a full-service offering across design, development, SEO, and growth.',
  },
];

const pillars = [
  'Award-winning UI/UX Design',
  'High-performance Web Architecture',
  'Conversion-optimised user journeys',
  'SEO-first engineering approach',
  'Transparent, agile workflow',
];

const offices = [
  { city: 'Pune, India', role: 'Headquarters & Design Studio' },
  { city: 'Remote – EU/USA', role: 'Client Delivery & Support' },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-slate-950 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* ── STORY SECTION ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 lg:sticky top-32"
          >
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-6 h-px bg-blue-400" />
              Our Story
            </div>

            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              We engineer digital ecosystems that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                drive growth.
              </span>
            </h2>

            <p className="text-slate-400 leading-relaxed text-base">
              At <strong className="text-white font-semibold">Radhekripa Web Developers</strong>, we don't just build
              websites — we craft end-to-end digital platforms engineered for performance, conversion, and scale.
              Founded on the principles of elegant design and robust architecture, our agency has grown from a
              two-person studio to a full-service powerhouse trusted by brands across the globe.
            </p>

            <p className="text-slate-400 leading-relaxed text-base">
              Our philosophy is simple: every pixel, every line of code, and every strategy we deploy should
              measurably move your business forward. We combine Awwwards-level aesthetics with enterprise-grade
              engineering to deliver products your users love.
            </p>

            {/* Pillars */}
            <ul className="grid grid-cols-1 gap-2.5 mt-2">
              {pillars.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Offices */}
            <div className="flex flex-col gap-2 mt-2">
              {offices.map((o, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={13} className="text-purple-400 shrink-0" />
                  <span className="text-white/70 font-medium">{o.city}</span>
                  <span>—</span>
                  <span>{o.role}</span>
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-purple-400 transition-colors group w-max mt-2"
              aria-label="Discover our digital services"
            >
              <Sparkles size={15} />
              Explore Our Services
              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Right: timeline */}
          <div className="pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8"
            >
              Our Journey
            </motion.div>
            <div>
              {timeline.map((item, idx) => (
                <TimelineItem key={idx} {...item} index={idx} />
              ))}
            </div>

            {/* Agency image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] aspect-video"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=75&w=1200"
                alt="Radhekripa team collaborating on a premium web project"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-105 hover:scale-100"
                loading="lazy"
                width={1200}
                height={675}
              />
            </motion.div>
          </div>
        </div>

        {/* ── STATS GRID ──────────────────────────────────────────────────── */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <Counter key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
