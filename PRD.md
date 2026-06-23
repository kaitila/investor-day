# PRD — Icebreaker Investor Day 2026 Landing Page

## Goal

Build a static single-page landing page for Icebreaker Investor Day 2026. The page is a faithful content rebuild of the reference design (see `references/`) translated into Icebreaker's own "Glacial Clarity" design system (see `DESIGN.md`). The signup form is replaced with a direct link to the event's lu.ma page.

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Bundler | Vite 6 | Fast dev server, zero-config static output |
| UI | React 19 + TypeScript | Component model, type-safe props |
| Styling | Tailwind CSS v4 | CSS-variable-based `@theme` maps 1:1 to DESIGN.md tokens |
| Fonts | Google Fonts CDN | Hanken Grotesk + JetBrains Mono |
| Deploy target | Static (`dist/`) | `vite build` → any static host |

**No** state management, routing library, or backend. `npm run build` produces a self-contained `dist/` directory.

---

## Project Setup (run once)

Run these commands in order after cloning/initializing the repo.

### 1. Scaffold with Vite

```bash
npm create vite@latest . -- --template react-ts
```

When prompted about non-empty directory: confirm overwrite. This generates:
```
index.html
package.json
tsconfig.json
tsconfig.app.json
tsconfig.node.json
vite.config.ts
src/
  main.tsx
  App.tsx
  App.css        ← delete this
  index.css      ← replace contents (see §Design Tokens)
  vite-env.d.ts
public/
```

Delete `src/App.css` and `src/assets/` — not needed.

### 2. Install Tailwind CSS v4

```bash
npm install tailwindcss @tailwindcss/vite
```

Tailwind v4 has no `tailwind.config.js`. Configuration lives entirely in CSS via `@theme {}`.

### 3. Wire Tailwind into Vite

Replace `vite.config.ts` contents:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
```

### 4. Set up `src/index.css`

Replace the generated `index.css` entirely with:

```css
@import "tailwindcss";

@theme {
  /* Fonts */
  --font-sans: 'Hanken Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Brand */
  --color-primary:           #000000;
  --color-on-primary:        #ffffff;
  --color-deep-navy:         #0A1128;
  --color-ice-blue:          #F4F7F9;
  --color-border-subtle:     #EBEBEB;
  --color-status-success:    #10B981;

  /* Surface scale */
  --color-surface:                   #f9f9f9;
  --color-surface-dim:               #dadada;
  --color-surface-container-lowest:  #ffffff;
  --color-surface-container-low:     #f3f3f4;
  --color-surface-container:         #eeeeee;
  --color-surface-container-high:    #e8e8e8;
  --color-surface-container-highest: #e2e2e2;
  --color-on-surface:                #1a1c1c;
  --color-on-surface-variant:        #4c4546;
  --color-outline:                   #7e7576;
  --color-outline-variant:           #cfc4c5;
  --color-secondary:                 #5d5f5f;
  --color-secondary-container:       #dddddd;

  /* Border radius */
  --radius-sm:   0.125rem;
  --radius:      0.25rem;
  --radius-md:   0.375rem;
  --radius-lg:   0.5rem;
  --radius-xl:   0.75rem;
  --radius-full: 9999px;
}

html {
  scroll-behavior: smooth;
  font-family: var(--font-sans);
}

body {
  margin: 0;
  background-color: #f9f9f9;
  color: #1a1c1c;
  -webkit-font-smoothing: antialiased;
}
```

### 5. Update `index.html` `<head>`

Add font preconnects and Google Fonts `<link>` before `</head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
```

Also set:
```html
<title>Icebreaker Investor Day 2026</title>
<meta name="description" content="A focused half-day with the Icebreaker team, our founders and LPs — candid panels on AI automation and European growth-stage funding." />
<meta property="og:title" content="Icebreaker Investor Day 2026" />
<meta property="og:description" content="September 8, 2026 · Kulttuuritehdas Korjaamo, Helsinki. Free to attend · Registration required." />
<meta property="og:type" content="website" />
```

### 6. Install dependencies and verify

```bash
npm install
npm run dev
```

Dev server should start at `http://localhost:5173`.

