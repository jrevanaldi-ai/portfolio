# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server (Turbopack root is pinned to the repo via `next.config.js`).
- `npm run build` — production build; treat this as the verification step before declaring UI work done (there is no test suite).
- `npm run start` — serves the built app.
- `npm run lint` — `next lint`.

For UI changes also run `npm run dev` and manually inspect `/`, `/services`, and `/qna` at desktop and mobile widths (see `AGENTS.md`).

## Architecture

Next.js 16 App Router site (React 19) with three routes — `/` (`app/page.jsx`), `/services` (`app/services/page.jsx`), `/qna` (`app/qna/page.jsx`). The site is the "Astralune" / "Nathan" developer portfolio; copy is mostly Indonesian and `<html lang="id">`.

Layer the chrome correctly when adding or modifying routes:

- `app/layout.jsx` wraps every page in `WelcomeIntro` → `BubbleBackground` → `MotionProvider` → `children`. Route metadata (`title`, OpenGraph, canonical) lives in the route's own `page.jsx` via the `metadata` export — `app/layout.jsx` sets only the global defaults.
- `MotionProvider` is a `LazyMotion` boundary with `strict` mode. Inside it, **only use the `m.*` components** from `framer-motion` — `motion.*` will throw. To animate from server components, use the helpers in `app/MotionBlocks.jsx` (`RevealSection`, `MotionCard`), which are pre-marked `"use client"`.
- `WelcomeIntro` is a one-time-per-session intro gated by `sessionStorage["nathan-welcome-seen"]`; it toggles `body.intro-active` to lock scroll. Don't render the page chrome inside it — children only mount after the intro resolves.
- `AppSidebar` is portaled into `document.body` and is toggled by a custom DOM event `"toggle-sidebar"` dispatched from `SidebarTrigger`. When adding a new route, pass an `active="<key>"` prop and extend `sidebarGroups` in `app/AppSidebar.jsx` so the sidebar item highlights correctly.
- Every page should always honor `useReducedMotion()` — existing components branch to a non-animated render when it's true; preserve that pattern.

Styling is a single global stylesheet at `app/globals.css` (~30k lines of design tokens, layout, and responsive rules). Reuse the CSS custom properties declared on `:root` and existing class names; add new responsive rules next to the related styles rather than creating per-component CSS files.

Static assets in `assets/` are not served by Next directly — public images referenced from the site (e.g. the OG image `https://cloud.yardansh.com/2I0F95.jpg`) are hosted externally. The canonical site URL is `https://astralune.cv` (used in `app/layout.jsx`, `app/sitemap.js`, `app/robots.js`).

## Conventions (from AGENTS.md)

- 2-space indent, double quotes, semicolons; function components with hooks; `PascalCase` components, `camelCase` constants.
- Keep route-specific UI inside the matching `app/.../page.jsx` until it's reused enough to extract.
