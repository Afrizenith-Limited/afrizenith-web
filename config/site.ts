import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import type { ContactDetail, SocialLink } from "@/types/content";

export const SITE = {
  name: "AfriZenith",
  legalName: "AfriZenith Limited",
  tagline: "Ideas to Impact, Solutions That Scale.",
  description:
    "We help African businesses build, grow and scale through digital transformation.",
  url: "https://afrizenith.com",
} as const;


export const CONTACT_EMAIL = "afrizenithlimited@gmail.com";

export const CONTACT_FROM_EMAIL = "onboarding@resend.dev";

export const PHONE_DISPLAY = "+234 813 455 5667";

const PHONE_E164 = PHONE_DISPLAY.replace(/[^\d+]/g, "");

export const WHATSAPP_URL = `https://wa.me/${PHONE_E164.replace("+", "")}`;

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    label: "Call Us",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
    icon: Phone,
  },
  {
    label: "Email Us",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
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
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594287843805", icon: FaFacebookF },
  { label: "TikTok", href: "https://www.tiktok.com/@afrizenith_?is_from_webapp=1&sender_device=pc", icon: FaTiktok },
  { label: "Instagram", href: "https://www.instagram.com/afrizenithltd/", icon: FaInstagram },
];
