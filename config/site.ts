import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import type { ContactDetail, SocialLink } from "@/types/content";

export const SITE = {
  name: "AfriZenith",
  legalName: "AfriZenith Limited",
  tagline: "Ideas to Impact, Solutions That Scale.",
  description:
    "We help African businesses build, grow and scale through digital transformation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

// Single source of truth for the number. The visible text, the tel: link and
// the WhatsApp link all derive from it, so they cannot drift apart — they had
// already diverged by a digit (displayed 124, dialled 123).
// UNCONFIRMED: verify this is the real number before launch.
export const PHONE_DISPLAY = "+234 813 455 5667";

const PHONE_E164 = PHONE_DISPLAY.replace(/[^\d+]/g, "");

export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace("+", "")}`;

// UNCONFIRMED — taken from the design reference, not from the business.
// Verify before launch; placeholder contact details on a live site are worse
// than omitting the block.
export const CONTACT_DETAILS: ContactDetail[] = [
  {
    label: "Call Us",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
    icon: Phone,
  },
  {
    label: "Email Us",
    value: "afrizenithlimited@gmail.com",
    href: "mailto:afrizenithlimited@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    icon: MapPin,
  },
];

// UNCONFIRMED — real profile URLs needed before launch.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "X", href: "https://x.com", icon: FaXTwitter },
];
