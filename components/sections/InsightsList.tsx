"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { insights } from "@/lib/data-insights";
import { useCmsList } from "@/components/hooks/useCmsList";



export default function InsightsList() {
  const liveInsights = useCmsList("insights", insights);
  const categories = ["All", ...Array.from(new Set(liveInsights.map((i) => i.category)))];
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? liveInsights : liveInsights.filter((i) => i.category === category)),
    [category, liveInsights]
  );

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                category === c ? "bg-accent text-charcoal" : "bg-concrete text-muted hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-semibold text-accent">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readMinutes} min</span>
                </div>
                <h2 className="mt-3 text-lg font-bold leading-snug text-ink group-hover:text-accent">{post.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}