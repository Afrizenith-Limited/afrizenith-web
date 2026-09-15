import { BarChart3 } from "lucide-react";

export function MissionCard() {
  return (
    <div className="rounded-lg border border-hairline bg-surface-raised p-6 lg:w-72">
      <span className="inline-flex size-11 items-center justify-center rounded-full border border-orange/40">
        <BarChart3 aria-hidden="true" className="size-5 text-orange" />
      </span>
      <h2 className="mt-4 font-heading text-base font-semibold">Our Mission</h2>
      <p className="mt-2 text-sm text-on-surface-mute">
        To empower African businesses with smart digital solutions that create
        real impact.
      </p>
    </div>
  );
}
