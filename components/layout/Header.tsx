"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Search } from "lucide-react";
import { site, nav } from "@/lib/site";
import { siteContent } from "@/lib/content-defaults";

type SiteContentShape = typeof siteContent;

function useSiteContent(): SiteContentShape {
  const [c, setC] = useState<SiteContentShape | null>(null);
  useEffect(() => {
    fetch(`/api/cms?key=site`)
      .then((r) => r.json())
      .then((j) => setC(j.data ?? null))
      .catch(() => setC(null));
  }, []);
  return c ?? (siteContent as SiteContentShape);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const content = useSiteContent();

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-graphite text-paper">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <div className="page flex items-center justify-between" style={{ height: 84 }}>
        <Link href="/" className="flex items-baseline gap-3" onClick={() => setMobileOpen(false)}>
          <span className="font-display text-[26px] font-bold uppercase tracking-wide text-paper">
            {content.shortName}
          </span>
          <span className="hidden font-mono text-[0.55rem] uppercase tracking-[0.28em] text-paper/60 sm:inline">
            {content.companySuffix}
          </span>
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-7" aria-label="Main navigation">
          {nav.map((item) =>
            !item.cta && !item.mega ? (
              <Link
                key={item.label}
                href={item.href}
                className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-paper/80 transition-colors hover:text-orange"
              >
                {item.label}
              </Link>
            ) : item.mega ? (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-paper/80 transition-colors hover:text-orange"
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="w-72 border border-white/15 bg-graphite p-2">
                    {item.mega.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="flex items-center justify-between px-3 py-2 font-mono text-[0.6rem] uppercase tracking-wider text-paper/70 transition-colors hover:bg-white/5 hover:text-orange"
                      >
                        <span>{sub.label}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-50" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : null,
          )}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link href="/search" aria-label="Search" className="text-paper/80 transition-colors hover:text-orange">
            <Search className="h-4 w-4" />
          </Link>
          <span className="font-mono text-[0.55rem] uppercase tracking-widest text-paper/40">
            {content.heroCoords}
          </span>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/quote"
            className="btn btn-sm flex items-center gap-2"
          >
            Request a quote <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            className="lg:hidden inline-flex items-center justify-center text-paper"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/quote"
            className="btn btn-sm flex items-center gap-2"
          >
            Request a quote <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            className="inline-flex items-center justify-center text-paper"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden border-t border-white/10 bg-graphite px-4 pb-8 pt-4">
          <div className="grid gap-0.5">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-white/5 last:border-0">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-paper/90"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                </Link>
                {item.mega ? (
                  <div className="mb-2 grid gap-0 border-l border-white/10 pl-4">
                    {item.mega.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="py-1.5 font-mono text-[0.6rem] uppercase tracking-wider text-paper/50 hover:text-orange"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <Link
            href="/quote"
            className="btn mt-5 w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </header>
  );
}