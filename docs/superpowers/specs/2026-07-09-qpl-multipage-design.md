# QPL–SBPL: single-page → multi-page (Core mirror)

Date: 2026-07-09

## Goal
Convert the single-page demo into a multi-page site mirroring qpl.com.ph's
structure, reusing the existing visual system ("instrumentation" aesthetic,
amber/blue/green/grey palette, 60 Hz waveform, `[NN]` labels) and the content
already scraped into `qpl-assets/CONTENT.md`.

## Routes
- `/`               Home — hero + one teaser per area, each linking out (funnel)
- `/about`          Company overview, QPL/QMSI/PEPOI, leadership, the three "firsts"
- `/plant`          The Asset — spec sheet + plant imagery
- `/sustainability` CSR programs (education, health, livelihood, environment,
                    host community) + impact stats
- `/awards`         Full awards list, 1997–2025
- `/news`           Excerpt cards linking to qpl.com.ph
- `/contact`        Contact + offices

## Architecture
- **Shared layout**: `Nav` + `SiteFooter` wrap every page via the root layout.
- Route `page.tsx` files are **server components** exporting per-page `metadata`
  (titles); animated/interactive parts stay client components (`Reveal`,
  `Counter`, `Waveform`, `Nav`).
- Components:
  - `Nav` — Next `<Link>` page links + active state (`usePathname`) + **mobile
    slide-over menu**; transparent only over the Home hero, solid elsewhere.
  - `SiteFooter` — extracted from the current page.
  - `PageHeader` — reusable sub-page header band (eyebrow `[NN]` + title +
    optional image + waveform accent) so sub-pages look intentional.
  - `SectionLabel` — extracted from `page.tsx` for reuse.
- `content.ts` — add `company`, `orgs` (QPL/QMSI/PEPOI), `csrPrograms` (5),
  `news[]`; expand `awards` to the full list; change `nav` to page links.

## Content sources
All from `CONTENT.md`. News item URLs/excerpts: a light fetch of the live news
listing for real links. Footer disclaimer ("concept · not affiliated") retained.

## Non-goals (YAGNI)
Gallery, QMSI/PEPOI as separate routes, Data Privacy, Tinig ng Kaunlaran,
full scraped news article bodies.
