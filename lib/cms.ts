import fs from "node:fs";
import path from "node:path";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { industries, industryCategories } from "@/lib/data-industries";
import { insights } from "@/lib/data-insights";
import { newsitems } from "@/lib/data-news";
import { teammembers } from "@/lib/data-team";
import { testimonials } from "@/lib/data-testimonials";
import { equipmentcategorys } from "@/lib/data-equipment";
import { vacancys } from "@/lib/data-vacancies";
import { documentitems } from "@/lib/data-documents";
import { faqs } from "@/lib/data-faqs";
import { siteContent, aboutContent } from "@/lib/content-defaults";

export const CMS_ADMIN_PASSWORD = process.env.CMS_ADMIN_PASSWORD ?? "prodigy-admin";

/** All content collections with their built-in defaults (seeded from lib/). */
export const DEFAULT_COLLECTIONS = {
  site: siteContent,
  home: siteContent,
  about: aboutContent,
  services: services,
  projects: projects,
  industries: industries,
  industryCategories,
  insights: insights,
  news: newsitems,
  team: teammembers,
  testimonials: testimonials,
  equipment: equipmentcategorys,
  vacancies: vacancys,
  documents: documentitems,
  faqs: faqs,
} as const;

export type CollectionKey = keyof typeof DEFAULT_COLLECTIONS;

const CONTENT_DIR = path.join(process.cwd(), "content");

function fileFor(key: string): string {
  return path.join(CONTENT_DIR, `${key}.json`);
}

/** Returns the live content for a collection (JSON override, else built-in default). */
export function getCollection<T = unknown>(key: CollectionKey): T {
  const file = fileFor(key);
  if (fs.existsSync(file)) {
    try {
      return JSON.parse(fs.readFileSync(file, "utf-8")) as T;
    } catch {
      // Fall through to default if file is corrupt.
    }
  }
  return (DEFAULT_COLLECTIONS[key] as unknown) as T;
}

/** Writes an override for a collection. Returns true on success. */
export async function saveCollection(key: string, data: unknown): Promise<{ ok: boolean; error?: string }> {
  if (!(key in DEFAULT_COLLECTIONS)) {
    return { ok: false, error: `Unknown collection: ${key}` };
  }
  try {
    if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
    fs.writeFileSync(fileFor(key), JSON.stringify(data, null, 2), "utf-8");
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Write failed" };
  }
}

/** Removes an override so the built-in defaults are used again. */
export function clearCollection(key: CollectionKey): boolean {
  try {
    const file = fileFor(key);
    if (fs.existsSync(file)) fs.unlinkSync(file);
    return true;
  } catch {
    return false;
  }
}

/** Lists all collections with item counts for the admin dashboard. */
export function listCollections(): { key: CollectionKey; label: string; count: number }[] {
  const labels: Record<CollectionKey, string> = {
    site: "Site Settings",
    home: "Home Page",
    about: "About Page",
    services: "Services",
    projects: "Projects",
    industries: "Industries",
    industryCategories: "Industry Categories",
    insights: "Insights / Blog",
    news: "News",
    team: "Leadership Team",
    testimonials: "Testimonials",
    equipment: "Equipment",
    vacancies: "Careers / Vacancies",
    documents: "Downloads",
    faqs: "FAQs",
  };
  const counts: Record<CollectionKey, number> = {
    site: 1,
    home: 1,
    about: 1,
    services: services.length,
    projects: projects.length,
    industries: industries.length,
    industryCategories: industryCategories.length,
    insights: insights.length,
    news: newsitems.length,
    team: teammembers.length,
    testimonials: testimonials.length,
    equipment: equipmentcategorys.length,
    vacancies: vacancys.length,
    documents: documentitems.length,
    faqs: faqs.length,
  };
  return (Object.keys(labels) as CollectionKey[]).map((key) => ({
    key,
    label: labels[key],
    count: counts[key],
  }));
}

/** Deletion of a specific item in a collection supported by array overrides. */
export function removeItem(key: keyof typeof DEFAULT_COLLECTIONS, slug: string): boolean {
  const file = fileFor(key);
  if (!fs.existsSync(file)) return false;
  try {
    const current = JSON.parse(fs.readFileSync(file, "utf-8")) as unknown[];
    if (!Array.isArray(current)) return false;
    const next = current.filter(
      (item) => typeof item === "object" && item !== null && (item as { slug?: string })?.slug !== slug,
    );
    fs.writeFileSync(file, JSON.stringify(next, null, 2), "utf-8");
    return true;
  } catch {
    return false;
  }
}