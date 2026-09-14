import type { Metadata } from "next";
import { LayoutDashboard, TrendingUp, FileCheck2, MessageSquare, Bell, LockKeyhole, Image, ReceiptText } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Client Portal",
  description: "A secure client portal concept for project dashboards, progress tracking, documents and approvals.",
  path: "/portal",
});

const features = [
  { icon: LayoutDashboard, title: "Project Dashboard", text: "An at-a-glance view of every live project, its phase and current status." },
  { icon: TrendingUp, title: "Progress Tracking", text: "Overall progress, completed and upcoming milestones with clean progress indicators." },
  { icon: FileCheck2, title: "Documents & Drawings", text: "Controlled access to drawings, site reports, invoices and approval records." },
  { icon: Image, title: "Site Photos", text: "Up-to-date site photography so you can see progress from anywhere." },
  { icon: MessageSquare, title: "Messages & RFIs", text: "A structured channel for requests, clarifications and correspondence." },
  { icon: Bell, title: "Notifications", text: "Alerts for milestones, approvals, payments and issues that need attention." },
  { icon: ReceiptText, title: "Invoices & Payments", text: "Payment status, variation orders and commercial records in one place." },
  { icon: LockKeyhole, title: "Secure Access", text: "Role-based access with authentication, audit logging and encrypted communication." },
];

export default function PortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Portal"
        title="A Window Into Your Project"
        subtitle="Live progress, clear documents and structured communication — the future of how Prodigy keeps clients informed."
      />
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Concept"
            title="What the Portal Offers"
            subtitle="The client portal is designed to keep every project transparent, current and accountable."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 bg-concrete/50 p-7 shadow-card">
                <f.icon className="h-7 w-7 text-accent" />
                <h2 className="mt-3 text-base font-bold text-ink">{f.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-concrete/40 p-8 text-center">
            <h2 className="text-lg font-bold text-ink">Portal access</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Secure portal access is provided to clients during live projects. If you are a current client and need
              portal access, <a href="/contact" className="font-semibold text-accent hover:underline">contact our project team</a>.
            </p>
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}