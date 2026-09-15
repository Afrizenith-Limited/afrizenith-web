import { cn } from "cn";

const sizeClasses = {
  content: "max-w-content",
  prose: "max-w-2xl",
} as const;

interface ContainerProps extends React.ComponentProps<"div"> {
  size?: keyof typeof sizeClasses;
}

export function Container({
  size = "content",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
