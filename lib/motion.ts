import type { Transition } from "motion/react";

/**
 * Timing for the scroll reveals. Mirrored as CSS custom properties in
 * app/globals.css (--ease-reveal, --entrance-duration) — Motion takes JS
 * numbers rather than CSS variables, so both copies have to move together.
 *
 * Above-the-fold entrances are pure CSS and live in globals.css; only
 * scroll-triggered reveals come through here.
 */

/** Leaves quickly, settles long. Mirrors --ease-reveal. */
const EASE_REVEAL: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const REVEAL = {
  /** seconds */
  duration: 0.85,
  /** px of vertical travel */
  distance: 28,
  /** px of horizontal travel — reads short unless it is given more room */
  distanceX: 48,
  /** seconds between staggered siblings */
  step: 0.13,
  /** Stagger stops compounding here, so no item ever feels like it is lagging. */
  maxStaggerIndex: 4,
  /** Low enough that a tall block still crosses the threshold. */
  amount: 0.15,
  /** Holds the reveal back until a little more than the top edge is showing. */
  margin: "0px 0px -40px 0px",
} as const;

/** Text and images: no overshoot, so type never wobbles. */
export const GLIDE: Transition = {
  duration: REVEAL.duration,
  ease: EASE_REVEAL,
};

/**
 * Cards and tiles: a spring with just enough overshoot to read as a bounce.
 * Expressed as duration + bounce rather than stiffness/damping so it stays
 * legible next to the tween above.
 */
export const BOUNCE: Transition = {
  type: "spring",
  duration: 0.95,
  bounce: 0.3,
};

export function staggerDelay(index: number, extra = 0) {
  return extra + Math.min(index, REVEAL.maxStaggerIndex) * REVEAL.step;
}
