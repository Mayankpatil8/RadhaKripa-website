import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Layers, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroMedia = [
  {
    type: "image",
    src: "/six.png",
    title: "Digital Excellence",
    subtitle: "High-performance applications built with modern tools."
  },
  {
    type: "image",
    src: "/fifth.png",
    title: "Premium Interfaces",
    subtitle: "Creating immersive, scalable web platforms."
  },
  {
    type: "image",
    src: "/third.png",
    title: "Global Reach",
    subtitle: "Connecting brands with audiences worldwide."
  },
  {
    type: "image",
    src: "/first.png",
    title: "Global Reach",
    subtitle: "Connecting brands with audiences worldwide."
  },
  {
    type: "image",
    src: "/fifth.png",
    title: "Global Reach",
    subtitle: "Connecting brands with audiences worldwide."
  },
  {
    type: "image",
    src: "/six.png",
    title: "Global Reach",
    subtitle: "Connecting brands with audiences worldwide."
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Motion values — update outside React render cycle (no re-renders on mouse move)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const card1X = useSpring(useTransform(mouseX, v => v * 1.5), { stiffness: 75, damping: 20 });
  const card1Y = useSpring(useTransform(mouseY, v => v * 1.5), { stiffness: 75, damping: 20 });
  const card2X = useSpring(useTransform(mouseX, v => v * -2), { stiffness: 50, damping: 25 });
  const card2Y = useSpring(useTransform(mouseY, v => v * -2), { stiffness: 50, damping: 25 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroMedia.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroMedia.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroMedia.length) % heroMedia.length);
  };

  return (
    <section
      className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={heroMedia[currentIndex].src}
            alt="Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Heavy Premium Overlay for Perfect Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-blue-300 text-sm font-semibold mb-8 border border-white/20 shadow-2xl"
            >
              <Sparkles size={16} />
              <span>Awwwards Winning Agency</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 tracking-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              Premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Digital Agency</span><br />
              & Web Development
            </h1>

            <p className="text-lg text-slate-200 mb-10 max-w-xl leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              We build scalable digital products, custom SaaS platforms, and enterprise e-commerce solutions. Engineering performance-driven architectures for visionary brands worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-wider overflow-hidden shadow-[0_10px_40px_rgba(37,99,235,0.4)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.6)] transition-all duration-300 w-full sm:w-auto text-center flex justify-center items-center gap-2"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />
              </Link>
              <Link
                to="/portfolio"
                className="group px-8 py-4 bg-black/40 backdrop-blur-md text-white rounded-full font-bold uppercase tracking-wider border border-white/30 shadow-xl hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
              >
                Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Floating Glass Elements */}
        <div className="lg:col-span-5 relative hidden lg:block h-[700px] w-full perspective-1000 pointer-events-none mt-20">
          <motion.div
            style={{ x: card1X, y: card1Y }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[520px] bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[2rem] p-6 flex flex-col overflow-hidden"
          >
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative">
              <img src="/portfolio_1_1777291133011.png" className="w-full h-full object-cover scale-105" alt="Project Preview" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>
            <h3 className="text-3xl font-bold mb-3 text-white">Modern SaaS</h3>
            <p className="text-slate-300 mb-6 flex-grow font-medium leading-relaxed">A sleek, high-performance interface designed for seamless user experience.</p>
            <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 backdrop-blur-sm border border-white/20 shadow-sm"></div>
                <div className="w-10 h-10 rounded-full bg-purple-500/20 backdrop-blur-sm border border-white/20 shadow-sm"></div>
                <div className="w-10 h-10 rounded-full bg-pink-500/20 backdrop-blur-sm border border-white/20 shadow-sm"></div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-md">
                <ArrowUpRight size={22} />
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ x: card2X, y: card2Y }}
            className="absolute bottom-10 -left-16 bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-5 flex flex-col gap-4 w-80"
          >
            <div className="flex items-center gap-5 border-b border-white/10 pb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Layers size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Projects Delivered</p>
                <p className="text-2xl font-bold text-white">250+</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Clients</p>
                <p className="text-2xl font-bold text-white">50+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-6 md:right-10 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:-translate-y-1 group"
        >
          <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:-translate-y-1 group"
        >
          <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
