import React from 'react';
import { motion } from 'motion/react';
import { Code2, Server, Database, Cloud, Wrench } from 'lucide-react';

const techCategories = [
  {
    category: 'Frontend',
    icon: Code2,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Motion']
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    techs: ['Node.js', 'Express', 'Python', 'GraphQL']
  },
  {
    category: 'Database',
    icon: Database,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    techs: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    category: 'Cloud',
    icon: Cloud,
    color: 'text-sky-500',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    techs: ['AWS', 'Vercel', 'Google Cloud', 'Docker']
  },
  {
    category: 'Tools',
    icon: Wrench,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    techs: ['GitHub', 'Figma', 'Jenkins', 'Notion', 'Slack']
  }
];

export default function TechStack() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 text-blue-600 text-sm font-bold tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-blue-600"></span>
            Modern Architecture
            <span className="w-8 h-px bg-blue-600"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Technologies <span className="text-gradient">We Use</span>
          </h2>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            We leverage enterprise-grade technologies to build secure, scalable, and high-performance digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                {/* Decorative background glow on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color.replace('text-', 'from-').replace('500', '400/20')} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`} />

                <div className={`w-14 h-14 rounded-2xl ${cat.bg} ${cat.border} border flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className={cat.color} size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10">{cat.category}</h3>

                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                  {cat.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 shadow-sm group-hover:border-slate-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
