"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqs } from "@/lib/data-faqs";
import { useCmsList } from "@/components/hooks/useCmsList";

export default function FaqList() {
  const liveFaqs = useCmsList("faqs", faqs);
  const categories = ["All", ...Array.from(new Set(liveFaqs.map((f) => f.category)))];
  const [active, setActive] = useState<string | null>(null);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = liveFaqs.filter((f) => {
    if (category !== "All" && f.category !== category) return false;
    if (query && !`${f.question} ${f.answer}`.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search FAQs…"
            aria-label="Search FAQs"
            className="w-full rounded-md border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
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
      </div>

      <div className="space-y-3">
        {filtered.map((f) => (
          <div key={f.question} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              onClick={() => setActive(active === f.question ? null : f.question)}
              aria-expanded={active === f.question}
            >
              <span className="text-base font-semibold text-ink">{f.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform ${active === f.question ? "rotate-180" : ""}`} />
            </button>
            {active === f.question ? (
              <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                <p className="text-sm leading-relaxed text-muted">{f.answer}</p>
              </div>
            ) : null}
          </div>
        ))}
        {filtered.length === 0 ? (
          <p className="rounded-xl bg-concrete p-8 text-center text-sm text-muted">
            No FAQs match your search. Try a different term or category.
          </p>
        ) : null}
      </div>
    </div>
  );
}