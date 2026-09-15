/**
 * Field schema engine for the CMS form editor.
 *
 * Schemas are inferred from the collection defaults, with per-key label and
 * type overrides applied on top. This keeps every content field editable in
 * the admin UI without hand-writing bespoke editors per collection.
 */

export type FieldType =
  | "text" // single-line string
  | "textarea" // multi-line string
  | "number" // number
  | "boolean" // boolean
  | "select" // string chosen from options
  | "image" // image URL, with preview + upload
  | "url" // href / path value
  | "stringArray" // array of strings
  | "objectArray" // array of objects (repeater)
  | "object"; // nested object

export interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  /** For select fields. */
  options?: string[];
  /** For object / objectArray item schemas. */
  fields?: FieldDef[];
  /** Show a short preview label for repeater items. */
  itemLabel?: (item: Record<string, unknown>, i: number) => string;
}

/** Humanizes a camelCase/snake key into readable label text. */
export function humanize(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const IMAGE_KEY_SUFFIX = /(image|photo|photos|logo|avatar|thumb|thumbnail|cover|background|banner|gallery|heroimg)$/i;
const URL_KEY_SUFFIX = /(href|url|uri|linkto)$/i;
const TEXTAREA_KEY_SUFFIX =
  /(text|description|excerpt|bio|summary|answer|quote|solution|results|statement|note|message|content|detail|body|caption|requirement)$/i;

export function isImageValue(value: unknown): boolean {
  if (typeof value !== "string") return false;
  if (/^data:image\//i.test(value)) return true;
  // Local image path or remote image URL (extract file extension before query/hash).
  const bare = value.replace(/[?#].*$/, "");
  return /\.(jpe?g|png|webp|gif|svg|avif|heic|bmp)$/i.test(bare);
}

/** Infers a field type from a name + current value. */
export function inferType(key: string, value: unknown): FieldType {
  if (typeof value === "boolean") return "boolean";
  if (typeof value === "number") return "number";
  if (Array.isArray(value)) {
    if (value.length === 0 || typeof value[0] !== "object" || value[0] === null) return "stringArray";
    return "objectArray";
  }
  if (value && typeof value === "object") return "object";
  if (typeof value === "string" && value.length > 110 && /[A-Za-z]{2} [a-z]/.test(value)) return "textarea";
  if (isImageValue(value)) return "image";
  if (IMAGE_KEY_SUFFIX.test(key)) return "image";
  if (URL_KEY_SUFFIX.test(key)) return "url";
  if (TEXTAREA_KEY_SUFFIX.test(key)) return "textarea";
  return "text";
}

/** Builds the schema for an object given its current values + a label map. */
export function inferFields(
  obj: Record<string, unknown> | undefined,
  labels: Record<string, string> = {},
  typeOverrides: Record<string, FieldType> = {},
  selectOptions: Record<string, string[]> = {},
): FieldDef[] {
  if (!obj) return [];
  return Object.entries(obj).map(([key, value]) => {
    const label = labels[key] ?? humanize(key);
    const type = typeOverrides[key] ?? inferType(key, value);
    const def: FieldDef = { key, label, type };
    if (type === "select") def.options = selectOptions[key] ?? [];
    if (type === "objectArray" || type === "object") {
      const first = Array.isArray(value) ? value[0] : value;
      def.fields = inferFields(first as Record<string, unknown> | undefined);
    }
    return def;
  });
}

/**
 * Shared friendly labels for fields that appear across many collections.
 */
export const GLOBAL_LABELS: Record<string, string> = {
  slug: "Slug",
  name: "Name",
  title: "Title",
  short: "Short description",
  shortName: "Short name",
  category: "Category",
  icon: "Icon",
  image: "Image",
  images: "Images",
  description: "Description",
  excerpt: "Excerpt",
  author: "Author",
  date: "Date",
  readMinutes: "Reading time (min)",
  featured: "Featured",
  location: "Location",
  client: "Client",
  sector: "Sector",
  status: "Status",
  completion: "Completion date",
  value: "Project value",
  contractType: "Contract type",
  scope: "Scope of work",
  challenges: "Challenges",
  solution: "Our solution",
  results: "Results",
  gallery: "Gallery",
  role: "Role",
  department: "Department",
  bio: "Biography",
  quote: "Testimonial",
  project: "Associated project",
  rating: "Rating",
  approved: "Published",
  capabilities: "Key capabilities",
  process: "Delivery process",
  industries: "Industries",
  categoryLabel: "Category label",
  items: "Items",
  availability: "Availability",
  capability: "Capability",
  published: "Published",
  size: "File size",
  question: "Question",
  answer: "Answer",
  qualifications: "Qualifications",
  responsibilities: "Responsibilities",
  summary: "Summary",
  deadline: "Application deadline",
  experience: "Experience",
  type: "Employment type",
};

/** Returns an item preview label for repeater items. */
export function itemLabelOf(def: FieldDef): (item: Record<string, unknown>, i: number) => string {
  const nameKey = ["name", "title", "question", "slug", "category", "label"].find((k) =>
    def.fields?.some((f) => f.key === k),
  );
  return (item, i) => {
    for (const k of ["name", "title", "question", "label", "category", "slug"]) {
      const v = item?.[k];
      if (typeof v === "string" && v) return v;
    }
    if (nameKey) {
      const v = item?.[nameKey];
      if (typeof v === "string" && v) return v;
    }
    return `Item ${i + 1}`;
  };
}