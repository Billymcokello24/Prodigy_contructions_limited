import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";

type HomeContent = typeof siteContent;

export default function StatsBar() {
  const c = content<HomeContent>("home");
  return (
    <section className="border-b border-line bg-paper">
      <div className="page grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
        {c.stats.map((s, i) => (
          <div key={i} className="border-l border-line pl-5 first:border-0 lg:px-8 lg:first:pl-0">
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-4xl font-bold uppercase leading-none text-graphite">{s.value}</dd>
            <dd className="kicker mt-2 text-smoke">{s.label}</dd>
          </div>
        ))}
      </div>
    </section>
  );
}
