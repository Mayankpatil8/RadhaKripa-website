import React, { memo } from 'react';
import { motion } from 'motion/react';
import {
  LayoutTemplate, MonitorSmartphone, ShoppingCart,
  Search, ShieldCheck, Linkedin, ArrowRight, CheckCircle2,
  TrendingUp, Users, Clock, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Memoised card to prevent unnecessary re-renders
const ServiceCard = memo(function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_80px_-15px_rgba(99,102,241,0.25)] hover:-translate-y-2 transition-all duration-500 cursor-pointer"
    >
      {/* Gradient accent top border */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${service.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Subtle corner glow */}
      <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${service.glow} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />

      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Icon + number row */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-400`}>
            <Icon size={26} className="text-white" strokeWidth={1.8} />
          </div>
          <span className="text-5xl font-extrabold text-white/5 select-none leading-none group-hover:text-white/10 transition-colors duration-500">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* Feature pills */}
        <ul className="flex flex-wrap gap-2 mb-7">
          {service.features.map((f, i) => (
            <li
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium"
            >
              <CheckCircle2 size={11} className="text-blue-400 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-purple-400 transition-colors duration-300"
          aria-label={`Learn more about ${service.title}`}
        >
          Get Started
          <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.article>
  );
});

const services = [
  {
    icon: LayoutTemplate,
    title: 'Website Development',
    description:
      'Custom, high-performance websites built with React, Next.js and modern frameworks — delivering blazing speed, scalability, and flawless SEO.',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'from-blue-500 to-indigo-600',
    features: ['React & Next.js', 'Performance First', 'SEO-Semantic HTML', 'API Integrations'],
  },
  {
    icon: MonitorSmartphone,
    title: 'UI/UX Design',
    description:
      'Pixel-perfect, conversion-focused interfaces that captivate users and communicate your brand story with clarity and precision.',
    gradient: 'from-purple-500 to-pink-600',
    glow: 'from-purple-500 to-pink-600',
    features: ['Wireframing & Prototyping', 'Design Systems', 'Figma to Code', 'User Research'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description:
      'Scalable headless commerce stores that maximise revenue through seamless shopping experiences, fast checkouts, and smart integrations.',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'from-emerald-500 to-teal-600',
    features: ['Headless Commerce', 'Payment Gateways', 'Inventory Sync', 'Checkout Optimisation'],
  },
  {
    icon: Search,
    title: 'SEO Optimisation',
    description:
      'Data-driven SEO strategies that put you on page one — from technical audits and Core Web Vitals to structured data and content planning.',
    gradient: 'from-amber-500 to-orange-600',
    glow: 'from-amber-500 to-orange-600',
    features: ['Technical Audits', 'Keyword Research', 'Core Web Vitals', 'Schema Markup'],
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & Support',
    description:
      '24/7 uptime monitoring, security patches, and performance tuning so your digital assets stay fast, secure, and future-proof.',
    gradient: 'from-sky-500 to-cyan-600',
    glow: 'from-sky-500 to-cyan-600',
    features: ['24/7 Monitoring', 'Security Patches', 'SLA Support', 'Performance Tuning'],
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Optimisation',
    description:
      'Strategic executive branding and B2B lead-generation campaigns that expand your professional network and drive qualified inbound leads.',
    gradient: 'from-indigo-500 to-blue-700',
    glow: 'from-indigo-500 to-blue-700',
    features: ['Executive Branding', 'B2B Lead Gen', 'Content Strategy', 'Network Campaigns'],
  },
];

const stats = [
  { icon: TrendingUp, value: '3×', label: 'Average ROI for clients' },
  { icon: Users, value: '50+', label: 'Brands served globally' },
  { icon: Clock, value: '< 2s', label: 'Avg. page load time' },
  { icon: Award, value: '250+', label: 'Projects delivered' },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-28 bg-slate-950 relative overflow-hidden"
    >
      {/* Background mesh gradient */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
            >
              <span className="w-8 h-px bg-blue-400" />
              Our Expertise
            </motion.div>
            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              Premium Digital Services<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Built for Modern Brands
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-slate-400 text-base leading-relaxed max-w-xl"
            >
              End-to-end digital solutions — from pixel-perfect design to high-performance
              development — engineered to grow your business and delight your users.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 shrink-0"
            >
              Start a Project <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0">
                  <StatIcon size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white leading-none">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-tight">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Service cards grid — 3 columns on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20 relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.5)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Ready to build something exceptional?
            </h3>
            <p className="text-blue-100 text-base max-w-xl">
              Let's talk about your project. We'll craft a tailored strategy and deliver results that exceed expectations.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-sm shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
