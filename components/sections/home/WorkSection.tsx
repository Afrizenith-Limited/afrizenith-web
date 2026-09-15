import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectTile } from "@/components/shared/ProjectTile";
import { Reveal } from "@/components/motion/Reveal";
import { PROJECTS } from "@/config/projects";

export function WorkSection() {
  if (PROJECTS.length === 0) return null;

  return (
    <Section tone="light" id="our-work" spacing="compact" aria-labelledby="work-title">
      <Reveal>
        <SectionHeading
          id="work-title"
          eyebrow="Our Work"
          title="Projects That Drive Impact"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} index={i} effect="bounce">
            <ProjectTile {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
