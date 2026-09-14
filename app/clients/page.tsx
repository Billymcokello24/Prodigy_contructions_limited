import type { Metadata } from "next";
import { Handshake, Building2, Package, ShieldCheck } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Clients & Partners",
  description: "Clients, strategic partners and approved suppliers that Prodigy Construction has worked with.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Partners"
        title="Trusted by the Organisations We Build For"
        subtitle="Government institutions, developers, corporations and international organizations rely on Prodigy for dependable delivery."
      />
      <section className="bg-white py-20">
        <Container className="space-y-16">
          <div>
            <SectionHeading eyebrow="Clients" title="Who We Work With" subtitle="Our clients span government, commercial, institutional, development and private sectors." />
            <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-dashed border-slate-300 bg-concrete/40 p-10">
              <p className="w-full text-center text-sm text-muted">
                Client logos are displayed with permission. Official logo placements will be published here as
                authorisations are received.
              </p>
              <LogoPlaceholder label="Government & County Clients" />
              <LogoPlaceholder label="Corporates & Developers" />
              <LogoPlaceholder label="Institutional Clients" />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Partners" title="Strategic Partners" subtitle="Organisations we collaborate with to deliver complete solutions." />
            <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-dashed border-slate-300 bg-concrete/40 p-10">
              <p className="w-full text-center text-sm text-muted">
                Partner logos will be displayed here with authorization.
              </p>
              <LogoPlaceholder label="Design & Engineering Partners" />
              <LogoPlaceholder label="Supply & Delivery Partners" />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Suppliers" title="Approved Suppliers" subtitle="A curated register of suppliers and sub-contractors who meet our quality and safety standards." />
            <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-dashed border-slate-300 bg-concrete/40 p-10">
              <p className="w-full text-center text-sm text-muted">
                The approved supplier register is maintained internally and published selectively.
              </p>
              <LogoPlaceholder label="Materials & Plant Suppliers" />
            </div>
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}

function LogoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex w-48 flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-card">
      <ShieldCheck className="h-8 w-8 text-accent/60" />
      <span className="text-xs font-semibold text-muted">{label}</span>
    </div>
  );
}