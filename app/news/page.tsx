import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { getCollection } from "@/lib/cms";
import { newsitems } from "@/lib/data-news";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata({
  title: "News & Company Updates",
  description: "Project announcements, new contracts, company milestones, awards, partnerships, events and community activities.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="News & Company Updates"
        subtitle="Project announcements, new contracts, milestones, partnerships and community activities from across Prodigy."
      />
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(getCollection<typeof newsitems>("news") || newsitems).map((n) => (
              <article key={n.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                <div className="overflow-hidden">
                  <img src={n.image} alt={n.title} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">{n.category}</span>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-ink">{n.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{n.excerpt}</p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                    <Calendar className="h-3.5 w-3.5 text-accent" /> {n.date}{n.author ? ` • ${n.author}` : ""}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}