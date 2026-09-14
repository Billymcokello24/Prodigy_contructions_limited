import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/data-industries";
import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";
import SectionIntro from "@/components/sections/SectionIntro";

type HomeContent = typeof siteContent;

export default function IndustriesServed() {
  const c = content<HomeContent>("home");
  const items = industries.slice(0, 6);
  return (
    <section className="border-b border-line bg-paper py-24">
      <div className="page">
        <SectionIntro index={c.industriesIndex} title={c.industriesTitle} />
        <ol className="grid grid-cols-1 border-t border-line md:grid-cols-2">
          {items.map((ind, i) => (
            <li key={ind.slug} className="border-b border-line">
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex items-center justify-between py-6"
              >
                <span className="flex items-baseline gap-6">
                  <span className="section-index">{i + 1}</span>
                  <span className="font-display text-xl font-semibold uppercase leading-none transition-colors group-hover:text-orange">
                    {ind.name}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-graphite opacity-30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:text-orange" />
              </Link>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex justify-end">
          <Link href="/industries" className="arrow-link">
            <span>View all industries</span>
            <ArrowUpRight className="arr h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
