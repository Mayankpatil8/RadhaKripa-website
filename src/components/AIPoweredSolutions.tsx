import React from 'react';
import { motion } from 'motion/react';
import { Bot, Cpu, Sparkles, LineChart } from 'lucide-react';

const aiFeatures = [
  {
    icon: Bot,
    title: 'Intelligent Chatbots',
    description: 'Custom AI conversational agents that enhance customer support and drive 24/7 engagement.',
    delay: 0.1
  },
  {
    icon: Cpu,
    title: 'Workflow Automation',
    description: 'Streamline operations with intelligent automation tools that reduce manual overhead and scale efficiently.',
    delay: 0.2
  },
  {
    icon: Sparkles,
    title: 'Smart Interactions',
    description: 'Personalized user experiences powered by machine learning algorithms that adapt to user behavior.',
    delay: 0.3
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Data-driven insights utilizing advanced AI models to forecast trends and optimize business strategies.',
    delay: 0.4
  }
];

export default function AIPoweredSolutions() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Abstract AI/Tech Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
      
      {/* Glowing grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0iTTAgMGg0MHY0MEgwekIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwaDF2NDBIMHptMCAzOWg0MHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-semibold mb-8 backdrop-blur-md">
              <Sparkles size={16} />
              <span>Next-Gen Capabilities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              AI-Powered <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Solutions
              </span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-10 leading-relaxed font-medium">
              We integrate state-of-the-art Artificial Intelligence into your digital products. From conversational interfaces to predictive modeling, we build systems that think, learn, and grow with your business.
            </p>

            <button className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold uppercase tracking-wider overflow-hidden hover:text-white transition-colors duration-300">
              <span className="relative z-10">Explore AI Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            </button>
          </div>

          {/* Right Column: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-slate-800/50 transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.1)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
