<div align="center">

# dragosbaci.com

**A brutalist-leaning portfolio for a software engineer — classical fresco, condensed display type, and a WebGL statue.**

[**View live →**](https://www.dragosbaci.com)

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![styled-components](https://img.shields.io/badge/styled--components-6-DB7093?logo=styledcomponents&logoColor=white)](https://styled-components.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/react--three--fiber-8-000000?logo=threedotjs&logoColor=white)](https://docs.pmnd.rs/react-three-fiber)

</div>

---

## What this is

A single-page portfolio, statically exported to plain HTML. Six sections — hero, about, an
experience timeline, five selected cases, an AI-practice section, and contact — stitched
together with scroll-linked motion and a deliberately loud type system.

Every case also exists as its **own static route** (`/1/` … `/5/`), so a shared link to a
project arrives with that project's content already in the HTML.

## Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 14** (App Router, `output: 'export'`) | Static HTML at build time — real content for crawlers, no server to run |
| Language | **TypeScript** | |
| Styling | **styled-components 6** + SSR registry | Colocated styles; the registry keeps CSS in the exported document |
| Motion | **Framer Motion 10** | Scroll-linked reveals, shared orchestration, `reducedMotion` support |
| 3D | **react-three-fiber + drei** | The statue in the About section |
| Hosting | **GitHub Pages** via `gh-pages` | Static export needs nothing more |

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static export to `out/` — real `.html` per route |
| `npm run lint` | ESLint via `eslint-config-next` |
| `npm run deploy` | Builds, then publishes `out/` to GitHub Pages |

## Structure

```
app/                      # App Router: routes, metadata, generated robots/sitemap
├─ layout.tsx             # <head>, metadata API, Person JSON-LD, font preloads
├─ page.tsx               # /
├─ [id]/page.tsx          # /1 … /5 — per-case metadata + CreativeWork JSON-LD
├─ registry.tsx           # styled-components SSR
├─ sitemap.ts             # derived from the case data
└─ globals.css            # reset, @font-face, focus + reduced-motion rules

src/
├─ Templates/             # Page sections (Home, Experience, Work, AiPractice, …)
├─ Components/            # Reusable pieces (case grid, buttons, 3D canvas)
├─ Hooks/                 # useIsMobile, useOrientation, useInViewport
└─ Utils/                 # Theme, motion variants, layout tokens
```

Content lives in plain data modules — `src/Components/List/data.ts` for cases,
`experienceConstants.ts` for the timeline. Editing the site is editing an array.

## Engineering notes

The parts that were more interesting than they look.

<details>
<summary><b>Static export for SEO, not for speed</b></summary>

The site began as a client-rendered CRA app: the served HTML was an empty
`<div id="root">`. Google executes JavaScript, but most other crawlers don't, and the
content only existed after ~500 KB of JS had parsed.

Migrating to Next's `output: 'export'` writes a real HTML file per route at build time.
The case routes take their `id` as a **prop from the server component** rather than
reading the client router, which guarantees the open case is baked into the exported
markup instead of depending on the router having resolved during prerender.

</details>

<details>
<summary><b>A scroll reveal that could never fire</b></summary>

Case titles and images start translated a full line/height below an `overflow: hidden`
clip, then wipe into view. The obvious implementation — `whileInView` on the element
being revealed — deadlocks: IntersectionObserver intersects against **clipping
ancestors**, so a fully-clipped element reports ratio `0` forever and the animation that
would reveal it never triggers.

The observer sits on the *cell* instead, which is never clipped, and drives the clipped
child. See `useInViewport` and `Card`/`CaseText`.

</details>

<details>
<summary><b>Two animation systems fighting over one property</b></summary>

The case grid once used Framer's `layoutId` for a shared-element morph. It was visibly
janky, and the cause wasn't Framer: the same element also carried
`transition: transform 2s` from a CSS hover rule. Every per-frame transform Framer wrote
was re-interpolated by the browser over two seconds.

Lesson encoded in the current styles: **one owner per animated property.** Filters and
hover transforms now share a single element so the browser rasterises once and only moves
the layer.

</details>

<details>
<summary><b>Prefetching is not free</b></summary>

`rel="prefetch"` is idle-priority, which is easy to mistake for costless. On a throttled
mobile connection it still competes for the same few hundred kbit/s the LCP image needs —
and the 3D model alone is 2.1 MB.

All prefetches are now gated behind `media="(min-width: 769px)"`. Desktop keeps warm
caches; phones don't pay for assets they may never scroll to.

</details>

<details>
<summary><b>Condensed type has a floor</b></summary>

The display face ships in multiple width cuts. The one in use for headlines is OS/2
**width class 2 (Extra-condensed)** — beautiful at hero scale, cramped and hard to read
below it. Letter-spacing can't fix it, because the problem is the letterforms, not the
gaps between them.

Smaller headings use `Tusker-Normal` — the same family at **width class 5 (Normal)**.

</details>

## Accessibility

- One `<h1>` per page; section labels are `<h2>`, entries `<h3>`
- Every interactive element is a real `<a>` or `<button>` — keyboard reachable, with a
  visible `:focus-visible` ring
- `prefers-reduced-motion` honoured in CSS *and* via Framer's `MotionConfig`
- Decorative imagery is `alt=""` and `aria-hidden`; content images have descriptive alt text
- Mobile menu closes on <kbd>Esc</kbd> and traps scroll while open

Lighthouse: **100 Accessibility · 100 SEO**. Performance is an ongoing fight with a
fresco background and a 3D model — see the prefetch note above.

## Credits

The fonts (Tusker Grotesk, Migra, Neue Montreal) are **commercially licensed and not
covered by this repository's terms** — see `public/fonts/Migra-license-agreement`. If you
fork this, swap them for faces you're licensed to use.

Code is free to learn from. The content, imagery and CV are not for reuse.
