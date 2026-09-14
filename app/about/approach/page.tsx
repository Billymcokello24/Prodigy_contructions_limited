import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Approach",
  description: "How Prodigy Construction plans, delivers and supports projects from concept through completion.",
  path: "/about/approach",
});

const stages = [
  { title: "Conception & Briefing", text: "We clarify objectives, constraints, budget and success criteria with the client and stakeholders." },
  { title: "Development & Design", text: "Feasibility, design, engineering input, cost planning and programme development happen before commitment." },
  { title: "Procurement & Mobilisation", text: "Materials, subcontractors, plant and site teams are procured against an approved plan." },
  { title: "Construction & Control", text: "Structured site management, quality inspections, safety controls and progress reporting keep delivery on track." },
  { title: "Commissioning & Handover", text: "Testing, commissioning, documentation and clean handover complete the project properly." },
  { title: "Post-Completion Support", text: "Maintenance, defect management and facilities support protect the asset's long-term value." },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="Discipline From Conception to Completion"
        subtitle="A structured way of working that reduces risk, protects certainty and delivers dependable results."
      />
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-concrete/50 p-7 shadow-card">
                <span className="font-display text-4xl font-extrabold text-accent/30">0{i + 1}</span>
                <h2 className="mt-2 text-lg font-bold text-ink">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}