---
layout: page-content
title: "app-ui-framework v2 — migration plan"
description: Bring app-ui-framework forward to consume design-system/ tokens with a light-first inversion. Draft for Alex review — no SCSS files written yet.
---

# app-ui-framework v2 — migration plan

**Status:** draft for review · no source changes yet · review with @[Alex]
**Author:** Devin
**Supersedes (if approved):** `design-system/DESIGN.md` decisions log entry `2026-04-02 · Design system scoped to docs/publication channel`
**Audience:** app-ui-framework maintainers + campaigns-app frontend

---

## TL;DR

1. **Why:** Alex's "use the standard" rule and the reality "the standard is behind" need to stop fighting. app-ui-framework v1 predates the design-system/ refresh. The closest thing to a v2 preview is already drafted at `design-system/variants/claude-design-2026-04-19/project/ui_kits/campaigns_app/`.
2. **What:** consume `--ds-*` tokens, but **invert the dark-first / light-override** structure to **light-first / dark-deferred**. App UI is light-first because Prime is light-only; merchants must not jump from a light Prime page into a dark sub-app.
3. **How:** add a v2 build alongside v1. v1 stays alive on `@latest` for existing consumers. v2 ships as `dist/css/app-v2.css` (and `app-v2.min.css`). campaigns-app becomes the v2 dogfood site.
4. **Blocking work:** retract the 2026-04-02 carve-out, patch a small set of token gaps in `design-system/tokens/light.css`, then write the v2 SCSS (this doc sketches the file shapes — nothing is built yet).

---

## 1. Retraction of decisions log entry 2026-04-02

The original entry:

> **2026-04-02 · Design system scoped to docs/publication channel** — Marketing (nextcommerce-site/) and App UI (app-ui-framework/) have their own design languages. Shared brand layer (primary color, Inter, logos) is the only overlap. Avoids false constraints across fundamentally different audiences and tech stacks.

That entry predates `design-system/variants/claude-design-2026-04-19/project/ui_kits/campaigns_app/`, which is a complete admin-shell drafted in the new system. The variant exists, the components are defined (sidebar, pagehead, metric strip, filter bar, data table, status pills, banner), and they reuse the docs-channel `--ds-*` token namespace cleanly. The carve-out described a real concern at the time — different audiences, different stacks — but the variant proves the constraints are not in fact false; the same tokens express both surfaces with one structural inversion (light-first vs dark-first).

**Replacement entry, proposed for the decisions log:**

> **2026-XX-XX · App UI consumes design-system/ tokens via a light-first inversion** — `app-ui-framework/` v2 imports `design-system/tokens/{base,light,typography}.css` directly, with `:root` carrying the light-mode tokens (Prime is light-only across all surfaces; dark sub-apps would clash on every nav transition). Dark mode is deferred to a later phase, opt-in via `[data-theme="dark"]` if/when justified by an actual surface need. Component aesthetics (sidebar, pagehead, metrics, filter bar, data table, status pill, notice) are lifted from the campaigns_app variant kit. Bootstrap 5.3 stays as the grid/utility layer.

---

## 2. Light-first rationale (Prime constraint, load-bearing)

Prime — the merchant-facing storefront/checkout/customer/email surfaces — is light-only. There is no dark Prime today and none planned. Merchants navigate from Prime into sub-apps (campaigns-app, support-ai, etc.). Every nav transition between a light Prime page and a dark sub-app would feel like crashing into a different product.

The docs-channel design system in `DESIGN.md` chose dark-first because the docs/publication audience expects dark mode (developer tooling convention). That is correct *for docs*. It is the **wrong default for app UI**.

The token values are right; the **structural default is wrong** for our context. The fix is structural, not chromatic:

| Layer | Docs channel | App UI v2 |
|-------|--------------|-----------|
| `:root` carries | Dark tokens | **Light tokens** |
| Override selector | `[data-theme="light"]` for light | `[data-theme="dark"]` for dark *(deferred)* |
| Default | Dark | **Light** |

This inversion is the only structural deviation from `DESIGN.md`. Token *values* are unchanged — `--ds-bg: #ffffff` and `--ds-txt: #09090b` are the same numbers, just promoted to `:root`.

Two minor token-value deviations are also documented below (§3):
- `--ds-bg-elevated` — translucent in dark, mostly redundant in light.
- Body font size — DESIGN.md uses 16px (text-base) for docs; app UI uses 14px (text-sm) for data density.

Everything else (typography stack, scale, line heights, spacing, radii, shadows, focus, semantic colors, AI Slop Blacklist, Notice-not-Alert) carries over without deviation.

---

## 3. Drift report (preflight)

Before any v2 source is written, these gaps need a decision. Some require an upstream patch in `design-system/`; some can be patched in the v2 bridge.

