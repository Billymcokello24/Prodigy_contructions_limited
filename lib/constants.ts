export const PROJECTS = "projects";
export const SERVICES = "services";
export const INDUSTRIES = "industries";
export const INSIGHTS = "insights";
export const NEWS = "news";
export const TEAM = "team";
export const TESTIMONIALS = "testimonials";
export const EQUIPMENT = "equipment";
export const VACANCIES = "vacancies";
export const DOCUMENTS = "documents";
export const FAQS = "faqs";

/** Sanitizes URLs for the client-side router based on generated data. */
export const getSlug = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const PAGE_NAMES: Record<string, string> = {
  [PROJECTS]: "Projects",
  [SERVICES]: "Services",
  [INDUSTRIES]: "Industries",
  [INSIGHTS]: "Insights",
  [NEWS]: "News",
  [TEAM]: "Leadership",
  [TESTIMONIALS]: "Testimonials",
  [EQUIPMENT]: "Equipment",
  [VACANCIES]: "Careers",
  [DOCUMENTS]: "Downloads",
  [FAQS]: "FAQs",
};