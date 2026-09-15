"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import { NAV_ITEMS } from "@/config/navigation";

interface MainNavProps {
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
}

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function MainNav({
  orientation = "horizontal",
  onNavigate,
}: MainNavProps) {
  const pathname = usePathname();
  const horizontal = orientation === "horizontal";

  return (
    <ul
      className={cn(
        "flex",
        horizontal ? "items-center gap-8" : "flex-col gap-1",
      )}
    >
      {NAV_ITEMS.map((item) => {
        const active = isActive(pathname, item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative inline-flex transition-colors",
                horizontal
                  ? "py-2 text-sm after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-brand after:content-['']"
                  : "w-full border-l-2 py-3 pl-4 text-base",
                active
                  ? "text-on-surface"
                  : "text-on-surface-mute hover:text-on-surface",
                horizontal && !active && "after:hidden",
                !horizontal &&
                  (active ? "border-brand" : "border-transparent"),
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
