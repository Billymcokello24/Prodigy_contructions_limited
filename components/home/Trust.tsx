import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";

type HomeContent = typeof siteContent;

const pillars = [
  "Quality workmanship",
  "Professional project management",
  "Safety",
  "Engineering excellence",
  "Transparent communication",
  "Timely delivery",
  "Cost management",
  "Long-term value",
];

export default function Trust() {
  const c = content<HomeContent>("home");
  return (
    <section className="border-b border-line bg-paper py-24">
      <div className="page grid gap-12 lg:grid-cols-2">
        <div>
          <p className="section-index">{c.introIndex}</p>
          <h2 className="display-md headline-accent mt-5 max-w-xl">
            {c.introTitleA} <em>{c.introTitleAccent}</em>
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <p className="max-w-md text-base leading-relaxed text-muted">{c.introText}</p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 border-t border-line pt-6">
            {pillars.map((pillar) => (
              <li key={pillar} className="flex items-center gap-3">
                <span className="h-1 w-1 shrink-0 bg-orange" />
                <span className="font-mono text-[0.72rem] uppercase tracking-wider text-graphite">{pillar}</span>
              </li>
            ))}
          </ul>
          <Link href={c.introLinkHref} className="arrow-link">
            <span>{c.introLinkLabel}</span>
            <ArrowUpRight className="arr h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
