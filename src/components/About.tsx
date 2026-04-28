import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Code, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counter: React.FC<{ value: string; label: string; icon: React.ElementType; delay: number }> = ({ value, label, icon: Icon, delay }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const target = parseInt(value.replace(/[^0-9]/g, ''));
      const suffix = value.replace(/[0-9]/g, '');
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-6 flex flex-col items-center text-center"
    >
      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 shadow-inner">
        <Icon size={28} />
      </div>
      <div className="text-4xl font-bold text-slate-900 mb-1">
        {count}{value.replace(/[0-9]/g, '')}
      </div>
      <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

export default function About() {
  const stats = [
    { value: '5+', label: 'Years Experience', icon: Trophy },
    { value: '20+', label: 'Projects Shipped', icon: Code },
    { value: '100+', label: 'Happy Clients', icon: Users },
  ];

  const timeline = [
    { year: '2024', title: 'The Beginning', desc: 'Started as a passionate duo.' },
    { year: '2025', title: 'Agency Expansion', desc: 'Grew to a team of 20+ experts.' },
    { year: '2026', title: 'Global Reach', desc: 'Serving enterprise clients worldwide.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold tracking-wider uppercase mb-2">
              <span className="w-8 h-px bg-blue-600"></span>
              Our Story
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              We design digital ecosystems that drive <span className="text-gradient">growth.</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              At Radhekripa Web Developer, we don't just build websites; we engineer digital experiences. Founded on the principles of elegant design and robust architecture, our agency specializes in creating premium interfaces that captivate users and elevate brands.
            </p>

            <ul className="space-y-3 mt-2 mb-4">
              {[
                'Award-winning UI/UX Design',
                'High-performance Web Architecture',
                'Conversion-optimized user journeys'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors group w-max mt-2">
              Discover Our Process
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Timeline & Visuals */}
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-slate-200 hidden sm:block" />
            <div className="space-y-8 relative">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col sm:flex-row gap-6 sm:items-center relative"
                >
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-50 flex items-center justify-center text-sm font-bold text-blue-600 shadow-sm relative z-10 hidden sm:flex shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  </div>
                  <div className="glass-card p-6 flex-grow">
                    <span className="text-sm font-bold text-blue-600 mb-1 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Counter key={index} {...stat} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
