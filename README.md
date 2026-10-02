# Chantele Mucuio — Portfolio

Built with Next.js (App Router), React, TypeScript and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| What | Where |
| --- | --- |
| **All copy and project data** (projects, skills, "currently", results, links) | `lib/content.ts` |
| Home page sections | `components/Hero.tsx`, `WhatIDo.tsx` + `Areas.tsx`, `Work.tsx`, `About.tsx`, `Contact.tsx` |
| Project detail pages (one template, three projects) | `components/ProjectPage.tsx`, `app/projects/[slug]/page.tsx` |
| Navigation (desktop + mobile menu) | `components/Nav.tsx` |
| Scroll reveal / scroll drift helpers | `components/Reveal.tsx`, `components/Drift.tsx` |
| Colours, fonts, animations | `app/globals.css`, `app/layout.tsx` |
| Screenshots and CV | `public/projects/*.png`, `public/Chantele-Mucuio-CV.pdf` |

## Adding a project

1. Drop a screenshot in `public/projects/`.
2. Add an entry to the `projects` array in `lib/content.ts` (copy an existing one).

The home page and a `/projects/<slug>` page are generated from that entry.

## Design notes

- Palette: paper `#ECE9E2`, ink `#1D1C1A`, burnt orange `#B3430F`, brick `#9B3A32`, sun `#F0C230`.
- Type: Bricolage Grotesque for everything, Caveat for the handwritten notes.
- Motion is purposeful: one hero load sequence, headline masks and screenshot wipes on scroll,
  a slow scroll drift on section numbers and screenshots, and hover/tap on the "What I do" list.
  Everything is switched off for visitors who prefer reduced motion.
