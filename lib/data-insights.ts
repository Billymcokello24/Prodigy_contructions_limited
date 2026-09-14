export interface Insight {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readMinutes: number;
  image: string;
  featured?: boolean;
}

export const insights: Insight[] = [
  {
    slug: "delivering-certainty-in-kenya-construction",
    title: "Delivering Certainty in Kenya Construction: The Prodigy Approach",
    category: "Construction",
    excerpt: "Certainty of cost, programme and quality begins long before site works start. We share how disciplined front-end planning drives successful delivery.",
    author: "[Author \u2014 placeholder]",
    date: "2025-08-12",
    readMinutes: 6,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "design-and-build-single-point-accountability",
    title: "Design & Build: The Case for Single-Point Accountability",
    category: "Construction",
    excerpt: "Why integrated design-build delivery reduces risk, speeds programme and improves buildability for developers and institutions.",
    author: "[Author \u2014 placeholder]",
    date: "2025-07-25",
    readMinutes: 5,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "quality-assurance-in-concrete-structures",
    title: "Quality Assurance in Concrete Structures: What Clients Should Expect",
    category: "Engineering",
    excerpt: "From material certification to cube testing and hold points, this is what rigorous QA looks like on reinforced concrete works.",
    author: "[Author \u2014 placeholder]",
    date: "2025-06-18",
    readMinutes: 7,
    image: "https://images.unsplash.com/photo-1503596478991-762138dc6897?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "infrastructure-for-growing-counties",
    title: "Infrastructure for Growing Counties: Priorities for Kenya's Urbanising Regions",
    category: "Infrastructure",
    excerpt: "As counties urbanise, water, sewer, roads and drainage investment sequencing becomes critical. We examine the priorities.",
    author: "[Author \u2014 placeholder]",
    date: "2025-05-30",
    readMinutes: 6,
    image: "https://images.unsplash.com/photo-1545126178-920de3e2d15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "safety-culture-beyond-compliance",
    title: "Building a Safety Culture That Goes Beyond Compliance",
    category: "Sustainability",
    excerpt: "Safety is not a poster \u2014 it is planning, leadership, daily behaviours AND the freedom for every worker to stop unsafe work.",
    author: "[Author \u2014 placeholder]",
    date: "2025-04-22",
    readMinutes: 5,
    image: "https://images.unsplash.com/photo-1531834685032-da6fe4565e0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cpm-modern-project-delivery",
    title: "Modern Project Delivery: How Digital Tools Improve Construction Outcomes",
    category: "Project Management",
    excerpt: "Digital project management, site reporting and a data-driven decisions are changing how construction is managed in Kenya. A practical look.",
    author: "[Author \u2014 placeholder]",
    date: "2025-03-14",
    readMinutes: 5,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kenya-construction-outlook-2025",
    title: "Kenya Construction Outlook: Trends Shaping 2025 and Beyond",
    category: "Industry News",
    excerpt: "Affordable housing, infrastructure spending, building materials costs and a sustainable construction are reshaping the sector.",
    author: "[Author \u2014 placeholder]",
    date: "2025-02-10",
    readMinutes: 8,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "case-study-refurbishment-under-occupancy",
    title: "Case Study: Delivering Refurbishment Under Full Occupancy",
    category: "Case Studies",
    excerpt: "How phased planning, protected work zones and a coastal-appropriate materials delivered a resort refurbishment without closing the property.",
    author: "[Author \u2014 placeholder]",
    date: "2025-01-28",
    readMinutes: 6,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  },
];

