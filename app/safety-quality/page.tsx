import type { Metadata } from "next";
import { ShieldCheck, BadgeCheck, Leaf, HardHat, ClipboardCheck, AlertTriangle, FileWarning, Recycle, Droplets, Sun } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Safety & Quality",
  description:
    "Prodigy Construction's health & safety, quality assurance and environmental responsibility framework. Safety and quality are non-negotiable on every project.",
  path: "/safety-quality",
});

const hse = [
  { icon: FileWarning, title: "Site Safety Planning", text: "Construction phase plans, method statements and safe systems of work are prepared before site works begin." },
  { icon: HardHat, title: "PPE & Welfare", text: "Adequate personal protective equipment and site welfare facilities are provided and enforced." },
  { icon: ClipboardCheck, title: "Risk Assessments", text: "Task-level risk assessments identify, control and monitor site hazards." },
  { icon: ShieldCheck, title: "Toolbox Talks", text: "Regular toolbox talks keep crews informed of hazards, controls and safe practices." },
  { icon: HardHat, title: "Site Inspections", text: "Planned inspections by supervisors, safety officers and management confirm controls remain effective." },
  { icon: AlertTriangle, title: "Emergency Procedures", text: "Emergency plans, first-aid arrangements and response procedures are in place and tested." },
  { icon: BadgeCheck, title: "Incident Management", text: "Incidents are reported, investigated and used to prevent recurrence." },
];

const qa = [
  "Incoming material inspection",
  "Sampling & laboratory testing",
  "Quality control checkpoints",
  "Comprehensive documentation",
  "Trained site supervision",
  "Structured defect management",
];

const env = [
  { icon: Recycle, title: "Waste Management", text: "Segregation, reuse, recycling and responsible disposal of construction waste." },
  { icon: Droplets, title: "Water Conservation", text: "Careful water management and dust suppression controls around our sites." },
  { icon: Sun, title: "Energy Efficiency", text: "Energy-conscious equipment selection and plant operations." },
  { icon: Leaf, title: "Environmental Compliance", text: "Compliance with environmental regulations and consent conditions." },
];

export default function SafetyQualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety & Quality"
        title="Safety and Quality Are Non-Negotiable"
        subtitle="They are not priorities — priorities change. Safety and quality are a baseline that never changes on a Prodigy project."
        image="https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-white py-20">
        <Container>
          <SectionHeading eyebrow="Health & Safety" title="Everyone Goes Home Safe" subtitle="Our health and safety framework is integrated into planning, site operations and project management." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hse.map((h) => (
              <div key={h.title} className="rounded-2xl border border-slate-200 bg-concrete/50 p-7 shadow-card">
                <h.icon className="h-7 w-7 text-accent" />
                <h2 className="mt-3 text-base font-bold text-ink">{h.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Quality Assurance" title="Built Right, Verified at Every Stage" dark align="left" />
              <p className="mt-2 mb-6 text-sm leading-relaxed text-slate-300">
                Quality is protected through inspection, testing, documentation and supervision — so what we hand
                over performs as designed.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {qa.map((q) => (
                  <li key={q} className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-accent" /> {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Environmental Responsibility" title="Respect for Site and Surroundings" dark align="left" />
              <div className="mt-2 grid gap-5 sm:grid-cols-2">
                {env.map((e) => (
                  <div key={e.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <e.icon className="h-6 w-6 text-accent" />
                    <h3 className="mt-3 text-sm font-bold text-white">{e.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{e.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="rounded-2xl border border-dashed border-slate-300 bg-concrete/50 p-8 text-center">
            <h2 className="text-lg font-bold text-ink">Certifications & Accreditations</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Certifications and accreditations will be displayed here as they are confirmed by the company. The
              site is structured so that verified credentials can be published with citation.
            </p>
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}