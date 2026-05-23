import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const allProjects = [
  { id: 1, title: 'Microcraft',                       category: 'Web Development', image: '/portfolio1.png',  link: 'https://microcraft.in/' },
  { id: 2, title: 'Eurocore Global',                   category: 'Web Development', image: 'portfolio2.png',   link: 'https://eurocoreglobal.com/' },
  { id: 3, title: 'Indo Euro Hub',                     category: 'E-commerce',      image: 'portfolio3.png',   link: 'https://indoeurocore.com/' },
  { id: 4, title: 'Iskcon Temple Pune',                category: 'UI / UX Design',  image: '/portfolio5.png',  link: 'https://iskconweb.netlify.app/' },
  { id: 5, title: 'MarketPlace Platform',              category: 'E-commerce',      image: '/portfolio4.png',  link: 'https://marketpalce1.netlify.app/' },
  { id: 6, title: 'Road Accident Severity Prediction', category: 'AIML',            image: 'portfolio6.png',   link: 'https://roadsafetyy.netlify.app/' },
  // Load More
  { id: 7, title: 'Kadambari Bhojnalaya',             category: 'UI Design',       image: '/portfolio7.png',  link: 'https://kadambaribhojnalaya.netlify.app/' },
  { id: 8, title: 'Anant Coaching Classes',            category: 'UI Design',       image: 'portfolio8.png',   link: 'https://eloquent-otter-523e02.netlify.app/' },
  { id: 9, title: 'Juice Lover',                       category: 'Brand Identity',  image: 'portfolio9.png',   link: 'https://juicelover.netlify.app/' },
];

const INITIAL_COUNT = 6;
const categories = ['All', 'AIML', 'Web Development', 'E-commerce', 'UI Design', 'Brand Identity'];

// Category accent colours
const categoryColor: Record<string, string> = {
  'Web Development': '#3b82f6',
  'E-commerce':      '#10b981',
  'UI / UX Design':  '#8b5cf6',
  'UI Design':       '#8b5cf6',
  'AIML':            '#f59e0b',
  'Brand Identity':  '#ec4899',
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show:   { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.35 } },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [loading, setLoading] = useState(false);

  const filteredProjects = allProjects.filter(
    proj => activeCategory === 'All' || proj.category === activeCategory
  );
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => { setVisibleCount(p => p + 3); setLoading(false); }, 500);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section id="portfolio" className="py-28 bg-white relative overflow-hidden">

      {/* Top gradient rule */}
      <div
        className="absolute top-0 inset-x-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent 5%, #3b82f6 35%, #8b5cf6 65%, transparent 95%)' }}
      />

      {/* Faint grid watermark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg,#64748b 0,#64748b 1px,transparent 1px,transparent 64px), repeating-linear-gradient(90deg,#64748b 0,#64748b 1px,transparent 1px,transparent 64px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)' }} />
              <span className="text-[11px] font-black tracking-[0.22em] uppercase text-blue-600">Selected Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight">
              Crafted with precision,<br />
              built for{' '}
              <span style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                impact.
              </span>
            </h2>
            <p className="mt-5 text-slate-500 text-base max-w-lg leading-relaxed">
              A curated showcase of digital experiences built for ambitious brands — from AI to e-commerce.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {categories.map(cat => {
              const active = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  whileTap={{ scale: 0.94 }}
                  className="px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300"
                  style={
                    active
                      ? { background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', color: '#fff', boxShadow: '0 4px 20px rgba(99,102,241,0.35)' }
                      : { background: '#f8fafc', color: '#64748b', border: '1.5px solid #e2e8f0' }
                  }
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Animated Grid ── */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => {
              const accentColor = categoryColor[project.category] ?? '#3b82f6';
              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  exit="exit"
                  className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    border: '1.5px solid #eef2f8',
                    boxShadow: '0 4px 24px rgba(15,23,42,0.07)',
                    background: '#fff',
                  }}
                  whileHover={{ y: -6, boxShadow: `0 20px 48px rgba(15,23,42,0.13), 0 0 0 2px ${accentColor}28` }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  {/* ── Image (always full) ── */}
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                    />

                    {/* Hover veil — icon only, NO text */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{ background: 'rgba(8,12,28,0.42)', backdropFilter: 'blur(1px)' }}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex items-center justify-center w-[60px] h-[60px] rounded-full transition-transform duration-300 hover:scale-110"
                        style={{
                          background: 'rgba(255,255,255,0.15)',
                          border: '1.5px solid rgba(255,255,255,0.45)',
                          backdropFilter: 'blur(16px)',
                          boxShadow: `0 0 40px ${accentColor}66`,
                        }}
                      >
                        <ExternalLink size={22} color="#fff" />
                      </a>
                    </motion.div>

                    {/* Accent corner tag */}
                    <div
                      className="absolute top-3.5 left-3.5 text-[9px] font-black tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: `${accentColor}18`,
                        color: accentColor,
                        border: `1px solid ${accentColor}33`,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* ── Card footer ── */}
                  <div
                    className="flex items-center justify-between gap-3 px-5 py-4"
                    style={{ borderTop: '1px solid #f0f4fb' }}
                  >
                    <div className="min-w-0">
                      <h3 className="text-[14.5px] font-bold text-slate-800 leading-snug truncate">
                        {project.title}
                      </h3>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                      style={{
                        background: `linear-gradient(135deg, ${accentColor}, #8b5cf6)`,
                        boxShadow: `0 4px 14px ${accentColor}44`,
                      }}
                    >
                      <ArrowUpRight size={15} color="#fff" />
                    </a>
                  </div>

                  {/* Bottom accent bar (slides in on hover) */}
                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl"
                    style={{ background: `linear-gradient(90deg, ${accentColor}, #8b5cf6)` }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ── Load More / Done ── */}
        <div className="mt-16 flex justify-center">
          {hasMore ? (
            <motion.button
              onClick={handleLoadMore}
              disabled={loading}
              whileHover={!loading ? { scale: 1.04 } : {}}
              whileTap={!loading ? { scale: 0.97 } : {}}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-sm transition-all duration-300"
              style={
                loading
                  ? { background: '#f1f5f9', color: '#94a3b8', border: '1.5px solid #e2e8f0' }
                  : { background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)', color: '#fff', boxShadow: '0 8px 32px rgba(99,102,241,0.32)' }
              }
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Loading…
                </>
              ) : 'Load More Projects'}
            </motion.button>
          ) : (
            filteredProjects.length > INITIAL_COUNT && (
              <div className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate-400 px-6 py-3 rounded-full border border-slate-100 bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All projects loaded
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
