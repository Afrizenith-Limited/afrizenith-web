import { cn } from "cn";
import { HERO_HIGHLIGHTS } from "@/config/differentiators";

export function HeroTrustStrip({ className }: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-2 gap-y-5 sm:grid-cols-4", className)}>
      {HERO_HIGHLIGHTS.map(({ title, icon: Icon }, index) => (
        <li
          key={title}
          className={cn(
            "flex items-center gap-2.5",
            index > 0 && "sm:border-l sm:border-hairline sm:pl-4",
          )}
        >
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-orange/40">
            <Icon aria-hidden="true" className="size-4 text-orange" />
          </span>
          <span className="text-[0.6875rem] leading-tight text-on-surface-mute">
            {title}
          </span>
        </li>
      ))}
    </ul>
  );
}
