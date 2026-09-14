import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Building2, ArrowRight } from "lucide-react";
import { industries } from "@/lib/data-industries";
import { services } from "@/lib/services";
import { Container, SectionHeading } from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";
import { projectCategories } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  return pageMetadata({
    title: `${ind.name} | Industries`,
    description: ind.short,
    path: `/industries/${ind.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Params) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const linkedServices = services.filter((s) =>
    s.industries.some((x) => x.toLowerCase().includes(ind.name.toLowerCase().split(" &")[0]))
  );

  const iconName = ind.icon || "Building2";

  return (
    <>
      <section className="bg-charcoal pt-28 lg:pt-36">
        <Container className="pb-14 pt-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: ind.name },
            ]}
          />
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-charcoal">
              <Building2 className="h-8 w-8" />
            </span>
            <div>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{ind.name}</h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">{ind.short}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-ink">About This Sector</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{ind.description}</p>

            <h2 className="mt-10 text-2xl font-bold text-ink">Capabilities We Bring</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {ind.services.map((s) => (
                <li key={s} className="flex items-center gap-2.5 rounded-lg bg-concrete/60 px-4 py-3 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-accent" /> {s}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-ink">Related Projects</h2>
            <p className="mt-3 text-sm text-muted">
              View our{" "}
              <Link href="/projects" className="font-semibold text-accent hover:underline">
                complete project portfolio
              </Link>{" "}
              for {ind.name.toLowerCase()} and related sectors, including{" "}
              {projectCategories.map((c) => c.label).join(", ")}.
            </p>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {linkedServices.length > 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-concrete/50 p-7 shadow-card">
                <h2 className="text-sm font-bold uppercase tracking-wide text-ink">Services for this sector</h2>
                <ul className="mt-4 space-y-2">
                  {linkedServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="group flex items-center justify-between text-sm font-semibold text-ink">
                        {s.name}
                        <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="rounded-2xl bg-charcoal p-7 shadow-card">
              <h2 className="text-lg font-bold text-white">Plan a {ind.name.toLowerCase()} project</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Share your brief and our team will respond with a clear approach.
              </p>
              <Button href="/quote" className="mt-5 w-full">Request a Consultation</Button>
            </div>
          </aside>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}