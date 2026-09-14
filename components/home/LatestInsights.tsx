import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { insights } from "@/lib/data-insights";
import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";
import SectionIntro from "@/components/sections/SectionIntro";

type HomeContent = typeof siteContent;

export default function LatestInsights() {
  const c = content<HomeContent>("home");
  const latest = insights.slice(0, 2);
  return (
    <section className="border-b border-line bg-paper py-24">
      <div className="page">
        <SectionIntro index={c.notesIndex} title={c.notesTitle} />
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="note-card group flex min-h-[260px] flex-col justify-between bg-paper p-8"
            >
              <p className="kicker text-smoke">
                {(post.category ?? "Field notes").toUpperCase()} · {post.readMinutes ? `${post.readMinutes} MIN` : ""}
              </p>
              <div>
                <h3 className="font-display text-2xl font-semibold uppercase leading-tight transition-colors group-hover:text-orange">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <span className="arrow-link mt-5">
                  <span>Read insight</span>
                  <ArrowUpRight className="arr h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
