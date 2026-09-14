import type { Metadata } from "next";
import { getCollection } from "@/lib/cms";
import { industries } from "@/lib/data-industries";
import { Building2, HeartPulse, Home, Factory, UtensilsCrossed, GraduationCap, Landmark, Users, Warehouse, ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "Prodigy Construction serves government, commercial, residential, industrial, hospitality, healthcare, education, real estate and development sectors across Kenya and East Africa.",
  path: "/industries",
});

const iconMap: Record<string, React.ElementType> = {
  "government-public-sector": Landmark,
  commercial: Building2,
  residential: Home,
  industrial: Factory,
  hospitality: UtensilsCrossed,
  healthcare: HeartPulse,
  education: GraduationCap,
  "real-estate": Warehouse,
  "ngos-development": Users,
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors We Understand Deeply"
        subtitle="Every sector has its own operational, regulatory and procurement context. We build with that context in mind."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(getCollection<typeof industries>("industries") || industries).map((ind) => {
              const Icon = iconMap[ind.slug] ?? Building2;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-charcoal">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-ink">{ind.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{ind.short}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ind.services.slice(0, 3).map((s) => (
                      <span key={s} className="rounded-full bg-concrete px-3 py-1 text-xs font-medium text-muted">{s}</span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Explore industry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}