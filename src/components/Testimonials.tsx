import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Quote, Award, ShieldCheck, BadgeCheck, Trophy, Play } from 'lucide-react';

const baseTestimonials = [
  {
    id: 1,
    content: "Radhekripa helped us redesign our website with a clean and modern approach. We've seen a noticeable improvement in user engagement and inquiries.",
    author: "Ankit Sharma",
    role: "Marketing Head, NovaTech Solutions",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    content: "The team understood our requirements perfectly and delivered a smooth e-commerce experience. Communication was clear throughout the project.",
    author: "Priya Mehta",
    role: "Founder, Lumina Store",
    avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    content: "We wanted a premium look for our brand and they executed it very well. The UI/UX feels polished and aligns with our audience.",
    author: "Rahul Desai",
    role: "Director, Artisan Web India",
    avatar: ""
  },
  {
    id: 4,
    content: "Professional team with good technical skills. They delivered the project on time and were responsive to feedback and changes.",
    author: "Sneha Kulkarni",
    role: "CEO, Sterling Realty",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  }
];

const testimonials = [...baseTestimonials, ...baseTestimonials.map(t => ({ ...t, id: t.id + 10 }))];

const certificates = [
  {
    name: "Oracle Certified Java Developer",
    org: "Oracle",
    icon: ShieldCheck
  },
  {
    name: "Linux Foundation Certified",
    org: "The Linux Foundation",
    icon: BadgeCheck
  },
  {
    name: "IBM AI Engineering Certificate",
    org: "IBM",
    icon: Trophy
  },
  {
    name: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    icon: Award
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} className="py-32 bg-slate-900 text-white relative overflow-hidden">

      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-bold tracking-wider uppercase mb-4">
            <span className="w-8 h-px bg-blue-400"></span>
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Don't just take our <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">word for it.</span>
          </h2>
        </div>

        {/* Video Testimonial Preview */}
        <div className="relative w-full md:w-80 h-48 rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shrink-0">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" alt="Video cover" />
          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
              <Play size={24} className="ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-sm font-medium">Watch Video Reel</div>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden w-full group mb-32">
        {/* Left/Right Fades for smooth look */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4"
          style={{ x }}
        >
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="w-[350px] md:w-[450px] shrink-0 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 relative transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <Quote size={40} className="text-blue-500/20 absolute top-8 right-8" />

              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>

              <div className="mb-8 relative z-10 text-slate-300 leading-relaxed text-sm md:text-base font-medium">
                "{test.content}"
              </div>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <img src={test.avatar} alt={test.author} className="w-12 h-12 rounded-full object-cover border border-white/20" />
                <div>
                  <div className="font-bold text-white text-sm md:text-base">{test.author}</div>
                  <div className="text-xs text-blue-400 font-medium tracking-wide">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col text-center md:text-left shrink-0">
              <span className="text-blue-400 text-sm font-bold tracking-wider uppercase mb-2">Excellence</span>
              <h3 className="text-3xl font-bold text-white">Certifications &<br />Awards</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {certificates.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div key={index} className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-colors flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white leading-tight mb-1">{cert.name}</div>
                      <div className="text-xs text-slate-400">{cert.org}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
