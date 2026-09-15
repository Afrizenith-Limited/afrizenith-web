"use server";

import {
  readContactValues,
  validateContact,
  type ContactFormState,
} from "@/lib/contact-schema";

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = readContactValues(formData);
  const errors = validateContact(values);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors,
      values,
    };
  }

  // TODO: replace with Resend. Runs on the server, so this prints in the
  // terminal running `next dev` — not the browser console. Serialised
  // explicitly because the dev logger collapses plain objects to "{}".
  console.log(`[contact] submission ${JSON.stringify(values, null, 2)}`);

  return {
    status: "success",
    message: "Thanks — your message has been sent. We'll be in touch shortly.",
  };
}
