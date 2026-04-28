import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-[3rem] bg-slate-950 p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">extraordinary?</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium max-w-xl">
              Let's discuss how we can help your brand grow through premium digital experiences.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Link 
              to="/contact" 
              className="group relative px-10 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] inline-flex items-center gap-4"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Mail size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                Start a Project
              </span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform group-hover:text-white" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
