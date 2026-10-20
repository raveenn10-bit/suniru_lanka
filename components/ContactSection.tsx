"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar, Sparkles, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-dark-deep overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,166,106,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-dark-deep/80 text-gold-light text-xs uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span>Begin Your Celebration</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream font-normal leading-tight mb-6"
        >
          Let’s create a day <br />
          worth <em className="italic gold-shimmer">remembering.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-cream/75 text-base sm:text-lg font-light leading-relaxed mb-10"
        >
          Whether your event is a grand wedding banquet of 500 guests or an intimate family milestone of 100, our team is ready to guide you through dates, menus, and hall setup.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <a
            href="tel:+94777177452"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold text-dark-deep font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-gold/20 hover:bg-gold-light transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>Call 077 717 7452</span>
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </a>

          <a
            href="https://wa.me/94777177452?text=Hello%20Hotel%20Suniru%20Lanka%2C%20I%20would%20like%20to%20check%20availability%20for%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-gold/50 bg-white/5 hover:bg-gold/15 text-cream text-xs sm:text-sm uppercase tracking-widest transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href="#calculator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-gold-light hover:text-gold text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Booking Calculator</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
