import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { vacancys } from "@/lib/data-vacancies";
import { Container } from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vacancys.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const v = vacancys.find((x) => x.slug === slug);
  if (!v) return {};
  return pageMetadata({
    title: `${v.title} | Careers`,
    description: v.summary,
    path: `/careers/${v.slug}`,
  });
}

export default async function VacancyDetailPage({ params }: Params) {
  const { slug } = await params;
  const vacancy = vacancys.find((v) => v.slug === slug);
  if (!vacancy) notFound();

  const isOpen = vacancy.status.toLowerCase() === "open";

  return (
    <>
      <section className="bg-charcoal pt-28 lg:pt-36">
        <Container className="pb-14 pt-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }, { label: vacancy.title }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{vacancy.department}</p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{vacancy.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{vacancy.summary}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-accent" /> {vacancy.location}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> {vacancy.type}</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> {vacancy.experience} experience</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" /> Deadline: {vacancy.deadline}</span>
            </div>
            <div className="mt-7">
              <Button href={isOpen ? `/careers/${vacancy.slug}/apply` : "/careers"} className="w-fit">
                {isOpen ? "Apply for this role" : "Position closed — view other roles"}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-ink">Qualifications</h2>
              <ul className="mt-4 space-y-2.5">
                {vacancy.qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink">Responsibilities</h2>
              <ul className="mt-4 space-y-2.5">
                {vacancy.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-concrete/50 p-7 shadow-card">
              <h2 className="text-lg font-bold text-ink">Ready to apply?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Complete the online application form and attach your CV. We acknowledge every application and
                only contact shortlisted candidates.
              </p>
              <Button href={`/careers/${vacancy.slug}/apply`} className="mt-5 w-full">
                {isOpen ? "Apply Now" : "Application closed"}
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}