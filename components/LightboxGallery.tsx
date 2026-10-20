"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  MapPin,
  ExternalLink,
} from "lucide-react";

type GalleryCategory = "All" | "Banquet Hall" | "Stage & Decor" | "Food & Buffet" | "Night Exterior";

interface GalleryImage {
  id: number;
  src: string;
  category: GalleryCategory;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/venue-exterior.jpg",
    category: "Night Exterior",
    title: "Illuminated Night Façade",
    description: "The grand architectural illumination of Hotel Suniru Lanka on Circular Road.",
  },
  {
    id: 2,
    src: "/venue-09.png",
    category: "Banquet Hall",
    title: "Grand Banquet Hall & Seating",
    description: "Spacious air-conditioned hall arranged for a high-capacity wedding banquet.",
  },
  {
    id: 3,
    src: "/venue-05.jpg",
    category: "Stage & Decor",
    title: "Floral Stage & Settee Backdrop",
    description: "Handcrafted white and pastel floral artistry designed for the bridal settee.",
  },
  {
    id: 4,
    src: "/venue-06.png",
    category: "Food & Buffet",
    title: "Lavish Celebration Buffet",
    description: "Authentic Sri Lankan curries, seafood specialties, and fragrant rice displays.",
  },
  {
    id: 5,
    src: "/venue-03.jpg",
    category: "Night Exterior",
    title: "Twilight Welcome Entrance",
    description: "Warm golden entrance welcoming guests into an evening of joyous festivity.",
  },
  {
    id: 6,
    src: "/venue-07.jpg",
    category: "Stage & Decor",
    title: "Floral Centerpieces & Accents",
    description: "Meticulous table floral arrangements enhancing the hall's romantic atmosphere.",
  },
  {
    id: 7,
    src: "/venue-02.jpg",
    category: "Banquet Hall",
    title: "Celebration Table Layout",
    description: "Elegantly dressed round tables with ample spacing for effortless guest circulation.",
  },
  {
    id: 8,
    src: "/venue-10.png",
    category: "Food & Buffet",
    title: "Artisanal Dessert Corner",
    description: "Delectable Watalappan, caramel puddings, and chilled sweet delights.",
  },
  {
    id: 9,
    src: "/venue-04.jpg",
    category: "Stage & Decor",
    title: "Ceremonial Oil Lamp Tradition",
    description: "Traditional Sri Lankan Brass Oil Lamp prepared for the auspicious lighting ritual.",
  },
  {
    id: 10,
    src: "/venue-08.png",
    category: "Night Exterior",
    title: "Daytime Venue Grounds",
    description: "Clear sunny exterior view showing multi-level architectural stature and vehicle access.",
  },
];

const categories: GalleryCategory[] = [
  "All",
  "Banquet Hall",
  "Stage & Decor",
  "Food & Buffet",
  "Night Exterior",
];

export default function LightboxGallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => ((prev as number) + 1) % filteredImages.length);
  }, [activeImageIndex, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      ((prev as number) - 1 + filteredImages.length) % filteredImages.length
    );
  }, [activeImageIndex, filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-dark-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold/40 pb-1">
            05 · The Gallery
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        {/* Section Heading & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
              Unfiltered Venue Authenticity
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream font-normal leading-tight">
              See the <em className="italic gold-shimmer">real venue.</em>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gold text-dark-deep shadow-lg shadow-gold/25"
                    : "glass-panel text-cream/70 hover:text-gold hover:border-gold/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden border border-gold/25 aspect-[4/3] cursor-pointer shadow-xl hover:border-gold hover:shadow-gold/20 transition-all duration-500"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/90 via-dark-deep/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover overlay with zoom icon and details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gold-light bg-dark-deep/70 px-2 py-0.5 rounded border border-gold/30 inline-block mb-1.5">
                      {img.category}
                    </span>
                    <h3 className="font-serif text-lg text-cream font-medium">
                      {img.title}
                    </h3>
                    <p className="text-xs text-cream/70 font-light line-clamp-1 mt-0.5">
                      {img.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Google Maps Link Banner */}
        <div className="mt-12 glass-panel p-6 sm:p-8 rounded-3xl border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-cream font-normal">
                Want to explore the live venue video & guest uploads?
              </h4>
              <p className="text-xs text-cream/60">
                Browse 50+ real guest snapshots, 360° views, and walkthrough video clips on our Google Business Profile.
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Hotel+Suniru+Lanka/@6.0404242,80.2337696,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae1724b1ec94f1d:0x70ff19c24bf66d3a!8m2!3d6.0404242!4d80.2337696!16s%2Fg%2F11b6b3pmmm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/15 hover:bg-gold hover:text-dark-deep text-gold-light border border-gold/40 text-xs uppercase tracking-widest font-semibold transition-all duration-300"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top Toolbar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
              <div className="text-cream text-xs uppercase font-mono tracking-widest">
                <span className="text-gold font-bold">{activeImageIndex + 1}</span> /{" "}
                {filteredImages.length}
              </div>
              <button
                onClick={closeLightbox}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-dark-deep text-cream flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel hover:bg-gold hover:text-dark-deep text-cream flex items-center justify-center transition-all z-20 border border-gold/40"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel hover:bg-gold hover:text-dark-deep text-cream flex items-center justify-center transition-all z-20 border border-gold/40"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image & Info */}
            <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center">
              <motion.div
                key={filteredImages[activeImageIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[60vh] sm:h-[68vh] rounded-2xl overflow-hidden border border-gold/40 shadow-2xl"
              >
                <Image
                  src={filteredImages[activeImageIndex].src}
                  alt={filteredImages[activeImageIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <span className="text-gold text-xs uppercase font-mono tracking-widest">
                  {filteredImages[activeImageIndex].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-cream">
                  {filteredImages[activeImageIndex].title}
                </h3>
                <p className="text-xs text-cream/70 max-w-lg mx-auto mt-1">
                  {filteredImages[activeImageIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
