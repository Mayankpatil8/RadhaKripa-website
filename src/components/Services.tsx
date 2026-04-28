import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutTemplate, MonitorSmartphone, ShoppingCart, Search, Cog, ArrowRight, ShieldCheck, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: LayoutTemplate,
      title: 'Website Development',
      description: 'Custom, high-performance websites built with modern frameworks to ensure scale and speed.',
      image: '/service_dev_1777291206277.png',
      tags: ['React', 'Next.js', 'Vite']
    },
    {
      icon: MonitorSmartphone,
      title: 'UI/UX Design',
      description: 'Intuitive, pixel-perfect interfaces that engage users and elevate your brand identity.',
      image: '/service_design_1777291189382.png',
      tags: ['Figma', 'Prototyping', 'Design Systems']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores driving conversions with seamless shopping experiences.',
      image: '/service_dev_1777291206277.png',
      tags: ['Shopify', 'WooCommerce', 'Stripe']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Data-driven strategies to improve your organic visibility and search rankings.',
      image: '/service_design_1777291189382.png',
      tags: ['Technical SEO', 'Content Strategy', 'Analytics']
    },
    {
      icon: ShieldCheck,
      title: 'Maintenance & Support',
      description: 'Ongoing technical support and regular maintenance to keep your digital assets secure and up-to-date.',
      image: '/service_dev_1777291206277.png',
      tags: ['Support', 'Security', 'Updates']
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Optimization',
      description: 'Strategic profile enhancement and content management to maximize your professional network reach.',
      image: '/service_design_1777291189382.png',
      tags: ['Profile Branding', 'Networking', 'B2B Leads']
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-r from-blue-50/50 to-purple-50/50 skew-y-3 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-purple-600 text-sm font-bold tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-purple-600"></span>
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Premium Services <br/> for <span className="text-gradient">Modern Brands</span>
            </h2>
          </div>
          <Link to="/contact" className="grid-button-alt shrink-0">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 w-full h-full bg-white transition-transform duration-700">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute right-0 bottom-0 w-3/4 h-3/4 object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out origin-bottom-right"
                  />
                </div>
                
                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/20 backdrop-blur-[2px] transition-all duration-500 group-hover:backdrop-blur-0 group-hover:from-white/90 group-hover:via-white/40 group-hover:to-transparent" />
                
                {/* Border */}
                <div className="absolute inset-0 border border-white/50 rounded-3xl pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_8px_16px_rgba(0,0,0,0.06)] flex items-center justify-center mb-8 text-blue-600 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-blue-500/20 group-hover:text-purple-600">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 mb-6 max-w-sm leading-relaxed font-medium transition-all duration-500">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                     <AnimatePresence>
                        {isHovered && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0, y: 10 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-wrap gap-2 mb-6"
                          >
                             {service.tags.map((tag, i) => (
                               <span key={i} className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-xs font-semibold text-slate-700 shadow-sm border border-slate-100">
                                 {tag}
                               </span>
                             ))}
                          </motion.div>
                        )}
                     </AnimatePresence>
                    
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-purple-600 transition-colors uppercase tracking-wider">
                      Learn more <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
