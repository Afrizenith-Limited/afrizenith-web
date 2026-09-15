import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AboutPillars } from "./AboutPillars";

export function AboutHero() {
  return (
    <Section
      tone="dark"
      spacing="loose"
      contained={false}
      className="relative overflow-x-clip"
      aria-labelledby="about-hero-title"
    >
      {/* Offset toward the darker right of the frame: the sun sits on the left,
          which is where this hero's copy sits. */}
      <Image
        src="/images/home-hero-bg-image.png"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover object-[70%_center]"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-ink/85 lg:bg-ink/70" />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block lg:bg-linear-to-r lg:from-ink lg:via-ink/70 lg:to-transparent"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* CSS entrance, as on the home hero — above the fold, so it must not
              wait for hydration. */}
          <div>
            <SectionHeading
              id="about-hero-title"
              eyebrow="About AfriZenith"
              title="Building Digital Solutions That Drive Real Impact"
              level={1}
              rule
              className="enter-rise"
            />

            <div className="enter-rise mt-8 space-y-5 text-on-surface-mute delay-150">
              <p className="max-w-xl">
                AfriZenith is a digital solutions company passionate about
                helping businesses use technology, strategy and creativity to
                achieve sustainable growth in a digital world.
              </p>
              <p className="max-w-xl">
                We combine deep industry insight with modern technology to build
                brands, systems and experiences that make a difference.
              </p>
            </div>
          </div>

          {/* The mark sits left so the pillars card overlaps only its edge,
              as in the design, rather than covering it. */}
          <div className="relative lg:mb-16">
            <div className="enter-fade flex justify-center py-4 delay-100 lg:block lg:py-0">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={534}
                height={507}
                className="h-28 w-auto lg:h-56"
              />
            </div>

            <div className="mt-6 lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:translate-y-1/3">
              <div className="enter-rise delay-300">
                <AboutPillars />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
