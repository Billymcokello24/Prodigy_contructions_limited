import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Building2, CalendarDays, CircleDollarSign, FileCheck2, CheckCircle2, ArrowRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import { Container } from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";
import Link from "next/link";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.name,
    description: project.description.slice(0, 155),
    path: `/projects/${project.slug}`,
  });
}

const metaItems = (p: (typeof projects)[number]) => [
  { icon: Building2, key: "Client", value: p.client },
  { icon: MapPin, key: "Location", value: p.location },
  { icon: Building2, key: "Sector", value: p.sector },
  { icon: FileCheck2, key: "Status", value: p.status },
  { icon: CalendarDays, key: "Completion", value: p.completion },
  { icon: CircleDollarSign, key: "Value", value: p.value },
  { icon: FileCheck2, key: "Contract Type", value: p.contractType },
];

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-charcoal pt-28 lg:pt-36">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.name} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/50" />
        </div>
        <div className="relative z-10 pb-14 pt-8 lg:pb-20">
          <Container>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: project.name },
              ]}
            />
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-accent">{project.categoryLabel}</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 text-accent" /> {project.location}
            </p>
          </Container>
        </div>
      </section>

      <section className="bg-white py-14">
        <Container>
          <dl className="grid gap-x-8 gap-y-6 rounded-2xl border border-slate-200 bg-concrete/40 p-7 sm:grid-cols-2 lg:grid-cols-4">
            {metaItems(project).map((m) => (
              <div key={m.key} className="flex gap-3">
                <m.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">{m.key}</dt>
                  <dd className="mt-0.5 text-sm font-bold text-ink">{m.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white pb-16">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-ink">Project Description</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>

            <h2 className="mt-10 text-2xl font-bold text-ink">Scope of Work</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {project.scope.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm font-medium text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {s}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-ink">Challenges</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-ink">Our Solution</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{project.solution}</p>

            <h2 className="mt-10 text-2xl font-bold text-ink">Results</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{project.results}</p>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-charcoal p-7 shadow-card">
              <h2 className="text-lg font-bold text-white">Discuss your project</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Similar delivery capability is available for your next building, infrastructure or development project.
              </p>
              <Button href="/quote" className="mt-5 w-full">Discuss Your Project With Us</Button>
              <Button href="/contact" variant="outline" className="mt-3 w-full">Contact Our Team</Button>
            </div>
          </aside>
        </Container>
      </section>

      {project.gallery.length > 0 ? (
        <section className="bg-concrete py-16">
          <Container>
            <h2 className="text-2xl font-bold text-ink">Project Gallery</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt={`${project.name} gallery`}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-cover shadow-card"
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="bg-white py-16">
          <Container>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-ink">Related Projects</h2>
              <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-light">
                All projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium text-muted">{p.categoryLabel} • {p.location}</p>
                    <h3 className="mt-1.5 text-base font-bold text-ink group-hover:text-accent">{p.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTABanner
        title="Ready to Build With Prodigy?"
        subtitle="Share your project requirements and our team will respond with a clear, considered approach."
      />
    </>
  );
}