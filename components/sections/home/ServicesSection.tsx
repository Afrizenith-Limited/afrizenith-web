import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IconCard } from "@/components/shared/IconCard";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICES } from "@/config/services";

export function ServicesSection() {
  return (
    <Section tone="light" aria-labelledby="services-title">
      <Reveal>
        <SectionHeading
          id="services-title"
          eyebrow="What We Do"
          title={
            <>
              Solutions That Cover Every
              <br className="hidden sm:block" /> Aspect of Your Business
            </>
          }
          align="center"
          rule
        />
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service, i) => (
          // h-full moves onto the Reveal: it is the grid item now, and IconCard
          // stretches to it.
          <Reveal key={service.slug} index={i} effect="bounce" className="h-full">
            <IconCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              href="/contact"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
