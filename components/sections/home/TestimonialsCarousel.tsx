"use client";

import { useCallback, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import type { Testimonial } from "@/types/content";

/**
 * A scroll-snap track rather than a transformed one: touch swipe, momentum and
 * keyboard scrolling come from the browser, and `prefers-reduced-motion`
 * already pins `scroll-behavior: auto` globally in globals.css — so the
 * buttons' smooth scroll turns into an instant jump with no branch here.
 */
export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const baseId = useId();

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  }, []);

  // The scroll position is the source of truth, so a swipe and a button press
  // settle on the same index.
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  }, []);

  const atStart = active === 0;
  const atEnd = active === items.length - 1;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="mt-8"
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:[display:none]"
      >
        {items.map((item, index) => (
          <figure
            key={item.attribution}
            id={`${baseId}-slide-${index}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
            aria-hidden={index !== active}
            className="flex w-full shrink-0 snap-center gap-6 px-1"
          >
            <Quote
              aria-hidden="true"
              className="hidden size-12 shrink-0 text-orange sm:block"
            />
            <div>
              <blockquote className="max-w-2xl font-heading text-xl leading-relaxed">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm text-on-surface-mute">
                — {item.attribution}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {/* max-w-2xl matches the blockquote, so the arrows land on the right edge
          of the text column rather than the far edge of the container. */}
      <div className="mt-8 flex max-w-2xl items-center gap-6 sm:ml-18">
        <div className="flex gap-2">
          {items.map((item, index) => (
            <button
              key={item.attribution}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show testimonial ${index + 1} of ${items.length}`}
              aria-current={index === active}
              className={cn(
                // A hit area of 44px with a small visible dot inside it.
                "grid size-11 place-items-center rounded-full outline-none",
                "before:block before:size-2 before:rounded-full before:transition-colors before:duration-200",
                index === active
                  ? "before:bg-orange"
                  : "before:bg-on-surface/30 hover:before:bg-on-surface/55",
              )}
            />
          ))}
        </div>

        <div className="ml-auto flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => goTo(active - 1)}
            disabled={atStart}
            aria-label="Previous testimonial"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => goTo(active + 1)}
            disabled={atEnd}
            aria-label="Next testimonial"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
