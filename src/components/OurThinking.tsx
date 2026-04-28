import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OurThinking() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 sticky top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold tracking-wider uppercase mb-6">
                <span className="w-8 h-px bg-blue-600"></span>
                Our Thinking
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
                The philosophy behind our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">success.</span>
              </h2>
              <Link to="/about" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors group mt-4">
                <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                Meet the Team
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12 lg:pl-10 lg:border-l border-slate-200/60">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Design is not just what it looks like.</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We believe that premium design is fundamentally about how a product works. Our process strips away the unnecessary, focusing deeply on user psychology, fluid interactions, and flawless performance. It's about engineering trust at first glance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Scale through systems.</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                Every project we build is backed by a robust design system and scalable architecture. We don't just solve today's problems; we anticipate your brand's evolution, ensuring your digital presence remains powerful and adaptable for years to come.
              </p>
              
              {/* Image grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="w-full h-64 rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-100 group">
                   <img src="/service_design_1777291189382.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Design thinking" />
                </div>
                <div className="w-full h-64 rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-100 group mt-0 sm:mt-12">
                   <img src="/service_dev_1777291206277.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Development process" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
