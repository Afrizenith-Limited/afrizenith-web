import { cn } from "cn";
import type { ContactDetail } from "@/types/content";

interface ContactDetailItemProps extends ContactDetail {
  layout?: "inline" | "stacked";
}

export function ContactDetailItem({
  label,
  value,
  href,
  icon: Icon,
  layout = "inline",
}: ContactDetailItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon aria-hidden="true" className="size-5 shrink-0 text-brand" />
      <div className={cn(layout === "inline" ? "flex flex-col" : "contents")}>
        {layout === "inline" && (
          <span className="text-xs text-on-surface-mute">{label}</span>
        )}
        {href ? (
          <a
            href={href}
            className="text-sm transition-colors hover:text-brand"
          >
            {layout === "stacked" && <span className="sr-only">{label}: </span>}
            {value}
          </a>
        ) : (
          <span className="text-sm">
            {layout === "stacked" && <span className="sr-only">{label}: </span>}
            {value}
          </span>
        )}
      </div>
    </div>
  );
}