### 3.1 Light-mode `-border` tokens are missing

**Where:** `design-system/tokens/light.css` (and the byte-identical `design-system/variants/.../project/tokens/light.css`).

**What's missing:** `--ds-yellow-border`, `--ds-green-border`, `--ds-red-border`, `--ds-orange-border`. Dark mode has them (28% opacity); light mode does not.

**What breaks:** the campaigns_app kit's status pills (`.stat.live`, `.paused`, `.fail`) reference `border-color: var(--ds-*-border)`. In light mode these resolve to nothing → pills render border-less, which Notice-not-Alert specifically requires *against* (the kit's whole point is bordered pills, not left-accent badges).

**DESIGN.md inconsistency:** §Color → "Each semantic color has `-bg` and `-border` variants using rgba transparency" — DESIGN.md *intends* both variants in both modes. The light-mode tokens were drafted with a typo of omission.

**Recommended fix:** patch upstream — add 20% rgba `-border` variants to `design-system/tokens/light.css` (and the consolidated `colors_and_type.css`). 8% bg / 20% border keeps the same ratio as dark's 12/28.

```css
/* design-system/tokens/light.css — proposed patch */
[data-theme="light"] {
  /* …existing… */

  --ds-yellow-border: rgba(245, 158, 11, 0.20);
  --ds-green-border:  rgba(34, 197, 94, 0.20);
  --ds-red-border:    rgba(248, 113, 113, 0.20);
  --ds-orange-border: rgba(251, 146, 60, 0.20);
}
```

**Fallback:** if upstream changes need to wait, the v2 bridge (`_ds-bridge.scss`) defines them locally with a comment pointing back at this report.

### 3.2 NEXT vs Sellmore brand split is partial

**Where:** `design-system/tokens/base.css` defines a single `--ds-primary: #3c7dff` with no Sellmore variant. The consolidated `design-system/variants/.../project/colors_and_type.css` adds `--ds-sellmore-primary: #3366ff` and `--ds-sellmore-primary-light: #6080ff`, but the split tokens/ files do not.

**What's wrong:** the canonical brand-split table in `DESIGN.md` §Brand-Specific Tokens shows two columns (NEXT, Sellmore), but the actual token files only ship NEXT. Anyone consuming the split tokens (which is what the docs-channel bridge does) gets NEXT-only.

**What v1 currently does:** `app-ui-framework/src/scss/_custom-variables.scss` sets `$primary: $blue` where `$blue: #3266ff`. That is *neither* `#3c7dff` (NEXT) *nor* `#3366ff` (Sellmore); it is a third value, almost certainly a typo for Sellmore from before the split was canonical.

**Recommended fix:** patch upstream — add Sellmore tokens to `design-system/tokens/base.css` to match the consolidated bundle. Then v2 honors the split via a `[data-brand="sellmore"]` runtime override (see §5).

```css
/* design-system/tokens/base.css — proposed patch */
:root {
  /* …existing… */

  /* Sellmore (internal agency brand; cooler) */
  --ds-sellmore-primary: #3366ff;
  --ds-sellmore-primary-light: #6080ff;
}
```

### 3.3 `--ds-bg-elevated` is mostly a no-op in light mode

**Where:** `design-system/tokens/light.css` defines `--ds-bg-elevated: rgba(255, 255, 255, 0.96)`.

**What's wrong:** layered on top of `--ds-bg: #ffffff`, that's 96%-opaque white over solid white = visually identical to white. The token exists for symmetry with dark mode (where `rgba(255,255,255,0.045)` is a meaningful translucent layer over `#09090b`), but in light mode it carries no information.

**Impact on the campaigns_app kit:** `aside.app`, `.pagehead`, `.metrics` cells, `.filterbar`, `table.data`, `.banner` all use `var(--ds-bg-elevated)` for their surfaces. In light mode they become solid white over solid white — no elevation, no separation, except via borders.

**Recommended fix:** in v2 bridge, alias `--ds-bg-elevated` to a slightly different surface in light mode so elevated surfaces actually elevate. Two options:

| Option | Light value | Tradeoff |
|--------|-------------|----------|
| **A** | `--ds-bg-elevated: #ffffff;` and `--ds-bg: #fafafa;` (page bg slightly off-white, panels pure white) | Stripe convention; panels feel elevated by being whiter than the page. Deviates from DESIGN.md's `--ds-bg: #ffffff`. |
| **B** | `--ds-bg-elevated: #ffffff;` and `--ds-bg: #f7f8fc;` (page bg is `--ds-bg-hover` value) | Same idea, slightly cooler page. Closer to current campaigns-app preview overlay aesthetic. |
| **C** | Keep DESIGN.md values; rely on `1px solid var(--ds-border)` for separation only | Honors DESIGN.md exactly. Loses the soft-elevation cue Stripe-style admins rely on. |

