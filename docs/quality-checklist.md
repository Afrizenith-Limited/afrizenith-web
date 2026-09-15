# AfrizZenith Quality Checklist

Use this checklist before considering a website task complete.

## Visual

-   [ ] Matches the intended design direction.
-   [ ] Visual hierarchy is clear.
-   [ ] Typography is consistent.
-   [ ] Spacing follows the design system.
-   [ ] Colors use the approved palette.
-   [ ] Buttons are consistent.
-   [ ] Cards are consistent.
-   [ ] Images are correctly cropped.
-   [ ] No unnecessary visual effects were added.
-   [ ] No generic AI-looking decorations were introduced.

## Responsive

-   [ ] Tested around 375px.
-   [ ] Tested around 640px.
-   [ ] Tested around 768px.
-   [ ] Tested around 1024px.
-   [ ] Tested around 1280px.
-   [ ] Tested around 1440px.
-   [ ] No horizontal scrolling.
-   [ ] Mobile navigation works.
-   [ ] Typography remains readable.
-   [ ] Buttons remain usable.
-   [ ] Images remain visually balanced.
-   [ ] Tablet layout does not feel like broken desktop.

## Components

-   [ ] Existing components were reused where appropriate.
-   [ ] No unnecessary duplicate components.
-   [ ] No unnecessary desktop/mobile duplicates.
-   [ ] Components have clear responsibilities.
-   [ ] No component exceeds 250 lines.
-   [ ] Repeated UI uses shared components or data-driven rendering.
-   [ ] No over-engineering.

## Code

-   [ ] TypeScript errors resolved.
-   [ ] No avoidable `any`.
-   [ ] No unused imports.
-   [ ] No dead code.
-   [ ] No unnecessary dependencies.
-   [ ] No unnecessary `"use client"`.
-   [ ] No duplicated business logic.
-   [ ] Naming is clear.
-   [ ] Comments are short and useful.

## Accessibility

-   [ ] Semantic HTML used.
-   [ ] Heading hierarchy is logical.
-   [ ] Images have appropriate alt text.
-   [ ] Icon-only controls have accessible labels.
-   [ ] Keyboard navigation works.
-   [ ] Focus states are visible.
-   [ ] Color contrast is sufficient.
-   [ ] Forms have labels.
-   [ ] Validation errors are understandable.
-   [ ] Reduced-motion preference is respected.

## Interaction

-   [ ] Hover states work.
-   [ ] Focus states work.
-   [ ] Active states work.
-   [ ] Disabled states work.
-   [ ] Loading states work where needed.
-   [ ] Success states work where needed.
-   [ ] Error states work where needed.
-   [ ] Empty states work where needed.

## Performance

-   [ ] Images use `next/image` where appropriate.
-   [ ] No unnecessary client-side JavaScript.
-   [ ] No unnecessary third-party scripts.
-   [ ] No large dependency added for a small feature.
-   [ ] No obvious performance regressions.

## SEO

-   [ ] Page title is unique.
-   [ ] Meta description is appropriate.
-   [ ] Heading hierarchy is correct.
-   [ ] Images have useful alt text.
-   [ ] Canonical URL is correct where applicable.
-   [ ] Social metadata is configured where applicable.
-   [ ] Internal links are meaningful.

## Content

-   [ ] Approved copy was preserved.
-   [ ] No invented claims.
-   [ ] No fake testimonials.
-   [ ] No fake statistics.
-   [ ] No generic AI marketing filler.
-   [ ] CTAs are clear.
-   [ ] Content is concise and useful.

## Final Verification

-   [ ] Lint passes.
-   [ ] Type check passes.
-   [ ] Build passes.
-   [ ] Browser console has no avoidable errors.
-   [ ] Browser console has no avoidable warnings.
-   [ ] Existing functionality still works.
-   [ ] Rendered UI was visually inspected.
