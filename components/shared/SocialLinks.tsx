import { cn } from "cn";
import { SOCIAL_LINKS } from "@/config/site";
import type { SocialLink } from "@/types/content";

const sizeClasses = {
  sm: "size-8",
  md: "size-9",
} as const;

interface SocialLinksProps {
  items?: SocialLink[];
  size?: keyof typeof sizeClasses;
  className?: string;
}

export function SocialLinks({
  items = SOCIAL_LINKS,
  size = "md",
  className,
}: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {items.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-hairline text-on-surface-mute transition-colors hover:border-brand hover:text-brand",
              sizeClasses[size],
            )}
          >
            <Icon aria-hidden="true" className="size-3.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
