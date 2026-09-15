export const CONTACT_FIELDS = ["name", "email", "subject", "message"] as const;

export type ContactField = (typeof CONTACT_FIELDS)[number];

export type ContactValues = Record<ContactField, string>;

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** Echoed back so the form repopulates after a failed submit without JS. */
  values?: Partial<ContactValues>;
}

export const INITIAL_CONTACT_STATE: ContactFormState = { status: "idle" };

// Deliberately hand-rolled: four fields don't justify react-hook-form + zod.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LIMITS: Record<ContactField, { min: number; max: number }> = {
  name: { min: 2, max: 80 },
  email: { min: 5, max: 254 },
  subject: { min: 2, max: 120 },
  message: { min: 10, max: 2000 },
};

const LABELS: Record<ContactField, string> = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

export function readContactValues(formData: FormData): ContactValues {
  return CONTACT_FIELDS.reduce((acc, field) => {
    acc[field] = String(formData.get(field) ?? "").trim();
    return acc;
  }, {} as ContactValues);
}

export function validateContact(values: ContactValues) {
  const errors: Partial<Record<ContactField, string>> = {};

  for (const field of CONTACT_FIELDS) {
    const value = values[field];
    const { min, max } = LIMITS[field];

    if (!value) {
      errors[field] = `${LABELS[field]} is required.`;
    } else if (value.length < min) {
      errors[field] = `${LABELS[field]} must be at least ${min} characters.`;
    } else if (value.length > max) {
      errors[field] = `${LABELS[field]} must be ${max} characters or fewer.`;
    }
  }

  if (!errors.email && !EMAIL.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}
