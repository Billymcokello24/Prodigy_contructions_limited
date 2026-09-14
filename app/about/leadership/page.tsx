import type { Metadata } from "next";
import Link from "next/link";
import { teammembers } from "@/lib/data-team";
import PageHero from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leadership",
  description: "Meet the leadership and technical team behind Prodigy Construction Limited.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The Team Behind Prodigy"
        subtitle="Experienced engineers, project managers, quantity surveyors, architects and site managers leading complex delivery across Kenya."
      />
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teammembers.map((m) => (
              <div key={m.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                <div className="aspect-[4/3] overflow-hidden bg-concrete">
                  <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-ink">{m.name}</h2>
                  <p className="text-sm font-semibold text-accent">{m.role}</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted">{m.department}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-concrete/50 p-6 text-center text-sm text-muted">
            Full team profiles will be published as the company supplies verified biographies and photographs.{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">Contact us</Link> to suggest an update.

          </p>
        </Container>
      </section>
    </>
  );
}