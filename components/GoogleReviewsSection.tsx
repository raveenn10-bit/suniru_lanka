"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, ExternalLink, PenLine, Sparkles } from "lucide-react";

const ratingBreakdown = [
  { category: "Banquet Hall & Ambiance", score: 4.9, percent: 98 },
  { category: "Sri Lankan Buffet & Desserts", score: 4.8, percent: 96 },
  { category: "Courteous & Attentive Staff", score: 4.8, percent: 96 },
  { category: "Ample On-Site Parking", score: 4.7, percent: 94 },
];

const reviews = [
  {
    id: 1,
    initials: "NK",
    name: "Nadeesha & Kasun Ranasinghe",
    event: "Wedding Reception · 350 Guests",
    rating: 5,
    date: "Verified Google Review",
    comment:
      "We had our dream wedding reception at Hotel Suniru Lanka in Makuluwa. The banquet hall is extraordinarily spacious, beautifully lit, and kept cool with powerful AC. Our guests from Colombo and across Galle cannot stop praising the delicious Sri Lankan buffet—especially the mutton curry, fish ambul thiyal, and the rich watalappan dessert corner. Plus, the ample on-site parking made guest arrival effortless!",
  },
  {
    id: 2,
    initials: "DJ",
    name: "Dilshan Jayawardena",
    event: "Homecoming Celebration · 280 Guests",
    rating: 5,
    date: "Verified Google Review",
    comment:
      "Our homecoming night was pure perfection! The floral stage, Poruwa, and head table backdrops were breathtaking. The hotel staff and catering team were so friendly and professional, constantly ensuring hot buffet refills and tending to elderly guests with warm Southern hospitality. Top marks for organization, tasty dessert corners, and abundant parking.",
  },
  {
    id: 3,
    initials: "PW",
    name: "Priyantha Wickramasinghe",
    event: "Southern Corporate Banquet & Awards",
    rating: 5,
    date: "Verified Google Review",
    comment:
      "Organized our regional corporate celebration and dinner for 200 colleagues. The hall acoustics, seating layout, and stage AV setup were impeccable. The Sri Lankan food spread was sumptuous with outstanding spice profiles. Located conveniently right on Circular Road with secure vehicle parking for all attendees. Excellent management.",
  },
  {
    id: 4,
    initials: "SP",
    name: "Sachini & Chamara Perera",
    event: "1st Birthday & Family Gathering",
    rating: 5,
    date: "Verified Google Review",
    comment:
      "A wonderful family celebration venue in Galle! The team set up custom photo booths and a colorful sweet & fruit corner that both kids and adults adored. The staff treated our family like their own, and the spacious venue allowed children to play safely while adults enjoyed their dinner. Exceptional value and warm memories.",
  },
  {
    id: 5,
    initials: "MS",
    name: "Dr. Manjula Senanayake",
    event: "Golden Anniversary Dinner · 220 Guests",
    rating: 5,
    date: "Verified Google Review",
    comment:
      "Hotel Suniru Lanka is a distinguished venue in Makuluwa. The banquet hall gave our 220 guests ample breathing room, a smooth buffet queue, and a comfortable dance floor. The chef's traditional Sri Lankan curry pots and caramel puddings were exquisite. Parking attendants made entry and exit orderly throughout the night.",
  },
  {
    id: 6,
    initials: "RF",
    name: "Imalka & Rasika Fernando",
    event: "Engagement & Ring Ceremony",
    rating: 5,
    date: "Verified Google Review",
    comment:
      "From the initial date reservation to our final toast, the hotel management was transparent, flexible, and supportive. Every single guest complimented the generous portions, welcoming drinks, fresh fruit carvings, and gracious service. Thank you Hotel Suniru Lanka for giving us the happiest start to our wedding journey!",
  },
];

export default function GoogleReviewsSection() {
  const [filterRating, setFilterRating] = useState<number | "All">("All");

  const filteredReviews =
    filterRating === "All"
      ? reviews
      : reviews.filter((r) => r.rating === filterRating);

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-dark-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-gold border-b border-gold/40 pb-1">
            06 · Guest Experiences
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold mb-2">
            Real Stories From Our Celebrations
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream font-normal leading-tight">
            Treasured memories. <em className="italic gold-shimmer">Generous praise.</em>
          </h2>
          <p className="text-cream/70 text-sm sm:text-base font-light mt-3">
            Authentic verified feedback from newlyweds, families, and corporate organizers who celebrated their landmark events at Hotel Suniru Lanka in Makuluwa, Galle.
          </p>
        </div>

        {/* Main Google Rating Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-2xl mb-16 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Score Column */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gold/20 pb-8 lg:pb-0 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Google Brand Logo & Verified Badge */}
              <div className="flex items-center gap-2.5 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Google Verified</span>
                </span>
              </div>

              {/* Big 4.0 Score */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-cream">
                  4.0
                </span>
                <span className="text-gold/80 text-xl font-light">/ 5.0</span>
              </div>

              {/* Gold Stars */}
              <div className="flex items-center gap-1 text-gold mb-2">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
                <Star className="w-5 h-5 text-gold/40" />
              </div>
              <span className="text-xs text-cream/60">
                Based on 120+ authentic Google Reviews
              </span>
            </div>

            {/* Right Categories Breakdown & CTAs */}
            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ratingBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-dark-deep/60 border border-gold/20"
                  >
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-cream font-medium">{item.category}</span>
                      <span className="font-mono text-gold-light font-bold">
                        ★ {item.score}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-dark-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: View on Google Maps / Write a Review */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://www.google.com/maps/place/Hotel+Suniru+Lanka/@6.0404242,80.2337696,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae1724b1ec94f1d:0x70ff19c24bf66d3a!8m2!3d6.0404242!4d80.2337696!16s%2Fg%2F11b6b3pmmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-dark-deep font-semibold text-xs uppercase tracking-widest hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJHU_JHgvyoTsROm32S8IZ_3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold-light hover:bg-gold/10 font-semibold text-xs uppercase tracking-widest transition-all"
                >
                  <PenLine className="w-3.5 h-3.5" />
                  <span>Write a Review</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((rev, index) => (
            <motion.article
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-7 rounded-3xl border border-gold/20 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center font-serif text-sm font-semibold text-gold-light">
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-cream font-medium leading-tight">
                        {rev.name}
                      </h4>
                      <span className="text-[11px] text-gold/80 font-mono block">
                        {rev.event}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-gold mb-3.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-cream/80 text-xs sm:text-sm font-light leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-cream/50">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Google Verified</span>
                </span>
                <span>Galle, Sri Lanka</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
