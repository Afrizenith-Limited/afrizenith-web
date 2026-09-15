import Image from "next/image";
import Link from "next/link";
import { cn } from "cn";
import { SITE } from "@/config/site";

// Intrinsic size of public/images/logo-mark.png.
const MARK = { src: "/images/logo-mark.png", width: 534, height: 507 };

const markHeights = {
  sm: "h-7",
  md: "h-9",
  lg: "h-20",
} as const;

interface LogoProps {
  variant?: "full" | "mark";
  size?: keyof typeof markHeights;
  showTagline?: boolean;
  href?: string | null;
  className?: string;
}

export function Logo({
  variant = "full",
  size = "md",
  showTagline = true,
  href = "/",
  className,
}: LogoProps) {
  const full = variant === "full";

  const content = (
    <>
      <Image
        src={MARK.src}
        alt=""
        width={MARK.width}
        height={MARK.height}
        loading="eager"
        className={cn("w-auto", markHeights[size])}
      />
      {full ? (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-xl font-bold tracking-tight">
            Afri<span className="text-brand">Zenith</span>
          </span>
          {showTagline && (
            <span className="mt-1 text-[0.625rem] tracking-wide text-on-surface-mute">
              {SITE.tagline}
            </span>
          )}
        </span>
      ) : (
        <span className="sr-only">{SITE.name}</span>
      )}
    </>
  );

  const classes = cn("inline-flex items-center gap-2.5", className);

  if (href === null) {
    return <span className={classes}>{content}</span>;
  }

  return (
    <Link href={href} aria-label={`${SITE.name} — home`} className={classes}>
      {content}
    </Link>
  );
}
