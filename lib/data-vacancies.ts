export interface Vacancy {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  deadline: string;
  status: string;
  summary: string;
  qualifications: string[];
  responsibilities: string[];
}

export const vacancys: Vacancy[] = [
  {
    slug: "site-engineer",
    title: "Site Engineer",
    department: "Projects",
    location: "Nairobi, Kenya",
    type: "Full-time",
    experience: "3\u20135 years",
    deadline: "2025-12-31",
    status: "Open",
    summary: "Supporting project delivery through technical supervision, quality control and site coordination.",
    qualifications: [
      "BSc or diploma in Civil Engineering or equivalent",
      "3\u20135 years construction site experience",
      "Strong technical, coordination and reporting skills",
    ],
    responsibilities: [
      "Supervise site works against drawings specifications and programme",
      "Coordinate subcontractors, plant and a materials",
      "Support QA/QC inspections and a documentation",
    ],
  },
  {
    slug: "quantity-surveyor",
    title: "Quantity Surveyor",
    department: "Commercial",
    location: "Nairobi, Kenya",
    type: "Full-time",
    experience: "4\u20137 years",
    deadline: "2025-12-31",
    status: "Open",
    summary: "Delivering cost planning, measurement, valuation and final account services across the project portfolio.",
    qualifications: [
      "BSc Quantity Surveying or equivalent",
      "4\u20137 years post-qualification experience",
      "Membership of a recognised professional body is an advantage",
    ],
    responsibilities: [
      "Prepare cost plans, bills of quantities and a tender documents",
      "Measure, value and a certify works",
      "Prepare interim valuations and a final accounts",
    ],
  },
  {
    slug: "project-manager",
    title: "Project Manager",
    department: "Projects",
    location: "Nairobi, Kenya",
    type: "Full-time",
    experience: "7\u201310 years",
    deadline: "2025-12-31",
    status: "Open",
    summary: "Leading multidisciplinary construction projects from mobilisation to completion.",
    qualifications: [
      "Degree in construction management, engineering or equivalent",
      "7\u201310 years project delivery experience",
      "Proven track record delivering complex projects",
    ],
    responsibilities: [
      "Lead project planning, procurement and a delivery",
      "Manage cost, programme, quality and a safety performance",
      "Report to client and a leadership on progress and a risks",
    ],
  },
  {
    slug: "graduate-engineer",
    title: "Graduate Engineer",
    department: "Projects",
    location: "Nairobi, Kenya",
    type: "Graduate Programme",
    experience: "0\u20132 years",
    deadline: "2025-11-30",
    status: "Open",
    summary: "A structured graduate programme developing future construction leaders through rotations across projects and a functions.",
    qualifications: [
      "Degree in civil engineering, construction or related discipline",
      "Strong academic record and a drive to learn",
      "Willingness to work on project sites",
    ],
    responsibilities: [
      "Support site engineers and a project teams",
      "Learn site supervision, quality control and a planning",
      "Contribute to reporting and a documentation",
    ],
  },
  {
    slug: "intern-civil",
    title: "Civil Engineering Internship",
    department: "Projects",
    location: "Nairobi, Kenya",
    type: "Internship",
    experience: "Current student or recent graduate",
    deadline: "2025-10-31",
    status: "Open",
    summary: "Hands-on internship placing students and a recent graduates at the heart of live construction projects.",
    qualifications: [
      "Pursuing or recently completed engineering and/constructions related studies",
      "Strong attention to detail and a willingness to learn",
    ],
    responsibilities: [
      "Assist site teams with daily supervision",
      "Support quality inspections and a documentation",
      "Learn construction methods, planning and a safety",
    ],
  },
];

