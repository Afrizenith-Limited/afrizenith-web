# AfrizZenith Website --- Agent Instructions

## 1. Project Overview

AfrizZenith is a professional digital solutions company website focused on helping African businesses build, grow and scale through digital transformation.

The website should feel:

-   Professional
-   Modern
-   Human
-   Trustworthy
-   Premium
-   Clear
-   Confident
-   African without relying on stereotypes

The provided design reference is the primary visual direction. Preserve its visual intent while adapting it properly for responsive web.

## 2. Technology

Use the project's existing stack. The expected stack is:

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   lucide-react and/or react-icons

Do not introduce another framework or styling system unless explicitly requested.

Prefer existing project dependencies and utilities before installing new packages.

## 3. Core Principles

1.  Design before abstraction.
2.  Reuse before duplication.
3.  Simplicity before cleverness.
4.  Accessibility before visual tricks.
5.  Performance before unnecessary JavaScript.
6.  Real content before generic marketing copy.
7.  Consistency before one-off styling.
8.  Composition before large components.
9.  Intentional motion before decorative animation.
10. Visual quality must be verified at multiple breakpoints.

## 4. Before Making Changes

Before modifying the codebase:

1.  Inspect the existing project structure.
2.  Identify reusable components.
3.  Check existing design tokens.
4.  Check existing dependencies.
5.  Check routing conventions.
6.  Check naming conventions.
7.  Check existing utilities and hooks.
8.  Reuse existing functionality where appropriate.

Do not create a new component when an existing component can reasonably be reused.

Do not install a dependency before checking whether the project already provides the required functionality.

Do not modify unrelated files.

## 5. Component Architecture

Components must have one clear responsibility.

Prefer composition over large conditional components.

Pages should primarily compose sections rather than contain large UI implementations.

Extract a component when:

-   It is reused.
-   It has meaningful independent behavior.
-   It represents a meaningful UI concept.
-   It significantly improves readability.

Do not create a component merely because a JSX element exists.

Avoid over-componentization such as splitting simple markup into many tiny files.

### File size

-   No component should exceed 250 lines.
-   Files approaching 250 lines should be reviewed for decomposition.
-   Prefer several focused components over one large component.
-   Do not split components solely to satisfy the line limit if the resulting architecture becomes harder to understand.

## 6. Avoid Duplicate UI

Do not create separate desktop and mobile implementations of the same component unless their structure or interaction is genuinely different.

Prefer responsive CSS and shared data.

Avoid duplicated:

-   Navigation
-   Cards
-   Buttons
-   Forms
-   Content
-   Sections

## 7. Responsive Design

Build mobile-first.

Target:

-   Mobile: under 640px
-   Tablet: 640px--1023px
-   Desktop: 1024px and above

The design must work naturally at intermediate widths as well.

Responsive behavior must be intentional, not simply stacked desktop content.

Requirements:

-   Navigation must have an intentional mobile experience.
-   Hero layouts must remain balanced on small screens.
-   Images must maintain appropriate aspect ratios.
-   Typography must scale appropriately.
-   Buttons must remain comfortable for touch.
-   No horizontal overflow.
-   Cards must collapse according to content.
-   Avoid excessive vertical whitespace on mobile.
-   Do not simply shrink desktop dimensions proportionally.

## 8. Design Reference

The supplied design is the source of truth for:

-   Visual hierarchy
-   Composition
-   Spacing
-   Typography
-   Color direction
-   Imagery
-   Section relationships
-   CTA hierarchy
-   Overall visual tone

Do not reproduce the screenshot literally when doing so would create poor web behavior.

Preserve the design intent while adapting it to:

-   Accessibility
-   Responsive behavior
-   Semantic HTML
-   Performance
-   Real browser constraints

## 9. Anti-AI Design Rules

The website must not look like a generic AI-generated landing page.

Do not:

-   Add unnecessary gradients.
-   Add glassmorphism without a design reason.
-   Add glowing effects.
-   Add decorative blobs.
-   Add random geometric decorations.
-   Add excessive rounded cards.
-   Add excessive shadows.
-   Add excessive borders.
-   Add unnecessary badges.
-   Add fake statistics.
-   Add fake testimonials.
-   Add fake awards or client logos.
-   Add unnecessary sections.
-   Add excessive animations.
-   Use emojis as UI elements.
-   Make every section visually identical.
-   Use repetitive card grids when the content does not justify them.
-   Add visual effects simply because they are trendy.

