import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/shared/CtaButton";
import { HeroTrustStrip } from "./HeroTrustStrip";
import { MissionCard } from "./MissionCard";

export function HomeHero() {
  return (
    <Section
      tone="dark"
      spacing="loose"
      contained={false}
      className="relative overflow-x-clip"
      aria-labelledby="home-hero-title"
    >
      <Image
        src="/images/home-hero-bg-image.png"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover object-center"
      />

      {/* Legibility scrim. The photo's brightest region is its left third —
          the sun — which is exactly where the headline sits, so the base
          darkening is reinforced by a left-weighted wash from lg up, where the
          text column stops spanning the full width. */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/85 lg:bg-ink/70" />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block lg:bg-linear-to-r lg:from-ink lg:via-ink/70 lg:to-transparent"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <h1 id="home-hero-title" className="text-4xl font-bold sm:text-5xl">
              We Build Digital Solutions That Drive Growth and{" "}
              <span className="text-orange">Transform Businesses.</span>
            </h1>

            <p className="mt-6 max-w-xl text-on-surface-mute">
              AfriZenith helps African businesses build powerful brands,
              streamline operations and grow sustainably through technology,
              strategy and creativity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/contact" size="lg">
                Let&apos;s Work Together
              </CtaButton>
              <CtaButton
                href="#our-work"
                variant="outline"
                size="lg"
                icon="arrow-down"
              >
                See Our Work
              </CtaButton>
            </div>

            <HeroTrustStrip className="mt-12" />
          </div>

          <div className="relative lg:mb-12">
            {/* Keyed to real alpha from hero-map.png, so it composites over
                the skyline with no backing plate and no blend mode. */}
            <div className="relative aspect-square w-full">
              <Image
                src="/images/hero-map-glow.png"
                alt="A network of connected nodes spanning a map of Africa"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                loading="eager"
                className="object-contain"
              />
            </div>

            <div className="mt-6 lg:absolute lg:right-0 lg:bottom-0 lg:mt-0 lg:translate-y-1/4">
              <MissionCard />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
