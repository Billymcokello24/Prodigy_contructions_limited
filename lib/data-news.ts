export interface NewsItem {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author?: string;
  date: string;
  readMinutes?: number;
  image: string;
}

export const newsitems: NewsItem[] = [
  {
    slug: "prodigy-begins-westlands-mixed-use-tower",
    title: "Prodigy Begins Construction of Westlands Mixed-Use Tower",
    category: "Project Announcements",
    date: "2025-09-02",
    excerpt: "Works are underway on a mixed-use tower combining office, retail and a structured parking, reinforcing our commercial delivery capability.",
    image: "https://images.unsplash.com/photo-1531834685032-da6fe4565e0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "prodigy-awarded-road-corridor-contract",
    title: "Prodigy Awarded Major Road Corridor Upgrade Contract",
    category: "New Contracts",
    date: "2025-08-05",
    excerpt: "A new urban road corridor upgrade reinforces Prodigy's position among Kenya's dependable infrastructure contractors.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f60dfb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "prodigy-completes-hospital-extension",
    title: "Prodigy Completes Hospital Extension in Eldoret",
    category: "Project Announcements",
    date: "2025-07-10",
    excerpt: "The new wards, theatres and a outpatient block expand clinical capacity at an Eldoret hospital.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "prodigy-joins-kenya-green-building-society",
    title: "Prodigy Joins Kenya Green Building Society",
    category: "Partnerships",
    date: "2025-06-15",
    excerpt: "Prodigy is deepening its commitment to sustainable construction practices through membership of the Kenya Green Building Society.",
    image: "https://images.unsplash.com/photo-1497436072909-60f360610d16?auto=format&fit=crop&w=1200&q=80",
  },
];

