"use client";

import { useActionState, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { submitContact } from "@/app/contact/actions";
import {
  INITIAL_CONTACT_STATE,
  type ContactField as FieldName,
  type ContactValues,
} from "@/lib/contact-schema";
import { ContactField } from "./ContactField";

const EMPTY: ContactValues = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    INITIAL_CONTACT_STATE,
  );

  // Seeded from the action result so a no-JS submit still renders the values
  // back into the fields.
  const [values, setValues] = useState<ContactValues>({
    ...EMPTY,
    ...state.values,
  });

  // Clear the fields once a submit succeeds. Adjusting state during render is
  // React's documented way to react to a changed value without an effect.
  const [lastStatus, setLastStatus] = useState(state.status);
  if (state.status !== lastStatus) {
    setLastStatus(state.status);
    if (state.status === "success") setValues(EMPTY);
  }

  const update = (name: FieldName, value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  return (
    <div className="rounded-lg border border-hairline bg-surface-raised p-6 sm:p-8">
      <h2 className="font-heading text-xl font-semibold">Send us a message</h2>
      <p className="mt-2 text-sm text-on-surface-mute">
        Tell us about your project and we&apos;ll get back to you.
      </p>

      <form action={formAction} className="mt-8 flex flex-col gap-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <ContactField
            name="name"
            label="Name"
            autoComplete="name"
            value={values.name}
            onChange={update}
            error={state.errors?.name}
          />
          <ContactField
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update}
            error={state.errors?.email}
          />
        </div>

        <ContactField
          name="subject"
          label="Subject"
          value={values.subject}
          onChange={update}
          error={state.errors?.subject}
        />

        <ContactField
          name="message"
          label="Message"
          multiline
          value={values.message}
          onChange={update}
          error={state.errors?.message}
        />

        {/* Both labels occupy the same grid cell, so the button is as wide as
            the longer of the two and never resizes mid-submit. */}
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          aria-busy={pending}
          className="sm:self-start"
        >
          <span className="grid place-items-center">
            <span
              aria-hidden={pending}
              className={cn(
                "col-start-1 row-start-1 inline-flex items-center gap-2.5 transition-opacity duration-150 ease-out",
                pending ? "opacity-0" : "opacity-100",
              )}
            >
              Send Message
              <Send aria-hidden="true" />
            </span>

            <span
              aria-hidden={!pending}
              className={cn(
                "col-start-1 row-start-1 inline-flex items-center gap-2.5 transition-opacity duration-150 ease-out",
                pending ? "opacity-100" : "opacity-0",
              )}
            >
              {/* The spinner is frozen under reduced motion, so the label is
                  what actually communicates the pending state. */}
              <Loader2 className="animate-spin" aria-hidden="true" />
              Sending…
            </span>
          </span>
        </Button>

        {/* Region exists before submit so the message is announced on arrival.
            Only the <p> animates — the live region itself is never wrapped or
            remounted, which would risk a stale or duplicated announcement. */}
        <div aria-live="polite" role="status">
          {state.status !== "idle" && state.message && (
            <p
              className={cn(
                "enter-rise rounded-md border px-4 py-3 text-sm [--entrance-duration:240ms] [--entrance-rise:0.5rem]",
                state.status === "success"
                  ? "border-hairline bg-background/40 text-on-surface"
                  : "border-destructive/40 text-destructive",
              )}
            >
              {state.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
