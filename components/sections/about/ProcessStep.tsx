import { ChevronRight } from "lucide-react";
import type { ProcessStep as ProcessStepData } from "@/types/content";

export function ProcessStep({
  step,
  title,
  description,
  icon: Icon,
}: ProcessStepData) {
  return (
    <li className="group relative lg:pr-8">
      <span className="inline-flex size-12 items-center justify-center rounded-full bg-icon-well">
        <Icon aria-hidden="true" className="size-5 text-orange" />
      </span>

      <h3 className="mt-5 font-heading text-base font-semibold">
        {step}. {title}
      </h3>
      <p className="mt-2 text-sm text-on-surface-mute">{description}</p>

      {/* Decorative: only true while the steps sit on one row. */}
      <span
        aria-hidden="true"
        className="absolute top-6 right-0 hidden items-center lg:flex lg:group-last:hidden"
      >
        <ChevronRight className="size-4 text-orange" />
      </span>
    </li>
  );
}