**Recommendation:** **A** — `--ds-bg: #fafafa` (DESIGN.md already uses this for `--ds-bg-2`), `--ds-bg-elevated: #ffffff`. Document as a deviation; rationale is data-density elevation cues. Open question for Alex below.

### 3.4 `app-ui-framework` v1 `$primary` is a typo

Already covered in §3.2. Restated for completeness: `_custom-variables.scss:43` has `$blue: #3266ff;`. Should be either `#3c7dff` (NEXT) or `#3366ff` (Sellmore). v2 fixes this by reading `var(--ds-primary)` instead of a hardcoded SCSS color, so the typo class can't recur.

### 3.5 Variant `project/tokens/` is byte-identical to root `tokens/`

**Confirmed by file-by-file diff.** Only difference: the consolidated `project/colors_and_type.css` adds the Sellmore tokens (§3.2). No content has actually drifted *between* the variant and root. So consolidating decisions log entries against the root tokens is safe.

### 3.6 Summary of patches needed before v2 source is written

| # | Issue | Fix location | Priority |
|---|-------|--------------|----------|
| 3.1 | Light `-border` tokens missing | Upstream `design-system/tokens/light.css` + `colors_and_type.css` | P0 — pills break without it |
| 3.2 | Sellmore tokens missing from split files | Upstream `design-system/tokens/base.css` | P1 — needed for v2 brand override |
| 3.3 | `--ds-bg-elevated` no-op in light | v2 bridge `_ds-bridge.scss` (or DESIGN.md update) | P1 — visual cue |
| 3.4 | v1 `$primary` typo | v2 supersedes; v1 left as-is | P2 — cosmetic |
| 3.5 | Variant tokens duplicated | Cleanup-only | P3 |

---

## 4. v2 file structure sketch

These files are **not yet written**. Sketches below are for review.

### 4.1 File tree

```
app-ui-framework/
├── dist/
│   ├── css/
│   │   ├── main.css            # v1 — unchanged
│   │   ├── main.css.map        # v1
│   │   ├── next-app-ui.css     # v1
│   │   ├── next-app-ui.min.css # v1 (CDN target — kept stable)
│   │   ├── app-v2.css          # NEW — v2 build
│   │   ├── app-v2.css.map      # NEW
│   │   └── app-v2.min.css      # NEW — v2 CDN target
│   └── js/                     # unchanged
├── src/
│   ├── scss/
│   │   ├── main.scss                    # v1 entry — unchanged
│   │   ├── _custom-variables.scss       # v1 — unchanged
│   │   ├── _alert-custom.scss           # v1 — unchanged
│   │   ├── _badge-custom.scss           # v1 — unchanged
│   │   ├── _button-custom.scss          # v1 — unchanged
│   │   ├── _card-custom.scss            # v1 — unchanged
│   │   ├── (… all other _*-custom.scss v1 files unchanged …)
│   │   │
│   │   ├── app-v2.scss                  # NEW — v2 entry
│   │   ├── _ds-tokens.scss              # NEW — pulls --ds-* from design-system/
│   │   ├── _ds-bridge.scss              # NEW — Bootstrap $-vars → var(--ds-*)
│   │   ├── _custom-variables-v2.scss    # NEW — v2-only Bootstrap overrides
│   │   ├── _typography-v2.scss          # NEW — DESIGN.md type scale + heading rules
│   │   └── components/                  # NEW — lifted from campaigns_app kit
│   │       ├── _sidebar.scss
│   │       ├── _pagehead.scss
│   │       ├── _metrics.scss
│   │       ├── _filterbar.scss
│   │       ├── _data-table.scss
│   │       ├── _status-pill.scss
│   │       └── _notice.scss
│   └── js/                              # unchanged
├── docs/
│   ├── _drafts/migration-v2.md          # this file
│   ├── components/                      # v1 components ref
│   └── v2/                              # NEW — v2 docs / playground (later phase)
└── package.json                         # build script gets `scss:v2` + `scss:v2:min` entries
```

### 4.2 `src/scss/app-v2.scss` (entry point)

