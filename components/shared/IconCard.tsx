import type { LucideIcon } from "lucide-react";
import { cn } from "cn";
import { ArrowLink } from "./ArrowLink";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  align?: "start" | "center";
  href?: string;
  linkLabel?: string;
  className?: string;
}

export function IconCard({
  icon: Icon,
  title,
  description,
  align = "start",
  href,
  linkLabel = "Learn More",
  className,
}: IconCardProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-lg border border-hairline bg-surface-raised p-6",
        centered && "items-center text-center",
        className,
      )}
    >
      <span className="inline-flex size-12 items-center justify-center rounded-full bg-icon-well">
        <Icon aria-hidden="true" className="size-6 text-orange" />
      </span>

      <h3 className="mt-5 font-heading text-lg font-semibold lg:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-sm text-on-surface-mute">{description}</p>

      {href && (
        <ArrowLink href={href} className="mt-auto self-start pt-5">
          {linkLabel}
        </ArrowLink>
      )}
    </div>
  );
}
