# AfriZenith Website

Marketing website for AfriZenith — a digital solutions company helping African
businesses build, grow and scale.

Three public pages (Home, About Us, Contact), built with the Next.js App Router
and rendered as Server Components except where interaction requires otherwise.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript (strict) |
| Styling | Tailwind CSS v4, design tokens in `app/globals.css` |
| Primitives | shadcn/ui on `@base-ui/react` |
| Icons | `lucide-react`, `react-icons` |
| Fonts | `next/font` — Poppins (display), Inter (body) |
| Email | Resend (contact form) |

## Getting started

Requires Node.js 20.9+ (developed on 22).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |

## Environment

`RESEND_API_KEY` is the only environment variable — it is the only secret.
Everything else (site URL, contact addresses) is a non-sensitive constant in
[config/site.ts](config/site.ts).

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | To send mail | Resend API key. Without it, contact submissions fail with a handled error rather than sending. |

Copy [.env.example](.env.example) to `.env.local` and fill it in, or set it in
the hosting provider's dashboard. Env files are gitignored — never commit
secrets.

## Project structure

```text
app/                    Routes, metadata, sitemap, robots, OG image
  contact/actions.ts    Server Action handling the contact form
components/
  ui/                   shadcn primitives (button, input, label, sheet, textarea)
  layout/               Container, Section, SiteHeader, SiteFooter
  navigation/           Desktop nav and mobile sheet navigation
  sections/             Page sections, grouped by route (home, about, contact)
  shared/               Cross-page pieces (CtaButton, SectionHeading, Logo, …)
config/                 Site details, navigation and page content as typed data
lib/                    Contact validation, Resend delivery, utilities
types/                  Shared content types
docs/                   Design system and working guidelines
public/images/          Brand and section imagery
```

Content lives in `config/` as typed data rather than inside components, so copy
can be edited without touching JSX. `types/content.ts` defines its shape.

Sections set tone with `data-tone` (`light`, `soft` or `dark`) and semantic CSS
variables re-point accordingly — so `text-on-surface` stays correct on any
background without conditional classes. See
[docs/design-system.md](docs/design-system.md).

## Contact form

`components/sections/contact/ContactForm.tsx` posts to the `submitContact`
Server Action via `useActionState`, so it works without JavaScript. Validation
is hand-rolled in [lib/contact-schema.ts](lib/contact-schema.ts) and runs on the
server; errors are returned per field with the submitted values echoed back.

Valid submissions are emailed through Resend by
[lib/contact.ts](lib/contact.ts), which renders a branded HTML email (plus a
plain-text alternative) with the visitor's address as `replyTo`. Every submitted
value is HTML-escaped before it reaches the template. Send failures are logged
server-side; the visitor sees a plain apology with the direct email address, and
their input is preserved.

## Before launch

Values marked `UNCONFIRMED` in [config/site.ts](config/site.ts) came from the
design reference, not from the business. Confirm them first:

- Phone number (drives the displayed text, the `tel:` link and the WhatsApp link)
- Email address and office location
- Social profile URLs — currently platform homepages
- `SITE.url` — currently `https://afrizenith.com`; set it to the real domain
- `CONTACT_FROM_EMAIL` — currently Resend's test sender, which only delivers to
  the account owner. Verify a domain in Resend and use an address on it.

## Working on this project

[AGENTS.md](AGENTS.md) holds the engineering and design rules for the codebase.
Supporting detail is in `docs/`:

- [design-system.md](docs/design-system.md) — colour, type, spacing, tone
- [component-guidelines.md](docs/component-guidelines.md) — composition and structure
- [content-guidelines.md](docs/content-guidelines.md) — voice and copy
- [quality-checklist.md](docs/quality-checklist.md) — run before calling a task done

In short: mobile-first, no component over 250 lines, verify the rendered UI at
375 / 640 / 768 / 1024 / 1280 / 1440px, and never invent statistics,
testimonials or client claims.
