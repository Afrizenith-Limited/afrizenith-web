import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectTile } from "@/components/shared/ProjectTile";
import { PROJECTS } from "@/config/projects";

export function WorkSection() {
  if (PROJECTS.length === 0) return null;

  return (
    <Section tone="light" id="our-work" spacing="compact" aria-labelledby="work-title">
      <SectionHeading
        id="work-title"
        eyebrow="Our Work"
        title="Projects That Drive Impact"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((project) => (
          <ProjectTile key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
