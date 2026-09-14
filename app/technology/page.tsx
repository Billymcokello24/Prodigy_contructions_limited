import type { Metadata } from "next";
import { MonitorSmartphone, Box, DraftingCompass, Camera, Framer, LineChart, Files, Database, Gauge, Truck, BarChart3, ClipboardList } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Technology & Innovation",
  description:
    "Digital project management, BIM, CAD, drone inspections, digital documentation and data-driven decision making applied to construction and engineering delivery.",
  path: "/technology",
});

const techs = [
  { icon: ClipboardList, name: "Digital Project Management", text: "Digital tools for planning, tracking, reporting and controlling project delivery." },
  { icon: Box, name: "BIM", text: "Building Information Modelling for coordinated design, clash resolution and asset data." },
  { icon: DraftingCompass, name: "CAD", text: "Computer-aided drafting and design to engineering standards." },
  { icon: MonitorSmartphone, name: "Digital Site Reporting", text: "Structured digital reporting from site to client, faster and more transparent." },
  { icon: Camera, name: "Drone Inspections", text: "Aerial surveys, progress capture and site inspection where deployed." },
  { icon: Framer, name: "Construction Monitoring", text: "Continuous monitoring of progress, quality and safety performance." },
  { icon: Files, name: "Digital Documentation", text: "Secure document control for drawings, approvals, reports and records." },
  { icon: BarChart3, name: "Project Dashboards", text: "Live dashboards that make programme, cost and risk visible to stakeholders." },
  { icon: Database, name: "Quantity & Cost Management", text: "Digital measurement, cost planning and commercial management." },
  { icon: Gauge, name: "Modern Construction Equipment", text: "Right-sized, well-maintained plant and equipment matched to each works package." },
  { icon: LineChart, name: "Data-Driven Decision Making", text: "Evidence-based decisions informed by site, programme and cost data." },
  { icon: Truck, name: "Logistics & Plant Control", text: "Disciplined logistics, plant allocation and materials flow planning." },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology & Innovation"
        title="Modern Methods, Disciplined Delivery"
        subtitle="We apply the right technology to make projects more predictable, transparent and better quality."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Toolkit"
            title="The Technologies Behind Our Delivery"
            subtitle="The methods listed represent what Prodigy uses in practice — and the site is configurable so the toolkit can be updated as the company's capabilities evolve."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techs.map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-concrete/50 p-7 shadow-card">
                <t.icon className="h-7 w-7 text-accent" />
                <h2 className="mt-3 text-base font-bold text-ink">{t.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center text-sm text-muted">
            Where a technology is not currently applied by the company, it will be removed from this list
            rather than overstated.
          </p>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}