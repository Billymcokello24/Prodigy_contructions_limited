import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMetadata({ title, description, path }: { title: string; description?: string; path: string }): Metadata {
  return {
    title,
    description: description ?? site.description,
    alternates: { canonical: `${site.url}${path}` },
    openGraph: { title, description: description ?? site.description, url: `${site.url}${path}` },
  };
}