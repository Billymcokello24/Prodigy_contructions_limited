import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import Trust from "@/components/home/Trust";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import IndustriesServed from "@/components/home/IndustriesServed";
import WhyProdigy from "@/components/home/WhyProdigy";
import DeliveryProcess from "@/components/home/DeliveryProcess";
import SafetyQualityBand from "@/components/home/SafetyQualityBand";
import SustainabilityBand from "@/components/home/SustainabilityBand";
import Testimonials from "@/components/home/Testimonials";
import LatestInsights from "@/components/home/LatestInsights";
import CTABanner from "@/components/sections/CTABanner";

// Home content is CMS-driven, so render on each request to reflect edits.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="next" />
      <StatsBar />
      <Trust />
      <ServicesGrid />
      <FeaturedProjects />
      <IndustriesServed />
      <WhyProdigy />
      <DeliveryProcess />
      <SafetyQualityBand />
      <SustainabilityBand />
      <Testimonials />
      <LatestInsights />
      <CTABanner />
    </>
  );
}
