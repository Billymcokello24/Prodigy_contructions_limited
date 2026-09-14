import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ProjectExplorer from "@/components/sections/ProjectExplorer";
import CTABanner from "@/components/sections/CTABanner";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Projects",
  description:
    "Explore completed and ongoing commercial, residential, industrial, roads & infrastructure, institutional, hospitality and government projects by Prodigy Construction Limited.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Projects That Demonstrate Delivery"
        subtitle="A portfolio of buildings, civil works and infrastructure delivered across Kenya and East Africa — with the discipline to repeat it for your project."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80"
      />
      <ProjectExplorer />
      <CTABanner
        title="Have a Project in Mind?"
        subtitle="Tell us about your building, infrastructure or engineering requirement and our team will respond with a clear path forward."
        primaryHref="/quote"
        primaryLabel="Request a Consultation"
      />
    </>
  );
}