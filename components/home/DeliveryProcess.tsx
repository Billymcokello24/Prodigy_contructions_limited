import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";
import SectionIntro from "@/components/sections/SectionIntro";

type HomeContent = typeof siteContent;

const stages = [
  { title: "Initial consultation", text: "We listen to your brief, objectives and constraints before recommending an approach." },
  { title: "Requirements analysis", text: "We translate your requirements into a clear scope of works and delivery criteria." },
  { title: "Site assessment", text: "Surveys, ground conditions and access constraints are assessed early." },
  { title: "Feasibility", text: "We test technical, commercial and programme feasibility before commitment." },
  { title: "Design & engineering", text: "Drawings, specifications and engineering input are developed with buildability in mind." },
  { title: "Cost planning", text: "Transparent cost plans and budgets are agreed before construction starts." },
  { title: "Procurement", text: "Materials, subcontractors and plant are procured against approved schedules." },
  { title: "Construction", text: "Delivered through structured programmes, experienced crews and disciplined site management." },
  { title: "Quality inspection", text: "Hold points, inspections and testing verify quality at every critical stage." },
  { title: "Testing & commissioning", text: "Systems and services are tested and commissioned to handover standards." },
  { title: "Handover", text: "Documentation, training and asset records are handed over in an organised way." },
  { title: "Maintenance", text: "Post-handover support and maintenance keep the asset performing through its service life." },
];

export default function DeliveryProcess() {
  const c = content<HomeContent>("home");
  return (
    <section className="border-b border-line bg-limestone py-24">
      <div className="page">
        <SectionIntro
          index={c.processIndex}
          title={
            <>
              {c.processTitleA} <span className="text-orange">{c.processTitleB}</span>
            </>
          }
        />
        <ol className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {stages.map((s, i) => (
            <li key={s.title} className="flex min-h-[150px] flex-col justify-between bg-paper p-6">
              <p className="section-index">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="font-display text-xl font-semibold uppercase leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
