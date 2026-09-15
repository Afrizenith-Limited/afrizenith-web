import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ProcessStep } from "./ProcessStep";
import { PROCESS_STEPS } from "@/config/process";

export function ProcessSection() {
  return (
    <Section tone="light" aria-labelledby="process-title">
      <Reveal>
        <SectionHeading
          id="process-title"
          eyebrow="Our Approach"
          title="How We Work"
          align="center"
        />
      </Reveal>

      <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {PROCESS_STEPS.map((step, i) => (
          <ProcessStep key={step.step} {...step} index={i} />
        ))}
      </ol>
    </Section>
  );
}
