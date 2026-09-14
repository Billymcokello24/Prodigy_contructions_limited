"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { projects, projectCategories } from "@/lib/projects";
import { useCmsList } from "@/components/hooks/useCmsList";

const statuses = ["All", "Completed", "Ongoing", "Upcoming"];

export default function ProjectExplorer() {
  const [category, setCategory] = useState("all");
  const liveProjects = useCmsList("projects", projects);
  const [status, setStatus] = useState("All");
  const [year, setYear] = useState("all");

  const years = useMemo(
    () => Array.from(new Set(liveProjects.map((p) => p.completion.slice(-4)))).sort().reverse(),
    []
  );

  const filtered = useMemo(() => {
    return liveProjects.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (status !== "All" && p.status !== status) return false;
      if (year !== "all" && !p.completion.endsWith(year)) return false;
      return true;
    });
  }, [category, status, year]);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {["all", ...projectCategories.map((c) => c.slug)].map((c) => {
              const label = c === "all" ? "All Sectors" : projectCategories.find((pc) => pc.slug === c)?.label ?? c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                    category === c ? "bg-accent text-charcoal" : "bg-concrete text-muted hover:bg-slate-200"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-ink"
              aria-label="Filter by status"
            >
              {statuses.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-ink"
              aria-label="Filter by completion year"
            >
              <option value="all">All Years</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted">
          Showing <strong className="text-ink">{filtered.length}</strong> {filtered.length === 1 ? "project" : "projects"}
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-charcoal/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {p.categoryLabel}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-charcoal">
                  {p.status}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted">
                  <MapPin className="h-3.5 w-3.5 text-accent" /> {p.location}
                </div>
                <h3 className="mt-2 text-lg font-bold leading-snug text-ink">{p.name}</h3>
                <p className="mt-2 text-sm font-medium text-muted">Client: {p.client}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  View project <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-concrete/50 p-12 text-center">
            <p className="text-lg font-bold text-ink">No projects match your filters</p>
            <p className="mt-1 text-sm text-muted">Try clearing a filter to see more work.</p>
            <button onClick={() => { setCategory("all"); setStatus("All"); setYear("all"); }} className="mt-4 rounded-md bg-accent px-5 py-2 text-sm font-semibold text-charcoal">
              Clear filters
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}