import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IconCard } from "@/components/shared/IconCard";
import { SERVICES } from "@/config/services";

export function ServicesSection() {
  return (
    <Section tone="light" aria-labelledby="services-title">
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

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service) => (
          <IconCard
            key={service.slug}
            icon={service.icon}
            title={service.title}
            description={service.description}
            href="/contact"
          />
        ))}
      </div>
    </Section>
  );
}
