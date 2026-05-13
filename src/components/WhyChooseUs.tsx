import React, { memo } from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, HeartHandshake, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: Zap,
    title: 'Lightning-Fast Delivery',
    description:
      'We respect your deadlines. Our agile workflow enables rapid development cycles without ever compromising on premium quality or attention to detail.',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'from-amber-500 to-orange-500',
    tag: 'Agile Delivery',
  },
  {
    icon: Code2,
    title: 'Modern Technology Stack',
    description:
      'We build with React, Next.js, TypeScript and the latest cloud infrastructure to ensure your product is scalable, secure, and blazing fast — today and tomorrow.',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'from-blue-500 to-indigo-600',
    tag: 'React · Next.js · TypeScript',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromised Quality',
    description:
      'Every line of code and every pixel of design passes through rigorous quality assurance. We ship products that meet the highest global standards — nothing less.',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'from-emerald-500 to-teal-600',
    tag: 'QA Certified',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Long-Term Support',
    description:
      'Our partnership doesn\'t end at launch. We provide reliable ongoing maintenance, transparent reporting, and proactive support at every stage of your growth.',
    gradient: 'from-purple-500 to-pink-600',
    glow: 'from-purple-500 to-pink-600',
    tag: '24/7 Support',
  },
];

const ReasonCard = memo(function ReasonCard({
  reason, index,
}: {
  reason: (typeof reasons)[number]; index: number;
}) {
  const Icon = reason.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-white/10 bg-slate-900 p-8 overflow-hidden hover:border-white/20 hover:-translate-y-1.5 transition-all duration-400 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.2)]"
    >
      {/* Top accent */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${reason.gradient}`} />

      {/* Corner glow on hover */}
      <div
        className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${reason.glow} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Icon + tag row */}
        <div className="flex items-start justify-between">
          <div className={`w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-400`}>
            <Icon size={24} className="text-white" strokeWidth={1.8} />
          </div>
          <span className="text-xs font-bold text-slate-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full tracking-wide">
            {reason.tag}
          </span>
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
            {reason.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {reason.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
});

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-heading"
      className="py-28 bg-slate-950 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/6 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4"
            >
              <span className="w-6 h-px bg-purple-400" />
              Why Choose Us
            </motion.div>

            <motion.h2
              id="why-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              We're more than an agency —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                we're your growth partner.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-4 text-slate-400 text-base leading-relaxed max-w-xl"
            >
              We combine world-class design, cutting-edge engineering and data-driven strategy to deliver
              digital products that perform. Here's what makes us different.
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
              aria-label="Contact us to start your project"
            >
              Start a Project <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500"
        >
          {[
            '✦ No long-term lock-in contracts',
            '✦ Transparent, fixed-scope pricing',
            '✦ Results guaranteed or we revise for free',
            '✦ Direct Slack access to your team',
          ].map((item, i) => (
            <span key={i} className="font-medium text-slate-400">{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
