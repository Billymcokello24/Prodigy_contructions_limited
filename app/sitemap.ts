import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { industries } from "@/lib/data-industries";
import { insights } from "@/lib/data-insights";
import { vacancys } from "@/lib/data-vacancies";

const staticRoutes = [
  "",
  "/about",
  "/about/leadership",
  "/about/approach",
  "/process",
  "/services",
  "/projects",
  "/industries",
  "/sustainability",
  "/safety-quality",
  "/technology",
  "/equipment",
  "/clients",
  "/testimonials",
  "/careers",
  "/insights",
  "/news",
  "/downloads",
  "/faqs",
  "/contact",
  "/quote",
  "/privacy-policy",
  "/terms",
  "/cookies",
  "/accessibility",
  "/disclaimer",
  "/data-protection",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" || route === "/projects" ? 0.9 : 0.6,
  }));

  const dynamic = [
    ...services.map((s) => `/services/${s.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
    ...vacancys.map((v) => `/careers/${v.slug}`),
  ].map((slug) => ({ url: `${site.url}${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 }));

  return [...pages, ...dynamic];
}