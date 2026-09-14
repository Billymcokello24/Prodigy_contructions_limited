import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Sustainability",
  description:
    "Prodigy Construction's environmental, social and governance commitments: sustainable construction, waste reduction, energy efficiency, responsible procurement, community development and employee welfare.",
  path: "/sustainability",
});

const pillars = [
  {
    title: "Sustainable Construction",
    text: "We plan construction to reduce environmental impact across the project lifecycle — from materials selection through site operations to handover.",
  },
  {
    title: "Environmental Responsibility",
    text: "Environmental compliance, impact management and responsible site practices are built into every works package.",
  },
  {
    title: "Resource Efficiency",
    text: "Water, materials and energy are planned, measured and conserved throughout delivery to reduce waste and cost.",
  },
  {
    title: "Waste Reduction",
    text: "Segregation, reuse, recycling and responsible disposal keep site waste out of landfill wherever practicable.",
  },
  {
    title: "Energy Efficiency",
    text: "Energy-conscious design, construction practices and equipment choices reduce operational demand on completed assets.",
  },
  {
    title: "Responsible Procurement",
    text: "We work with suppliers committed to quality, ethics, safety and environmental standards — and encourage responsible sourcing.",
  },
  {
    title: "Community Development",
    text: "We engage communities around our sites, create local employment and procurement opportunitiesand support social impact.",
  },
  {
    title: "Employee Welfare",
    text: "Safe, fair and respectful working environments, training and development are fundamental to how we operate.",
  },
];

const stats = [
  { label: "Waste diversion target", value: "[Target]" },
  { label: "Local employment", value: "[%]" },
  { label: "Energy reduction target", value: "[Target]" },
  { label: "Water conservation", value: "[m³]" },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Building Responsibly, for the Long Term"
        subtitle="Environmental stewardship, social responsibility and governance discipline guide how we plan, build and operate."
        image="https://images.unsplash.com/photo-1473448918919-516b1e9f5938?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Commitment"
            title="ESG in Practice"
            subtitle="Sustainability is not an add-on — it is designed into the way we deliver projects."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-200 bg-concrete/50 p-7 shadow-card">
                <h2 className="text-base font-bold text-ink">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-charcoal py-16">
        <Container>
          <SectionHeading eyebrow="Measurable Impact" title="Sustainability in Numbers" dark />
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center">
                <dd className="font-display text-4xl font-extrabold text-accent">{s.value}</dd>
                <dt className="mt-2 text-sm font-semibold text-white">{s.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-center text-xs text-slate-400">
            Sustainability metrics are configurable and will be populated with verified company figures.

          </p>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}