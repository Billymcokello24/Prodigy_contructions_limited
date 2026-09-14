export interface Industry {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: string;
  services: string[];
}

export const industries: Industry[] = [
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    short: "Construction, engineering and project delivery for government & public sector clients across Kenya and East Africa.",
    description: "Prodigy Construction Limited works with Government & Public Sector clients to plan, build and deliver facilities and infrastructure that support their mission. Our teams understand the operational, regulatory and procurement context of Government & Public Sector projects.",
    icon: "Building2",
    services: ["Building Construction", "Project Management", "Maintenance & Facilities"],
  },
  {
    slug: "commercial",
    name: "Commercial",
    short: "Construction, engineering and project delivery for commercial clients across Kenya and East Africa.",
    description: "Prodigy Construction Limited works with Commercial clients to plan, build and deliver facilities and infrastructure that support their mission. Our teams understand the operational, regulatory and procurement context of Commercial projects.",
    icon: "Building2",
    services: ["Building Construction", "Project Management", "Maintenance & Facilities"],
  },
  {
    slug: "residential",
    name: "Residential",
    short: "Construction, engineering and project delivery for residential clients across Kenya and East Africa.",
    description: "Prodigy Construction Limited works with Residential clients to plan, build and deliver facilities and infrastructure that support their mission. Our teams understand the operational, regulatory and procurement context of Residential projects.",
    icon: "Building2",
    services: ["Building Construction", "Project Management", "Maintenance & Facilities"],
  },
  {
    slug: "industrial",
    name: "Industrial",
    short: "Construction, engineering and project delivery for industrial clients across Kenya and East Africa.",
    description: "Prodigy Construction Limited works with Industrial clients to plan, build and deliver facilities and infrastructure that support their mission. Our teams understand the operational, regulatory and procurement context of Industrial projects.",
    icon: "Building2",
    services: ["Building Construction", "Project Management", "Maintenance & Facilities"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    short: "Construction, engineering and project delivery for hospitality clients across Kenya and East Africa.",
    description: "Prodigy Construction Limited works with Hospitality clients to plan, build and deliver facilities and infrastructure that support their mission. Our teams understand the operational, regulatory and procurement context of Hospitality projects.",
    icon: "Building2",
    services: ["Building Construction", "Project Management", "Maintenance & Facilities"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    short: "Construction, engineering and project delivery for healthcare clients across Kenya and East Africa.",
    description: "Prodigy Construction Limited works with Healthcare clients to plan, build and deliver facilities and infrastructure that support their mission. Our teams understand the operational, regulatory and procurement context of Healthcare projects.",
    icon: "Building2",
    services: ["Building Construction", "Project Management", "Maintenance & Facilities"],
  },
  {
    slug: "education",
    name: "Education",
    short: "Construction, engineering and project delivery for education clients across Kenya and East Africa.",
    description: "Prodigy Construction Limited works with Education clients to plan, build and deliver facilities and infrastructure that support their mission. Our teams understand the operational, regulatory and procurement context of Education projects.",
    icon: "Building2",
    services: ["Building Construction", "Project Management", "Maintenance & Facilities"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Construction, engineering and project delivery for real estate clients across Kenya and East Africa.",
    description: "Prodigy Construction Limited works with Real Estate clients to plan, build and deliver facilities and infrastructure that support their mission. Our teams understand the operational, regulatory and procurement context of Real Estate projects.",
    icon: "Building2",
    services: ["Building Construction", "Project Management", "Maintenance & Facilities"],
  },
  {
    slug: "ngos-development",
    name: "NGOs & Development Organizations",
    short: "Construction, engineering and project delivery for ngos & development organizations clients across Kenya and East Africa.",
    description: "Prodigy Construction Limited works with NGOs & Development Organizations clients to plan, build and deliver facilities and infrastructure that support their mission. Our teams understand the operational, regulatory and procurement context of NGOs & Development Organizations projects.",
    icon: "Building2",
    services: ["Building Construction", "Project Management", "Maintenance & Facilities"],
  },
];

export const industryCategories = [
  { slug: "government-public-sector", label: "Government & Public Sector" },
  { slug: "commercial", label: "Commercial" },
  { slug: "residential", label: "Residential" },
  { slug: "industrial", label: "Industrial" },
  { slug: "hospitality", label: "Hospitality" },
  { slug: "healthcare", label: "Healthcare" },
  { slug: "education", label: "Education" },
  { slug: "real-estate", label: "Real Estate" },
  { slug: "ngos-development", label: "NGOs & Development Organizations" },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
