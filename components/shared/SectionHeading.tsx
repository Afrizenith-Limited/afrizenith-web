import { cn } from "cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  level?: 1 | 2;
  align?: "start" | "center";
  rule?: boolean;
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  level = 2,
  align = "start",
  rule = false,
  id,
  className,
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered && "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}

      <Heading
        id={id}
        className={cn(
          "font-bold",
          level === 1
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-5xl",
        )}
      >
        {title}
      </Heading>

      {rule && <div className="mt-6 h-0.5 w-14 bg-orange" />}

      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-on-surface-mute",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
