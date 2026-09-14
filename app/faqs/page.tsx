import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FaqList from "@/components/sections/FaqList";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description: "Frequently asked questions about Prodigy Construction's services, projects, quotation process and more.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Straight answers to the questions clients ask most often — searchable and organized by topic."
      />
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <FaqList />
        </div>
      </section>
      <CTABanner />
    </>
  );
}