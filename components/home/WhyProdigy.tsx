import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";
import SectionIntro from "@/components/sections/SectionIntro";

type HomeContent = typeof siteContent;

const whys = [
  {
    title: "Quality",
    text: "We maintain clear workmanship and material standards from mobilisation to handover.",
  },
  {
    title: "Safety",
    text: "Safety is planned into site operations, supervision and daily decision-making.",
  },
  {
    title: "Reliability",
    text: "We communicate transparently and manage commitments with professional discipline.",
  },
  {
    title: "Technical Expertise",
    text: "Engineering knowledge and construction experience shape every solution.",
  },
  {
    title: "Innovation",
    text: "We adopt better methods and technologies where they create measurable project value.",
  },
  {
    title: "Value",
    text: "We prioritise durable, maintainable outcomes over short-term appearances.",
  },
];

export default function WhyProdigy() {
  const c = content<HomeContent>("home");
  return (
    <section className="border-b border-line bg-paper py-24">
      <div className="page">
        <SectionIntro index={c.valuesIndex} title={c.valuesTitle} />
        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whys.map((w, i) => (
            <div
              key={w.title}
              className="group flex min-h-[220px] flex-col justify-between bg-paper p-8 transition-colors hover:bg-graphite hover:text-paper"
            >
              <p className="section-index">{String(i + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold uppercase leading-tight transition-colors group-hover:text-orange">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-paper/70">
                  {w.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
