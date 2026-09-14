"use client";

import { useState, type FormEvent } from "react";
import { vacancys } from "@/lib/data-vacancies";

const inputCls =
  "w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const labelCls = "mb-1.5 block text-sm font-semibold text-ink";

export default function JobApplicationForm({ vacancy }: { vacancy: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <h3 className="text-xl font-bold text-green-800">Application received</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-green-700">
          Thank you for applying for the {vacancy} role. Our recruitment team will review your application and
          contact shortlisted candidates.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="a-role">Applying for</label>
        <input id="a-role" className={inputCls} value={vacancy} readOnly />
      </div>
      <div>
        <label className={labelCls} htmlFor="a-name">Full Name *</label>
        <input required id="a-name" className={inputCls} autoComplete="name" />
      </div>
      <div>
        <label className={labelCls} htmlFor="a-email">Email *</label>
        <input required type="email" id="a-email" className={inputCls} autoComplete="email" />
      </div>
      <div>
        <label className={labelCls} htmlFor="a-phone">Phone *</label>
        <input required type="tel" id="a-phone" className={inputCls} autoComplete="tel" />
      </div>
      <div>
        <label className={labelCls} htmlFor="a-location">Location</label>
        <input id="a-location" className={inputCls} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="a-cv">CV / Resume *</label>
        <input required type="file" id="a-cv" className={inputCls} accept=".pdf,.doc,.docx" />
        <p className="mt-1 text-xs text-muted">PDF or Word, max 10 MB.</p>
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="a-cover">Cover Note</label>
        <textarea id="a-cover" rows={4} className={inputCls} placeholder="Briefly tell us why you're the right fit…" />
      </div>
      <label className="flex items-start gap-3 text-xs text-muted sm:col-span-2">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-accent" />
        <span>
          I consent to Prodigy Construction Limited processing my application data for recruitment purposes.{" "}
          <a href="/privacy-policy" className="font-semibold text-accent hover:underline">Privacy policy</a>
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-light disabled:opacity-60 sm:col-span-2"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}