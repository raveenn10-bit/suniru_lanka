"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, ChevronDown, ArrowUpRight, Compass, MapPin } from "lucide-react";

const heroSlides = [
  {
    image: "/venue-exterior.jpg",
    title: "Illuminated Grandeur",
    subtitle: "A signature landmark venue in Makuluwa, Galle",
  },
  {
    image: "/venue-09.png",
    title: "Grand Banquet Hall",
    subtitle: "Air-conditioned luxury seating for up to 600 honoured guests",
  },
  {
    image: "/venue-03.jpg",
    title: "Regal Welcomes",
    subtitle: "Enchanting twilight ambiance for your celebratory arrivals",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      aria-label="Hotel Suniru Lanka Hero"
    >
      {/* Luxury Crossfade Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layered luxury gradients for contrast and atmospheric glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/75 to-dark-deep/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,166,106,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Golden Orbital Rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full border border-gold/15 pointer-events-none animate-orbit-cw"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-dashed border-gold/20 pointer-events-none animate-orbit-ccw"
        aria-hidden="true"
      />

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-dark-deep/80 backdrop-blur-md text-gold-light text-xs sm:text-sm uppercase tracking-widest mb-6 shadow-lg shadow-black/40"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
          <span>A Signature Venue in the Heart of Galle</span>
        </motion.div>

        {/* Main Title with Staggered Entrance */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream tracking-tight leading-[1.08] mb-6 drop-shadow-xl"
        >
          Where your <br className="hidden sm:inline" />
          <span className="italic font-normal gold-shimmer">story</span> becomes <br />
          a celebration.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-2xl text-cream/80 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 px-2"
        >
          Grand weddings, cherished homecomings, and milestone gatherings brought together with warm Southern hospitality, authentic Sri Lankan buffets, and unforgettable elegance.
        </motion.p>

        {/* Hero Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#calculator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-dark-deep font-semibold text-sm uppercase tracking-widest shadow-xl shadow-gold/25 hover:shadow-gold/40 hover:scale-[1.02] transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            <span>Event Calculator & Availability</span>
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </a>

          <a
            href="#story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gold/40 bg-dark-deep/60 backdrop-blur-md text-cream hover:text-gold-light hover:border-gold hover:bg-dark-deep/90 text-sm uppercase tracking-widest transition-all duration-300"
          >
            <span>Explore The Venue</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>

        {/* Floating Slide Indicator Dots */}
        <div className="flex items-center gap-2.5 mt-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentSlide === idx ? "w-8 bg-gold" : "w-2 bg-cream/30 hover:bg-cream/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Golden Geographic Coordinate Badge (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex absolute bottom-8 left-8 lg:left-12 items-center gap-3.5 px-4 py-3 rounded-2xl glass-panel text-cream/90 text-xs border border-gold/30 shadow-xl"
      >
        <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
          <Compass className="w-4 h-4 animate-spin-slow" />
        </div>
        <div className="text-left font-mono">
          <div className="text-gold-light font-semibold tracking-wider">06°01′N · 80°13′E</div>
          <div className="text-cream/60 text-[11px] font-sans flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-gold/80" />
            <span>Makuluwa, Galle · Sri Lanka</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Reception Capacity Badge (Desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex absolute bottom-8 right-8 lg:right-12 items-center gap-3.5 px-4 py-3 rounded-2xl glass-panel text-cream/90 text-xs border border-gold/30 shadow-xl"
      >
        <div className="text-right">
          <div className="text-gold-light font-serif text-sm font-semibold tracking-wider">
            Up to 600 Guests
          </div>
          <div className="text-cream/60 text-[11px] font-sans">
            Spacious AC Banquet Hall
          </div>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
      </motion.div>
    </section>
  );
}
