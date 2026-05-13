import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const insights = [
  {
    category: 'Engineering',
    date: 'Apr 24, 2026',
    title: 'Core Web Vitals: A Deep Dive into High-Performance Architecture',
    description: 'Learn how we achieved a perfect 100 Lighthouse score for enterprise SaaS applications by optimizing frontend delivery and server-side rendering.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'Design',
    date: 'Apr 18, 2026',
    title: 'The Future of UI: Beyond Glassmorphism and Neumorphism',
    description: 'Exploring upcoming trends in digital product design, focusing on spatial computing interfaces and micro-interaction strategies.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'Strategy',
    date: 'Apr 10, 2026',
    title: 'Scaling SaaS: Technical Debt vs. Feature Velocity',
    description: 'A strategic framework for CTOs and product managers balancing rapid market deployment with maintainable, robust codebases.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Insights() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-blue-600"></span>
              Industry Knowledge
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Our latest <span className="text-gradient">Insights</span>
            </h2>
          </div>
          <Link to="#" className="grid-button-alt shrink-0">
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((insight, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-500 group-hover:bg-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider">
                  {insight.category}
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <div className="text-sm font-medium text-slate-500 mb-4">{insight.date}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {insight.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {insight.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 mt-auto uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                  Read Article
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
