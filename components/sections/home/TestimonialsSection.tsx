import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/config/testimonials";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function TestimonialsSection() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <Section tone="dark" aria-labelledby="testimonials-title">
      <Reveal from="left">
        <Eyebrow id="testimonials-title" className="sm:ml-18">
          What Our Clients Say
        </Eyebrow>
        <TestimonialsCarousel items={TESTIMONIALS} />
      </Reveal>
    </Section>
  );
}
