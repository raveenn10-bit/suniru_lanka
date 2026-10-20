"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, GlassWater, Building2, ArrowUpRight } from "lucide-react";

const celebrations = [
  {
    number: "01",
    title: "Weddings",
    tagline: "Sacred ceremonies & grand receptions",
    description:
      "A complete setting for your traditional Poruwa ceremony or contemporary Christian/Western wedding, complete with red carpet arrivals, bridal settee, and head table decor.",
    icon: Heart,
    accent: "from-amber-500/20 to-gold/10",
  },
  {
    number: "02",
    title: "Homecomings",
    tagline: "An evening of warmth and reunion",
    description:
      "Welcome family and friends into a warm, beautifully illuminated evening celebration with ambient lighting, champagne fountains, and rich buffet feasts.",
    icon: Sparkles,
    accent: "from-yellow-500/20 to-gold/10",
  },
  {
    number: "03",
    title: "Parties & Gatherings",
    tagline: "Milestones that deserve more",
    description:
      "Flexible and vibrant space for 21st birthdays, milestone wedding anniversaries, family reunions, and festive get-togethers with dedicated dance space and DJ setup.",
    icon: GlassWater,
    accent: "from-orange-500/20 to-gold/10",
  },
  {
    number: "04",
    title: "Meetings & Functions",
    tagline: "Professional executive excellence",
    description:
      "A prime Galle location on Circular Road for regional corporate banquets, office annual dinners, seminars, and organizational award ceremonies with crisp AV support.",
    icon: Building2,
    accent: "from-emerald-500/20 to-gold/10",
  },
];

export default function CelebrationsSection() {
  return (
    <section id="celebrations" className="relative py-24 sm:py-32 bg-dark-surface/60 overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#c6a66a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold/40 pb-1">
            02 · Celebrations
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
            One Venue. Countless Memories.
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream font-normal leading-tight">
            Designed around <em className="italic gold-shimmer">your occasion.</em>
          </h2>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {celebrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative rounded-3xl p-8 sm:p-10 glass-panel border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm text-gold-light/60 font-semibold tracking-wider">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-dark-deep transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-cream group-hover:text-gold-light transition-colors mb-2 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gold/80 font-medium mb-4">
                    {item.tagline}
                  </p>
                  <p className="text-cream/70 text-sm sm:text-base font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs uppercase tracking-widest text-gold-light/80 group-hover:text-gold font-semibold">
                  <span>Calculate event cost</span>
                  <a
                    href="#calculator"
                    className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:text-dark-deep transition-all duration-300"
                    aria-label={`Inquire about ${item.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
