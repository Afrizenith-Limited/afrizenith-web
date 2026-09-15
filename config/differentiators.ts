import { HeartHandshake, Puzzle, Sparkles, Target } from "lucide-react";
import type { Differentiator } from "@/types/content";

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "Strategic Approach",
    description:
      "We take time to understand your business and build strategies that deliver results.",
    icon: Target,
  },
  {
    title: "Tailored Solutions",
    description:
      "Every solution we create is customised to your unique needs and goals.",
    icon: Puzzle,
  },
  {
    title: "Quality & Innovation",
    description:
      "We use the latest technologies and creative ideas to deliver exceptional results.",
    icon: Sparkles,
  },
  {
    title: "Commitment & Support",
    description:
      "We don't just deliver and leave. We partner with you for long-term success.",
    icon: HeartHandshake,
  },
];

// Hero trust strip — the same four ideas as labels only.
export const HERO_HIGHLIGHTS: Differentiator[] = [
  { title: "Strategic Approach", description: "", icon: Target },
  { title: "Tailored Solutions", description: "", icon: Puzzle },
  { title: "Quality & Innovation", description: "", icon: Sparkles },
  { title: "Commitment to Success", description: "", icon: HeartHandshake },
];
