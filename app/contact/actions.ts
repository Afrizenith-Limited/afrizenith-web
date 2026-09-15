"use server";

import { CONTACT_EMAIL } from "@/config/site";
import { sendContactEmail } from "@/lib/contact";
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

  const { error } = await sendContactEmail(values);

  if (error) {
    // The reason stays in the server log; the visitor gets a way forward.
    console.error(`[contact] send failed: ${error}`);
    return {
      status: "error",
      message: `Sorry — we couldn't send your message. Please try again, or email us directly at ${CONTACT_EMAIL}.`,
      values,
    };
  }

  return {
    status: "success",
    message: "Thanks — your message has been sent. We'll be in touch shortly.",
  };
}
