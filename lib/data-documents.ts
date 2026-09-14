export interface DocumentItem {
  slug: string;
  title: string;
  category: string;
  size: string;
  description: string;
  published: boolean;
}

export const documentitems: DocumentItem[] = [
  {
    slug: "company-profile",
    title: "Company Profile",
    category: "Corporate",
    size: "PDF \u2013 2.4 MB",
    description: "Overview of Prodigy's services, sectors, capabilities and a approach.",
    published: true,
  },
  {
    slug: "capability-statement",
    title: "Capability Statement",
    category: "Corporate",
    size: "PDF \u2013  \u200b1.8 MB",
    description: "A structured statement of services, qualifications and a relevant experience.",
    published: true,
  },
  {
    slug: "service-brochure",
    title: "Service Brochure",
    category: "Corporate",
    size: "PDF \u2013  \u200b3.1 MB",
    description: "Detailed information on our full range of construction, engineering and a development services.",
    published: true,
  },
  {
    slug: "health-safety-policy",
    title: "Health & Safety Policy",
    category: "Policy",
    size: "PDF \u2013  \u200b0.9 MB",
    description: "Our commitment to a safe, healthy working environment on every project.",
    published: true,
  },
  {
    slug: "environmental-policy",
    title: "Environmental Policy",
    category: "Policy",
    size: "PDF \u2013  \u200b0.8 MB",
    description: "Our approach to environmental responsibility across design, construction and a operations.",
    published: true,
  },
  {
    slug: "quality-policy",
    title: "Quality Policy",
    category: "Policy",
    size: "PDF \u2013\u200b\u200b 0.8 MB",
    description: "Our commitment to quality management and a continuous improvement.",
    published: true,
  },
  {
    slug: "corporate-information",
    title: "Corporate Information",
    category: "Corporate",
    size: "PDF \u2013\u200b\u200b 1.2 MB",
    description: "Registered company information and a statutory details.",
    published: false,
  },
  {
    slug: "tender-documents",
    title: "Tender Documents",
    category: "Tenders",
    size: "PDF \u2013\u200b\u200b 4.5 MB",
    description: "Current tender documentation for public procurement processes.",
    published: false,
  },
];

