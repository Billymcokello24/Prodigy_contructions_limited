import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import InsightsList from "@/components/sections/InsightsList";
import CTABanner from "@/components/sections/CTABanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Articles and practical thinking on construction, engineering, infrastructure, architecture, project management and sustainability in Kenya and East Africa.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking That Builds Better"
        subtitle="Articles from our teams on construction, engineering, infrastructure and project delivery."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
      />
      <InsightsList />
      <CTABanner />
    </>
  );
}