import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Section";
import QuoteForm from "@/components/forms/QuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quote",
  description: "Request a detailed quotation from Prodigy Construction Limited for your building, civil engineering or infrastructure project.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Request a Consultation & Quotation"
        subtitle="Share your project brief and we will prepare a considered response."
        image="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-concrete py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <QuoteForm />
          <aside className="space-y-5">
            <div className="rounded-2xl bg-charcoal p-7 shadow-card">
              <h2 className="text-lg font-bold text-white">What happens next?</h2>
              <ol className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex gap-3"><span className="font-bold text-accent">1.</span> We acknowledge your enquiry within one working day.</li>
                <li className="flex gap-3"><span className="font-bold text-accent">2.</span> Our project team reviews the brief and any attachments.</li>
                <li className="flex gap-3"><span className="font-bold text-accent">3.</span> We arrange a consultation — on site or virtual.</li>
                <li className="flex gap-3"><span className="font-bold text-accent">4.</span> You receive a considered quotation and clear next steps.</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
              <h2 className="text-base font-bold text-ink">Need to talk first?</h2>
              <p className="mt-2 text-sm text-muted">
                Prefer a conversation before filling forms?{" "}
                <a href="/contact" className="font-semibold text-accent hover:underline">Contact us</a> directly and
                we'll point you to the right person.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}