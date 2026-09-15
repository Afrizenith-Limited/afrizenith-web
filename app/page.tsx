import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/home/WhyChooseUsSection";
import { WorkSection } from "@/components/sections/home/WorkSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { ContactCtaBand } from "@/components/sections/home/ContactCtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <WhyChooseUsSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactCtaBand />
    </>
  );
}
