"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Phone,
  MapPin,
  ArrowUp,
  ArrowUpRight,
  RotateCcw,
} from "lucide-react";

export default function SignatureFooter() {
  const currentYear = new Date().getFullYear();

  // Typewriter state for SUNIRU LANKA wordmark
  const [typedSuniru, setTypedSuniru] = useState("");
  const [typedLanka, setTypedLanka] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [cursorPos, setCursorPos] = useState<"suniru" | "lanka" | "done">("suniru");

  const wordmarkRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wordmarkRef, { once: true, margin: "-80px" });

  const startTypewriter = useCallback(() => {
    if (isTyping) return;
    setIsTyping(true);
    setTypedSuniru("");
    setTypedLanka("");
    setCursorPos("suniru");

    const suniruFull = "SUNIRU";
    const lankaFull = "LANKA";

    let sIdx = 0;
    const sInterval = setInterval(() => {
      sIdx++;
      setTypedSuniru(suniruFull.slice(0, sIdx));
      if (sIdx >= suniruFull.length) {
        clearInterval(sInterval);
        setCursorPos("lanka");

        let lIdx = 0;
        setTimeout(() => {
          const lInterval = setInterval(() => {
            lIdx++;
            setTypedLanka(lankaFull.slice(0, lIdx));
            if (lIdx >= lankaFull.length) {
              clearInterval(lInterval);
              setIsTyping(false);
              setCursorPos("done");
            }
          }, 140);
        }, 200);
      }
    }, 130);
  }, [isTyping]);

  useEffect(() => {
    if (isInView) {
      startTypewriter();
    }
  }, [isInView, startTypewriter]);

  const marqueeText =
    "CELEBRATE · SAVOUR · REMEMBER · WEDDINGS & HOMECOMINGS · MAKULUWA, GALLE · BANQUET & CATERING · LUXURY RECEPTIONS · ";

  return (
    <footer className="relative bg-dark-deep border-t border-gold/30 text-cream overflow-hidden">
      {/* Continuous Infinite Marquee Ribbon with pause on hover */}
      <div
        className="w-full py-3.5 bg-gradient-to-r from-dark-surface via-gold/15 to-dark-surface border-b border-gold/25 marquee-container group cursor-default"
        aria-hidden="true"
      >
        <div className="marquee-content flex items-center gap-4 text-xs uppercase tracking-widest font-mono text-gold-light/90">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
        <div className="marquee-content flex items-center gap-4 text-xs uppercase tracking-widest font-mono text-gold-light/90" aria-hidden="true">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      {/* Main Footer Experience Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Invitation Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold-light text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Rooted in tradition. Made for you.</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream font-normal leading-[1.12]">
              A little tradition. <br />
              A lifetime of <em className="italic gold-shimmer">memories.</em>
            </h2>

            <p className="text-cream/75 text-base sm:text-lg font-light leading-relaxed max-w-lg">
              The sacred sanctity of a Sri Lankan Poruwa ceremony. The warmth of a bountiful shared table. The laughter of generations gathered in celebration. Begin your unforgettable chapter at Hotel Suniru Lanka.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="tel:+94777177452"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold text-dark-deep font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-gold-light transition-all shadow-xl shadow-gold/20"
              >
                <span>Let’s plan your celebration</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-gold/40 text-gold-light hover:bg-gold/10 text-xs uppercase tracking-widest transition-all"
              >
                <span>Online Event Calculator</span>
              </a>
            </div>
          </div>

          {/* Right Artwork Showcase: Kandyan Couple Art & 360 Golden Orbit */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Animated Rotating 360 Golden Orbit Ring */}
            <div
              className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border-2 border-dashed border-gold/30 pointer-events-none animate-orbit-cw"
              aria-hidden="true"
            />
            <div
              className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-gold/20 pointer-events-none animate-orbit-ccw"
              aria-hidden="true"
            />

            {/* Glowing Backdrop */}
            <div className="absolute w-72 h-72 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

            {/* Floating Couple Art with Gentle Breathing Motion */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 0.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-64 sm:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden border border-gold/50 shadow-2xl glass-panel group"
            >
              <Image
                src="/kandyan-couple-art.png"
                alt="Illustration of a Sri Lankan bride and groom in traditional Kandyan wedding attire"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 250px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/95 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-gold-light font-serif text-sm tracking-wide block">
                  The Art of Celebrating Together
                </span>
                <span className="text-[10px] uppercase font-mono text-cream/60">
                  Kandyan Heritage · Makuluwa, Galle
                </span>
              </div>
            </motion.div>

            {/* Galle SL Vintage Seal */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 w-20 h-20 rounded-full border border-gold/60 glass-panel flex-col items-center justify-center font-mono text-[9px] uppercase tracking-widest text-gold text-center leading-tight shadow-xl z-20">
              <span className="text-[8px] text-cream/70">GALLE</span>
              <strong className="font-serif text-base font-bold text-gold-light my-0.5">SL</strong>
              <span className="text-[8px] text-cream/70">SRI LANKA</span>
            </div>
          </div>
        </div>

        {/* Big Typewriter Wordmark 'SUNIRU LANKA' with Click-to-Replay */}
        <div
          ref={wordmarkRef}
          onClick={startTypewriter}
          className="mt-24 pt-16 border-t border-gold/20 text-center cursor-pointer group select-none relative"
          title="Click to replay typing animation"
        >
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-gold/60 font-mono mb-2 group-hover:text-gold transition-colors">
            <RotateCcw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
            <span>Interactive Wordmark · Click to Replay</span>
          </div>

          <div className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-cream">
            <span className="inline-block transition-colors group-hover:text-gold-light">
              {typedSuniru || (isInView ? "" : "SUNIRU")}
              {cursorPos === "suniru" && <span className="typing-cursor" />}
            </span>{" "}
            <em className="italic font-normal gold-shimmer inline-block ml-2 sm:ml-4">
              {typedLanka || (isInView ? "" : "LANKA")}
              {cursorPos === "lanka" && <span className="typing-cursor" />}
            </em>
          </div>
        </div>

        {/* Structured Brand & Contact Details Grid */}
        <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-gold/60 flex items-center justify-center font-serif text-sm text-gold-light bg-dark-deep">
                SL
              </div>
              <strong className="font-serif text-lg text-cream font-normal">
                Hotel Suniru Lanka
              </strong>
            </div>
            <p className="text-cream/70 text-xs leading-relaxed font-light">
              Where every gathering becomes a cherished memory. Air-conditioned banquet halls, authentic Sri Lankan culinary excellence, and warm Southern hospitality in Galle.
            </p>
          </div>

          {/* Location */}
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest font-mono mb-3">
              Visit The Venue
            </span>
            <p className="text-cream/80 text-xs leading-relaxed font-light">
              197, Circular Road<br />
              Makuluwa, Galle<br />
              Southern Province, Sri Lanka
            </p>
            <span className="text-[11px] text-gold/70 font-mono mt-2 block">
              06°01′N · 80°13′E
            </span>
          </div>

          {/* Direct Hotlines */}
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest font-mono mb-3">
              Direct Inquiries
            </span>
            <p className="space-y-1.5 text-xs text-cream/80 font-light">
              <a
                href="tel:+94777177452"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>077 717 7452 (Hotline &amp; WhatsApp)</span>
              </a>
              <a
                href="tel:+94912223441"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>091 222 3441 (Landline)</span>
              </a>
            </p>
          </div>

          {/* Connect / Social */}
          <div>
            <span className="block text-gold text-xs uppercase tracking-widest font-mono mb-3">
              Connect &amp; Reviews
            </span>
            <ul className="space-y-2 text-xs text-cream/80 font-light">
              <li>
                <a
                  href="https://www.google.com/maps/place/Hotel+Suniru+Lanka/@6.0404242,80.2337696,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae1724b1ec94f1d:0x70ff19c24bf66d3a!8m2!3d6.0404242!4d80.2337696!16s%2Fg%2F11b6b3pmmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Google Maps Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/p/Hotel-Suniru-Lanka-100063609517444/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Facebook Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Event Quotation Generator</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <div>
            © {currentYear} Hotel Suniru Lanka. All rights reserved. Makuluwa, Galle.
          </div>
          <div className="flex items-center gap-6">
            <span>Designed with Luxury &amp; Passion</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-gold-light hover:text-gold transition-colors font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
