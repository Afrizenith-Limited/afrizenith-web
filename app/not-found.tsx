import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/shared/CtaButton";

export default function NotFound() {
  return (
    <Section tone="dark" spacing="loose">
      <p className="font-heading text-sm font-semibold tracking-[0.18em] text-brand uppercase">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-on-surface-mute">
        The page you are looking for does not exist or has been moved.
      </p>
      <CtaButton href="/" className="mt-8">
        Back to Home
      </CtaButton>
    </Section>
  );
}
