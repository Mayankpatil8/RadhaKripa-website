import React from 'react';
import { motion } from 'motion/react';
import { Quote, Trophy, ShieldCheck, BadgeCheck, Award, Star } from 'lucide-react';

const baseTestimonials = [
  {
    id: 1,
    content: "Radhekripa delivered a fast, modern website that actually converts visitors into inquiries. The team was responsive and understood our B2B goals from day one.",
    author: "Microcraft Team",
    role: "Client — Microcraft.in",
    avatar: "",
    rating: 5,
  },
  {
    id: 2,
    content: "We needed a clean, professional web presence for our global trade operations. Radhekripa nailed the brief — sleek design, excellent performance, and delivered on schedule.",
    author: "Eurocore Global",
    role: "Client — EurocoreGlobal.com",
    avatar: "",
    rating: 5,
  },
  {
    id: 3,
    content: "Our Bhojnalaya needed an online presence that matched our local reputation. The team built a warm, easy-to-navigate site that our customers love.",
    author: "Kadambari Bhojnalaya",
    role: "Client — Kadambaribhojnalaya.netlify.app",
    avatar: "",
    rating: 5,
  },
  {
    id: 4,
    content: "Great experience working with Radhekripa. They simplified our coaching centre's online identity and made it very easy for students to find and contact us.",
    author: "Anant Coaching Classes",
    role: "Client — Anant Coaching",
    avatar: "",
    rating: 5,
  },
  {
    id: 5,
    content: "Very professional team. They understood the spiritual nature of our project and designed something that truly represents our temple. Highly recommended.",
    author: "Iskcon Temple Pune",
    role: "Client — Iskconweb.netlify.app",
    avatar: "",
    rating: 5,
  },
  {
    id: 6,
    content: "The branding for Juice Lover came out amazing. Fresh, colourful, and exactly what we envisioned. Our customers recognise us instantly now.",
    author: "Juice Lover",
    role: "Client — Juicelover.netlify.app",
    avatar: "",
    rating: 5,
  },
];

// Triplicate for seamless infinite loop
const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

const stats = [
  { icon: Trophy, label: '100+ Projects Delivered', sub: 'Web, UI & E-commerce' },
  { icon: ShieldCheck, label: 'Core Web Vitals Ready', sub: 'Google PageSpeed Optimised' },
  { icon: BadgeCheck, label: 'React & Next.js Stack', sub: 'Modern Frontend Expertise' },
  { icon: Award, label: '100% On-Time Delivery', sub: 'Client satisfaction first' },
];

function AvatarFallback({ name }: { name: string }) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('');
  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
      style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-blue-400" />
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-blue-400">Client Success</span>
            <span className="w-8 h-px bg-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Don't just take our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              word for it.
            </span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Here's what our clients say after working with us — in their own words.
          </p>
        </div>
      </div>

      {/* ── Infinite Auto-Scroll Testimonials ── */}
      <div className="relative overflow-hidden w-full mb-20">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-6 px-4"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            ease: 'linear',
            duration: 40,
            repeat: Infinity,
          }}
          style={{ width: 'max-content' }}
        >
          {testimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[340px] md:w-[400px] flex-shrink-0 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1">
                <Quote size={28} className="absolute -top-1 -left-1 text-blue-500/20" />
                <p className="text-slate-300 text-sm leading-relaxed pl-4">
                  "{t.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/08" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0 border border-white/10"
                  />
                ) : (
                  <AvatarFallback name={t.author} />
                )}
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-blue-400 font-medium mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Stats / Credibility Bar ── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className="rounded-2xl p-8"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center gap-4 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Icon size={22} className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">{s.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{s.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
