import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
  label?: string;
}

export default function PageHeader({ title, subtitle, image, label = "Premium Quality" }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#F4F0EC] border-b-2 border-[#2D241F] relative overflow-hidden">
       {/* High-end subtle grid background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2D8C9_1px,transparent_1px),linear-gradient(to_bottom,#E2D8C9_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

       <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col lg:flex-row gap-12 items-end">
           <div className="flex-1 pb-4">
             <div className="inline-flex items-center gap-2 text-[#D1643A] text-sm font-bold tracking-wider uppercase mb-6">
               <span className="w-8 h-px bg-[#D1643A]"></span>
               {label}
             </div>
             <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#1C1512] uppercase tracking-tight mb-6 leading-[0.9]"
             >
               {title}
             </motion.h1>
             <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-[#4A3D36] font-medium max-w-xl leading-relaxed"
             >
               {subtitle}
             </motion.p>
           </div>
           
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-[45%] max-w-2xl grid-box p-3 bg-[#FCFBF8] shrink-0"
           >
             <div className="w-full aspect-[4/3] border-2 border-[#2D241F] overflow-hidden relative">
               <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover grayscale contrast-[1.1] sepia-[.1] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" 
               />
               <div className="absolute inset-0 border-[4px] border-transparent hover:border-[#D1643A]/20 transition-colors pointer-events-none z-10" />
             </div>
           </motion.div>
         </div>
       </div>
    </section>
  );
}
