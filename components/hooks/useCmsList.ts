"use client";

import { useEffect, useState } from "react";

/**
 * Hydrates a content collection client-side. Returns the bundled default
 * immediately, then swaps in the live CMS override once fetched.
 */
export function useCmsList<T>(key: string, fallback: T[]): T[] {
  const [items, setItems] = useState<T[]>(fallback);

  useEffect(() => {
    let alive = true;
    fetch(`/api/cms?key=${key}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("fetch failed"))))
      .then((j) => {
        if (alive && Array.isArray(j.data)) setItems(j.data as T[]);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [key]);

  return items;
}
