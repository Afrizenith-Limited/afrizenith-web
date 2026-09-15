import { cn } from "cn";

export function Eyebrow({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <p
      id={id}
      className={cn(
        "font-heading text-xs font-semibold tracking-[0.18em] text-brand uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
