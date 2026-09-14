import type { ReactNode } from "react";
import PageHero from "@/components/sections/PageHero";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={`Last updated: ${updated}`} />
      <section className="bg-white py-16">
        <article className="prose mx-auto w-full max-w-3xl px-4 text-muted sm:px-6 lg:px-8">
          <div className="space-y-6 text-sm leading-relaxed">{children}</div>
        </article>
      </section>
    </>
  );
}