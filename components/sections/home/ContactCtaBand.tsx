import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactDetails } from "@/components/shared/ContactDetails";
import { CtaButton } from "@/components/shared/CtaButton";

export function ContactCtaBand() {
  return (
    <Section tone="light" spacing="compact" aria-labelledby="contact-band-title">
      <div className="flex flex-col gap-10 border-t border-hairline pt-12 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading
          id="contact-band-title"
          eyebrow="Let's Build Something Amazing"
          title="Ready to Grow Your Business?"
          description="Let's discuss how we can help you build, grow and scale with smart digital solutions."
          className="lg:max-w-md"
        />

        <div className="flex flex-col gap-8 lg:items-end">
          <ContactDetails />
          <CtaButton href="/contact" size="lg" icon="send">
            Send a Message
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
