import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";
import { getCollection } from "@/lib/cms";
import { documentitems } from "@/lib/data-documents";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Downloads & Documents",
  description: "Company profile, capability statement, policies and corporate documents available from Prodigy Construction Limited.",
  path: "/downloads",
});

export default function DownloadsPage() {
  const published = (getCollection<typeof documentitems>("documents") || documentitems).filter((d) => d.published);
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title="Resource & Download Centre"
        subtitle="Company profile, capability statement, policies and corporate information."
      />
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            eyebrow="Library"
            title="Available Documents"
            subtitle="Documents are published after administrator approval. Select a document to request or download."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {published.map((d) => (
              <div key={d.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-concrete/50 p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="mt-4 flex-1">
                  <h2 className="text-base font-bold text-ink">{d.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.description}</p>
                </div>
                <button className="mt-4 inline-flex w-fit items-center gap-2 rounded-md border border-accent/30 px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-charcoal">
                  <Download className="h-4 w-4" /> PDF • {d.size}
                </button>
              </div>
            ))}
          </div>
          {published.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-concrete/50 p-12 text-center">
              <p className="text-lg font-bold text-ink">Document library is being prepared</p>
              <p className="mt-1 text-sm text-muted">
                Company documents will appear here once approved for publication.
              </p>
            </div>
          ) : null}
        </Container>
      </section>
      <CTABanner />
    </>
  );
}