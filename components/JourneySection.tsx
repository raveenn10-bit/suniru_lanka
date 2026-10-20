"use client";

import { motion } from "framer-motion";
import { Calendar, Sliders, GlassWater, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Share Your Date & Vision",
    desc: "Tell us your anticipated occasion, guest count, and preferred month or date. We verify hall availability instantly.",
  },
  {
    number: "02",
    icon: Sliders,
    title: "Shape the Details & Tasting",
    desc: "Select your custom Sri Lankan buffet dishes, floral Poruwa stage themes, ambient lighting, and entertainment requirements.",
  },
  {
    number: "03",
    icon: GlassWater,
    title: "Celebrate Effortlessly",
    desc: "Arrive on your red carpet, welcome family and friends, and immerse yourself in the celebration while our seasoned team handles every detail.",
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-dark-surface/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold/40 pb-1">
            07 · Your Celebration Journey
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
            Effortless Planning From Start to Finish
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream font-normal leading-tight">
            From first call to <em className="italic gold-shimmer">last dance.</em>
          </h2>
          <p className="text-cream/70 text-sm sm:text-base font-light mt-3">
            A transparent and stress-free pathway toward hosting your landmark event in Galle.
          </p>
        </div>

        {/* Steps Grid with Golden Connecting Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-panel rounded-3xl p-8 border border-gold/25 relative flex flex-col justify-between hover:border-gold/60 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-bold text-gold">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl text-cream font-normal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-cream/70 text-sm font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs uppercase tracking-widest text-gold-light font-semibold">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
