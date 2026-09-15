import { Container } from "./Container";
import { Logo } from "@/components/shared/Logo";
import { CtaButton } from "@/components/shared/CtaButton";
import { MainNav } from "@/components/navigation/MainNav";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

export function SiteHeader() {
  return (
    <header
      data-tone="dark"
      className="sticky top-0 z-50 bg-ink text-on-surface"
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <MainNav />
        </nav>

        <div className="hidden md:block">
          <CtaButton href="/contact">Let&apos;s Work Together</CtaButton>
        </div>

        <div className="md:hidden">
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
