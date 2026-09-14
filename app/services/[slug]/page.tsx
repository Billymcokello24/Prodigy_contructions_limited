import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services, getService, serviceBySlug } from "@/lib/services";
import { ServiceIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.short,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = serviceBySlug(slug) ?? getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-charcoal pt-28 lg:pt-36">
        <div className="absolute inset-0">
          <img src={service.image} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/60" />
        </div>
        <div className="relative z-10 pb-14 pt-8 lg:pb-20">
          <Container>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.name },
              ]}
            />
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent text-charcoal">
                <ServiceIcon name={service.icon} className="h-8 w-8" />
              </span>
              <div>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {service.name}
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">{service.short}</p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-ink">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{service.description}</p>

            <h2 className="mt-10 text-2xl font-bold text-ink">Key Capabilities</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {service.capabilities.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> {c}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-bold text-ink">Our Process</h2>
            <ol className="mt-5 space-y-4">
              {service.process.map((p, i) => (
                <li key={p.title} className="flex gap-4 rounded-xl border border-slate-200 bg-concrete/40 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-charcoal">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-concrete/50 p-7 shadow-card">
              <h2 className="text-sm font-bold uppercase tracking-wide text-ink">Industries Served</h2>
              <ul className="mt-4 space-y-2">
                {service.industries.map((ind) => (
                  <li key={ind} className="text-sm font-medium text-muted">• {ind}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-charcoal p-7 shadow-card">
              <h2 className="text-lg font-bold text-white">Discuss this service</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Talk to our project team about how your project can be supported.
              </p>
              <div className="mt-5 space-y-3">
                <Button href="/quote" className="w-full">Request a Consultation</Button>
                <Button href="/contact" variant="outline" className="w-full">Contact Us</Button>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-concrete py-14">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-ink">Ready to move your project forward?</h2>
            <p className="text-sm text-muted">Get a considered response from our project team.</p>
          </div>
          <Button href="/quote">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>
    </>
  );
}