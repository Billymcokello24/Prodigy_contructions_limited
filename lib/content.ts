
import { getCollection, DEFAULT_COLLECTIONS, CollectionKey } from "@/lib/cms";

/** Deep-merge an override over the default so a partial edit never breaks a page. */
function mergeObject(base: unknown, override: unknown): unknown {
  if (Array.isArray(override)) return override;
  if (
    override &&
    typeof override === "object" &&
    base &&
    typeof base === "object" &&
    !Array.isArray(base)
  ) {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(override as Record<string, unknown>)) {
      out[k] = mergeObject(out[k], v);
    }
    return out;
  }
  return override === undefined ? base : override;
}

/**
 * Server-side content read. Importable from Server Components only.
 * Returns the live CMS data (JSON override deep-merged over the built-in
 * default for object collections; full replacement for array collections).
 */
export function content<T = unknown>(key: CollectionKey): T {
  const current = getCollection<unknown>(key);
  return mergeObject(DEFAULT_COLLECTIONS[key], current) as T;
}