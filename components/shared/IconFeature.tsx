import type { LucideIcon } from "lucide-react";
import { cn } from "cn";

interface IconFeatureProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  layout?: "stacked" | "inline";
  headingLevel?: 2 | 3;
  className?: string;
}

/**
 * Chrome-less icon + title + optional description. Used by the hero trust
 * strip, the "why choose us" grid and the About vision/mission/values rows.
 */
export function IconFeature({
  icon: Icon,
  title,
  description,
  layout = "stacked",
  headingLevel = 3,
  className,
}: IconFeatureProps) {
  const inline = layout === "inline";
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div className={cn(inline ? "flex items-start gap-3" : "", className)}>
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full border border-orange/40",
          inline ? "size-9" : "size-10",
        )}
      >
        <Icon aria-hidden="true" className="size-5 text-orange" />
      </span>

      <div className={cn(!inline && "mt-4")}>
        <Heading className="font-heading text-sm font-semibold">{title}</Heading>
        {description && (
          <p className="mt-2 text-sm text-on-surface-mute">{description}</p>
        )}
      </div>
    </div>
  );
}
