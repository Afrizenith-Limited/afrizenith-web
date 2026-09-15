# Component Guidelines

## Philosophy

Components should be reusable without becoming abstract for the sake of abstraction.

Prefer meaningful components over tiny fragments.

## Component Categories

### UI

Generic primitives:

``` text
components/ui/
```

Examples:

-   Button
-   Dialog
-   Input
-   Badge
-   Card

### Layout

Site-wide structure:

``` text
components/layout/
```

Examples:

-   Header
-   Footer
-   Container
-   Section

### Navigation

``` text
components/navigation/
```

Examples:

-   Desktop navigation
-   Mobile navigation
-   Breadcrumbs

### Sections

Page-level reusable sections:

``` text
components/sections/
```

Examples:

-   Hero
-   Services
-   Values
-   Process
-   CTA

### Shared

Cross-page components that are more specific than generic UI:

``` text
components/shared/
```

## Component Rules

A component should have a clear responsibility.

Good:

``` tsx
<ProcessSection />
```

Less desirable:

``` tsx
<PageEverything />
```

Avoid:

``` text
HeroTitle.tsx
HeroDescription.tsx
HeroButton.tsx
HeroImage.tsx
HeroBackground.tsx
```

when those pieces have no meaningful reuse or independent behavior.

## Props

Prefer explicit, understandable props.

Good:

``` tsx
<SectionHeading
  eyebrow="Our Approach"
  title="How We Work"
  description="..."
/>
```

Avoid large collections of boolean props unless the component genuinely
represents a configurable reusable pattern.

## Data-Driven UI

Use arrays for repeated structures.

Example:

``` tsx
const values = [
  {
    title: "Excellence",
    description: "...",
    icon: Trophy,
  },
];
```

Then map the data into a reusable card.

Do not duplicate five nearly identical card blocks.

## Variants

Use variants when a component genuinely has multiple visual states.

Avoid creating a new component for every small visual difference.

## Styling

Prefer:

-   Tailwind classes
-   Design tokens
-   Existing component variants
-   Shared utilities

Avoid:

-   Inline styles for ordinary styling
-   Random arbitrary values
-   Duplicate style definitions

## State

Keep state as close as possible to where it is used.

Do not introduce global state for local UI behavior.

## Client Components

Only use `"use client"` when required.

Typical reasons include:

-   Event handlers
-   Browser APIs
-   React state
-   Effects
-   Client-only libraries

Do not mark an entire page as a Client Component simply because one
child needs interactivity.

## File Size

Maximum recommended component size: 250 lines.

If a component becomes large:

1.  Identify meaningful responsibilities.
2.  Extract reusable pieces.
3.  Move data out where appropriate.
4.  Keep the parent focused on composition.

Do not split code into meaningless fragments simply to reduce line
count.

## Naming

Use descriptive names.

Examples:

-   `SiteHeader`
-   `MobileNavigation`
-   `HeroSection`
-   `CoreValues`
-   `ProcessSection`
-   `ContactForm`

Avoid:

-   `Thing`
-   `Box`
-   `Section1`
-   `Component2`
-   `DataCardNew`

## Comments

Comments should be rare.

Prefer code that explains itself.

When a comment is necessary, keep it short:

``` tsx
// Prevent layout shift while images load.
```

Avoid long explanatory comment blocks.
