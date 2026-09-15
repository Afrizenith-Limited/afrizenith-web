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
                // The bar is always rendered and scales from the left, so it
                // sweeps out on hover and retracts on the outgoing route
                // rather than popping in and out.
                horizontal
                  ? "py-2 text-sm after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-200 after:ease-out after:content-['']"
                  : "w-full border-l-2 py-3 pl-4 text-base",
                active
                  ? "text-on-surface"
                  : "text-on-surface-mute hover:text-on-surface",
                horizontal &&
                  (active
                    ? "after:scale-x-100"
                    : "hover:after:scale-x-100 hover:after:bg-current/30"),
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
