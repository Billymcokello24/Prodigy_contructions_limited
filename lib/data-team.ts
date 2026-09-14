export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
}

export const teammembers: TeamMember[] = [
  {
    slug: "managing-director",
    name: "[Managing Director Name \u2014 placeholder]",
    role: "Managing Director",
    department: "Executive",
    bio: "Provides strategic leadership across the company's construction, engineering and development portfolio.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "operations-director",
    name: "[Operations Director \u2014 placeholder]",
    role: "Director \u2013 Operations",
    department: "Executive",
    bio: "Oversees project delivery, site operations and resource planning across all contracts.",
    image: "https://images.unsplash.com/photo-1507003211167-0a1dd7228f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "technical-director",
    name: "[Technical Director \u2014 placeholder]",
    role: "Director \u2013 Engineering & Technical",
    department: "Engineering",
    bio: "Leads engineering design input, technical assurance and construction methodology across projects.",
    image: "https://images.unsplash.com/photo-1472099648684-a8b8c6e4d6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "commercial-director",
    name: "[Commercial Director \u2014 placeholder]",
    role: "Director \u2013 Commercial & Contracts",
    department: "Commercial",
    bio: "Manages estimating, procurement, cost control and contract administration.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "qshe-director",
    name: "[QHSE Director \u2014 placeholder]",
    role: "Director \u2013 Quality, Health, Safety & Environment",
    department: "QHSE",
    bio: "Champions the company's safety culture, quality systems and environmental responsibility.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "head-of-projects",
    name: "[Head of Projects \u2014 placeholder]",
    role: "Head of Projects",
    department: "Projects",
    bio: "Coordinates project managers and site teams to deliver programmes on time, in budget and to quality.",
    image: "https://images.unsplash.com/photo-1519085360753-ef0119f8cbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "lead-architect",
    name: "[Lead Architect \u2014 placeholder]",
    role: "Lead Architect",
    department: "Design",
    bio: "Leads design development, design coordination and design-to-construction integration.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "senior-qs",
    name: "[Senior Quantity Surveyor \u2014 placeholder]",
    role: "Senior Quantity Surveyor",
    department: "Commercial",
    bio: "Provides cost planning, measurement, valuation and final account services on projects.",
    image: "https://images.unsplash.com/photo-1438761681033-f64698ff6b1?auto=format&fit=crop&w=800&q=80",
  },
];

