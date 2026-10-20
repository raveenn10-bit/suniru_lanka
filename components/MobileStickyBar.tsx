"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-dark-deep/95 backdrop-blur-xl border-t border-gold/30 shadow-[0_-8px_30px_rgba(0,0,0,0.7)]"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href="tel:+94777177452"
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-gold text-dark-deep font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-gold-light active:scale-95 transition-all text-center"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/94777177452?text=Hello%20Hotel%20Suniru%20Lanka%2C%20I%20would%20like%20to%20inquire%20about%20event%20availability%20and%20rates."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Calculator Button */}
        <a
          href="#calculator"
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl border border-gold/40 bg-white/5 text-gold-light font-semibold text-xs uppercase tracking-wider hover:bg-white/10 active:scale-95 transition-all text-center"
        >
          <Calendar className="w-3.5 h-3.5 text-gold" />
          <span>Rates</span>
        </a>
      </div>
    </aside>
  );
}
