export interface Project {
  slug: string;
  name: string;
  location: string;
  client: string;
  category: string;
  categoryLabel: string;
  sector: string;
  status: "Completed" | "Ongoing" | "In Progress" | "Upcoming";
  completion: string;
  value: string;
  contractType: string;
  description: string;
  scope: string[];
  challenges: string[];
  solution: string;
  results: string;
  image: string;
  gallery: string[];
  featured?: boolean;
}

export const projectCategories: { slug: string; label: string }[] = [
  { slug: "commercial", label: "Commercial" },
  { slug: "residential", label: "Residential" },
  { slug: "industrial", label: "Industrial" },
  { slug: "roads-infrastructure", label: "Roads & Infrastructure" },
  { slug: "institutional", label: "Institutional" },
  { slug: "hospitality", label: "Hospitality" },
  { slug: "government", label: "Government" },
  { slug: "renovation", label: "Renovation" },
  { slug: "civil", label: "Civil Engineering" },
];

export const projects: Project[] = [
  {
    slug: "tatu-city-commercial-plaza",
    name: "Tatu City Commercial Plaza",
    location: "Kiambu, Kenya",
    client: "[Client name - placeholder]",
    category: "commercial",
    categoryLabel: "Commercial",
    sector: "Commercial & Retail",
    status: "Completed",
    completion: "2024",
    value: "[Project value - placeholder]",
    contractType: "Design & Build",
    description: "A multi-storey commercial and retail plaza delivered on a fast-track programme, comprising office floors, retail units, parking and external works. The project demonstrates Prodigy's ability to deliver quality commercial space while coordinating specialist packages on a demand ing programme.",
    scope: [
      "Reinforced concrete frame",
      "Curtain wall and glazing",
      "Retail fit-outs",
      "MEP services",
      "Basement parking",
      "External works and landscaping",
    ],
    challenges: [
      "Fast-track programme with overlapping design and construction",
      "Coordination of multiple specialist packages",
    ],
    solution: "Prodigy established a single integrated design-build team, sequenced trades carefully and enforced disciplined quality hold points to maintain the programme without compromising quality.",
    results: "Delivered on schedule, with zero lost-time incidents and phased tenant hand over completed in agreed phases.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad31?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad31?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366754035-f890f1f8f2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    slug: "nairobi-bypass-road-works",
    name: "Nairobi Outer Ring Bypass Upgrade",
    location: "Nairobi, Kenya",
    client: "[Client/Agency - placeholder]",
    category: "roads-infrastructure",
    categoryLabel: "Roads & Infrastructure",
    sector: "Transport Infrastructure",
    status: "Completed",
    completion: "2023",
    value: "[Project value - placeholder]",
    contractType: "EPC / Re-measurement",
    description: "Upgrade and rehabilitation of a major urban road corridor comprising pavement reconstruction, drainage improvement, junction works, footways and road furniture, delivered under live traffic with meticulous traffic management planning.",
    scope: [
      "Pavement reconstruction",
      "Drainage and culverts",
      "Junction improvements",
      "Footways and kerbs",
      "Road furniture and signage",
      "Traffic management",
    ],
    challenges: [
      "Working under live traffic on a busy urban corridor",
      "Existing buried utilities with unknown alignments",
    ],
    solution: "Phased lane closures, coordinated utility mapping and around-the-clock traffic control allowed continuous progress while keeping the corridor operational.",
    results: "The upgraded corridor now carries higher volumes with improved safetyand reduced flooding through upgraded drainage.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f60dfb?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f60dfb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1545126178-920de3e2d15?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1513828583688-c77d3ee16c3?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    slug: "westlands-mixed-use-tower",
    name: "Westlands Mixed-Use Development",
    location: "Nairobi, Kenya",
    client: "[Developer - placeholder]",
    category: "commercial",
    categoryLabel: "Commercial",
    sector: "Mixed-Use Development",
    status: "Ongoing",
    completion: "2026",
    value: "[Project value - placeholder]",
    contractType: "Design & Build",
    description: "A mixed-use tower combining office floors, ground-floor retail and structured parking, currently under construction in Westlands. The development demonstrates coordinated high-rise construction on a tight urban site.",
    scope: [
      "Driven piles and substructure",
      "High-rise concrete frame",
      "Facade and glazing",
      "MEP installations",
      "Internal finishes",
      "Basement parking",
    ],
    challenges: [
      "Restricted urban site with limited working space",
      "High-rise logistics and crane coordination",
    ],
    solution: "Careful logistics planning, a dedicated tower crane strategyand just-in-time material deliveries kept the constrained site productiveand safe.",
    results: "Construction tracks to programme with strong safety performanceand progressive floor-by-floor hand over to fit-out trades.",
    image: "https://images.unsplash.com/photo-1531834685032-da6fe4565e0?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531834685032-da6fe4565e0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    slug: "konza-industrial-warehouse",
    name: "Konza Tech City Industrial Warehouse",
    location: "Machakos, Kenya",
    client: "[Industrial client - placeholder]",
    category: "industrial",
    categoryLabel: "Industrial",
    sector: "Industrial & Logistics",
    status: "Completed",
    completion: "2023",
    value: "[Project value - placeholder]",
    contractType: "Main Contract",
    description: "A large-span steel warehouse complex comprising storage halls, loading bays, officesand supporting site infrastructure, delivered for an industrial operator. The project combined steel erection, civil worksand MEP services under one contract.",
    scope: [
      "Steel structure supply and erection",
      "Foundationsand ground slab",
      "Cladding and roofing",
      "Loading baysand hardstand ing",
      "Site drainageand services",
      "Ancillary offices",
    ],
    challenges: [
      "Large-span steel erection logistics",
      "Tight slab tolerances for racking systems",
    ],
    solution: "Sequenced steel deliveriesand a dedicated erection methodology allowedthe slabs and steelworks to progress in parallel without interference.",
    results: "The facility was handed over ready for racking installation, enablingthe client's operations to commence on schedule.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1553413077-190dd305871?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1587295604266-7621da60b64?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    slug: "kisumu-county-headquarters",
    name: "Kisumu County Administration Block",
    location: "Kisumu, Kenya",
    client: "[County Government - placeholder]",
    category: "government",
    categoryLabel: "Government",
    sector: "Public Buildings",
    status: "Completed",
    completion: "2022",
    value: "[Project value - placeholder]",
    contractType: "Public Works Contract",
    description: "Construction of a county administration block comprising offices, public service halls, records storageand supporting facilities, delivered to public-procurement standards with rigorous documentation.",
    scope: [
      "Reinforced concrete structure",
      "Office fit-out",
      "Public service areas",
      "MEP services",
      "External worksand parking",
      "Landscaping",
    ],
    challenges: [
      "Compliance with public procurement standards",
      "Continuous public service during construction",
    ],
    solution: "Phased construction sequences kept council services operationaland meticulous documentation structured delivery.",
    results: "The administration block was delivered on programme, improving public service deliveryand providing durable, low-maintenance accommodation.",
    image: "https://images.unsplash.com/photo-1554433607-a7e3a4d6d3f?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554433607-a7e3a4d6d3f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "eldoret-hospital-extensions",
    name: "Eldoret Private Hospital Extension",
    location: "Eldoret, Kenya",
    client: "[Healthcare institution - placeholder]",
    category: "institutional",
    categoryLabel: "Institutional",
    sector: "Healthcare",
    status: "Completed",
    completion: "2023",
    value: "[Project value - placeholder]",
    contractType: "Design & Build",
    description: "Design and construction of a hospital extension comprising wards, theatre support accommodationand outpatient services, delivered whilethe existing facility remained fully operational.",
    scope: [
      "Ward blocks",
      "Theatre suite",
      "Outpatient services",
      "Medical gas installations",
      "MEP services",
      "Infection-control finishes",
    ],
    challenges: [
      "Hospital operations continued aroundthe worksite",
      "Strict infection-control requirements",
    ],
    solution: "Dedicated infection-control protocols, separated construction accessand phased hand overs allowed services to continue without interruption.",
    results: "The extension was handed over early on programme, increasing clinical capacityand improving patient experience with modern, compliant facilities.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1538108149395-306e4f2f3a4?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "diani-hotel-refurbishment",
    name: "Diani Beach Resort Refurbishment",
    location: "Kwale, Kenya",
    client: "[Hospitality operator - placeholder]",
    category: "renovation",
    categoryLabel: "Renovation",
    sector: "Hospitality",
    status: "Completed",
    completion: "2024",
    value: "[Project value - placeholder]",
    contractType: "Refurbishment Contract",
    description: "A phased refurbishment of a beach resort comprising guest room upgrades, public areas, pool deck worksand services renewal, delivered across multiple seasons without closing the resort.",
    scope: [
      "Guest room refurbishment",
      "Public area upgrades",
      "Pool and deck works",
      "MEP renewal",
      "Finishesand FF&E coordination",
      "Landscaping",
    ],
    challenges: [
      "Phased delivery without closing the resort",
      "Weather and coastal environment constraints",
    ],
    solution: "Off-season phasing, protected working areasand coastal-appropriate materials ensured quality finishes while guest operations continued.",
    results: "The resort was refreshed to a premium standard with improved guest scoresand zero operational disruption to revenue-generating rooms.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1523413651479-9c5d14b20f5?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "nairobi-residential-estate",
    name: "Nairobi South Residential Estate",
    location: "Nairobi, Kenya",
    client: "[Developer - placeholder]",
    category: "residential",
    categoryLabel: "Residential",
    sector: "Residential",
    status: "Completed",
    completion: "2021",
    value: "[Project value - placeholder]",
    contractType: "Development Contract",
    description: "A gated residential estate comprising townhouses, apartments, estate roads, drainageand neighbourhood amenities, delivered for a real estate developer as part of a phased masterplan.",
    scope: [
      "Townhousesand apartments",
      "Estate roads and footways",
      "Drainageand sewer networks",
      "Water supply and utilities",
      "Community amenities",
      "Landscapingand fencing",
    ],
    challenges: [
      "Phased delivery across a live masterplan",
      "Coordination of infrastructure with housing",
    ],
    solution: "Sequenced phase hand overs, integrated infrastructure-first deliveryand disciplined quality control delivered repeatable quality across all phases.",
    results: "The estate phases were completed to schedule with strong sales performance for the developerand durable, low-maintenance schemes.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "nakuru-water-supply",
    name: "Nakuru Water Supply and Sewer Extension",
    location: "Nakuru, Kenya",
    client: "[Water utility - placeholder]",
    category: "civil",
    categoryLabel: "Civil Engineering",
    sector: "Water Infrastructure",
    status: "Completed",
    completion: "2022",
    value: "[Project value - placeholder]",
    contractType: "Public Works Contract",
    description: "Extension of water supply and sewer networks covering new residential and commercial zones, including storage tanks, pump stations and service connections, improving access to clean water and sanitation for residents.",
    scope: [
      "Water mains distribution",
      "Sewer network extension",
      "Storage tanksand pump stations",
      "Service connections",
      "Trenching and reinstatement",
      "Testingand commissioning",
    ],
    challenges: [
      "Working across occupied neighbourhoods",
      "Coordination with existing utilities",
    ],
    solution: "Community liaison, coordinated utility diversions and reinstatement programmes kept disruption low while works progressed across multiple zones.",
    results: "Thousands of residents gained reliable water supply and improved sanitation, with commissioning records delivered to the utility's satisfaction.",
    image: "https://images.unsplash.com/photo-1545126178-920de3e2d15?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545126178-920de3e2d15?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f60dfb?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function filterProjects(category?: string, status?: string, year?: string) {
  return projects.filter((p) => {
    const catOk = !category || category === "all" || p.category === category;
    const stOk = !status || status === "all" || p.status.toLowerCase() === status.toLowerCase();
    const yrOk = !year || year === "all" || p.completion === year;
    return catOk && stOk && yrOk;
  });
}
