import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IconCard } from "@/components/shared/IconCard";
import { CORE_VALUES } from "@/config/values";

export function CoreValues() {
  return (
    <Section tone="soft" aria-labelledby="values-title">
      <SectionHeading
        id="values-title"
        eyebrow="What Drives Us"
        title="Our Core Values"
        align="center"
      />

      {/* Five across divides by nothing, so flex-wrap + justify-center lets the
          orphan row centre itself instead of stranding a card on the left. */}
      <ul className="mt-14 flex flex-wrap justify-center gap-6">
        {CORE_VALUES.map((value) => (
          <li
            key={value.title}
            className="basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] xl:basis-[calc(20%-1.2rem)]"
          >
            <IconCard
              icon={value.icon}
              title={value.title}
              description={value.description}
              align="center"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
