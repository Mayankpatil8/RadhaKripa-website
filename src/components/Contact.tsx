import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Leaflet is loaded dynamically to avoid SSR issues
let L: typeof import('leaflet') | null = null;

const offices = [
  {
    city: 'Pune',
    country: 'India',
    flag: '🇮🇳',
    type: 'HQ',
    address: 'Kothrud, Pune, MH 411038',
    phone: '+91 91466 62508',
    email: 'pune@radhekripa.com',
    lat: 18.5204,
    lng: 73.8567,
  },
  {
    city: 'Indore',
    country: 'India',
    flag: '🇮🇳',
    type: 'Remote',
    address: 'Rau, Indore, MP 453331',
    phone: '+91 90988 65614',
    email: 'indore@radhekripa.com',
    lat: 22.7196,
    lng: 75.8577,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    flag: '🇬🇧',
    type: 'Representative',
    address: 'Canary Wharf, London, E14',
    phone: '+44 20 7946 0958',
    email: 'london@radhekripa.com',
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    city: 'Turku',
    country: 'Finland',
    flag: '🇫🇮',
    type: 'Representative',
    address: 'Turku, Finland',
    phone: '+358 40 850 0302',
    email: 'europe@radhekripa.com',
    lat: 60.1699,
    lng: 24.9384,
  },
  {
    city: 'Upcoming',
    country: 'Europe',
    flag: '🌍',
    type: 'Upcoming',
    address: 'New office launching soon in Central Europe',
    phone: '+91 91466 62508',
    email: 'europe@radhekripa.com',
    lat: 50.0,
    lng: 10.0,
  },
];

