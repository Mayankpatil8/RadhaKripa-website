import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, HeartHandshake, Code2 } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    description: 'We respect your deadlines. Our agile workflow ensures rapid development without compromising on the premium quality of the final product.'
  },
  {
    icon: Code2,
    title: 'Modern Technology Stack',
    description: 'We build with the latest, most robust technologies (React, Next.js, Tailwind) to ensure your app is scalable, secure, and blazing fast.'
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromised Quality',
    description: 'Every line of code and pixel of design goes through rigorous quality assurance to meet the highest industry standards.'
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'Our relationship doesn\'t end at launch. We provide reliable ongoing support and transparent communication at every step.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#FCFBF8] border-b-2 border-[#2D241F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#D1643A] text-sm font-bold tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-[#D1643A]"></span>
            Why Choose Us
            <span className="w-8 h-px bg-[#D1643A]"></span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#1C1512] mb-6">Why partner with us?</h2>
          <p className="text-lg text-[#4A3D36] font-medium">
            We are more than just an agency; we are your technical co-founders dedicated to your digital success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid-box p-8 flex gap-6 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#E2D8C9] border border-[#2D241F] text-[#2D241F] rounded-none flex items-center justify-center group-hover:bg-[#D1643A] group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1C1512] mb-3">{reason.title}</h3>
                  <p className="text-[#4A3D36] leading-relaxed text-sm font-medium">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
