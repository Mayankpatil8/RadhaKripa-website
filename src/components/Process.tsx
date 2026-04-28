import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your brand, understanding your goals, audience, and market to formulate a winning digital strategy.'
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description: 'Our design team crafts intuitive, pixel-perfect interfaces that align with your brand identity and engage users.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'We bring the designs to life using modern tech stacks, ensuring high performance, scalability, and clean code.'
  },
  {
    number: '04',
    title: 'Launch & Grow',
    description: 'Rigorous testing precedes the final launch. Post-launch, we provide ongoing support and optimization.'
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-blue-50/30 to-purple-50/30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="lg:sticky top-32 h-fit">
            <div className="inline-flex items-center gap-2 text-purple-600 text-sm font-bold tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-purple-600"></span>
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              A proven workflow for <span className="text-gradient">digital excellence.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We follow a streamlined, transparent process that ensures your project is delivered on time, within budget, and above expectations.
            </p>
          </div>

          <div className="relative pl-8 md:pl-16 py-10">
            {/* Background Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-100" />
            
            {/* Animated Progress Line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 origin-top"
            />

            <div className="flex flex-col gap-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[33px] md:-left-[65px] top-1 w-6 h-6 rounded-full bg-white border-4 border-slate-200 group-hover:border-blue-500 transition-colors duration-300 shadow-sm z-10" />
                  
                  <div className="glass-card p-8 group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start gap-6">
                      <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 items-center justify-center font-display text-3xl font-bold shadow-inner">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                          <span className="sm:hidden text-blue-600 text-xl font-display">{step.number}.</span>
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
