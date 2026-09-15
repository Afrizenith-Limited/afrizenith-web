"use client";

import { m } from "motion/react";
import { BOUNCE, GLIDE, REVEAL, staggerDelay } from "@/lib/motion";

/**
 * Scroll reveal: a fade plus travel from one of four directions, re-firing
 * every time the element comes back into view.
 *
 * Children pass through as a slot, so everything inside stays server-rendered —
 * this is the only client boundary the feature adds to a page.
 *
 * Must render inside <MotionProvider>, which supplies the LazyMotion feature
 * bundle. It wraps the page slot only, so a Reveal in SiteHeader or SiteFooter
 * would throw under `strict`.
 *
 * Reduced motion and the no-JS fallback are handled by the [data-reveal] rules
 * in globals.css rather than by branching here — a JS branch would render a
 * different style attribute on the client than the server and break hydration.
 */

type RevealTag = "div" | "li";

// A static map, not m[as]: a stable component reference cannot remount the
// subtree, which would restart next/image loads.
const TAGS = { div: m.div, li: m.li } as const;

const OFFSETS = {
  up: { y: REVEAL.distance },
  down: { y: -REVEAL.distance },
  left: { x: -REVEAL.distanceX },
  right: { x: REVEAL.distanceX },
  none: {},
} as const;

interface RevealProps {
  children: React.ReactNode;
  /** Render as "li" inside a <ul>/<ol> so list semantics survive. */
  as?: RevealTag;
  /** The side the element travels in from. */
  from?: keyof typeof OFFSETS;
  /** "bounce" springs past the resting point — for cards and tiles, not type. */
  effect?: "glide" | "bounce";
  /** Position in a staggered group. Caps at REVEAL.maxStaggerIndex. */
  index?: number;
  /** Extra seconds on top of the index stagger. */
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  as = "div",
  from = "up",
  effect = "glide",
  index = 0,
  delay = 0,
  className,
}: RevealProps) {
  // Both tags accept the props used below; the cast avoids a union-of-components
  // JSX error without widening the public API.
  const Tag = TAGS[as] as typeof m.div;
  const transition = effect === "bounce" ? BOUNCE : GLIDE;

  return (
    <Tag
      data-reveal=""
      className={className}
      initial={{ opacity: 0, ...OFFSETS[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ amount: REVEAL.amount, margin: REVEAL.margin }}
      transition={{ ...transition, delay: staggerDelay(index, delay) }}
    >
      {children}
    </Tag>
  );
}
