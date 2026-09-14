import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";

type HomeContent = typeof siteContent;

export default function SustainabilityBand() {
  const c = content<HomeContent>("home");
  return (
    <section className="border-b border-line bg-moss text-paper py-24">
      <div className="page">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="kicker text-orange">{c.sustainabilityIndex}</p>
            <h2 className="display-sm mt-4 max-w-xl">{c.sustainabilityTitle}</h2>
          </div>
          <Link href="/sustainability" className="arrow-link !text-paper">
            <span>{c.sustainabilityLinkLabel}</span>
            <ArrowUpRight className="arr h-3.5 w-3.5" />
          </Link>
        </div>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/60">{c.sustainabilityText}</p>
      </div>
    </section>
  );
}