```scss
// app-v2.scss
//
// v2 entry. Light-first. Consumes design-system/ tokens via _ds-tokens.scss.
// Bootstrap stays as grid/utilities/forms layer; component aesthetics come
// from components/ files lifted from the campaigns_app variant kit.

// 1. Pull design-system/ tokens (light at :root, dark deferred)
@import "ds-tokens";

// 2. Bootstrap functions + default variables + dark variant defaults
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";

// 3. v2 SCSS overrides — minimal, just what Bootstrap needs at compile time
@import "ds-bridge";
@import "custom-variables-v2";

// 4. Bootstrap maps + mixins + root
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";

// 5. Bootstrap layer — grid/utilities/reboot/type/forms/buttons/etc.
//    Same set as v1 main.scss; nothing dropped.
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/images";
@import "bootstrap/scss/containers";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/tables";
@import "bootstrap/scss/forms";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/transitions";
@import "bootstrap/scss/dropdown";
@import "bootstrap/scss/button-group";
@import "bootstrap/scss/nav";
@import "bootstrap/scss/navbar";
@import "bootstrap/scss/card";
@import "bootstrap/scss/accordion";
@import "bootstrap/scss/breadcrumb";
@import "bootstrap/scss/pagination";
@import "bootstrap/scss/badge";
@import "bootstrap/scss/alert";
@import "bootstrap/scss/progress";
@import "bootstrap/scss/list-group";
@import "bootstrap/scss/close";
@import "bootstrap/scss/toasts";
@import "bootstrap/scss/modal";
@import "bootstrap/scss/tooltip";
@import "bootstrap/scss/popover";
@import "bootstrap/scss/carousel";
@import "bootstrap/scss/spinners";
@import "bootstrap/scss/offcanvas";
@import "bootstrap/scss/placeholders";
@import "bootstrap/scss/helpers";
@import "bootstrap/scss/utilities/api";

// 6. Typography (lifted to v2 — heading scale, mono, focus, ::selection)
@import "typography-v2";

// 7. Components — lifted from campaigns_app variant kit
@import "components/sidebar";
@import "components/pagehead";
@import "components/metrics";
@import "components/filterbar";
@import "components/data-table";
@import "components/status-pill";
@import "components/notice";

// Note: v1 _*-custom.scss files are NOT imported in v2.
// v2 starts clean from --ds-* tokens.
```

### 4.3 `src/scss/_ds-tokens.scss` (light-first inversion)

