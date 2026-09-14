import type { Metadata } from "next";
import { getCollection } from "@/lib/cms";
import { equipmentcategorys } from "@/lib/data-equipment";
import { Wrench } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { Container, SectionHeading } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = pageMetadata({
  title: "Equipment & Resources",
  description: "Earthmoving, construction, concrete, road, lifting, transport and surveying equipment available for Prodigy projects.",
  path: "/equipment",
});

export default function EquipmentPage() {
  const collection = getCollection<typeof equipmentcategorys>("equipment") || equipmentcategorys;
  return (
    <>
      <PageHero
        eyebrow="Equipment & Resources"
        title="The Plant Behind the Projects"
        subtitle="A well-managed equipment fleet enables control of programme, quality and cost. Capability details are confirmed per project."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="bg-white py-20">
        <Container>
          <div className="space-y-12">
            {collection.map((cat) => (
              <div key={cat.category}>
                <SectionHeading eyebrow={cat.categoryLabel} title={cat.categoryLabel} align="left" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-concrete/50 p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Wrench className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-ink">{item.name}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{item.description}</p>
                        <p className="mt-1.5 text-xs font-semibold text-accent">{item.availability}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-concrete/50 p-5 text-center text-sm text-muted">
            Equipment database entries are CMS-driven — images, capabilities and availability will be added as the
            asset register is finalized.
          </p>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}