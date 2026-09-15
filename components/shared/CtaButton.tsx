import Link from "next/link";
import { ArrowDown, ArrowRight, Send } from "lucide-react";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";

const icons = {
  "arrow-right": ArrowRight,
  "arrow-down": ArrowDown,
  send: Send,
} as const;

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "solid-ink";
  size?: "default" | "lg";
  icon?: keyof typeof icons | "none";
  className?: string;
  onClick?: () => void;
}

/**
 * A link styled as a button. Deliberately not built on <Button>: Base UI stamps
 * role="button" on a non-native element, which would announce these navigation
 * controls as buttons.
 */
export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "default",
  icon = "arrow-right",
  className,
  onClick,
}: CtaButtonProps) {
  const Icon = icon === "none" ? null : icons[icon];

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
      {Icon && <Icon aria-hidden="true" />}
    </Link>
  );
}
