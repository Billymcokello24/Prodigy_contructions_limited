export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  icon: string;
  capabilities: string[];
  process: { title: string; text: string }[];
  industries: string[];
}

export const services: Service[] = [
  {
    slug: "building-construction",
    name: "Building Construction",
    short:
      "Commercial, residential and institutional buildings delivered to exacting standards of quality, safety and durability.",
    description:
      "From multi-storey commercial buildings to residential developments, Prodigy Construction Limited plans, builds and delivers high-quality buildings that stand the test of time. Our building construction capability covers the full delivery cycle, working from clear drawings and specifications through to structural completion, finishes and hand over—with strict attention to quality, cost and programme.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
    icon: "Building2",
    capabilities: [
      "Commercial buildings",
      "Residential developments",
      "Offices",
      "Retail facilities",
      "Institutional buildings",
      "Hospitality facilities",
      "Industrial buildings",
      "Renovations",
      "Extensions",
      "Fit-outs",
    ],
    process: [
      { title: "Brief & design review", text: "We clarify the brief, drawings and specifications before pricing and programming the works." },
      { title: "Planning & mobilization", text: "Site establishment, permits, logistics and procurement are organized before works begin." },
      { title: "Construction", text: "Structured works sequences delivered by experienced crews with strict quality and safety control." },
      { title: "Finishing & hand over", text: "Finishes, testing, documentation and commissioning are completed to agreed standards." },
    ],
    industries: ["Government", "Commercial", "Residential", "Hospitality", "Education", "Healthcare"],
  },
  {
    slug: "civil-engineering",
    name: "Civil Engineering",
    short:
      "Roads, drainage, water, sewer and earthworks delivered with engineering precision and durability.",
    description:
      "Prodigy delivers civil engineering works that underpin modern development: roads, drainage, water infrastructure, sewer systems, earthworks and concrete works. Our teams combine engineering analysis with reliable on-site execution to build infrastructure that performs properly for decades, whether for public agencies, developers or industrial clients.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f60dfb?auto=format&fit=crop&w=1400&q=80",
    icon: "HardHat",
    capabilities: [
      "Roads",
      "Drainage",
      "Bridges",
      "Earthworks",
      "Concrete works",
      "Stormwater systems",
      "Water infrastructure",
      "Sewer systems",
      "Site development",
    ],
    process: [
      { title: "Investigation & design input", text: "Site surveys, geotechnical review and engineering assessments inform the approach." },
      { title: "Setting out & bulk works", text: "Levels, alignments and earthworks are executed to engineering tolerances." },
      { title: "Infrastructure construction", text: "Pavements, drainage, utilities and structures are constructed in coordinated sequences." },
      { title: "Testing & commissioning", text: "Materials testing, quality inspections and commissioning confirm long-term performance." },
    ],
    industries: ["Government", "Commercial", "Industrial", "Residential"],
  },
  {
    slug: "structural-engineering",
    name: "Structural Engineering & Construction",
    short:
      "Reinforced concrete, steel structures, foundations and structural rehabilitation built to engineering standards.",
    description:
      "Structural works demand rigorous engineering. Prodigy provides the design input, materials control and skilled execution required for foundations, reinforced concrete frames, steel structures and structural rehabilitation. Whether new buildings, strengthening works or repairs to existing structures, we deliver structures that are safe, stable and durable.",
    image:
      "https://images.unsplash.com/photo-1503596478991-762138dc6897?auto=format&fit=crop&w=1400&q=80",
    icon: "DraftingCompass",
    capabilities: [
      "Structural works",
      "Reinforced concrete",
      "Steel structures",
      "Foundations",
      "Structural rehabilitation",
      "Building strengthening",
    ],
    process: [
      { title: "Structural assessment", text: "We review designs, site conditions and existing structures before works commence." },
      { title: "Detailed method planning", text: "Formwork, reinforcement, concreting and erection sequences are planned in detail." },
      { title: "Execution & control", text: "Certified materials, controlled works sequences and inspection hold points ensure quality." },
      { title: "Testing & certification", text: "Concrete cube tests, steel verification and inspection records confirm compliance." },
    ],
    industries: ["Commercial", "Industrial", "Government", "Institutional"],
  },
  {
    slug: "infrastructure-development",
    name: "Infrastructure Development",
    short:
      "End-to-end development of roads, utilities, water systems, sewer networks and public infrastructure.",
    description:
      "Infrastructure projects need integrated delivery: planning, engineering, construction and coordination across multiple service providers. Prodigy develops and delivers infrastructure that supports communities, industry and economic growth: roads, utilities, water systems, sewer networks, public buildings and site-wide infrastructure for estates, parks and industrial developments.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c77d3ee16c3?auto=format&fit=crop&w=1400&q=80",
    icon: "Route",
    capabilities: [
      "Roads",
      "Utilities",
      "Water systems",
      "Sewer infrastructure",
      "Public infrastructure",
      "Industrial infrastructure",
      "Site infrastructure",
    ],
    process: [
      { title: "Mobilization & surveys", text: "Site surveys, utility mapping and temporary works planning prepare the project." },
      { title: "Bulk & underground services", text: "Earthworks, drainage, water and sewer services are installed first." },
      { title: "Pavements & structures", text: "Pavements, kerbs, structures and finishes complete the network." },
      { title: "Commissioning & hand over", text: "Testing, snagging and documentation deliver a compliant asset." },
    ],
    industries: ["Government", "Residential", "Industrial", "NGOs"],
  },
  {
    slug: "project-management",
    name: "Project Management",
    short:
      "Disciplined planning, cost management, procurement, scheduling and quality control across every stage.",
    description:
      "Successful construction outcomes are built on discipline project management. Prodigy provides dedicated project management covering planning, cost management, procurement, scheduling, contractor coordination, quality control, risk management, progress monitoring and commissioning—so clients get certainty of scope, cost and programme, not surprises.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d170bb6f4d35?auto=format&fit=crop&w=1400&q=80",
    icon: "ClipboardList",
    capabilities: [
      "Project planning",
      "Cost management",
      "Procurement",
      "Scheduling",
      "Contractor coordination",
      "Quality control",
      "Risk management",
      "Progress monitoring",
      "Commissioning",
    ],
    process: [
      { title: "Setup & governance", text: "Project charters, budgets, programmes and reporting frameworks are established." },
      { title: "Design & procurement", text: "Design coordination, procurement strategy and contract administration are managed." },
      { title: "Construction management", text: "Site progress, quality, cost and risks are monitored against agreed baselines." },
      { title: "Delivery & close-out", text: "Testing, commissioning, hand over and post-completion support close the project." },
    ],
    industries: ["All sectors", "Government", "Commercial", "Industrial"],
  },
  {
    slug: "design-and-build",
    name: "Design & Build",
    short:
      "Integrated design-and-build solutions that align architectural intent with buildable, costed delivery.",
    description:
      "Design & build gives clients a single point of responsibility: one team, one contract and one accountable partner delivering the complete project. Prodigy integrates design, engineering, procurement and construction so that architectural intent is translated into buildable, cost-effective, high-quality outcomes—removing the gaps between design and delivery that cause cost growth and delays.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    icon: "PencilRuler",
    capabilities: [
      "Integrated design & construction",
      "Concept & scheme development",
      "Detailed design coordination",
      "Cost planning",
      "Value engineering",
      "Single-point accountability",
    ],
    process: [
      { title: "Concept & feasibility", text: "Brief development, feasibility and concept design define the project." },
      { title: "Detailed design & pricing", text: "Designs are developed and costed together so the brief aligns with budget." },
      { title: "Construction & coordination", text: "One accountable team delivers against the agreed design, cost and programme." },
      { title: "Hand over & support", text: "Snagging, documentation and aftercare complete delivery." },
    ],
    industries: ["Commercial", "Residential", "Hospitality", "Industrial"],
  },
  {
    slug: "renovation-refurbishment",
    name: "Renovation & Refurbishment",
    short:
      "Upgrades, extensions and refurbishment of commercial, residential, hospitality and institutional facilities.",
    description:
      "Renovation introduces distinct challenges: occupied buildings, existing structures and the need for minimal disruption. Prodigy plans refurbishment works carefully to protect users, preserve existing fabric WHERE possible and deliver refreshed, functional, compliant facilities—from office fit-outs to hospitality refurbishments and institutional upgrades.",
    image:
      "https://images.unsplash.com/photo-1523413651479-9c5d14b20f5?auto=format&fit=crop&w=1400&q=80",
    icon:"Hammer",
    capabilities: [
      "Commercial refurbishment",
      "Residential renovation",
      "Office renovation",
      "Hospitality refurbishment",
      "Institutional upgrades",
      "Fit-outs & extensions",
    ],
    process: [
      { title: "Condition assessment", text: "Existing structures, services and finishes are assessed before planning." },
      { title: "Phased execution", text: "Works are sequenced to protect occupation and minimize disruption." },
      { title: "Renovation works", text: "Structural repairs, services upgrades and new finishes are delivered to standard." },
      { title: "Hand over & aftercare", text: "Cleaning, inspection and hand over return the facility ready for use." },
    ],
    industries: ["Commercial", "Hospitality", "Education", "Residential"],
  },
  {
    slug: "property-development",
    name: "Property Development",
    short:
      "Development support from feasibility and land assessment, through design, construction and hand over.",
    description:
      "Property development demands coordination between land, capital, design, approvals and construction. Prodigy supports developers and investors through feasibility, design coordination, approvals, construction and hand over—helping bring residential and commercial schemes to market on time and to budget, with quality that protects long-term value.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    icon:"Building",
    capabilities: [
      "Development support",
      "Feasibility studies",
      "Design & approvals coordination",
      "Construction & delivery",
      "Hand over & aftercare",
      "Advisory support",
    ],
    process: [
      { title: "Feasibility & structuring", text: "Land assessment, feasibility and development strategy shape the scheme." },
      { title: "Design & approvals", text: "Design teams, statutory approvals and procurement are coordinated." },
      { title: "Construction & delivery", text: "Construction is managed to quality, cost and programme standards." },
      { title: "Hand over & asset management", text: "Hand over, documentation and post-completion support protect long-term value." },
    ],
    industries: ["Real Estate", "Commercial", "Residential"],
  },
  {
    slug:"maintenance-facilities",
    name: "Maintenance & Facilities Support",
    short:
      "Building and civil maintenance, preventive programmes, repairs and facility improvement works.",
    description:
      "Well-maintained facilities protect asset value and operational continuity. Prodigy provides planned preventive maintenance, responsive repairs and facility improvement works for buildings and civil infrastructure—covering building fabric, civil works, services and finishes, so assets continue performing long after hand over.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f60dfb?auto=format&fit=crop&w=1400&q=80",
    icon:"Wrench",
    capabilities: [
      "Building maintenance",
      "Civil maintenance",
      "Preventive maintenance",
      "Repairs",
      "Facility improvement works",
    ],
    process: [
      { title: "Asset review", text: "Facility condition reviews identify required works and priorities." },
      { title: "Planned programmes", text: "Preventive maintenance programmes are agreed and scheduled." },
      { title: "Execution & reporting", text: "Works are delivered with clear job sheets, sign-offs and reporting." },
      { title: "Review & optimize", text: "Performance reviews refine programmes to protect the asset over time." },
    ],
    industries: ["Commercial", "Government", "Education", "Healthcare"],
  },
];

export function getServices() {
  return services;
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}