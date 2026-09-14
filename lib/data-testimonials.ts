export interface Testimonial {
  slug: string;
  name: string;
  position: string;
  organization: string;
  quote: string;
  project: string;
  rating: number;
  approved: boolean;
}

export const testimonials: Testimonial[] = [
  {
    slug: "t-1",
    name: "[Client Name \u2014 placeholder]",
    position: "[Position \u2014 placeholder]",
    organization: "[Organization \u2014 placeholder]",
    quote: "Prodigy delivered our project to a high standard, on time and within budget. Their project management discipline and communication were excellent throughout.",
    project: "tatu-city-commercial-plaza",
    rating: 5,
    approved: true,
  },
  {
    slug: "t-2",
    name: "[Client Name \u2014 placeholder]",
    position: "[Position \u2014 placeholder]",
    organization: "[Organization \u2014 placeholder]",
    quote: "Working with Prodigy on the road upgrade was a professional experience. Their team managed traffic, utilities and community interfaces with real competence.",
    project: "nairobi-bypass-road-works",
    rating: 5,
    approved: true,
  },
  {
    slug: "t-3",
    name: "[Client Name \u2014 placeholder]",
    position: "[Position \u2014 placeholder]",
    organization: "[Organization \u2014 placeholder]",
    quote: "The refurbishment was delivered carefully across two seasons with no disruption to our guests. Quality of finish was excellent.",
    project: "diani-hotel-refurbishment",
    rating: 4,
    approved: true,
  },
  {
    slug: "t-4",
    name: "[Client Name \u2014 placeholder]",
    position: "[Position \u2014 placeholder]",
    organization: "[Organization \u2014 placeholder]",
    quote: "Prodigy brought strong engineering discipline to our hospital extension, including rigorous infection-control planning. We would work with them again.",
    project: "eldoret-hospital-extensions",
    rating: 5,
    approved: true,
  },
];

