"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, Coffee, Salad, Wine, Check } from "lucide-react";

const cateringHighlights = [
  {
    icon: Utensils,
    title: "Signature Sri Lankan Buffet",
    items: [
      "Rich Southern Mutton Curry or Slow-Cooked Beef",
      "Authentic Galle Fish Ambul Thiyal & Devilled Prawns",
      "Creamy Cashew & Sweet Green Pea Curry",
      "Fragrant Basmati Ghee Rice & Traditional Red/White Rice",
      "Crispy Papadam, Chutney, Malay Pickle & Gotu Kola Sambol",
    ],
  },
  {
    icon: Salad,
    title: "Artisanal Dessert Corner",
    items: [
      "Rich Southern Coconut Jaggery Watalappan with Roasted Cashews",
      "Silky Smooth Crème Caramel Pudding",
      "Tropical Fresh Fruit Extravaganza with Intricate Carvings",
      "Ice Cream Parlour with Berry & Chocolate Coulis",
    ],
  },
  {
    icon: Coffee,
    title: "Welcome Refreshments & Tea",
    items: [
      "Iced King Coconut Elixir with Mint",
      "Fresh Island Passionfruit & Tropical Fruit Punch",
      "Hot Ceylon Black & Spiced Ginger Tea Service",
      "Welcome Savouries & Canapés for Early Arrivals",
    ],
  },
  {
    icon: Wine,
    title: "Attentive Hospitality",
    items: [
      "Courteous, Uniformed Catering Stewards",
      "Continuous Hot Buffet Pan Replenishment",
      "Dedicated Table Service for Elderly Guests and VIPs",
      "Flexible Menus tailored for Dietary Needs & Allergies",
    ],
  },
];

export default function CateringSection() {
  return (
    <section id="catering" className="relative py-24 sm:py-32 bg-dark-surface/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold/40 pb-1">
            04 · Catering & Dining
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
              A feast for every table
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream font-normal leading-tight">
              Food that completes the <em className="italic gold-shimmer">occasion.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 text-cream/75 text-base sm:text-lg font-light leading-relaxed"
          >
            <p>
              In Sri Lankan celebration culture, generous food is the heart of hospitality. At Hotel Suniru Lanka, our culinary team prepares time-honoured Southern recipes infused with rich spices, fresh coastal seafood, and decadent desserts that leave lasting impressions.
            </p>
          </motion.div>
        </div>

        {/* Visual Showcase: Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative rounded-3xl overflow-hidden border border-gold/30 aspect-[16/10] shadow-2xl group"
          >
            <Image
              src="/venue-06.png"
              alt="Hotel Suniru Lanka lavish wedding buffet spread"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-gold-light text-xs font-semibold uppercase tracking-wider block mb-1">
                Sumptuous Buffet Stations
              </span>
              <p className="text-cream text-sm font-light">
                Generous hot chaffing dishes, fragrant rice arrangements, and authentic coastal curries.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden border border-gold/30 aspect-[16/10] md:aspect-auto shadow-2xl group"
          >
            <Image
              src="/venue-10.png"
              alt="Gourmet dessert and sweet corner"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-gold-light text-xs font-semibold uppercase tracking-wider block mb-1">
                Sweet Celebrations
              </span>
              <p className="text-cream text-sm font-light">
                Handcrafted desserts and authentic Southern delicacies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Menu & Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cateringHighlights.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-cream font-medium mb-3">
                  {cat.title}
                </h4>
                <ul className="space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs text-cream/70 font-light">
                      <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
