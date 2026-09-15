"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

/**
 * Hosts Motion's feature bundle for the page slot. `strict` throws on a
 * `motion.*` import, which stops the full ~34kB component being pulled back in
 * by accident in place of the ~23kB `m` + domAnimation setup.
 *
 * `reducedMotion="user"` stops Motion doing transform work when the OS asks for
 * reduced motion; the [data-reveal] rule in globals.css pins opacity on top.
 *
 * Children are server-rendered and passed through as a slot, so this does not
 * turn the layout, the pages or any section into Client Components.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
