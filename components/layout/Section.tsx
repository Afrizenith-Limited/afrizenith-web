import { cn } from "cn";
import { Container } from "./Container";

export type SectionTone = "light" | "soft" | "dark";

const spacingClasses = {
  none: "",
  compact: "py-12 md:py-16",
  default: "py-16 md:py-24 lg:py-28",
  loose: "py-20 md:py-28 lg:py-36",
} as const;

interface SectionProps
  extends Omit<React.ComponentProps<"section">, "children"> {
  tone?: SectionTone;
  spacing?: keyof typeof spacingClasses;
  contained?: boolean;
  children: React.ReactNode;
}

/**
 * Every section on the site renders through this. `data-tone` re-points the
 * semantic colour variables in globals.css, so children write `text-on-surface`
 * once and stay correct on white, tint and navy alike.
 */
export function Section({
  tone = "light",
  spacing = "default",
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-tone={tone}
      className={cn(
        // overflow-x-clip contains the horizontal travel of a reveal, which
        // would otherwise push past the container padding and scroll the page
        // sideways. `clip` rather than `hidden`: it adds no scroll container
        // and leaves the y axis visible, so the heroes' overlapping cards
        // still hang below their section.
        "overflow-x-clip bg-surface text-on-surface",
        spacingClasses[spacing],
        className,
      )}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
