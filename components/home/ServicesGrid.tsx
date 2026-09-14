import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";
import SectionIntro from "@/components/sections/SectionIntro";

type HomeContent = typeof siteContent;

const codes: Record<string, string> = {
  "building-construction": "BLD",
  "civil-engineering": "CIV",
  "structural-engineering": "STR",
  "infrastructure-development": "INF",
  "project-management": "PMO",
  "design-and-build": "D+B",
  "renovation-refurbishment": "R+R",
  "property-development": "PRD",
  "maintenance-facilities": "MFS",
};

export default function ServicesGrid() {
  const c = content<HomeContent>("home");
  const featured = services.slice(0, 6);
  return (
    <section className="border-b border-line bg-paper py-24">
      <div className="page">
        <SectionIntro
          index={c.servicesIndex}
          title={c.servicesTitleA}
          text={c.servicesText}
        />
        <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderColor: "var(--line)" }}>
          {featured.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="svc-card group flex min-h-[300px] flex-col justify-between border-b border-r border-line p-8"
            >
              <div>
                <p className="section-index">
                  {String(i + 1).padStart(2, "0")} / {codes[s.slug] ?? "SVC"}
                </p>
                <h3 className="font-display mt-6 text-2xl font-semibold uppercase leading-tight">
                  {s.name}
                </h3>
              </div>
              <div className="flex items-end justify-between gap-6">
                <p className="max-w-[200px] text-sm leading-relaxed text-muted">{s.short}</p>
                <ArrowUpRight className="h-5 w-5 shrink-0 opacity-40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <Link href="/services" className="arrow-link">
            <span>{c.servicesLinkLabel}</span>
            <ArrowUpRight className="arr h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
