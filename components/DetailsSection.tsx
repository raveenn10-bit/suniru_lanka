"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

const detailsList = [
  {
    title: "Traditional Poruwa & Settee Arrangements",
    desc: "Customizable traditional Kandyan or contemporary Western floral settee-back stages.",
  },
  {
    title: "Ceremonial Oil Lamp & Head Table",
    desc: "Exquisite traditional Brass Pol Thel Pahana with floral garland wraps and VIP couple dining.",
  },
  {
    title: "Acoustic DJ & Cultural Entertainment",
    desc: "Integrated hall acoustics, microphones, dance-floor lighting, and space for live 7-piece bands.",
  },
  {
    title: "Cake Structure & Fruit Corners",
    desc: "Elegantly dressed cake table with spotlighting, accompanied by tropical fresh fruit displays.",
  },
  {
    title: "Champagne Fountain Staging",
    desc: "Dramatic multi-tier crystal glass tower for your celebration toast with sparkling cider or wine.",
  },
  {
    title: "Air-Conditioned VIP Bridal Lounge",
    desc: "Private, climate-controlled suite for bridal touch-ups, outfit changes, and relaxing before the entrance.",
  },
  {
    title: "Continuous Heavy-Duty Backup Power",
    desc: "Automatic switch generator ensures your air conditioning, lights, and music play without pause.",
  },
  {
    title: "Ample Secure Vehicle Parking",
    desc: "Spacious on-site parking lot along Circular Road managed by polite venue parking wardens.",
  },
];

export default function DetailsSection() {
  return (
    <section id="details" className="relative py-24 sm:py-32 bg-dark-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold/40 pb-1">
            03 · Thoughtful Details
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photos Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Image: Floral Stage */}
            <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl aspect-[4/5] group">
              <Image
                src="/venue-05.jpg"
                alt="Floral wedding stage and settee at Hotel Suniru Lanka"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-gold-light text-xs font-semibold uppercase tracking-wider block mb-1">
                  Stage Artistry
                </span>
                <p className="text-cream text-sm font-light">
                  Tailored floral backdrops and traditional craftsmanship.
                </p>
              </div>
            </div>

            {/* Floating Inset Image: Floral Detail */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-2 border-gold shadow-2xl glass-panel group">
              <Image
                src="/venue-07.jpg"
                alt="Floral centerpiece wedding decor"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="200px"
              />
            </div>
          </motion.div>

          {/* Details Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
              Everything, beautifully considered
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-cream font-normal leading-tight mb-8">
              The details that make the day <em className="italic gold-shimmer">yours.</em>
            </h2>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {detailsList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="mt-1 text-gold flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-cream text-sm font-semibold font-sans mb-1">
                      {item.title}
                    </h4>
                    <p className="text-cream/65 text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-cream/50 text-xs italic mb-8 border-l-2 border-gold/40 pl-3">
              Note: Specific decorative items, table linen colors, and stage elements can be customized according to your wedding color theme and personal traditions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+94912223441"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-dark-deep font-semibold text-xs uppercase tracking-widest hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Landline: 091 222 3441</span>
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gold/40 text-gold-light hover:bg-gold/10 transition-all text-xs uppercase tracking-widest"
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Calculate Your Custom Package</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
