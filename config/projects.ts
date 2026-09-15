import type { Project } from "@/types/content";

// The imagery is supplied brand artwork, but these remain illustrative of the
// kind of work offered rather than delivered client projects. Replace the
// titles with real engagements (or empty this array) before launch — the
// section renders nothing when empty.
export const PROJECTS: Project[] = [
  {
    title: "Corporate Website",
    category: "Web Development",
    image: {
      src: "/images/services_one.png",
      alt: "A corporate website homepage shown on a laptop",
    },
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: {
      src: "/images/services_two.png",
      alt: "An online storefront shown on a laptop and a phone",
    },
  },
  {
    title: "Brand Identity",
    category: "Branding & Design",
    image: {
      src: "/images/services_three.png",
      alt: "Branded stationery, packaging and business cards on a desk",
    },
  },
  {
    title: "Business Automation",
    category: "Technology Solutions",
    image: {
      src: "/images/services_four.png",
      alt: "An analytics dashboard and automation workflow on a laptop and phone",
    },
  },
];
