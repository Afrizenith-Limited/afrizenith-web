import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactDetails } from "@/components/shared/ContactDetails";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AfriZenith to discuss your project, your goals and how we can help your business grow.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Section tone="dark" spacing="loose">
      {/* CSS entrance, not <Reveal>: this page is above the fold and the form
          is its primary action, so nothing here should wait on hydration. */}
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="enter-rise">
          <SectionHeading
            id="contact-title"
            eyebrow="Get In Touch"
            title="Let's Work Together"
            description="Have a project in mind? Tell us what you're building and we'll help you get there."
            level={1}
            rule
          />

          <ContactDetails layout="stacked" className="mt-10" />

          <WhatsAppButton className="mt-8" />

          <div className="mt-10">
            <h2 className="font-heading text-xs font-semibold tracking-[0.14em] uppercase">
              Follow Us
            </h2>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        <div className="enter-rise delay-200">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
