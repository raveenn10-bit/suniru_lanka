"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Users, Award, ShieldCheck, ArrowRight } from "lucide-react";

export default function VenueStorySection() {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-dark-deep overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold/40 pb-1">
            01 · The Venue
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        {/* Top Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-3">
              Made for moments that matter
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream font-normal leading-[1.15] mb-6">
              A graceful setting for <em className="italic gold-shimmer">unforgettable</em> gatherings.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-5 text-cream/75 text-base sm:text-lg font-light leading-relaxed"
          >
            <p>
              Hotel Suniru Lanka is an established wedding and reception banquet venue nestled along Circular Road in Makuluwa, Galle. Created for celebrations both grand and intimate, our hall merges classical Southern warmth with modern banquet conveniences.
            </p>
            <p>
              From your initial consultation and traditional Poruwa arrangement to the final celebratory dance, our dedicated coordinators bring your vision to life in one seamless, air-conditioned hall designed to comfortably host up to 600 seated guests.
            </p>
            <div className="pt-2">
              <a
                href="#celebrations"
                className="inline-flex items-center gap-2 text-gold-light hover:text-gold font-semibold text-sm uppercase tracking-wider group"
              >
                <span>Discover occasions we host</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-gold" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Feature Visual with Golden Framed Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl shadow-black/80 aspect-[16/9] md:aspect-[21/9] group"
        >
          <Image
            src="/venue-09.png"
            alt="Hotel Suniru Lanka banquet reception hall arranged for a celebration"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-transparent to-black/30" />

          {/* Floating Venue Badges Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="glass-panel px-6 py-4 rounded-2xl border border-gold/30 max-w-md">
              <div className="flex items-center gap-2 text-gold-light text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Celebrate Beautifully</span>
              </div>
              <p className="text-cream text-sm font-light">
                Grand air-conditioned hall with custom chandelier lighting, high-vaulted ceiling, and spacious guest walkways.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <div className="glass-panel px-4 py-3 rounded-xl border border-gold/30 text-center">
                <Users className="w-4 h-4 text-gold mx-auto mb-1" />
                <span className="block font-serif text-lg text-cream font-bold">100 - 600</span>
                <span className="block text-[10px] text-cream/70 uppercase tracking-wider">Guest Capacity</span>
              </div>
              <div className="glass-panel px-4 py-3 rounded-xl border border-gold/30 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <span className="block font-serif text-lg text-cream font-bold">100%</span>
                <span className="block text-[10px] text-cream/70 uppercase tracking-wider">Backup Generator</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