### 7. tsconfig notes

The generated `tsconfig.app.json` is fine as-is. Ensure `"strict": true` is set (Vite's template does this by default).

---

## File Structure

```
investor-day/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── src/
│   ├── main.tsx
│   ├── index.css          ← design tokens + global resets
│   ├── vite-env.d.ts
│   ├── App.tsx            ← composes all sections
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── WhyAttend.tsx
│   │   ├── Agenda.tsx
│   │   ├── Speakers.tsx
│   │   ├── Register.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── content.ts     ← all copy, speakers, agenda items as typed constants
├── references/            ← design reference screenshots (do not ship)
├── DESIGN.md
├── PRD.md
└── CLAUDE.md
```

---

## Design System

Follow `DESIGN.md` exactly. Key rules for implementation:

- **Fonts:** `font-sans` (Hanken Grotesk) for all body/headings. `font-mono` (JetBrains Mono) only for chips, labels, timestamps.
- **Primary color:** Black (`#000000`). The reference page uses blue — translate all blue to black or `deep-navy`.
- **Deep-navy (`#0A1128`):** Dark section backgrounds, avatar circles, accented headings (e.g. "Investor Day 2026" in hero).
- **Cards:** `border border-border-subtle bg-white` — no shadows.
- **Chips/tags:** `font-mono text-xs uppercase tracking-widest bg-surface-container text-on-surface rounded px-2 py-1`
- **Primary button:** `bg-primary text-on-primary font-sans font-semibold rounded px-5 py-2.5 hover:bg-deep-navy transition-colors`
- **Secondary button:** `border border-primary text-primary font-semibold rounded px-5 py-2.5 hover:bg-surface-container transition-colors`
- **Section gap:** `py-[120px]`
- **Container:** `max-w-[1280px] mx-auto px-16 max-md:px-5`

---

## Page Sections (top → bottom)

### 1. Nav
- Left: Icebreaker wordmark — `font-sans font-semibold text-lg text-primary`
- Right links: "Why attend" · "Agenda" · "Speakers" · "Register" (primary button → lu.ma)
- Sticky, `bg-white border-b border-border-subtle`

### 2. Hero
- Badge chip: `"Invite-only · Limited seats"` (JetBrains Mono, uppercase)
- H1 line 1: `"Icebreaker"` — `text-primary` (black), `font-semibold text-[64px] max-md:text-[40px]`
- H1 line 2: `"Investor Day 2026"` — `text-deep-navy`, same size/weight
- Body copy: "A focused half-day with the Icebreaker team, our founders and LPs, and a few special guests — candid panels on AI automation and European growth-stage funding, straight-talk updates from our fastest-growing companies, and plenty of time to connect."
- 3 event meta items (icon + label):
  - 📅 September 8, 2026 · 8:00–13:00 (EEST)
  - 📍 Kulttuuritehdas Korjaamo · Töölönkatu 51 A–B, Helsinki
  - 🍽 Breakfast & lunch · Plus plenty of mingling
- CTAs: "Reserve my seat" (primary → lu.ma) · "See the agenda" (text link → `#agenda`)
- Fine print: `"Free to attend · Registration required"`
- Background: `bg-ice-blue` or gradient from `ice-blue` to white

### 3. Why Attend (`id="why-attend"`)
- Label chip: `"WHY COME"`
- H2: "A morning inside one of Europe's top-performing venture funds"
- Body: "LPs come for the insights and network: a first-hand update on how the funds are tracking and what's next alongside candid panels on AI automation in European growth-stage funding, and time to meet fellow LPs as well as the Icebreaker team and portfolio founders."
- Stats row — 3 cols, `border-t border-border-subtle` separators:
  - **7x** — LP capital actually returned to LPs
  - **3x** — annualised rate of return
  - **2x** — total value to paid-in
  - Footnote: "Source: Two Sources of Investment Returns — Icebreaker vs. the average benchmark fund. Based on fund manager's internal data across various reference periods."
- 4 feature cards (2×2 grid), `border border-border-subtle rounded bg-white p-6`:
  1. **Inside the funds** — The most current, unfiltered view on what's performing and what's next in our portfolio — including new funds on the horizon — direct from the GPs.
  2. **The real status of agents** — Most automation tools are in production. We've brought in the people who've shipped them to separate what's genuinely useful from what's just noise.
  3. **Europe funds growth** — Europe is quietly behind some of the segment's largest European-led investments. We'll stress-test whether those ambitions hold up.
  4. **Founders & the room** — Direct CEO updates from our portfolio companies, plus founders, co-investors, and LPs from across the network — with breakfast, coffee and lunch to actually connect.

### 4. Agenda (`id="agenda"`)
- Label chip: `"THE MORNING"`
- H2: `"Agenda"`
- Subtext: `"September 8, 2026 · Kulttuuritehdas Korjaamo, Helsinki · Times in EEST"`
- Timeline — each row: `[TIME range]` | `[type chip]` | `[title]` | `[description + speakers?]`
- `border-t border-border-subtle` divider between rows

| Time | Type | Title | Details |
|------|------|-------|---------|
| 8:00–9:00 | BREAKFAST | Breakfast & mingle | Coffee, breakfast and warm introductions to open the day. |
| 9:00–9:35 | LIVE UPDATE | Icebreaker Updates | Where the funds stand and what's ahead — with Lasse Lehtinen, GP @ Icebreaker. |
| 9:45–10:30 | PANEL | AI Automation — how much work have agents actually replaced? | Every desk claims agents are replacing teams. We brought in the people who've shipped them to production to separate what's genuinely useful from what's actually noise. **Speakers:** Markus Hav (Head of AI Solutions, PostScriptum), Emil Kvarnhammer (CEO & Co-Founder, Oplane), Eetu Knuutinen |
| 10:15–10:30 | BREAK | Coffee break & mingle | — |
| 10:45–11:30 | PANEL | A €350M Series-B led by Europe — bold bet or pipedream? | Most rounds that size still cross the Atlantic. ReOrbit has an ambitious goal — and a strategic reason — to have its next round led by European investors. We're joined by the investors behind some of the segment's largest raises to debate whether European capital can lead at the frontier, and what it'd take. **Speakers:** Ossi Tiainen (Partner, NGP Capital), Michael Dimelow (Partner, Molten Ventures), Aleksi Partanen — Moderator, GP Icebreaker |
| 11:30–11:40 | CEO UPDATE · FUND I | Fund I's fastest-growing company | Mika Aalto, CEO & Co-Founder of Hoxhunt. |
| 11:40–11:50 | CEO UPDATE · FUND II | Fund II's fastest-growing company | Sethu Suvanam, CEO & Co-Founder of ReOrbit. |
| 11:50–12:00 | CEO UPDATE · FUND III | Fund III's fastest-growing company | Marko Saul, CEO & Co-Founder of Crewpoint. |
| 12:00–13:00 | NETWORKING | Lunch & mingle | Keep the conversations going over lunch before we wrap. |

### 5. Speakers (`id="speakers"`)
- H2: `"Speakers"`
- Subtext: `"Operators and investors building and funding at the frontier of AI and space."`
- Grid: 4 cols desktop → 2 cols tablet → 1 col mobile
- Each card: avatar (initials circle, `bg-deep-navy text-white`, 56px), name, role+org (deep-navy), bio, LinkedIn link
- Avatar initials: first letter of first + last name

| Name | Role | Org | Bio |
|------|------|-----|-----|
| Markus Hav | Head of AI Automation | PostScriptum | Head of AI Automation at PostScriptum (Peter Sarlin's family office), driving agentic transformation across the portfolio. Previously Head of AI Automation at Hoxhunt. |
| Emil Kvarnhammer | CEO & Co-Founder | Oplane | Building the agentic code-review platform trusted by the world's fastest-growing AI scaleups and startups. |
| Aino Bergius | Head of Nordics | Lovable | Leading the Nordics for Lovable — the AI company that needs no introduction. |
| Ossi Tiainen | Partner | NGP Capital | Growth-stage investor at NGP Capital, behind space-tech portfolio companies including The Exploration Company ($400M raised), Xona Space Systems ($300M) and Skylo ($180M). |
| Michael Dimelow | Partner | Molten Ventures | Deep roots in space and defence tech. Molten is one of the largest shareholders in ICEYE, which recently announced its €450M growth round. |

- "Panels moderated by" chips: Riku Seppälä · GP, Icebreaker | Aleksi Partanen · GP, Icebreaker
- "CEO updates from" chips: Mika Aalto · Hoxhunt | Sethu Suvanam · ReOrbit | Marko Saul · Crewpoint

### 6. Register (`id="register"`)
- Dark section: `bg-deep-navy`
- Left column (white text):
  - Label chip: `"SAVE YOUR SEAT"` (inverted chip on dark bg)
  - H2: `"Register for Investor Day 2026"` — white
  - Body: `"Seats are limited and allocated on a first-come basis. Register via lu.ma to secure your spot."`
  - Event meta (icon + text, white):
    - Tuesday, September 8, 2026 · 8:00–13:00
    - Kulttuuritehdas Korjaamo, Helsinki
    - Free to attend · Invitation & registration required
- Right column: white card (`bg-white rounded-lg p-8 shadow-none border border-white/10`)
  - Heading: `"Reserve your spot"`
  - Subtext: `"Takes 30 seconds."`
  - Primary button: → lu.ma URL (`target="_blank" rel="noopener"`)
  - Fine print: `"By registering you agree to be contacted about this event. We'll never share your details."`

### 7. Footer
- `border-t border-border-subtle bg-white`
- Left: Icebreaker wordmark + `"Supporting teams from Idea to Seed and beyond since 2017."`
- Right links: icebreaker.vc (→ `https://icebreaker.vc`) | LinkedIn (→ `#`) | Register (→ lu.ma)

---

## Content Data (`src/data/content.ts`)

All copy, speakers, and agenda items must be typed constants in `src/data/content.ts`. Components import from there — no hardcoded strings in JSX. This keeps content editable without touching component logic.

```ts
// Example shape — implement fully
export const EVENT = {
  name: 'Icebreaker Investor Day 2026',
  date: 'September 8, 2026',
  time: '8:00–13:00',
  timezone: 'EEST',
  venue: 'Kulttuuritehdas Korjaamo',
  address: 'Töölönkatu 51 A–B, Helsinki',
  lumaUrl: 'https://lu.ma/icebreaker-investor-day-2026', // TODO: replace with real URL
} as const

export interface Speaker { ... }
export interface AgendaItem { ... }
export const SPEAKERS: Speaker[] = [...]
export const AGENDA: AgendaItem[] = [...]
```

---

## Lu.ma URL

Placeholder: `https://lu.ma/icebreaker-investor-day-2026` — **replace before launch.**

## LinkedIn URLs

All speaker LinkedIn links are `'#'` as placeholder — update before launch.

---

## TypeScript Rules

- All component props typed with `interface`, not `type` alias
- No `any` — use `unknown` and narrow, or be explicit
- `content.ts` exports use `as const` where applicable for literal types
- No `React.FC` — use plain function signatures: `function Nav(): JSX.Element`

## What NOT to build

- No form logic or backend integration
- No React Router (single page, anchor links only)
- No state management library
- No animations beyond `transition-colors` / `transition-opacity` CSS
- No cookie banners, analytics tags (can drop a GA `<script>` in `index.html` later)
