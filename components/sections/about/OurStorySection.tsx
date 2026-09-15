import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CtaButton } from "@/components/shared/CtaButton";
import { Reveal } from "@/components/motion/Reveal";

export function OurStorySection() {
  return (
    <Section tone="light" aria-labelledby="story-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal from="left">
          <SectionHeading
            id="story-title"
            eyebrow="Our Story"
            title={
              <>
                The Why Behind
                <br className="hidden sm:block" /> AfriZenith
              </>
            }
          />

          <div className="mt-6 space-y-5 text-on-surface-mute">
            <p>
              We saw a gap — talented businesses with great ideas struggling to
              scale because they lacked the right digital systems, brand
              presence, and growth strategies.
            </p>
            <p>
              AfriZenith was created to bridge that gap. We exist to help
              businesses not just exist online, but thrive.
            </p>
          </div>

          <CtaButton href="/contact" variant="solid-ink" size="lg" className="mt-8">
            Let&apos;s Work Together
          </CtaButton>
        </Reveal>

        <Reveal from="right">
          {/* Rendered at its own 1697×927 proportions rather than cropped into
              a fixed box — a 4/3 frame cut 27% off the width, slicing the two
              outer people and the branding on the wall. */}
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/the-why-photo.png"
              alt="The AfriZenith team working together around a laptop"
              width={1697}
              height={927}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
