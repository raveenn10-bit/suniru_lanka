import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VenueStorySection from "@/components/VenueStorySection";
import CelebrationsSection from "@/components/CelebrationsSection";
import DetailsSection from "@/components/DetailsSection";
import CateringSection from "@/components/CateringSection";
import LightboxGallery from "@/components/LightboxGallery";
import BookingCalculator from "@/components/BookingCalculator";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import JourneySection from "@/components/JourneySection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import SignatureFooter from "@/components/SignatureFooter";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark-deep text-cream selection:bg-gold selection:text-dark-deep pb-16 md:pb-0">
      {/* Primary Fixed Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* 01: The Venue Story */}
        <VenueStorySection />

        {/* 02: Celebrations & Occasions */}
        <CelebrationsSection />

        {/* 03: Thoughtful Details & Amenities */}
        <DetailsSection />

        {/* 04: Catering & Menus */}
        <CateringSection />

        {/* 05: Lightbox Gallery */}
        <LightboxGallery />

        {/* Interactive Event Booking Calculator */}
        <BookingCalculator />

        {/* 06: Verified Google Reviews */}
        <GoogleReviewsSection />

        {/* 07: Celebration Journey Roadmap */}
        <JourneySection />

        {/* 08: Location & Interactive Map */}
        <LocationSection />

        {/* Contact & Reservation CTA */}
        <ContactSection />
      </main>

      {/* Signature Animated Luxury Footer */}
      <SignatureFooter />

      {/* Sticky Bottom Bar for Mobile Visitors */}
      <MobileStickyBar />
    </div>
  );
}
