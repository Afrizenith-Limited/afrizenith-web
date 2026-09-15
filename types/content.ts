import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  category: string;
  image: { src: string; alt: string };
  href?: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}
