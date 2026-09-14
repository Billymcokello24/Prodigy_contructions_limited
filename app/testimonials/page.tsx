import type { Metadata } from "next";
import { getCollection } from "@/lib/cms";
import { testimonials } from "@/lib/data-testimonials";
import { Star, LucideQuote } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata({
  title: "Testimonials",
  description: "What clients say about working with Prodigy Construction Limited on their projects.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const approved = (getCollection<typeof testimonials>("testimonials") || testimonials).filter((t) => t.approved);
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Our Clients Say"
        subtitle="Feedback from clients who have trusted Prodigy with their buildings, infrastructure and development projects."
      />
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {approved.map((t) => (
              <figure key={t.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-concrete/50 p-7 shadow-card">
                <LucideQuote className="h-8 w-8 text-accent/40" />
                <div className="mt-3 flex gap-1 text-accent" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-slate-200 pt-4">
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.position}, {t.organization}
                  </p>
                  {t.project ? <p className="mt-1 text-xs font-medium text-accent">Project: {t.project}</p> : null}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-muted">
            Testimonials are published with client consent after administrator approval.

          </p>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}