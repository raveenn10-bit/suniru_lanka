"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "The Venue", href: "#story" },
  { name: "Celebrations", href: "#celebrations" },
  { name: "Details", href: "#details" },
  { name: "Catering", href: "#catering" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Booking Calculator", href: "#calculator" },
  { name: "Find Us", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-deep/90 backdrop-blur-md py-3 border-b border-gold/20 shadow-2xl shadow-black/60"
            : "bg-gradient-to-b from-dark-deep/90 via-dark-deep/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Mark & Title */}
          <Link
            href="#top"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Hotel Suniru Lanka Home"
          >
            <div className="relative w-11 h-11 rounded-full border border-gold/60 flex items-center justify-center font-serif text-lg text-gold-light bg-dark-deep/80 shadow-md group-hover:border-gold transition-colors duration-300">
              <span className="tracking-wider font-semibold">SL</span>
              <div className="absolute inset-0 rounded-full border border-gold/30 scale-110 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl text-cream tracking-wide group-hover:text-gold-light transition-colors">
                Hotel Suniru Lanka
              </span>
              <span className="block text-[11px] uppercase tracking-widest text-gold/80 font-medium">
                Makuluwa · Galle
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cream/80 hover:text-gold-light transition-colors duration-200 relative py-1 text-[13px] uppercase tracking-wider group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+94777177452"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/50 bg-gold/10 hover:bg-gold hover:text-dark-deep text-gold-light text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-gold/20 hover:shadow-lg"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Plan Your Day</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-cream/90 hover:text-gold hover:bg-white/5 transition-colors border border-gold/20"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[70px] z-40 bg-dark-deep/98 backdrop-blur-xl lg:hidden border-b border-gold/20 flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold px-2 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Navigation</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-serif tracking-wide text-cream/90 hover:text-gold py-2 px-3 rounded-lg hover:bg-white/5 transition-colors border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-8 pb-16 space-y-3">
              <a
                href="tel:+94777177452"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl bg-gold text-dark-deep font-semibold flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-lg shadow-gold/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline (077 717 7452)</span>
              </a>
              <a
                href="https://wa.me/94777177452?text=Hello%20Hotel%20Suniru%20Lanka%2C%20I%20would%20like%20to%20inquire%20about%20event%20packages%20and%20hall%20availability."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 rounded-xl border border-gold/40 text-cream bg-white/5 flex items-center justify-center gap-2 text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Reservation</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
