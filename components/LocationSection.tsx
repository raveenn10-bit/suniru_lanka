"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Clock, Phone, ExternalLink } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="relative py-24 sm:py-32 bg-dark-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold/40 pb-1">
            08 · Find Us
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Information Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
              Conveniently Located in Galle
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-cream font-normal leading-tight mb-6">
              Right here in <em className="italic gold-shimmer">Makuluwa.</em>
            </h2>

            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/30 mb-8 space-y-4">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-cream font-medium">
                    Hotel Suniru Lanka
                  </h4>
                  <p className="text-cream/70 text-sm font-light mt-0.5">
                    197, Circular Road, Makuluwa, Galle, Sri Lanka
                  </p>
                  <span className="font-mono text-xs text-gold-light/80 block mt-1">
                    Coordinates: 06°01′N · 80°13′E
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2.5 text-xs text-cream/70">
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Ample secured on-site parking for cars and guest buses</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>5 mins from Galle Central Bus Stand &amp; Railway Station</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>10 mins from Southern Expressway (Pinnaduwa / Galle Exit)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Hotel+Suniru+Lanka+Makuluwa+Galle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-dark-deep font-semibold text-xs uppercase tracking-widest hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href="tel:+94777177452"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gold/40 text-gold-light hover:bg-gold/10 font-semibold text-xs uppercase tracking-widest transition-all"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call For Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl aspect-[4/3] sm:aspect-[16/10] glass-panel group">
              <iframe
                title="Google Map showing Hotel Suniru Lanka in Makuluwa, Galle"
                src="https://www.google.com/maps?q=Hotel%20Suniru%20Lanka%2C%20Makuluwa%2C%20Galle&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="filter saturate-[1.2] contrast-[1.05]"
              />
              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="glass-panel px-3 py-1.5 rounded-full text-[11px] font-mono text-gold-light border border-gold/40 shadow-lg">
                  Circular Road · Makuluwa
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
