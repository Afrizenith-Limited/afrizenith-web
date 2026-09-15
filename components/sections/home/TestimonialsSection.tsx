import { Quote } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { TESTIMONIALS } from "@/config/testimonials";

export function TestimonialsSection() {
  const [featured] = TESTIMONIALS;
  if (!featured) return null;

  return (
    <Section tone="dark" aria-labelledby="testimonials-title">
      <div className="flex gap-6">
        <Quote
          aria-hidden="true"
          className="hidden size-12 shrink-0 text-orange sm:block"
        />
        <div>
          <Eyebrow id="testimonials-title">What Our Clients Say</Eyebrow>
          <blockquote className="mt-5 max-w-2xl font-heading text-xl leading-relaxed">
            {featured.quote}
          </blockquote>
          <p className="mt-5 text-sm text-on-surface-mute">
            — {featured.attribution}
          </p>
        </div>
      </div>
    </Section>
  );
}
