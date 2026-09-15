import { Resend } from "resend";
import { CONTACT_EMAIL, CONTACT_FROM_EMAIL, SITE } from "@/config/site";
import type { ContactValues } from "./contact-schema";

const NAVY = "#0b1f44";
const ORANGE = "#ff8a00";
const TINT = "#e6f2ff";
const SLATE = "#475467";
const INK = "#111827";
const HAIRLINE = "#dbe6f5";

// The API key is read lazily so a missing env var surfaces as a handled send
// failure rather than a crash at import time — Resend's constructor throws.
let client: Resend | null = null;

function getClient(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  client ??= new Resend(process.env.RESEND_API_KEY);
  return client;
}

const ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

// Submitted values land inside an HTML document, so they are escaped before
// interpolation. Never interpolate a raw field into the template.
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ESCAPES[char]);
}

function detailRow(label: string, value: string): string {
  return `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid ${HAIRLINE};width:120px;vertical-align:top;">
                  <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE};">${label}</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid ${HAIRLINE};">
                  <span style="font-size:14px;color:${INK};">${value}</span>
                </td>
              </tr>`;
}

function buildEmailHtml(values: ContactValues): string {
  const name = escapeHtml(values.name);
  const email = escapeHtml(values.email);
  const subject = escapeHtml(values.subject);
  const message = escapeHtml(values.message);

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:${TINT};font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${TINT};padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;">

        <tr>
          <td style="background:${NAVY};padding:32px 36px;">
            <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${ORANGE};">
              ${SITE.name}
            </p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#ffffff;">
              ${subject}
            </h1>
            <p style="margin:6px 0 0;font-size:14px;color:rgba(255,255,255,0.72);">
              New website enquiry from ${name}
            </p>
          </td>
        </tr>

        <tr>
          <td style="background:#ffffff;padding:28px 36px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
${[
  detailRow("Name", name),
  detailRow("Email", `<a href="mailto:${email}" style="color:#0a66ff;">${email}</a>`),
  detailRow("Subject", subject),
].join("")}
            </table>
          </td>
        </tr>

        <tr>
          <td style="background:#ffffff;padding:24px 36px 32px;">
            <p style="margin:0 0 10px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${SLATE};">
              Message
            </p>
            <div style="background:${TINT};border-radius:8px;padding:18px 20px;">
              <p style="margin:0;font-size:14px;line-height:1.75;color:${INK};white-space:pre-wrap;">${message}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td style="background:#ffffff;border-top:1px solid ${HAIRLINE};padding:20px 36px;">
            <p style="margin:0;font-size:13px;color:${SLATE};">
              Reply directly to this email to respond to <strong style="color:${INK};">${name}</strong>.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildEmailText(values: ContactValues): string {
  return [
    `New website enquiry from ${values.name}`,
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Subject: ${values.subject}`,
    "",
    "Message:",
    values.message,
  ].join("\n");
}

/**
 * Sends a validated contact submission to the AfriZenith inbox. Returns the
 * failure reason rather than throwing, so the Server Action can decide what
 * the visitor sees.
 */
export async function sendContactEmail(
  values: ContactValues,
): Promise<{ error: string | null }> {
  const resend = getClient();

  if (!resend) {
    return { error: "RESEND_API_KEY is not set." };
  }

  const { error } = await resend.emails.send({
    from: `${SITE.name} Website <${CONTACT_FROM_EMAIL}>`,
    to: CONTACT_EMAIL,
    replyTo: values.email,
    subject: `${values.subject} — enquiry from ${values.name}`,
    html: buildEmailHtml(values),
    text: buildEmailText(values),
  });

  return { error: error?.message ?? null };
}
