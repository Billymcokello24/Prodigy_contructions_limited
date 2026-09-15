import fs from "node:fs";
import path from "node:path";
import {
  dbAddUpload,
  dbClearCollection,
  dbGetCollection,
  dbHasAny,
  dbListKeys,
  dbListUploads,
  dbMigrateLegacy,
  dbSetCollection,
} from "@/lib/db";
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

/** Legacy JSON override directory (migrated into the DB on first run). */
const LEGACY_DIR = path.join(process.cwd(), "content");

function legacyFileFor(key: string): string {
  return path.join(LEGACY_DIR, `${key}.json`);
}

let seeded = false;

/** Once per process: migrate legacy JSON overrides into the DB if it's empty. */
function ensureSeeded(): void {
  if (seeded) return;
  if (!dbHasAny()) {
    for (const key of Object.keys(DEFAULT_COLLECTIONS)) {
      const k = key as CollectionKey;
      const migrated = dbMigrateLegacy(k, legacyFileFor(k));
      if (!migrated) dbSetCollection(k, DEFAULT_COLLECTIONS[k]);
    }
  }
  seeded = true;
}

/**
 * Returns the live content for a collection.
 * Reads from the integrated SQLite DB (seeded/migrated on first access).
 */
export function getCollection<T = unknown>(key: CollectionKey): T {
  ensureSeeded();
  const stored = dbGetCollection(key);
  if (stored !== null) return stored as T;
  return (DEFAULT_COLLECTIONS[key] as unknown) as T;
}

/** Writes a collection to the integrated DB. */
export async function saveCollection(key: string, data: unknown): Promise<{ ok: boolean; error?: string }> {
  if (!(key in DEFAULT_COLLECTIONS)) {
    return { ok: false, error: `Unknown collection: ${key}` };
  }
  try {
    dbSetCollection(key, data);
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Write failed" };
  }
}

/** Removes a collection override so the built-in defaults are used again. */
export function clearCollection(key: CollectionKey): boolean {
  try {
    dbClearCollection(key);
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
  ensureSeeded();
  const live = dbListKeys();
  return (Object.keys(labels) as CollectionKey[]).map((key) => {
    let count: number;
    if (live.includes(key)) {
      const stored = dbGetCollection(key);
      count = Array.isArray(stored) ? stored.length : 1;
    } else {
      count = Array.isArray(DEFAULT_COLLECTIONS[key as CollectionKey])
        ? (DEFAULT_COLLECTIONS[key as CollectionKey] as unknown[]).length
        : 1;
    }
    return { key, label: labels[key], count };
  });
}

/** Deletion of a specific item in a collection (array collections only). */
export function removeItem(key: keyof typeof DEFAULT_COLLECTIONS, slug: string): boolean {
  const current = dbGetCollection(key);
  if (!Array.isArray(current)) return false;
  const next = current.filter(
    (item) => typeof item === "object" && item !== null && (item as { slug?: string })?.slug !== slug,
  );
  if (next.length === current.length) return false;
  dbSetCollection(key, next);
  return true;
}