import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { vacancys } from "@/lib/data-vacancies";
import { Container } from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JobApplicationForm from "@/components/forms/JobApplicationForm";
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
    title: `Apply: ${v.title} | Careers`,
    description: v.summary,
    path: `/careers/${v.slug}/apply`,
  });
}

export default async function ApplyPage({ params }: Params) {
  const { slug } = await params;
  const vacancy = vacancys.find((v) => v.slug === slug);
  if (!vacancy) notFound();
  if (vacancy.status.toLowerCase() !== "open") redirect(`/careers/${vacancy.slug}`);

  return (
    <>
      <section className="bg-charcoal pt-28">
        <Container className="pb-10 pt-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Careers", href: "/careers" },
              { label: vacancy.title, href: `/careers/${vacancy.slug}` },
              { label: "Apply" },
            ]}
          />
          <h1 className="mt-8 font-display text-3xl font-extrabold text-white sm:text-4xl">Apply: {vacancy.title}</h1>
          <p className="mt-3 text-sm text-slate-300">{vacancy.location} • {vacancy.type} • Deadline {vacancy.deadline}</p>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container className="max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card lg:p-9">
            <JobApplicationForm vacancy={vacancy.title} />
          </div>
        </Container>
      </section>
    </>
  );
}