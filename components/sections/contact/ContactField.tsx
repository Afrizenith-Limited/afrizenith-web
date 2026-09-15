import { cn } from "cn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactField as FieldName } from "@/lib/contact-schema";

interface ContactFieldProps {
  name: FieldName;
  label: string;
  type?: "text" | "email";
  multiline?: boolean;
  required?: boolean;
  autoComplete?: string;
  value: string;
  onChange: (name: FieldName, value: string) => void;
  error?: string;
  className?: string;
}

export function ContactField({
  name,
  label,
  type = "text",
  multiline = false,
  required = true,
  autoComplete,
  value,
  onChange,
  error,
  className,
}: ContactFieldProps) {
  const errorId = `${name}-error`;

  // Controlled: React 19 resets an uncontrolled form once the action settles,
  // which would wipe the fields on a failed submit.
  const shared = {
    id: name,
    name,
    required,
    autoComplete,
    value,
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => onChange(name, e.target.value),
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  } as const;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={name}>{label}</Label>

      {multiline ? (
        <Textarea {...shared} rows={5} className="min-h-32 py-3" />
      ) : (
        <Input {...shared} type={type} className="h-11 px-3" />
      )}

      {error && (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
