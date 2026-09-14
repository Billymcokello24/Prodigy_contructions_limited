import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import { getCollection } from "@/lib/cms";
import { services } from "@/lib/services";
import { ServiceIcon } from "@/components/ui/Icons";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata({
  title: "Our Services",
  description:
    "Building construction, civil engineering, structural works, infrastructure development, project management, design & build, renovation and maintenance services in Kenya and East Africa.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A Full Delivery Partner, Under One Roof"
        subtitle="From design and build through construction, commissioning and maintenance — the capabilities to deliver complex projects responsibly."
        image="https://images.unsplash.com/photo-1504307651254-35680f60dfb?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(getCollection<typeof services>("services") || services).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-charcoal">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-ink">{s.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.capabilities.slice(0, 4).map((c) => (
                    <span key={c} className="rounded-full bg-concrete px-3 py-1 text-xs font-medium text-muted">
                      {c}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-concrete py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="text-xl font-bold text-ink">Prefer to discuss your requirements?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Our project team can advise on the right delivery route for your building, infrastructure or
              development project.
            </p>
            <Link href="/quote" className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-accent-light">
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="text-xl font-bold text-ink">Every service, delivered with:</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {["Quality workmanship", "Safety leadership", "Transparent reporting", "Cost control", "Programme certainty", "Post-completion support"].map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {v}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}