// ── Real Leaflet Map Component ──────────────────────────────────────────────
function RealMap({ activeOffice, onPinClick }: { activeOffice: number; onPinClick: (idx: number) => void }) {
  const mapId = 'rk-office-map';
  const mapRef = useRef<import('leaflet').Map | null>(null);

  useEffect(() => {
    async function initMap() {
      const leaflet = await import('leaflet');
      L = leaflet.default ?? leaflet;

      const container = document.getElementById(mapId);
      if (!container || mapRef.current) return;

      const map = L.map(mapId, {
        center: [40, 20],
        zoom: 2,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });
      mapRef.current = map;

      // ESRI World Imagery – real satellite tiles (free, no key required)
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, AeroGRID, IGN',
          maxZoom: 19,
        }
      ).addTo(map);

      // Country-label overlay so cities are still readable
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19, opacity: 0.6 }
      ).addTo(map);

      // Custom glowing SVG marker (amber for Upcoming, blue for active offices)
      const addMarker = (office: typeof offices[0], idx: number) => {
        const isUpcoming = office.type === 'Upcoming';
        const pinColor = isUpcoming ? '#f59e0b' : '#3b82f6';
        const glowColor = isUpcoming ? 'rgba(245,158,11,0.7)' : 'rgba(59,130,246,0.7)';
        const svgIcon = L!.divIcon({
          className: '',
          html: `
            <div style="position:relative;width:30px;height:30px;display:flex;align-items:center;justify-content:center;">
              <div style="position:absolute;width:14px;height:14px;border-radius:50%;background:${pinColor};border:2px solid white;box-shadow:0 0 0 0 ${glowColor};animation:rkPulse ${isUpcoming ? '1.5' : '2'}s ease-out infinite;"></div>
            </div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
          popupAnchor: [0, -18],
        });

        const marker = L!.marker([office.lat, office.lng], { icon: svgIcon });

        marker.bindPopup(`
          <div style="font-family:Inter,sans-serif;min-width:200px;padding:4px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
              <span style="font-size:22px;">${office.flag}</span>
              <div>
                <div style="font-weight:800;font-size:15px;color:#0f172a;">${office.city}</div>
                <div style="font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">${office.type} · ${office.country}</div>
              </div>
            </div>
            <div style="font-size:12px;color:#374151;margin-bottom:6px;">📍 ${office.address}</div>
            <div style="font-size:12px;margin-bottom:4px;"><a href="tel:${office.phone}" style="color:#3b82f6;font-weight:600;text-decoration:none;">📞 ${office.phone}</a></div>
            <div style="font-size:12px;"><a href="mailto:${office.email}" style="color:#3b82f6;font-weight:600;text-decoration:none;">✉️ ${office.email}</a></div>
          </div>`, {
          maxWidth: 260,
          className: 'rk-popup',
        });

        marker.on('click', () => onPinClick(idx));
        marker.addTo(map);
      };

      offices.forEach((office, idx) => addMarker(office, idx));

      // Fly to first active office
      map.flyTo([offices[activeOffice].lat, offices[activeOffice].lng], 4, { animate: false });
    }

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fly to active office when it changes
  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.flyTo([offices[activeOffice].lat, offices[activeOffice].lng], 5, {
      animate: true,
      duration: 1.2,
    });
  }, [activeOffice]);

  return (
    <div
      id={mapId}
      className="w-full h-[300px] md:h-[360px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
      style={{ background: '#1e293b' }}
    />
  );
}

// ── Main Contact Component ───────────────────────────────────────────────────
export default function Contact() {
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [activeOffice, setActiveOffice] = useState(0);

  // Inject pulse keyframes once
  useEffect(() => {
    if (document.getElementById('rk-pulse-style')) return;
    const style = document.createElement('style');
    style.id = 'rk-pulse-style';
    style.textContent = `
      @keyframes rkPulse {
        0%   { box-shadow: 0 0 0 0 rgba(96,165,250,0.7); }
        70%  { box-shadow: 0 0 0 12px rgba(96,165,250,0); }
        100% { box-shadow: 0 0 0 0 rgba(96,165,250,0); }
      }
      .rk-popup .leaflet-popup-content-wrapper {
        border-radius: 16px !important;
        border: 1px solid #e2e8f0;
        box-shadow: 0 20px 60px rgba(0,0,0,0.15) !important;
        padding: 0;
      }
      .rk-popup .leaflet-popup-content {
        margin: 16px !important;
      }
      .rk-popup .leaflet-popup-tip-container {
        display: none;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>

      {/* ── Contact Form ──────────────────────────────────────── */}
      <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] translate-y-1/4 translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: Info */}
            <div className="lg:col-span-5 flex flex-col h-full justify-center">
              <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold tracking-wider uppercase mb-4">
                <span className="w-8 h-px bg-blue-600" />
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Let's build something{' '}
                <span className="text-gradient">impactful.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Have a project in mind? Our team will respond within 24 hours to discuss how we can build something extraordinary together.
              </p>

              <div className="flex flex-col gap-8">
                <motion.a href="mailto:patilmayank2003@gmail.com" whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Email Us</div>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">patilmayank2003@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a href="tel:+919146662508" whileHover={{ x: 10 }} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Call Us</div>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">+(91) 9146662508</div>
                  </div>
                </motion.a>

                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-default">
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Headquarters</div>
                    <div className="text-lg font-bold text-slate-900">Pune, India 🇮🇳</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Send a Message</h3>
                </div>

                <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-500 font-medium ${isFocused === 'name' ? '-top-3 text-xs bg-white/80 backdrop-blur-sm px-2 text-blue-600 rounded-full' : 'top-4 text-sm'}`}>Full Name</label>
                      <input type="text" onFocus={() => setIsFocused('name')} onBlur={(e) => !e.target.value && setIsFocused(null)} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-900 font-medium" />
                    </div>
                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-500 font-medium ${isFocused === 'email' ? '-top-3 text-xs bg-white/80 backdrop-blur-sm px-2 text-blue-600 rounded-full' : 'top-4 text-sm'}`}>Email Address</label>
                      <input type="email" onFocus={() => setIsFocused('email')} onBlur={(e) => !e.target.value && setIsFocused(null)} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-900 font-medium" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-500 font-medium ${isFocused === 'subject' ? '-top-3 text-xs bg-white/80 backdrop-blur-sm px-2 text-blue-600 rounded-full' : 'top-4 text-sm'}`}>Subject</label>
                    <input type="text" onFocus={() => setIsFocused('subject')} onBlur={(e) => !e.target.value && setIsFocused(null)} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-900 font-medium" />
                  </div>

                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-500 font-medium ${isFocused === 'message' ? '-top-3 text-xs bg-white/80 backdrop-blur-sm px-2 text-blue-600 rounded-full' : 'top-4 text-sm'}`}>Project Details</label>
                    <textarea rows={5} onFocus={() => setIsFocused('message')} onBlur={(e) => !e.target.value && setIsFocused(null)} className="w-full bg-white/50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all text-slate-900 font-medium resize-none" />
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

      {/* ── World Map Section ─────────────────────────────────── */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center gap-2 text-blue-400 text-sm font-bold tracking-wider uppercase mb-4">
              <span className="w-8 h-px bg-blue-400" />
              Branch Offices & Representatives
              <span className="w-8 h-px bg-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              We're{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Everywhere
              </span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Headquartered in India, with representatives across Europe. Click any pin on the map or select an office below.
            </p>
          </div>

          {/* Real Leaflet Map */}
          <div className="mb-10">
            <RealMap activeOffice={activeOffice} onPinClick={setActiveOffice} />
          </div>

          {/* Office Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            {offices.map((office, idx) => {
              const isUpcoming = office.type === 'Upcoming';
              const isActive = activeOffice === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveOffice(idx)}
                  whileHover={{ y: -4 }}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 ${isActive
                    ? isUpcoming
                      ? 'bg-amber-500 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.4)]'
                      : 'bg-blue-600 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]'
                    : isUpcoming
                      ? 'bg-slate-900 border-amber-500/30 border-dashed hover:border-amber-400/60'
                      : 'bg-slate-900 border-white/5 hover:border-blue-500/40'
                    }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{office.flag}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${isActive
                      ? 'bg-white/20 text-white'
                      : isUpcoming
                        ? 'bg-amber-500/15 text-amber-400'
                        : 'bg-blue-500/10 text-blue-400'
                      }`}>
                      {office.type}
                    </span>
                  </div>
                  <p className="text-base font-bold text-white">{office.city}</p>
                  <p className={`text-xs ${isActive ? 'text-blue-100' : isUpcoming ? 'text-amber-400/70' : 'text-slate-400'}`}>
                    {office.country}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Active Office Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOffice}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-3xl border grid sm:grid-cols-3 gap-8 ${offices[activeOffice].type === 'Upcoming'
                ? 'bg-amber-500/5 border-amber-500/20'
                : 'bg-slate-900 border-white/5'
                }`}
            >
              {offices[activeOffice].type === 'Upcoming' ? (
                <div className="sm:col-span-3 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl shrink-0">
                    🌍
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Coming Soon</p>
                    <p className="text-xl font-bold text-white mb-1">New European Office</p>
                    <p className="text-slate-400">We're expanding our presence in Central Europe. Stay tuned for the official announcement. In the meantime, reach us at <a href="mailto:europe@radhekripa.com" className="text-amber-400 hover:underline font-semibold">europe@radhekripa.com</a></p>
                  </div>
                </div>
              ) : (
                [{ icon: MapPin, label: 'Address', value: offices[activeOffice].address, href: undefined as string | undefined },
                { icon: Phone, label: 'Phone', value: offices[activeOffice].phone, href: `tel:${offices[activeOffice].phone}` },
                { icon: Mail, label: 'Email', value: offices[activeOffice].email, href: `mailto:${offices[activeOffice].email}` },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-white font-medium hover:text-blue-400 transition-colors">{value}</a>
                      ) : (
                        <p className="text-white font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>


    </>
  );
}
