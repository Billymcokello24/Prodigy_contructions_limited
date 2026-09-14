import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { content } from "@/lib/content";
import type { siteContent } from "@/lib/content-defaults";

type HomeContent = typeof siteContent;

export default function Hero() {
  const c = content<HomeContent>("home");
  return (
    <section className="relative min-h-screen overflow-hidden bg-graphite text-paper" style={{ minHeight: "840px" }}>
      <div className="absolute inset-0">
        <div
          className="hero-zoom h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${c.heroImage})` }}
          role="img"
          aria-label="Prodigy construction site"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#0c100eeb 0%,#0c100ea6 43%,#0c100e1f 75%),linear-gradient(0deg,rgba(12,16,14,.55) 0%,transparent 45%)",
          }}
        />
      </div>

      <div className="page relative z-10 flex h-full min-h-[720px] flex-col justify-end pb-32">
        <p className="rise kicker text-orange">{c.heroKicker}</p>
        <h1 className="rise rise-d1 display mt-6 max-w-4xl">
          {c.heroTitleA}
          <br />
          <span className="text-paper/55">{c.heroTitleB}</span>
        </h1>
        <p className="rise rise-d2 mt-6 max-w-xl text-base leading-relaxed text-paper/75">
          {c.heroText}
        </p>
        <div className="rise rise-d3 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
          <Link href={c.heroPrimaryHref} className="btn flex items-center gap-2 sm:ml-16">
            {c.heroPrimaryLabel} <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href={c.heroSecondaryHref}
            className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-widest text-paper/85 transition-colors hover:text-orange"
          >
            <span className="h-[1px] w-8 bg-current" />
            {c.heroSecondaryLabel}
          </Link>
        </div>
      </div>

      <div className="page absolute inset-x-0 bottom-6 z-10 flex items-center justify-between border-t border-white/35 pt-3 font-mono text-[0.55rem] uppercase tracking-widest text-paper/70">
        <span>PRODIGY / 001</span>
        <span className="hidden sm:inline">{c.heroRegion}</span>
        <a href="#next" className="transition-colors hover:text-orange">Scroll ↓</a>
      </div>
    </section>
  );
}
