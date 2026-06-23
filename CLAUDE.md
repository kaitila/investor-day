# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

## Project: Icebreaker Investor Day 2026

### Stack
Vite 6 · React 19 · TypeScript · Tailwind CSS v4. Static output — `npm run build` → `dist/`. No router, no backend, no state library.

Full setup instructions and file structure are in `PRD.md`. Always read `PRD.md` before starting implementation work.

### Design system
Always consult `DESIGN.md` before writing any CSS. Key Tailwind rules:
- **Fonts:** `font-sans` (Hanken Grotesk) for all body/headings. `font-mono` (JetBrains Mono) **only** for chips, labels, timestamps.
- **H1 (hero display):** `font-semibold text-[64px] max-md:text-[40px]` — weight 600, not 700. H2 section headings stay at `font-bold text-[32px]`.
- **Icons:** Use inline SVG from `src/components/Icons.tsx` — no emojis anywhere in the UI.
- **Primary color:** Black (`#000000`). The reference screenshots use blue — translate all blue to black or `deep-navy`.
- **`deep-navy` (`#0A1128`):** Dark section backgrounds (Register section), avatar circles, hero H1 accent line.
- **Cards:** `border border-border-subtle bg-white` — no `shadow-*` classes.
- **Chips/tags:** `font-mono text-xs uppercase tracking-widest bg-surface-container text-on-surface rounded px-2 py-1`
- **Primary button:** `bg-primary text-on-primary rounded px-5 py-2.5 font-semibold hover:bg-deep-navy transition-colors`
- **Section gap:** `py-[120px]`
- **Container:** `max-w-[1280px] mx-auto px-16 max-md:px-5`

### Content source of truth
All copy lives in `src/data/content.ts`. Components import from there — no hardcoded strings in JSX. Content matches `PRD.md` verbatim. Do not paraphrase or invent.

### TypeScript rules
- Props typed with `interface`, not `type` alias
- No `any` — use `unknown` and narrow
- No `React.FC` — plain function signatures: `function Nav(): JSX.Element`
- `content.ts` uses `as const` for literal types

### Lu.ma link
Placeholder: `https://lu.ma/icebreaker-investor-day-2026`. Appears in `content.ts` as `EVENT.lumaUrl`. Replace before launch.

### No form
Reference has a signup form — we replace it with a button linking to lu.ma. No form fields, no validation, no backend.

### Speaker avatars
Initials in a filled circle: `bg-deep-navy text-white` 56px circle. No photos.

### Responsiveness
- Desktop ≥1024px: multi-column per reference
- Tablet 768–1023px: 2-col grids
- Mobile <768px: single column, `px-5` margins

### What to avoid
- No `shadow-*` classes (design system uses borders, not shadows)
- No lorem ipsum — use `{/* TODO */}` comment if content unknown
- No analytics, cookie banners, or feature flags in component code

---

## Git Guidelines

### Branching
- `main` — always shippable; only merge working code
- Feature branches: `feat/<short-slug>` (e.g. `feat/hero-section`)
- Fix branches: `fix/<short-slug>`
- Branch from `main`, never commit non-trivial changes directly to `main`

### Commit messages
Follow Conventional Commits: `<type>(<scope>): <subject>`

Types: `feat` · `fix` · `style` · `refactor` · `content` · `chore` · `docs`

Examples:
```
feat(hero): add event meta row with date/venue/food
content(agenda): populate all timeslots from PRD
style(nav): switch to sticky positioning with border-b
fix(speakers): correct Markus Hav initials to MH
chore: init vite react-ts project
```

Rules:
- Subject: lowercase, imperative, no period, ≤72 chars
- One logical change per commit — don't bundle unrelated edits
- Don't commit `node_modules/`, `dist/`, or `.env` files

### .gitignore must include
```
node_modules/
dist/
.env
.env.local
*.local
.DS_Store
```

### Before committing
- `npm run build` must succeed (zero TypeScript errors)
- No `console.log` left in source
- No hardcoded strings in JSX that belong in `content.ts`

### What NOT to commit
- `dist/` — build output, not source
- Any `.env` files
- New binary assets without discussion