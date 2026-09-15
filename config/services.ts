import { Cog, Globe, PenTool, TrendingUp } from "lucide-react";
import type { Service } from "@/types/content";

export const SERVICES: Service[] = [
  {
    slug: "web-digital",
    title: "Web & Digital Solutions",
    description:
      "We build fast, responsive and conversion-focused websites and web applications.",
    icon: Globe,
  },
  {
    slug: "business-growth",
    title: "Business Growth",
    description:
      "We help you develop strategies that drive growth, increase efficiency and maximise profits.",
    icon: TrendingUp,
  },
  {
    slug: "technology",
    title: "Technology Solutions",
    description:
      "From custom software to automation, we build systems that streamline your operations.",
    icon: Cog,
  },
  {
    slug: "branding-design",
    title: "Branding & Design",
    description:
      "We craft strong brands and stunning designs that make your business stand out.",
    icon: PenTool,
  },
];
