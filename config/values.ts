import { Diamond, Lightbulb, Shield, Target, Trophy } from "lucide-react";
import type { CoreValue } from "@/types/content";

// Descriptions stay at or under 14 words — the five-across row leaves each card
// roughly 200px at 1280 and longer copy goes ragged.
export const CORE_VALUES: CoreValue[] = [
  {
    title: "Excellence",
    description:
      "We are committed to delivering high-quality solutions that exceed expectations.",
    icon: Trophy,
  },
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in everything we do.",
    icon: Shield,
  },
  {
    title: "Innovation",
    description:
      "We embrace creativity and technology to build future-ready solutions.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description:
      "We believe the best results come from strong partnerships and teamwork.",
    icon: Diamond,
  },
  {
    title: "Impact",
    description: "We focus on solutions that create measurable and lasting impact.",
    icon: Target,
  },
];
