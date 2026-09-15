import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "cn";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  direction?: "right" | "down";
  className?: string;
}

export function ArrowLink({
  href,
  children,
  direction = "right",
  className,
}: ArrowLinkProps) {
  const Icon = direction === "down" ? ArrowDown : ArrowRight;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium text-brand",
        className,
      )}
    >
      {children}
      {/* group/card fires when the whole IconCard is hovered; the bare group
          keeps it working wherever ArrowLink is used on its own. */}
      <Icon
        aria-hidden="true"
        className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover/card:translate-x-0.5"
      />
    </Link>
  );
}
