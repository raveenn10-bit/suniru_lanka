"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Clock,
  Sparkles,
  MessageCircle,
  Phone,
  Check,
  HeartHandshake,
  PartyPopper,
  Briefcase,
  Cake,
} from "lucide-react";

interface EventTypeOption {
  id: string;
  name: string;
  icon: typeof Sparkles;
  description: string;
}

const eventTypes: EventTypeOption[] = [
  {
    id: "Wedding",
    name: "Wedding Reception",
    icon: HeartHandshake,
    description: "Poruwa ceremony, reception banquet & photography",
  },
  {
    id: "Homecoming",
    name: "Homecoming",
    icon: Sparkles,
    description: "Warm evening celebratory dinner with loved ones",
  },
  {
    id: "Birthday",
    name: "Birthday / Family Gathering",
    icon: Cake,
    description: "Milestone birthdays, anniversaries & intimate feasts",
  },
  {
    id: "Corporate",
    name: "Corporate Banquet",
    icon: Briefcase,
    description: "Annual meetings, regional conferences & staff dinners",
  },
];

const addonOptions = [
  { id: "poruwa", name: "Poruwa & Floral Stage Decor", defaultChecked: true },
  { id: "fountain", name: "Champagne Crystal Fountain Staging", defaultChecked: true },
  { id: "dj", name: "DJ Sound & Ambient Dancefloor Lighting", defaultChecked: true },
  { id: "desserts", name: "Artisanal Dessert & Fruit Corner", defaultChecked: true },
  { id: "vip_lounge", name: "Private Air-Conditioned Bridal Suite", defaultChecked: true },
];

