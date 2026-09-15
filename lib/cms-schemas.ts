/**
 * Per-collection schema overrides for the CMS form editor.
 * Fallbacks use humanized keys + global labels from cms-fields.
 */
import { DEFAULT_COLLECTIONS, type CollectionKey } from "@/lib/cms";
import {
  GLOBAL_LABELS,
  inferFields,
  type FieldDef,
  type FieldType,
} from "@/lib/cms-fields";

interface CollectionSchema {
  labels?: Record<string, string>;
  types?: Record<string, FieldType>;
  options?: Record<string, string[]>;
}

const SCHEMAS: Partial<Record<CollectionKey, CollectionSchema>> = {
  site: {
    labels: {
      name: "Company name",
      shortName: "Short name (logo)",
      companySuffix: "Company suffix",
      heroCoords: "Hero coordinates",
      heroRegion: "Hero region",
      footerRegion: "Footer region",
      heroKicker: "Hero kicker",
      heroTitleA: "Hero title (line 1)",
      heroTitleB: "Hero title (line 2)",
      heroText: "Hero supporting text",
      heroPrimaryLabel: "Primary button label",
      heroPrimaryHref: "Primary button link",
      heroSecondaryLabel: "Secondary button label",
      heroSecondaryHref: "Secondary button link",
      heroImage: "Hero background image",
    },
  },
  home: {},
  about: {
    labels: {
      pageKicker: "Page kicker",
      pageTitle: "Page title",
      pageText: "Page text",
      pageImage: "Page image",
      whoWeAreIndex: "Who we are — index",
      whoWeAreTitle: "Who we are — title",
      whoWeAreText: "Who we are — text",
      visionTitle: "Vision title",
      visionText: "Vision text",
      missionTitle: "Mission title",
      missionText: "Mission text",
      valuesIndex: "Values — index",
      valuesTitle: "Values — title",
      leadershipIndex: "Leadership — index",
      leadershipTitle: "Leadership — title",
      leadershipNote: "Leadership note",
    },
  },
  services: {
    labels: {
      short: "Short description",
    },
  },
  projects: {
    types: {
      status: "select",
    },
    options: {
      status: ["Completed", "Ongoing", "In Progress", "Upcoming"],
    },
  },
  industries: {
    labels: { short: "Short description" },
  },
  team: {
    labels: {
      name: "Full name",
      role: "Role / title",
      department: "Department",
      bio: "Biography",
      image: "Photo",
    },
  },
  testimonials: {
    labels: {
      name: "Client name",
      position: "Position",
      organization: "Organization",
      quote: "Testimonial",
      project: "Associated project",
      rating: "Rating",
      approved: "Published",
    },
    types: {
      approved: "boolean",
      rating: "number",
    },
  },
  equipment: {},
  vacancies: {
    labels: {
      title: "Job title",
      type: "Employment type",
    },
  },
  documents: {
    labels: {
      title: "Document title",
      size: "File size",
      published: "Published",
    },
    types: {
      published: "boolean",
      published2: "boolean",
    },
  },
  faqs: {
    labels: {
      category: "Category",
      question: "Question",
      answer: "Answer",
    },
    types: {
      category: "select",
    },
    options: {
      category: ["General", "Projects", "Commercial"],
    },
  },
  industryCategories: {
    labels: {
      slug: "Slug",
      label: "Label",
    },
  },
};

/** Builds the form schema for a collection (labels merged + inferred). */
export function getCollectionSchema(key: CollectionKey): { kind: "object" | "array"; fields: FieldDef[] } {
  const defaults = DEFAULT_COLLECTIONS[key];
  const cfg = SCHEMAS[key] ?? {};
  const labels = { ...GLOBAL_LABELS, ...(cfg.labels ?? {}) };
  const types = cfg.types ?? {};
  const options = cfg.options ?? {};

  if (Array.isArray(defaults)) {
    const itemSchema = inferFields(defaults[0] as Record<string, unknown> | undefined, labels, types, options);
    return { kind: "array", fields: itemSchema };
  }
  return { kind: "object", fields: inferFields(defaults as Record<string, unknown>, labels, types, options) };
}