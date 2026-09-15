import { cn } from "cn";
import { CONTACT_DETAILS } from "@/config/site";
import { ContactDetailItem } from "./ContactDetailItem";

interface ContactDetailsProps {
  layout?: "inline" | "stacked";
  className?: string;
}

export function ContactDetails({
  layout = "inline",
  className,
}: ContactDetailsProps) {
  return (
    <div
      className={cn(
        "flex gap-x-10 gap-y-4",
        layout === "inline" ? "flex-wrap" : "flex-col",
        className,
      )}
    >
      {CONTACT_DETAILS.map((detail) => (
        <ContactDetailItem key={detail.label} layout={layout} {...detail} />
      ))}
    </div>
  );
}
