export const site = {
  name: "Prodigy Construction Limited",
  shortName: "Prodigy",
  tagline: "Building Today. Engineering Tomorrow.",
  description:
    "Prodigy Construction Limited is a professional construction, engineering, infrastructure and project development company operating in Kenya and serving clients across East Africa.",
  industry: "Construction • Civil Engineering • Building • Infrastructure • Project Management • Engineering • Property Development",
  market: "Kenya & East Africa",
  url: "https://prodigyconstruction.co.ke",
  phone: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  whatsapp: "254700000000",
  email: "info@prodigyconstruction.co.ke",
  officeAddress: "P.O. Box 00000-00100, Nairobi, Kenya",
  streetAddress: "[Insert Office Street Address], Nairobi, Kenya",
  workingHours: "Monday – Friday: 8:00 AM – 5:00 PM • Saturday: 9:00 AM – 1:00 PM",
  emergencyContact: "+254 700 000 000",
  mapEmbed:
    "https://maps.google.com/maps?q=Nairobi%2C%20Kenya&z=12&output=embed",
  socials: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const nav = [
  {
    label: "Company",
    href: "/about",
    mega: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Safety & Quality", href: "/safety-quality" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    mega: [
      { label: "Building Construction", href: "/services/building-construction" },
      { label: "Civil Engineering", href: "/services/civil-engineering" },
      { label: "Structural Engineering", href: "/services/structural-engineering" },
      { label: "Infrastructure Development", href: "/services/infrastructure-development" },
      { label: "Project Management", href: "/services/project-management" },
      { label: "Design & Build", href: "/services/design-and-build" },
      { label: "Renovation & Refurbishment", href: "/services/renovation-refurbishment" },
      { label: "Maintenance & Facilities", href: "/services/maintenance-facilities" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    mega: [
      { label: "All projects", href: "/projects" },
      { label: "Commercial", href: "/projects?category=commercial" },
      { label: "Infrastructure", href: "/projects?category=roads-infrastructure" },
      { label: "Institutional", href: "/projects?category=institutional" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    mega: [
      { label: "All industries", href: "/industries" },
      { label: "Government & Public Sector", href: "/industries/government-public-sector" },
      { label: "Commercial", href: "/industries/commercial" },
      { label: "Residential", href: "/industries/residential" },
      { label: "Industrial", href: "/industries/industrial" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
  },
  { label: "Safety & Quality", href: "/safety-quality" },
  {
    label: "Insights",
    href: "/insights",
    mega: [
      { label: "All insights", href: "/insights" },
      { label: "News", href: "/news" },
      { label: "Company news", href: "/news" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact", cta: true },
] satisfies { label: string; href: string; mega?: { label: string; href: string }[]; cta?: boolean }[];

export const footerNav = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Our Approach", href: "/about/approach" },
    { label: "Careers", href: "/careers" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Safety & Quality", href: "/safety-quality" },
  ],
  services: [
    { label: "Building Construction", href: "/services/building-construction" },
    { label: "Civil Engineering", href: "/services/civil-engineering" },
    { label: "Infrastructure", href: "/services/infrastructure-development" },
    { label: "Project Management", href: "/services/project-management" },
    { label: "Design & Build", href: "/services/design-and-build" },
    { label: "Renovation & Refurbishment", href: "/services/renovation-refurbishment" },
  ],
  resources: [
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "News", href: "/news" },
    { label: "FAQs", href: "/faqs" },
    { label: "Downloads", href: "/downloads" },
  ],
};

export const statsFields: { key: string; label: string; note: string }[] = [
  { key: "yearsExperience", label: "Years of Experience", note: "Track record in construction and engineering" },
  { key: "projectsDelivered", label: "Projects Delivered", note: "Across Kenya and East Africa" },
  { key: "countiesServed", label: "Counties Served", note: "Within Kenya and beyond" },
  { key: "teamMembers", label: "Professional Team Members", note: "Engineers, managers, site teams" },
  { key: "clientSatisfaction", label: "Client Satisfaction", note: "Reported by clients on completed works" },
  { key: "projectValue", label: "Project Value Delivered", note: "Aggregate value of delivered works" },
];

export const DEFAULT_STATS = {
  yearsExperience: "15+",
  projectsDelivered: "120+",
  countiesServed: "20+",
  teamMembers: "80+",
  clientSatisfaction: "98%",
  projectValue: "KES 6B+",
} as const satisfies Record<string, string>;