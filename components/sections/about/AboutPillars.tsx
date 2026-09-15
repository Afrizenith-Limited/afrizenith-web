import { IconFeature } from "@/components/shared/IconFeature";
import { PILLARS } from "@/config/pillars";

export function AboutPillars() {
  return (
    <div className="rounded-lg border border-hairline bg-surface-raised p-6 lg:w-80">
      <ul className="space-y-6">
        {PILLARS.map((pillar) => (
          <li key={pillar.title}>
            <IconFeature
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              layout="inline"
              headingLevel={2}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