```scss
// _ds-tokens.scss
//
// Pulls in the docs-channel design tokens with a light-first inversion.
//
// Source of truth: ../../../../design-system/tokens/{base,light,typography}.css
// We do NOT @import the .css files via SCSS @import (that would emit CSS
// @imports at the top of the bundle, blocking parallel loads). Instead, we
// inline the same values here, with a header comment + an audit pointer.
//
// AUDIT: design-system/audit.sh should add a check that this file's values
// match the upstream tokens/ files (modulo the light-first inversion).

:root {
  /* ── Brand (NEXT default) ─────────────────────────────── */
  --ds-primary: #3c7dff;
  --ds-primary-light: #79a5ff;
  --ds-primary-foreground: #ffffff;

  /* ── Semantic ─────────────────────────────────────────── */
  --ds-green:  #22c55e;
  --ds-yellow: #f59e0b;
  --ds-red:    #f87171;
  --ds-orange: #fb923c;

  /* ── Layout ───────────────────────────────────────────── */
  --ds-layout-max:  1600px;
  --ds-sidebar-w:    320px;
  --ds-toc-w:        320px;
  --ds-content-max:  880px;
  --ds-topbar-h:      60px;

  /* ── Radius ───────────────────────────────────────────── */
  --ds-radius-sm:   0.375rem; /* 6px */
  --ds-radius-md:   0.5rem;   /* 8px */
  --ds-radius-lg:   0.75rem;  /* 12px */
  --ds-radius-full: 9999px;

  /* ── Shadow (flat) ────────────────────────────────────── */
  --ds-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06);
  --ds-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);

  /* ── Spacing (4px) ────────────────────────────────────── */
  --ds-space-2xs:   2px;
  --ds-space-xs:    4px;
  --ds-space-sm:    8px;
  --ds-space-md:   12px;
  --ds-space-base: 16px;
  --ds-space-lg:   24px;
  --ds-space-xl:   32px;
  --ds-space-2xl:  48px;
  --ds-space-3xl:  64px;

  --ds-num-spacing: -0.02em;

  /* ── Typography ───────────────────────────────────────── */
  --ds-font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --ds-font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  --ds-text-4xl: 48px;
  --ds-text-3xl: 36px;
  --ds-text-2xl: 30px;
  --ds-text-xl:  24px;
  --ds-text-lg:  19px;
  --ds-text-base: 16px;
  --ds-text-md:  15px;
  --ds-text-sm:  14px;
  --ds-text-xs:  13px;
  --ds-text-2xs: 12px;
  --ds-text-3xs: 11px;
  --ds-text-4xs: 10.5px;

  --ds-leading-tight:   1.15;
  --ds-leading-snug:    1.3;
  --ds-leading-normal:  1.5;
  --ds-leading-relaxed: 1.7;
  --ds-leading-loose:   1.75;

  --ds-weight-normal:    400;
  --ds-weight-medium:    500;
  --ds-weight-semibold:  600;
  --ds-weight-bold:      700;
  --ds-weight-extrabold: 800;

  /* ──────────────────────────────────────────────────────────
   * LIGHT-FIRST INVERSION — these tokens are at :root because
   * Prime is light-only and a dark sub-app would clash with
   * every nav transition. Dark mode is deferred; if/when it's
   * justified by a real surface need, opt-in via [data-theme="dark"].
   * ────────────────────────────────────────────────────────── */
  color-scheme: light;

  /* Surfaces — DEVIATION from DESIGN.md docs-channel light values:
     --ds-bg-elevated raised to pure white over a slightly off-white page
     so panels actually elevate. Documented in migration-v2.md §3.3. */
  --ds-bg:          #fafafa;
  --ds-bg-2:        #f4f4f5;
  --ds-bg-3:        #f4f4f5;
  --ds-bg-hover:    #f4f7fb;
  --ds-bg-elevated: #ffffff;

  --ds-border:   #e4e4e7;
  --ds-border-2: #d4d4d8;

  --ds-txt:    #09090b;
  --ds-txt-2:  #27272a;
  --ds-txt-3:  #71717a;
  --ds-txt-4:  #a1a1aa;

  --ds-primary-muted:  rgba(60, 125, 255, 0.08);
  --ds-primary-border: rgba(60, 125, 255, 0.20);
  --ds-primary-ring:   rgba(60, 125, 255, 0.16);

  /* Light-mode -bg / -border pairs — fills the gap reported in §3.1.
     If upstream patches land first, drop these in favor of imports. */
  --ds-yellow-bg:     rgba(245, 158, 11, 0.08);
  --ds-yellow-border: rgba(245, 158, 11, 0.20);
  --ds-green-bg:      rgba(34,  197, 94, 0.08);
  --ds-green-border:  rgba(34,  197, 94, 0.20);
  --ds-red-bg:        rgba(248, 113, 113, 0.08);
  --ds-red-border:    rgba(248, 113, 113, 0.20);
  --ds-orange-bg:     rgba(251, 146, 60, 0.08);
  --ds-orange-border: rgba(251, 146, 60, 0.20);
}

/* Sellmore brand override — opt-in via [data-brand="sellmore"] */
[data-brand="sellmore"] {
  --ds-primary: #3366ff;
  --ds-primary-light: #6080ff;
  --ds-primary-muted:  rgba(51, 102, 255, 0.08);
  --ds-primary-border: rgba(51, 102, 255, 0.20);
  --ds-primary-ring:   rgba(51, 102, 255, 0.16);
}

/* Dark mode — DEFERRED. If reintroduced, opt-in via [data-theme="dark"]
   with values from design-system/tokens/dark.css. Not imported now. */
```

### 4.4 `src/scss/_ds-bridge.scss` (Bootstrap ↔ --ds-*)