export default function BookingCalculator() {
  const [guestCount, setGuestCount] = useState<number>(250);
  const [eventType, setEventType] = useState<string>("Wedding");
  const [eventDate, setEventDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<"Daytime / Lunch" | "Evening / Dinner">("Evening / Dinner");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "poruwa",
    "fountain",
    "dj",
    "desserts",
    "vip_lounge",
  ]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Capacity Tier Classification
  const capacityTier = useMemo(() => {
    if (guestCount <= 180) {
      return { name: "Intimate Banquet", desc: "Cozy atmosphere with custom table clustering" };
    } else if (guestCount <= 320) {
      return { name: "Classic Grand", desc: "Spacious seating with full dancefloor & Poruwa staging" };
    } else if (guestCount <= 450) {
      return { name: "Imperial Gala", desc: "High-capacity setup with double buffet lines" };
    } else {
      return { name: "Royal Pavilion", desc: "Maximum hall utilization for grand celebratory milestones" };
    }
  }, [guestCount]);

  // Generate WhatsApp inquiry text
  const whatsappUrl = useMemo(() => {
    const activeAddonNames = addonOptions
      .filter((a) => selectedAddons.includes(a.id))
      .map((a) => a.name)
      .join(", ");

    const formattedDate = eventDate ? eventDate : "To be decided";

    const text = `Hello Hotel Suniru Lanka! ✨
I would like to check hall availability and request a quotation:
• Event Type: ${eventType}
• Estimated Guests: ${guestCount} Pax (${capacityTier.name})
• Preferred Date: ${formattedDate}
• Preferred Session: ${timeSlot}
• Requested Services: ${activeAddonNames || "Standard Buffet & Hall"}

Kindly share package details and confirm date availability. Thank you!`;

    return `https://wa.me/94777177452?text=${encodeURIComponent(text)}`;
  }, [eventType, guestCount, capacityTier, eventDate, timeSlot, selectedAddons]);

  return (
    <section id="calculator" className="relative py-24 sm:py-32 bg-dark-surface/90 overflow-hidden">
      {/* Decorative Golden Ring Accent */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold/15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold/40 pb-1">
            Event Planning Tool
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        <div className="max-w-3xl mb-14">
          <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
            Instant WhatsApp Quotation
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream font-normal leading-tight">
            Event Booking &amp; <em className="italic gold-shimmer">Guest Calculator</em>
          </h2>
          <p className="text-cream/70 text-sm sm:text-base font-light mt-3">
            Select your anticipated party size, occasion, and preferred services. Generate an instant pre-filled inquiry directly to our event management team on WhatsApp.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 glass-panel p-6 sm:p-10 rounded-3xl border border-gold/30 shadow-2xl">
            {/* Step 1: Event Type */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gold font-semibold mb-3">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {eventTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = eventType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setEventType(type.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 ${
                        isSelected
                          ? "border-gold bg-gold/15 shadow-md shadow-gold/10"
                          : "border-white/10 hover:border-gold/40 bg-white/5"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? "bg-gold text-dark-deep"
                            : "bg-white/10 text-gold-light"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-serif text-base text-cream font-medium">
                          {type.name}
                        </span>
                        <span className="block text-[11px] text-cream/60 leading-snug mt-0.5">
                          {type.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Guest Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-widest text-gold font-semibold">
                  2. Anticipated Guests (100 - 600 Pax)
                </label>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-3xl font-bold text-gold-light">
                    {guestCount}
                  </span>
                  <span className="text-xs uppercase text-cream/70 font-mono">Pax</span>
                </div>
              </div>

              {/* Range Slider */}
              <input
                type="range"
                min="100"
                max="600"
                step="10"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2.5 bg-dark-deep rounded-lg appearance-none cursor-pointer accent-gold"
              />

              {/* Slider Scale Indicators */}
              <div className="flex justify-between text-[11px] font-mono text-cream/50 mt-2">
                <span>100 Pax (Intimate)</span>
                <span>350 Pax (Grand)</span>
                <span>600 Pax (Max Hall)</span>
              </div>

              {/* Capacity Tier Badge */}
              <div className="mt-4 p-3.5 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-gold" />
                  <span className="text-xs font-semibold text-gold-light">
                    Tier: {capacityTier.name}
                  </span>
                </div>
                <span className="text-[11px] text-cream/70 italic">
                  {capacityTier.desc}
                </span>
              </div>
            </div>

            {/* Step 3: Preferred Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                  3. Preferred Event Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-dark-deep border border-gold/30 text-cream text-sm focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                  4. Event Session
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(["Daytime / Lunch", "Evening / Dinner"] as const).map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-3 px-2 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all text-center ${
                        timeSlot === slot
                          ? "bg-gold text-dark-deep border-gold font-bold shadow-md"
                          : "border-white/10 text-cream/70 hover:border-gold/40 bg-dark-deep"
                      }`}
                    >
                      {slot.split(" / ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Included Services & Addons */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-gold font-semibold mb-3">
                5. Highlighted Services &amp; Inclusions
              </label>
              <div className="space-y-2.5">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "border-gold/50 bg-gold/10"
                          : "border-white/10 hover:border-white/20 bg-dark-deep/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-gold border-gold text-dark-deep"
                              : "border-white/30"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm text-cream font-medium">
                          {addon.name}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-mono text-gold-light/80">
                        {isChecked ? "Selected" : "Optional"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Summary Card & WhatsApp Action */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-gold/20 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold">
                    Summary Inquiry
                  </span>
                  <h3 className="font-serif text-2xl text-cream font-normal">
                    {eventType}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-cream/60 block">Party Size</span>
                  <span className="font-serif text-xl font-bold text-gold-light">
                    {guestCount} Pax
                  </span>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-3.5 text-xs text-cream/80 mb-6">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-cream/60">Venue Layout:</span>
                  <span className="font-medium text-cream">{capacityTier.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-cream/60">Preferred Session:</span>
                  <span className="font-medium text-cream">{timeSlot}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-cream/60">Event Date:</span>
                  <span className="font-medium text-gold-light">
                    {eventDate || "Flexible / Inquire Dates"}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-cream/60">Selected Amenities:</span>
                  <span className="font-medium text-cream">{selectedAddons.length} Inclusions</span>
                </div>
              </div>

              {/* Value Guarantees */}
              <div className="rounded-xl bg-dark-deep/80 p-4 border border-gold/20 mb-6 space-y-2 text-[11px] text-cream/70">
                <div className="flex items-center gap-2 text-gold-light font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>Transparent Menus &amp; No Hidden Hall Costs</span>
                </div>
                <div className="flex items-center gap-2 text-gold-light font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>Complimentary Air-Conditioned VIP Bridal Room</span>
                </div>
                <div className="flex items-center gap-2 text-gold-light font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>Guaranteed 100% Heavy Generator Power Backup</span>
                </div>
              </div>

              {/* Primary WhatsApp Action Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold flex items-center justify-center gap-3 text-sm uppercase tracking-wider shadow-xl shadow-emerald-900/30 transition-all duration-300 hover:scale-[1.02] mb-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Inquire on WhatsApp (+94 77 717 7452)</span>
              </a>

              {/* Secondary Direct Call Button */}
              <a
                href="tel:+94777177452"
                className="w-full py-3.5 px-6 rounded-2xl border border-gold/40 text-gold-light hover:bg-gold/10 font-semibold flex items-center justify-center gap-2.5 text-xs uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Direct Call: 077 717 7452</span>
              </a>

              <p className="text-[10px] text-center text-cream/40 mt-3">
                Immediate response from venue coordinators during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
