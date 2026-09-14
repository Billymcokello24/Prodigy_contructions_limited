import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { getCollection } from "@/lib/cms";
import { vacancys } from "@/lib/data-vacancies";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description: "Build your career with Prodigy Construction Limited — current vacancies, internship and graduate opportunities in Kenya.",
  path: "/careers",
});

const perks = [
  "Real project experience from day one",
  "Structured training and professional development",
  "Mentorship from experienced engineers and managers",
  "Safe, respectful and supportive working environments",
  "Opportunities across Kenya and East Africa",
  "Career growth grounded in performance",
];

export default function CareersPage() {
  const open =
    (getCollection<typeof vacancys>("vacancies") || vacancys).filter(
      (v) => String(v.status).toLowerCase() === "open",
    );
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career With Prodigy"
        subtitle="Join a team that takes construction seriously — where your work is visible, your development is supported and quality is the standard."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why Prodigy" title="A Place to Grow" align="left" />
            <div className="mt-2 grid gap-4">
              {perks.map((p) => (
                <div key={p} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent" /> {p}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Development" title="Learning Is Part of the Job" align="left" />
            <p className="mt-2 text-base leading-relaxed text-muted">
              Engineers, project managers, quantity surveyors, architects and site teams grow through a blend of
              structured training, on-site apprenticeship and exposure to complex projects. We invest in the
              skills that make delivery dependable — and in the people who carry them.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Students and recent graduates are placed at the heart of live construction projects, where they learn
              faster and contribute sooner.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-concrete py-16">
        <Container>
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Vacancies"
            subtitle={`${open.length} open ${open.length === 1 ? "position" : "positions"} right now`}
          />
          <div className="space-y-4">
            {open.map((v) => (
              <Link
                key={v.slug}
                href={`/careers/${v.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h2 className="text-lg font-bold text-ink group-hover:text-accent">{v.title}</h2>
                  <p className="mt-1 text-sm text-muted">{v.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-muted">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-accent" /> {v.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-accent" /> {v.type} • {v.experience}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-accent" /> Closes {v.deadline}</span>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-charcoal">
                  Apply <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
            {open.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-muted">
                There are no open vacancies right now. Check back soon or{" "}
                <Link href="/contact" className="font-semibold text-accent hover:underline">contact us</Link> for
                speculative applications.
              </p>
            ) : null}
          </div>
        </Container>
      </section>
      <CTABanner
        title="Don't See Your Role?"
        subtitle="Send a speculative application to our team and we'll keep your details for future opportunities."
        primaryHref="/contact"
        primaryLabel="Contact Our Team"
      />
    </>
  );
}