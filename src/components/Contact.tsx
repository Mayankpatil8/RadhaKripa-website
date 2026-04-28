import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [isFocused, setIsFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-5 flex flex-col h-full justify-center">
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-blue-600"></span>
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Let's build something <span className="text-gradient">extraordinary.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Ready to start your next premium project? Drop us a message, and our team will get back to you within 24 hours to discuss how we can help.
            </p>

            <div className="flex flex-col gap-8">
              <motion.a
                href="mailto:hello@radhekripa.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Email Us</div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">patilmayank2003@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+91 9146662508"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Call Us</div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">+(91) 9146662508</div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group cursor-default"
              >
                <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Visit Us</div>
                  <div className="text-lg font-bold text-slate-900">Remote</div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              {/* Internal decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Send a Message</h3>
              </div>

              <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-500 font-medium ${isFocused === 'name' ? '-top-3 text-xs bg-white/80 backdrop-blur-sm px-2 text-blue-600 rounded-full' : 'top-4 text-sm'}`}>Full Name</label>
                    <input
                      type="text"
                      onFocus={() => setIsFocused('name')}
                      onBlur={(e) => !e.target.value && setIsFocused(null)}
                      className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-900 font-medium"
                    />
                  </div>

                  <div className="relative group">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-500 font-medium ${isFocused === 'email' ? '-top-3 text-xs bg-white/80 backdrop-blur-sm px-2 text-blue-600 rounded-full' : 'top-4 text-sm'}`}>Email Address</label>
                    <input
                      type="email"
                      onFocus={() => setIsFocused('email')}
                      onBlur={(e) => !e.target.value && setIsFocused(null)}
                      className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-900 font-medium"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-500 font-medium ${isFocused === 'subject' ? '-top-3 text-xs bg-white/80 backdrop-blur-sm px-2 text-blue-600 rounded-full' : 'top-4 text-sm'}`}>Subject</label>
                  <input
                    type="text"
                    onFocus={() => setIsFocused('subject')}
                    onBlur={(e) => !e.target.value && setIsFocused(null)}
                    className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-900 font-medium"
                  />
                </div>

                <div className="relative group">
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-500 font-medium ${isFocused === 'message' ? '-top-3 text-xs bg-white/80 backdrop-blur-sm px-2 text-blue-600 rounded-full' : 'top-4 text-sm'}`}>Project Details</label>
                  <textarea
                    rows={5}
                    onFocus={() => setIsFocused('message')}
                    onBlur={(e) => !e.target.value && setIsFocused(null)}
                    className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-900 font-medium resize-none"
                  ></textarea>
                </div>

                <button className="grid-button py-4 mt-2 w-full text-base tracking-wide flex items-center justify-center gap-2 group">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
