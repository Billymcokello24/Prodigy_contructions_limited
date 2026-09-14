"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";
import { CheckCircle2 } from "lucide-react";

const categories = [
  "Building Construction",
  "Civil Engineering",
  "Structural Works",
  "Infrastructure",
  "Design & Build",
  "Project Management",
  "Renovation",
  "Property Development",
  "Maintenance",
  "Other",
];

const inputCls =
  "w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

const labelCls = "mb-1.5 block text-sm font-semibold text-ink";

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(option: string) {
    setSelected((prev) => (prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      return;
    }
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-green-800">Thank you</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-green-700">
          Our project team will review your enquiry and contact you shortly.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold text-green-700 hover:underline">
          Submit another enquiry
        </button>
      </div>
    );
  }

  const steps = ["Client Information", "Project Information", "Services Required", "Attachments"];

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card lg:p-9">
      <ol className="mb-8 flex flex-wrap gap-2">
        {steps.map((s, i) => (
          <li key={s} className={`rounded-full px-3 py-1 text-xs font-bold ${i + 1 === step ? "bg-accent text-charcoal" : i + 1 < step ? "bg-green-100 text-green-700" : "bg-concrete text-muted"}`}>
            {i + 1}. {s}
          </li>
        ))}
      </ol>

      {step === 1 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="q-fullname">Full Name *</label>
            <input required id="q-fullname" className={inputCls} autoComplete="name" placeholder="Your full name" />
          </div>
          <div>
            <label className={labelCls} htmlFor="q-company">Company</label>
            <input id="q-company" className={inputCls} placeholder="Company / organization" autoComplete="organization" />
          </div>
          <div>
            <label className={labelCls} htmlFor="q-email">Email *</label>
            <input required type="email" id="q-email" className={inputCls} autoComplete="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className={labelCls} htmlFor="q-phone">Phone *</label>
            <input required type="tel" id="q-phone" className={inputCls} autoComplete="tel" placeholder="+254 …" />
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="q-pname">Project Name</label>
            <input id="q-pname" className={inputCls} placeholder="Project name or reference" />
          </div>
          <div>
            <label className={labelCls} htmlFor="q-cat">Project Category *</label>
            <select required id="q-cat" className={inputCls} defaultValue="">
              <option value="" disabled>Select category</option>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="q-loc">Project Location *</label>
            <input required id="q-loc" className={inputCls} placeholder="County / town / site" />
          </div>
          <div>
            <label className={labelCls} htmlFor="q-size">Project Size</label>
            <input id="q-size" className={inputCls} placeholder="Approx. GFA (m²) or length (km)" />
          </div>
          <div>
            <label className={labelCls} htmlFor="q-budget">Estimated Budget</label>
            <select id="q-budget" className={inputCls} defaultValue="">
              <option value="">Select range</option>
              <option>Under KES 10M</option>
              <option>KES 10M – 50M</option>
              <option>KES 50M – 250M</option>
              <option>KES 250M – 1B</option>
              <option>Above KES 1B</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="q-start">Expected Start</label>
            <input type="date" id="q-start" className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="q-end">Expected Completion</label>
            <input type="date" id="q-end" className={inputCls} />
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div>
          <p className="mb-4 text-sm font-semibold text-ink">Select all services required:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {categories.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => toggle(c)}
                className={`rounded-xl border p-4 text-left text-sm font-semibold transition-colors ${
                  selected.includes(c) ? "border-accent bg-accent/10 text-ink" : "border-slate-200 bg-white text-muted hover:border-accent/40"
                }`}
                aria-pressed={selected.includes(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div>
          <p className="mb-4 text-sm font-semibold text-ink">Attach supporting documents (optional):</p>
          <label className={labelCls} htmlFor="q-files">Drawings, BOQ, plans, specifications, site photos or tender documents</label>
          <input type="file" id="q-files" multiple className={inputCls} />
          <p className="mt-2 text-xs text-muted">Max total 25 MB. Secure handling — accessible only to the project team.</p>
          <label className="mt-6 flex items-start gap-3 text-xs text-muted">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-accent" />
            <span>
              I consent to Prodigy using my details and documents to prepare a quotation.{" "}
              <a href="/privacy-policy" className="font-semibold text-accent hover:underline">Privacy policy</a>
            </span>
          </label>
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap justify-between gap-3">
        {step > 1 ? (
          <button type="button" onClick={() => setStep(step - 1)} className="rounded-md border border-slate-200 px-5 py-2.5 text-sm font-semibold text-muted hover:border-accent/40">
            Back
          </button>
        ) : <span />}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-light disabled:opacity-60"
        >
          {step < 4 ? "Continue" : status === "submitting" ? "Submitting…" : "Submit Project Enquiry"}
        </button>
      </div>
    </form>
  );
}