import type { Metadata } from "next";
import SearchPage from "@/components/sections/SearchPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Search",
  description: "Search Prodigy Construction's services, projects, industries, insights, news and FAQs.",
  path: "/search",
});

export default function SearchRoute() {
  return <SearchPage />;
}