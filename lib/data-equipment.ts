export interface EquipmentItem {
  name: string;
  image?: string;
  description: string;
  capability?: string;
  availability: string;
}

export interface EquipmentCategory {
  category: string;
  categoryLabel: string;
  items: EquipmentItem[];
}

export const equipmentcategorys: EquipmentCategory[] = [
  {
    category: "earthmoving",
    categoryLabel: "Earthmoving Equipment",
    items: [
      {"name": "Excavators", "description": "Excavators available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Wheel loaders", "description": "Wheel loaders available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Backhoe loaders", "description": "Backhoe loaders available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Motor graders", "description": "Motor graders available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Dozers & compactors", "description": "Dozers & compactors available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Dump trucks", "description": "Dump trucks available for Prodigy projects. Capability details on request.", "availability": "Available"},
    ],
  },
  {
    category: "construction",
    categoryLabel: "Construction Equipment",
    items: [
      {"name": "Tower cranes", "description": "Tower cranes available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Mobile cranes", "description": "Mobile cranes available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Concrete pumps", "description": "Concrete pumps available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Mixers", "description": "Mixers available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Vibrators", "description": "Vibrators available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Scaffolding systems", "description": "Scaffolding systems available for Prodigy projects. Capability details on request.", "availability": "Available"},
    ],
  },
  {
    category: "concrete",
    categoryLabel: "Concrete Equipment",
    items: [
      {"name": "Batching plants", "description": "Batching plants available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Concrete mixers", "description": "Concrete mixers available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Plate compactors", "description": "Plate compactors available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Power floats", "description": "Power floats available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Cutting & coring tools", "description": "Cutting & coring tools available for Prodigy projects. Capability details on request.", "availability": "Available"},
    ],
  },
  {
    category: "road",
    categoryLabel: "Road Construction Equipment",
    items: [
      {"name": "Pavers", "description": "Pavers available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Rollers", "description": "Rollers available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Milling machines", "description": "Milling machines available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Chip spreaders", "description": "Chip spreaders available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Water tankers", "description": "Water tankers available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Asphalt equipment", "description": "Asphalt equipment available for Prodigy projects. Capability details on request.", "availability": "Available"},
    ],
  },
  {
    category: "lifting",
    categoryLabel: "Lifting Equipment",
    items: [
      {"name": "Mobile cranes", "description": "Mobile cranes available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Tower cranes", "description": "Tower cranes available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Forklifts", "description": "Forklifts available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Telehandlers", "description": "Telehandlers available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Chain blocks & hoists", "description": "Chain blocks & hoists available for Prodigy projects. Capability details on request.", "availability": "Available"},
    ],
  },
  {
    category: "transport",
    categoryLabel: "Transport & Logistics",
    items: [
      {"name": "Tipper trucks", "description": "Tipper trucks available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Lowbed trailers", "description": "Lowbed trailers available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Flatbed trucks", "description": "Flatbed trucks available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Water bowsers", "description": "Water bowsers available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Fuel bowsers", "description": "Fuel bowsers available for Prodigy projects. Capability details on request.", "availability": "Available"},
    ],
  },
  {
    category: "survey",
    categoryLabel: "Surveying Equipment",
    items: [
      {"name": "Total stations", "description": "Total stations available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "GPS survey equipment", "description": "GPS survey equipment available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Levels", "description": "Levels available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Drones", "description": "Drones available for Prodigy projects. Capability details on request.", "availability": "Available"},
      {"name": "Laser scanners", "description": "Laser scanners available for Prodigy projects. Capability details on request.", "availability": "Available"},
    ],
  },
];