```scss
// _ds-bridge.scss
//
// Maps Bootstrap 5.3 SCSS variables onto the --ds-* token namespace.
// Keep numeric / shade-math values as SCSS literals (Bootstrap needs
// SCSS-time access for darken/lighten). Map runtime/cosmetic values to
// CSS custom properties so brand overrides ([data-brand="sellmore"])
// take effect at runtime without recompilation.

// ── Brand color ────────────────────────────────────────────
// SCSS literal for shade math; runtime override via --ds-primary
// is wired through Bootstrap's --bs-primary in the next section.
$primary:   #3c7dff;
$secondary: #71717a; // --ds-txt-3 — informational, used for muted UI
$success:   #22c55e;
$warning:   #f59e0b;
$danger:    #f87171;
$info:      #79a5ff;

// ── Body ───────────────────────────────────────────────────
$body-bg:    #fafafa;  // matches --ds-bg in light-first
$body-color: #27272a;  // matches --ds-txt-2

// ── Border / radius (DESIGN.md flat aesthetic) ─────────────
$border-color:                #e4e4e7;
$border-color-translucent:    rgba(0, 0, 0, 0.06);
$border-radius:               0.5rem;   // --ds-radius-md
$border-radius-sm:            0.375rem; // --ds-radius-sm
$border-radius-lg:            0.75rem;  // --ds-radius-lg
$enable-shadows:              false;    // DESIGN.md: borders over drop-shadow
$enable-rounded:              true;
$enable-validation-icons:     false;
$enable-negative-margins:     true;

// ── Typography ────────────────────────────────────────────
// DEVIATION: --ds-text-sm (14px) as base for app density.
// Documented in migration-v2.md §2.
$font-family-sans-serif: 'Inter', system-ui, -apple-system, sans-serif;
$font-family-monospace:  'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
$font-size-base:         0.875rem;  // 14px — --ds-text-sm
$font-size-sm:           0.8125rem; // 13px — --ds-text-xs
$font-size-lg:           1rem;      // 16px — --ds-text-base
$font-weight-base:       400;
$line-height-base:       1.5;       // --ds-leading-normal
$headings-font-weight:   600;       // --ds-weight-semibold
$headings-color:         #09090b;   // --ds-txt
$headings-line-height:   1.15;      // --ds-leading-tight

// Heading sizes (rem) — DESIGN.md scale converted to rem at 14px base
$h1-font-size: 2.143rem; // 30px — --ds-text-2xl
$h2-font-size: 1.714rem; // 24px — --ds-text-xl
$h3-font-size: 1.357rem; // 19px — --ds-text-lg
$h4-font-size: 1.143rem; // 16px — --ds-text-base
$h5-font-size: 1rem;     // 14px — --ds-text-sm
$h6-font-size: 0.929rem; // 13px — --ds-text-xs (uppercase tracking via override)

// ── Tables ────────────────────────────────────────────────
$table-cell-padding-y:    0.875rem;
$table-cell-padding-x:    1rem;
$table-th-bg:             #f4f4f5;     // --ds-bg-3
$table-th-color:          #71717a;     // --ds-txt-3
$table-border-color:      #e4e4e7;     // --ds-border
$table-hover-bg:          #f4f7fb;     // --ds-bg-hover

// ── Buttons / forms ───────────────────────────────────────
$btn-font-weight:         500;
$input-bg:                #ffffff;
$input-border-color:      #d4d4d8;     // --ds-border-2
$input-focus-border-color: #3c7dff;
$input-focus-box-shadow:  0 0 0 3px rgba(60, 125, 255, 0.16);

// ── Cards ─────────────────────────────────────────────────
$card-bg:                #ffffff;       // --ds-bg-elevated (light-first)
$card-border-color:      #e4e4e7;
$card-cap-bg:            transparent;
$card-spacer-y:          1rem;
$card-spacer-x:          1.25rem;

// ── Override Bootstrap's --bs-primary at runtime so brand swaps work ──
:root {
  --bs-primary:        var(--ds-primary);
  --bs-primary-rgb:    60, 125, 255; // base; brand override below
  --bs-body-bg:        var(--ds-bg);
  --bs-body-color:     var(--ds-txt-2);
  --bs-emphasis-color: var(--ds-txt);
  --bs-border-color:   var(--ds-border);
  --bs-link-color:     var(--ds-primary);
  --bs-link-hover-color: var(--ds-primary-light);
}
[data-brand="sellmore"] {
  --bs-primary:     var(--ds-primary);
  --bs-primary-rgb: 51, 102, 255;
}
```

### 4.5 `src/scss/components/_status-pill.scss` (lifted from kit)

Demonstrates the lift pattern. The campaigns_app kit's inline CSS becomes a v2 component file. Tokens reference `--ds-*` only.

```scss
// _status-pill.scss
// Source: design-system/variants/claude-design-2026-04-19/project/ui_kits/campaigns_app/index.html .stat
.stat {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px 3px 7px;
  border-radius: var(--ds-radius-full);
  font-size: var(--ds-text-3xs);   // 11px
  font-weight: var(--ds-weight-medium);
  border: 1px solid;
  line-height: 1.4;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: var(--ds-radius-full);
    background: currentColor;
  }

  &.live {
    color: var(--ds-green);
    background: var(--ds-green-bg);
    border-color: var(--ds-green-border);
  }
  &.paused {
    color: var(--ds-yellow);
    background: var(--ds-yellow-bg);
    border-color: var(--ds-yellow-border);
  }
  &.draft {
    color: var(--ds-txt-3);
    background: var(--ds-bg-3);
    border-color: var(--ds-border);
  }
  &.fail {
    color: var(--ds-red);
    background: var(--ds-red-bg);
    border-color: var(--ds-red-border);
  }
}
```

The other six component files (`_sidebar.scss`, `_pagehead.scss`, `_metrics.scss`, `_filterbar.scss`, `_data-table.scss`, `_notice.scss`) follow the same pattern. Each file's source is a discrete chunk of the kit's `<style>` block, hoisted out and SCSS-formatted.

### 4.6 `package.json` build-script additions

