import { LineChart, Search, Settings, Lightbulb } from "lucide-react";
import type { ProcessStep } from "@/types/content";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    description:
      "We learn about your business, your goals and the challenges you face.",
    icon: Search,
  },
  {
    step: 2,
    title: "Strategize",
    description:
      "We develop a tailored strategy and roadmap to achieve the results you want.",
    icon: Lightbulb,
  },
  {
    step: 3,
    title: "Build",
    description:
      "We design and build solutions that are modern, scalable and user-focused.",
    icon: Settings,
  },
  {
    step: 4,
    title: "Grow",
    description: "We help you launch, optimize and scale for sustainable growth.",
    icon: LineChart,
  },
];
