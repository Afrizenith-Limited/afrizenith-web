import { Send } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/shared/CtaButton";

export function AboutCtaBand() {
  return (
    <Section tone="dark" spacing="compact" aria-labelledby="about-cta-title">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-10">
        <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full border border-orange/40">
          <Send aria-hidden="true" className="size-6 text-orange" />
        </span>

        <div className="lg:flex-1">
          <h2
            id="about-cta-title"
            className="font-heading text-2xl font-bold sm:text-3xl"
          >
            Ready to Build Something Amazing?
          </h2>
          <p className="mt-3 max-w-md text-on-surface-mute">
            Let&apos;s discuss how we can help your business grow with smart
            digital solutions.
          </p>
        </div>

        <CtaButton href="/contact" size="lg">
          Start a Project
        </CtaButton>
      </div>
    </Section>
  );
}
