import { Cog, Globe, PenTool, Smartphone, TrendingUp, Users } from "lucide-react";
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
    slug: "mobile-apps",
    title: "Mobile App Development",
    description:
      "We create intuitive and engaging mobile applications for iOS and Android platforms.",
    icon: Smartphone,
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
  {
    slug: "tech-staff-leasing",
    title: "Tech Staff Leasing",
    description:
      "We provide skilled tech professionals to help you scale your team and achieve your goals.",
    icon: Users,
  }
];
