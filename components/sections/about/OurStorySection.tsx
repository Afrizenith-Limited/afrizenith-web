import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CtaButton } from "@/components/shared/CtaButton";

export function OurStorySection() {
  return (
    <Section tone="light" aria-labelledby="story-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
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
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
          <Image
            src="/images/the-why-photo.png"
            alt="The AfriZenith team working together around a laptop"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
