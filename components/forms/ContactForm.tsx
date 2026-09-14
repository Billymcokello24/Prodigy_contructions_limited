"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/services";

const serviceOptions = ["General enquiry", ...services.map((s) => s.name)];

const inputCls =
  "w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 800);
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-bold text-green-800">Thank you</h3>
        <p className="mt-2 text-sm text-green-700">
          Your message has been received. Our project team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-ink">Name *</label>
        <input id="cf-name" required className={inputCls} placeholder="Your name" autoComplete="name" />
      </div>
      <div>
        <label htmlFor="cf-org" className="mb-1.5 block text-sm font-semibold text-ink">Organization</label>
        <input id="cf-org" className={inputCls} placeholder="Company or organization" />
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-sm font-semibold text-ink">Email *</label>
        <input id="cf-email" type="email" required className={inputCls} placeholder="you@example.com" autoComplete="email" />
      </div>
      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-semibold text-ink">Phone</label>
        <input id="cf-phone" type="tel" className={inputCls} placeholder="+254 …" autoComplete="tel" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-service" className="mb-1.5 block text-sm font-semibold text-ink">Service Required</label>
        <select id="cf-service" className={inputCls} defaultValue="General enquiry">
          {serviceOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-ink">Project Description *</label>
        <textarea id="cf-message" required rows={5} className={inputCls} placeholder="Tell us about your project, location and requirements…" />
      </div>
      <label className="flex items-start gap-3 text-xs text-muted sm:col-span-2">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-accent" />
        <span>
          I consent to Prodigy Construction Limited using my details to respond to this enquiry.{" "}
          <a href="/privacy-policy" className="font-semibold text-accent hover:underline">Privacy policy</a>
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-accent-light disabled:opacity-60 sm:col-span-2"
      >
        {status === "submitting" ? "Sending…" : "Submit Project Enquiry"}
      </button>
    </form>
  );
}