Prefer:

-   Strong typography
-   Intentional whitespace
-   Consistent alignment
-   Restrained color usage
-   Real photography
-   Clear hierarchy
-   Subtle interaction
-   Strong composition
-   Meaningful content

## 10. Content and Copy

Do not generate marketing copy unless explicitly requested.

Preserve approved copy exactly unless asked to change it.

Copy should sound like a real company communicating with real customers.

Avoid:

-   Buzzword-heavy language
-   Generic AI marketing phrases
-   Exaggerated claims
-   Empty superlatives
-   Repetitive language

Avoid overusing phrases such as:

-   Transform your business
-   Unlock your potential
-   Cutting-edge
-   Revolutionary
-   Next-generation
-   Seamless
-   Empowering
-   Innovative solutions

Never invent:

-   Statistics
-   Testimonials
-   Awards
-   Clients
-   Partnerships
-   Certifications
-   Business claims

## 11. Next.js

Follow modern Next.js conventions.

-   Prefer Server Components by default.
-   Use Client Components only when interactivity requires them.
-   Do not add `"use client"` unnecessarily.
-   Use the App Router conventions already established by the project.
-   Use `next/image` for images.
-   Use `next/font` when appropriate.
-   Use server-side functionality where it provides a real benefit.
-   Avoid unnecessary client-side state.
-   Avoid unnecessary data fetching in Client Components.

## 12. Tailwind CSS

Use Tailwind consistently.

-   Prefer existing design tokens.
-   Avoid arbitrary values when an existing token is suitable.
-   Do not repeatedly introduce slightly different spacing values.
-   Keep responsive classes readable.
-   Use semantic class groupings.
-   Extract repeated patterns into components rather than creating
    enormous class strings.
-   Use CSS variables/design tokens for global colors and theme values.

Do not create a second styling system.

## 13. shadcn/ui

Use shadcn/ui where an appropriate primitive exists.

-   Reuse existing shadcn components.
-   Customize through variants and design tokens.
-   Do not recreate existing primitives unnecessarily.
-   Do not install every available shadcn component.
-   Keep customized components consistent with the project's visual language.

## 14. Icons

Use:

-   `lucide-react`
-   `react-icons`

Do not:

-   Use emojis as interface icons.
-   Draw custom SVG icons unless required.
-   Mix unrelated icon styles without a design reason.
-   Use inconsistent icon families within the same component.

Suggested sizes:

-   Compact UI: 16px
-   Standard controls: 18--20px
-   Prominent UI: 24px

## 15. TypeScript

Use strict TypeScript.

-   Avoid `any`.
-   Avoid unnecessary type assertions.
-   Use explicit types for shared data.
-   Do not duplicate type definitions.
-   Keep feature-specific types close to their feature.
-   Use shared types when multiple features genuinely depend on them.

## 16. Accessibility

Use semantic HTML.

Requirements:

-   Logical heading hierarchy
-   Accessible navigation
-   Meaningful alt text
-   Empty alt text for decorative images
-   Accessible labels for icon-only controls
-   Keyboard accessibility
-   Visible focus states
-   Sufficient color contrast
-   Form labels
-   Clear validation messages
-   Accessible loading and error states
-   Respect `prefers-reduced-motion`

Never rely on color alone to communicate meaning.

## 17. Images

Use `next/image`.

Requirements:

-   Correct dimensions
-   Appropriate responsive sizes
-   Correct aspect ratios
-   Intentional cropping
-   No distortion
-   Meaningful alt text

Do not add random stock images simply to fill empty space.

Images should support the actual content and brand story.

## 18. Motion

Motion should be subtle and purposeful.

Allowed examples:

-   Small entrance transitions
-   Button hover transitions
-   Navigation hover transitions
-   Subtle card interactions
-   Restrained section reveals

Avoid:

-   Continuous floating animations
-   Excessive parallax
-   Dramatic scaling
-   Constant movement
-   Animating every section

Respect `prefers-reduced-motion`.

## 19. Performance

-   Prefer Server Components.
-   Minimize client-side JavaScript.
-   Optimize images.
-   Avoid unnecessary dependencies.
-   Import icons individually.
-   Avoid large libraries for small features.
-   Prefer CSS for simple visual effects.
-   Lazy-load content when appropriate.
-   Minimize third-party scripts.
-   Avoid unnecessary state and effects.