```jsonc
{
  "scripts": {
    "scss":         "npx sass src/scss/main.scss     dist/css/main.css     --load-path=node_modules --load-path=src/scss",
    "scss:v2":      "npx sass src/scss/app-v2.scss   dist/css/app-v2.css   --load-path=node_modules --load-path=src/scss",
    "scss:v2:min":  "npx sass src/scss/app-v2.scss   dist/css/app-v2.min.css --style=compressed --load-path=node_modules --load-path=src/scss",
    "scss:docs":    "npx sass docs/assets/css/main.scss docs/assets/css/main.css --load-path=node_modules --load-path=src/scss --load-path=docs/_sass --style=compressed",
    "watch:scss":   "npx sass --watch src/scss/main.scss:dist/css/main.css src/scss/app-v2.scss:dist/css/app-v2.css docs/assets/css/main.scss:docs/assets/css/main.css --load-path=node_modules --load-path=src/scss --load-path=docs/_sass",
    "build":        "npm run scss && npm run scss:v2 && npm run scss:v2:min && npm run scss:docs && npx @11ty/eleventy"
  }
}
```

---

## 5. Staged rollout

### 5.1 Phase 0 — Upstream patches (P0 / P1 from §3)

- `design-system/tokens/light.css`: add `-border` tokens for green/yellow/red/orange.
- `design-system/tokens/base.css`: add `--ds-sellmore-primary` + light variant.
- `design-system/colors_and_type.css`: regenerate to match.
- `design-system/audit.sh`: extend to check `app-ui-framework/src/scss/_ds-tokens.scss` matches.

These are independent of v2 source work — Alex can land them first with no v2 dependency.

### 5.2 Phase 1 — v2 source (no consumer impact)

- Add `src/scss/app-v2.scss` + `_ds-tokens.scss` + `_ds-bridge.scss` + `_custom-variables-v2.scss` + `_typography-v2.scss` + `components/*`.
- Add `scss:v2` + `scss:v2:min` build scripts.
- Build artifacts to `dist/css/app-v2.css` + `app-v2.min.css`.
- v1 (`main.scss` → `next-app-ui.min.css`) untouched. CDN at `@latest/dist/css/next-app-ui.min.css` keeps serving v1 byte-identical.

Gate: works locally with `npm run scss:v2`, no warnings.

### 5.3 Phase 2 — campaigns-app dogfood

- campaigns-app (frontend) adds `<link rel="stylesheet" href="…/dist/css/app-v2.min.css">` *in parallel* with the existing v1 link.
- One vertical slice: pick the Campaigns list view, swap markup to the v2 component classes (`.stat.live`, `.metrics`, `.pagehead`, etc.) lifted from the kit.
- Side-by-side compare against the campaigns-app#479 review pack — same surfaces, v2 should match the kit.
- Iterate on the v2 SCSS until the dogfood looks right.

This phase is the equivalent of how `guides/` is the docs-channel proving ground.

### 5.4 Phase 3 — v2 doc playground + campaigns-app cutover

- `app-ui-framework/docs/v2/` gets a v2-only playground (parallel to the existing v1 docs).
- campaigns-app cuts over fully to v2 for new views; existing v1 views migrate opportunistically.
- v1 link removed from campaigns-app once parity is reached.

### 5.5 Phase 4 — wider v2 adoption + v1 deprecation

- Other v1 consumers (oscar-prime dashboard, partner portal, …) opt into v2 on their own schedule.
- v1 enters maintenance: security/regression fixes only, no new features.
- v1 deprecation timeline: 6 months from Phase 4 start, or until last consumer migrates, whichever is later.

---

## 6. Backwards compatibility for v1 consumers

- `dist/css/next-app-ui.min.css` (v1) keeps shipping. No content changes.
- CDN URLs do not change for v1 consumers. The release branch the CDN points at stays on v1's bundle.
- v2 ships at a *new* URL: `dist/css/app-v2.min.css`. v1 consumers see nothing new until they opt in.
- Class-name conflicts: v2 introduces new classes (`.pagehead`, `.metrics`, `.stat`, `.filterbar`, `.banner`, `.crumb`, `.camp`). None of these exist in v1. v1 classes (`.card-header-title`, `.header-pretitle`, `.header-body`, `.btn`, `.table`, `.badge`, `.alert`) all still work in v2 via the unmodified Bootstrap layer.
- Risk surface: a v1 consumer that loads *both* stylesheets (during a migration) gets v2's overrides on shared Bootstrap classes (`.btn`, `.card`, `.table`). This is fine if the consumer is migrating; if they're not, they shouldn't be loading v2.
- Audit: a v1 consumer can run `bash design-system/audit.sh` to confirm their token usage still resolves against v1.

---

## 7. NEXT vs Sellmore brand split

`DESIGN.md` §Brands defines two brands; `tokens/base.css` ships only NEXT. v2 fixes this:

- Default `:root` carries NEXT primary (`#3c7dff`).
- `[data-brand="sellmore"]` overrides `--ds-primary` + `--ds-primary-light` + `-muted` + `-border` + `-ring` to Sellmore values (`#3366ff`).
- Bootstrap's `--bs-primary` reads through `var(--ds-primary)` so the brand swap works with no SCSS rebuild.

