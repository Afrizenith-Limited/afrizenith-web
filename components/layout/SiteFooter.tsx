import Link from "next/link";
import { Container } from "./Container";
import { FooterColumn } from "./FooterColumn";
import { Logo } from "@/components/shared/Logo";
import { CtaButton } from "@/components/shared/CtaButton";
import { ContactDetails } from "@/components/shared/ContactDetails";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { NAV_ITEMS } from "@/config/navigation";
import { SERVICES } from "@/config/services";
import { SITE } from "@/config/site";

export function SiteFooter() {
  return (
    <footer
      data-tone="dark"
      className="mt-auto bg-ink text-on-surface"
    >
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:pr-6">
            <Logo href={null} />
            <p className="mt-5 max-w-xs text-sm text-on-surface-mute">
              {SITE.description}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <FooterColumn title="Quick Links">
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="What We Do">
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>{service.title}</li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Get In Touch">
            <ContactDetails layout="stacked" />
            <CtaButton href="/contact" variant="outline" icon="send" className="mt-6">
              Send a Message
            </CtaButton>
          </FooterColumn>
        </div>
      </Container>

      <div className="border-t border-hairline">
        <Container className="py-5">
          <p className="text-xs text-on-surface-mute">
            © {new Date().getFullYear()} {SITE.legalName}. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