Do not install a dependency when the functionality can reasonably be implemented with existing dependencies or native browser/Next.js functionality.

## 20. SEO

Every public page should have:

-   Unique title
-   Unique meta description
-   Correct canonical URL
-   Open Graph metadata
-   Appropriate social metadata
-   Correct heading hierarchy
-   Descriptive image alt text
-   Good internal linking

The site should also support:

-   Sitemap
-   Robots configuration
-   Appropriate structured data
-   Correct favicon and metadata

Do not keyword-stuff content.

Do not duplicate metadata unnecessarily.

## 21. Forms and Interaction States

Interactive components should consider:

-   Default
-   Hover
-   Focus
-   Active
-   Disabled
-   Loading
-   Success
-   Error
-   Empty

Forms should provide:

-   Clear labels
-   Validation
-   Useful error messages
-   Loading feedback
-   Success feedback
-   Disabled states where appropriate

## 22. Error Handling

-   Never silently swallow errors.
-   User-facing errors must be understandable.
-   Do not expose stack traces or internal details.
-   Handle loading and failure states explicitly.
-   API failures should have graceful UI fallbacks.

## 23. Security

-   Never expose secrets in client-side code.
-   Never commit secrets.
-   Use environment variables for secrets.
-   Validate external/user input.
-   Do not trust client-provided values.
-   Avoid unsafe HTML rendering.
-   Avoid `dangerouslySetInnerHTML` unless absolutely necessary.

## 24. File Organization

Prefer a structure similar to:

``` text
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   └── shared/
├── config/
├── hooks/
├── lib/
├── types/
└── styles/
```

Use the project's existing structure when one already exists.

## 25. Dependencies

Before adding a dependency:

1.  Check package.json.
2.  Check whether an existing dependency solves the problem.
3.  Check whether the browser or Next.js already provides the
    functionality.
4.  Only add a package when there is a clear benefit.

Avoid dependency bloat.

## 26. Visual Verification

A UI task is not complete because the code compiles.

Verify at:

-   375px
-   640px
-   768px
-   1024px
-   1280px
-   1440px

Check:

-   Alignment
-   Spacing
-   Typography
-   Image cropping
-   Navigation
-   Button sizing
-   Card dimensions
-   Section rhythm
-   Horizontal overflow
-   Mobile behavior
-   Hover states
-   Focus states

Compare the rendered implementation against the provided design
reference.

## 27. Code Quality

Before finishing:

-   Remove unused imports.
-   Remove unused variables.
-   Remove dead code.
-   Avoid duplicated logic.
-   Avoid unnecessary comments.
-   Keep comments short and useful.
-   Prefer one-line comments.
-   Do not comment obvious code.
-   Keep naming descriptive.
-   Keep functions focused.
-   Keep components focused.

## 28. Git

-   Make focused changes.
-   Do not modify unrelated files.
-   Do not rewrite history unless explicitly requested.
-   Do not remove working functionality without instruction.
-   Do not commit generated files unless required.
-   Keep changes logically scoped.

## 29. Definition of Done

A task is complete only when:

-   The implementation matches the intended design.
-   The UI is responsive.
-   No horizontal overflow exists.
-   Components are appropriately reusable.
-   No component exceeds 250 lines.
-   TypeScript has no avoidable errors.
-   No unnecessary dependencies were introduced.
-   Accessibility requirements are satisfied.
-   Loading/error/empty states are handled where applicable.
-   SEO requirements are satisfied for public pages.
-   No console errors or avoidable warnings were introduced.
-   Existing functionality has not been broken.
-   Formatting and linting pass.
-   The rendered UI has been visually checked.

## 30. Agent Behavior

When requirements are ambiguous:

1.  Follow existing project conventions.
2.  Prefer the simplest professional solution.
3.  Do not invent product requirements.
4.  Do not add features that were not requested.
5.  Make reasonable assumptions when they do not materially affect the
    result.
6.  State important assumptions briefly.
7.  Preserve existing functionality unless instructed otherwise.

The goal is not to write the most code.

The goal is to produce a maintainable, accessible, performant and
visually polished website that feels intentionally designed by a
professional team.