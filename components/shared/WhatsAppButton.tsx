import { FaWhatsapp } from "react-icons/fa6";
import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/config/site";

interface WhatsAppButtonProps {
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  className?: string;
}

export function WhatsAppButton({
  variant = "outline",
  size = "default",
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <FaWhatsapp aria-hidden="true" className="size-4" />
      Chat on WhatsApp
      <span className="sr-only"> — opens WhatsApp at {PHONE_DISPLAY}</span>
    </a>
  );
}
