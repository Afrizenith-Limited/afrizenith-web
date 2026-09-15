import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurStorySection } from "@/components/sections/about/OurStorySection";
import { CoreValues } from "@/components/sections/about/CoreValues";
import { ProcessSection } from "@/components/sections/about/ProcessSection";
import { AboutCtaBand } from "@/components/sections/about/AboutCtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AfriZenith is a digital solutions company helping African businesses build, grow and scale through technology, strategy and creativity.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStorySection />
      <CoreValues />
      <ProcessSection />
      <AboutCtaBand />
    </>
  );
}
