import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-blue-600/10 to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src="/logo.png" 
                alt="Radhekripa Web Developer Logo" 
                className="h-14 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Building premium digital experiences that elevate brands and drive growth. Your vision, our expertise.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors text-slate-300 shadow-sm border border-white/10">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors text-slate-300 shadow-sm border border-white/10">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors text-slate-300 shadow-sm border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors text-slate-300 shadow-sm border border-white/10">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Web Development</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">UI/UX Strategy</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">E-commerce Solutions</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">SEO Engineering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Process</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Subscribe to our newsletter for the latest insights.</p>
            <form className="flex relative" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-6 pr-24 py-3 focus:outline-none focus:border-blue-500 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] text-sm transition-all text-white font-medium placeholder-slate-500"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-white/10 text-white px-6 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 Radhekripa Web Developer</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <div className="flex items-center gap-2 ml-4 px-3 py-1 bg-green-500/10 rounded-full text-green-400 border border-green-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span>Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