Per-app default brand:

| App | Brand attribute | Reason |
|-----|-----------------|--------|
| campaigns-app | `<html data-brand="next">` (default) | merchant-facing; NEXT brand |
| Sellmore internal tools | `<html data-brand="sellmore">` | internal agency surfaces |
| oscar-prime dashboard | `<html data-brand="next">` | merchant-facing |
| partners portal | `<html data-brand="next">` | merchant/partner-facing |

A surface that needs to be brand-neutral can use neither attribute and gets NEXT defaults.

---

## 8. Deprecation timeline (proposed)

| Phase | Earliest start | Notes |
|-------|----------------|-------|
| Phase 0 | as soon as patches reviewed | Upstream design-system/ patches; no v2 dep |
| Phase 1 | Phase 0 + 1 day | v2 source landed, no consumer impact |
| Phase 2 | Phase 1 + 1 week | campaigns-app first vertical slice |
| Phase 3 | Phase 2 + 2-4 weeks | campaigns-app full cutover |
| Phase 4 | Phase 3 + 1 month | other consumers opt in |
| v1 deprecation announcement | Phase 4 + 0 | "v1 enters maintenance" |
| v1 EOL | Phase 4 + 6 months | or last consumer migrated, whichever later |

No drop-dead dates pinned without Alex's input on his team's bandwidth.

---

## 9. Open questions for Alex

1. **§3.1 — light `-border` tokens.** Patch upstream in `design-system/tokens/light.css`, or carry the fill-in only in v2's `_ds-tokens.scss`? Recommend upstream — the omission looks like a typo against DESIGN.md's §Color text.
2. **§3.2 — Sellmore tokens.** Add to `design-system/tokens/base.css`, or keep them only in the consolidated `colors_and_type.css`? Recommend upstream for consistency with the brand-split table in `DESIGN.md`.
3. **§3.3 — `--ds-bg-elevated` deviation.** Approve the `--ds-bg: #fafafa` / `--ds-bg-elevated: #ffffff` pair for app UI light, deviating from DESIGN.md docs-channel values? Or hold to DESIGN.md exactly and rely on borders alone for elevation?
4. **§2 — body font size deviation.** v1 currently uses 15px (`0.9375rem`). DESIGN.md docs-channel default is 16px. Kit and Stripe-style admin convention is 14px. v2 proposes 14px (`--ds-text-sm`). OK?
5. **§5.2 — v2 source location.** Land alongside v1 in `src/scss/` (sketch above) or in a new `src/scss-v2/` directory? Sketch keeps everything visible together; separate dir keeps v1 fully isolated. Slight preference for sketch shape — Bootstrap imports once.
6. **§6 — CDN URL strategy.** Should v2 ship at `dist/css/app-v2.min.css` (sketched) or rename to something brand-neutral like `dist/css/next-app-v2.min.css`? Bikeshed-able.
7. **Dark mode deferral horizon.** Hard "no dark mode in v2 ever" or soft "deferred to a later phase, opt-in if a real surface needs it"? Sketch is the soft version.
8. **§5.3 — campaigns-app dogfood scope.** First slice = Campaigns list view (matches the kit). Or pick a smaller slice (e.g., metric strip alone) for faster v2 SCSS iteration? Recommend full list view — that's where the components compound.
9. **Decisions log retraction** (§1). Word the replacement entry however you'd like; sketch above is a starting draft, not a final.

---

## 10. Source files referenced

- `design-system/DESIGN.md` — token spec, decisions log
- `design-system/tokens/{base,dark,light,typography}.css` — split tokens
- `design-system/variants/claude-design-2026-04-19/project/colors_and_type.css` — consolidated bundle (with Sellmore split)
- `design-system/variants/claude-design-2026-04-19/project/ui_kits/campaigns_app/{index.html,README.md}` — v2 admin shell
- `app-ui-framework/src/scss/main.scss` — v1 entry
- `app-ui-framework/src/scss/_custom-variables.scss` — v1 SCSS overrides
- `app-ui-framework/package.json` — v1 build scripts

## 11. What's intentionally NOT in this draft

- **No v2 SCSS files written** (per constraint — Alex needs to react first).
- **No campaigns-app changes** (per constraint — that repo stays read-only until promotion is approved).
- **No DESIGN.md edits** (proposed retraction in §1 is a sketch; Alex/Devin land it after agreement).
- **No CDN re-pointing.** v1 keeps `@latest/dist/css/next-app-ui.min.css` unchanged.

---

*End of draft. Review with Alex; iterate on the Open Questions; then write Phase 0 patches.*
