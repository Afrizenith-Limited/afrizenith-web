import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IconFeature } from "@/components/shared/IconFeature";
import { Reveal } from "@/components/motion/Reveal";
import { DIFFERENTIATORS } from "@/config/differentiators";

export function WhyChooseUsSection() {
  return (
    <Section tone="dark" aria-labelledby="why-title">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <Reveal from="left">
          <SectionHeading
            id="why-title"
            eyebrow="Why Businesses Choose Us"
            title="We Combine Strategy, Creativity and Technology for Real Results"
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {DIFFERENTIATORS.map((item, i) => (
              <Reveal key={item.title} from="left" index={i} delay={0.1}>
                <IconFeature
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Wraps the relative container rather than sitting inside it — a
            transform on the parent of a fill image would become its containing
            block. */}
        <Reveal from="right">
          <div className="relative aspect-3/2 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/home_business.png"
              alt="A team reviewing work on a laptop, with a connected map of Africa behind them"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
