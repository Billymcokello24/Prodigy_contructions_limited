"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { industries } from "@/lib/data-industries";
import { insights } from "@/lib/data-insights";
import { newsitems } from "@/lib/data-news";
import { faqs } from "@/lib/data-faqs";
import PageHero from "@/components/sections/PageHero";

type Result = {
  label: string;
  title: string;
  href: string;
  snippet: string;
};

const index: { label: string; items: { title: string; href: string; snippet: string }[] }[] = [
  {
    label: "Services",
    items: services.map((s) => ({ title: s.name, href: `/services/${s.slug}`, snippet: s.short })),
  },
  {
    label: "Projects",
    items: projects.map((p) => ({ title: p.name, href: `/projects/${p.slug}`, snippet: p.description })),
  },
  {
    label: "Industries",
    items: industries.map((i) => ({ title: i.name, href: `/industries/${i.slug}`, snippet: i.short })),
  },
  {
    label: "Insights",
    items: insights.map((i) => ({ title: i.title, href: `/insights/${i.slug}`, snippet: i.excerpt })),
  },
  {
    label: "News",
    items: newsitems.map((n) => ({ title: n.title, href: `/news`, snippet: n.excerpt })),
  },
  {
    label: "FAQs",
    items: faqs.map((f) => ({ title: f.question, href: `/faqs`, snippet: f.answer })),
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo<Result[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const matches: Result[] = [];
    for (const group of index) {
      for (const item of group.items) {
        if (`${item.title} ${item.snippet}`.toLowerCase().includes(q)) {
          matches.push({ label: group.label, ...item });
        }
      }
    }
    return matches.slice(0, 30);
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Search Prodigy"
        subtitle="Search across services, projects, industries, insights, news and FAQs."
      />
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
            <input
              type="search"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, projects, articles, FAQs…"
              aria-label="Search the website"
              className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-base text-ink shadow-card focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          {query.trim() ? (
            <div className="mt-8 space-y-5">
              {results.length === 0 ? (
                <p className="rounded-xl bg-concrete p-8 text-center text-sm text-muted">
                  No results for “{query.trim()}”. Try a different term.
                </p>
              ) : null}
              {results.map((r) => (
                <Link key={r.href + r.title} href={r.href} className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:border-accent/40 hover:shadow-lift">
                  <span className="text-xs font-bold uppercase tracking-wide text-accent">{r.label}</span>
                  <h2 className="mt-1 text-base font-bold text-ink group-hover:text-accent">{r.title}</h2>
                  <p className="mt-1 line-clamp-2 text-sm text-muted">{r.snippet}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-center text-sm text-muted">Type a keyword to search the site.</p>
          )}
        </div>
      </section>
    </>
  );
}