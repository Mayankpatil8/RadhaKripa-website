import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Microcraft',
    category: 'Websites',
    image: '/portfolio_1_1777291133011.png',
    height: 'h-[400px]',
    link: 'https://microcraft.in/'
  },
  {
    id: 2,
    title: 'Eurocore Global',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    height: 'h-[300px]',
    link: 'https://eurocoreglobal.com/'
  },
  {
    id: 3,
    title: 'Indo Euro Hub',
    category: 'Websites',
    image: '/portfolio_2_1777291172081.png',
    height: 'h-[500px]',
    link: 'https://indoeurohub.netlify.app/'
  },
  {
    id: 4,
    title: 'Lumina Fashion',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    height: 'h-[350px]',
    link: '#'
  },
  {
    id: 5,
    title: 'HealthTech Platform',
    category: 'UI Design',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800',
    height: 'h-[400px]',
    link: '#'
  },
  {
    id: 6,
    title: 'Creative Agency',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    height: 'h-[300px]',
    link: '#'
  }
];

const categories = ['All', 'Websites', 'E-commerce', 'UI Design', 'Mobile App'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    proj => activeCategory === 'All' || proj.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-blue-600"></span>
              Selected Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Crafted with precision,<br/>built for <span className="text-gradient">impact.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.a
                href={project.link}
                target={project.link !== '#' ? "_blank" : "_self"}
                rel={project.link !== '#' ? "noopener noreferrer" : ""}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-100 break-inside-avoid shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-shadow duration-500 ${project.height} block`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full font-medium text-white text-sm hover:bg-white hover:text-slate-900 transition-colors w-max">
                    View Live Site <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
           <button className="grid-button-alt inline-flex mx-auto">
              Load More Projects
           </button>
        </div>
      </div>
    </section>
  );
}
