import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";
import DeliveryProcess from "@/components/home/DeliveryProcess";

export const metadata: Metadata = pageMetadata({
  title: "Project Delivery Process",
  description: "Our disciplined 12-stage process from initial consultation through design, construction, handover and maintenance.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="A Transparent Path From Brief to Building"
        subtitle="Every Prodigy project follows a structured, client-visible process that protects quality, cost and programme."
      />
      <div className="pt-4">
        <DeliveryProcess />
      </div>
      <CTABanner />
    </>
  );
}