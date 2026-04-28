import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedCaseStudy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  return (
    <section ref={sectionRef} className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-blue-600"></span>
              Featured Case Study
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Redefining e-commerce <br/> for <span className="text-gradient">Lumina Fashion</span>
            </h2>
          </div>
          <Link to="/portfolio" className="grid-button-alt shrink-0 hidden md:inline-flex">
            View All Work
          </Link>
        </div>

        <div className="relative w-full h-[600px] md:h-[700px] rounded-[2.5rem] overflow-hidden group cursor-pointer border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] bg-slate-50">
          <motion.div 
            style={{ y: y1 }}
            className="absolute inset-[-10%] w-[120%] h-[120%]"
          >
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Lumina Fashion Case Study" 
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
            <div className="max-w-2xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
               <div className="flex flex-wrap gap-3 mb-6">
                 <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/20">E-Commerce</span>
                 <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/20">Shopify Plus</span>
               </div>
               <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">A 300% increase in mobile conversion rate.</h3>
               <p className="text-lg text-slate-300 font-medium mb-8 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                 We completely reimagined the digital storefront for Lumina Fashion, focusing on a mobile-first approach, lightning-fast transitions, and a seamless checkout experience.
               </p>
               
               <Link to="#" className="inline-flex items-center gap-4 text-white font-bold group/link">
                 <span className="text-lg">Read Case Study</span>
                 <span className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover/link:bg-blue-500 group-hover/link:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                   <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                 </span>
               </Link>
            </div>
          </div>
        </div>

        <Link to="/portfolio" className="grid-button-alt w-full justify-center mt-8 md:hidden">
          View All Work
        </Link>
      </div>
    </section>
  );
}
