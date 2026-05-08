---
layout: v2-layout
title: "Overview"
description: "Reference portal for app-ui-framework v2 — the Next Commerce design language for app/dashboard surfaces."
permalink: /v2/
---

<h1>app-ui-framework <span class="badge bg-primary-soft" style="vertical-align: middle; font-size: var(--ds-text-2xs);">v2</span></h1>
<p class="lede">
  The Next Commerce design language for app/dashboard surfaces. Light-first.
  Consumes <code>--ds-*</code> tokens from <code>design-system/</code>. Bootstrap 5.3 is the
  grid/utility layer; component aesthetics come from the kit lifted into
  <code>src/scss/components/</code>. This portal IS the dogfood — every page
  here loads <code>app-v2.min.css</code>.
</p>

<div class="hero">
  <div class="hero-meta">
    <span class="label">Live preview · admin shell rendered with v2 CSS</span>
    <a href="/v2/admin-shell/">Open full preview →</a>
  </div>
  <div class="frame">
    <iframe src="/v2/admin-shell/" title="v2 admin shell preview" loading="lazy"></iframe>
  </div>
</div>

## Quick start

Drop one CSS link into your app's `<head>`:

```html
<link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/app-v2.min.css"
      rel="stylesheet" crossorigin="anonymous">
```

That's it. Bootstrap 5.3 grid + utilities + form/button/card primitives are bundled in. The seven v2 components (sidebar, pagehead, metric strip, filter bar, data table, status pill, notice) are class-based — no JS required.

## Brand override

NEXT is the default brand. Switch to Sellmore at runtime with one attribute on `<html>`:

```html
<html data-brand="sellmore"> ... </html>
```

This swaps `--ds-primary` from `#3c7dff` (NEXT) to `#3366ff` (Sellmore) and the muted/border/ring variants too. No SCSS rebuild required.

## Light-first, dark deferred

App UI is **light-only**. Prime is light-only across all surfaces, and a dark sub-app would clash on every nav transition. v2 inverts the docs-channel design system's dark-first structure: `:root` carries light tokens, dark mode is deferred (opt-in via `[data-theme="dark"]` if/when a real surface need justifies it).

The token *values* match `design-system/tokens/light.css` exactly. Three documented deviations:

- `--ds-bg: #fafafa` / `--ds-bg-elevated: #ffffff` — page slightly off-white, panels pure white. Provides panel-elevation cue without shadows.
- `$font-size-base: 14px` (`--ds-text-sm`) — app density vs docs' 16px.
- `:root` carries light tokens — structural inversion (Prime constraint).

Everything else (typography stack, type scale, spacing, radius, semantic colors, AI Slop Blacklist, Notice-not-Alert) carries unchanged.

## What's in v2

<div class="row" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 16px 0;">
  <div class="card">
    <div class="card-header"><h4 class="card-header-title">Foundation</h4></div>
    <div class="card-body">
      <p style="margin: 0 0 12px;">Color, typography, spacing, radius, shadow, layout — all sourced from <code>--ds-*</code>.</p>
      <a href="/v2/foundation/" class="btn btn-primary btn-sm">View tokens →</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header"><h4 class="card-header-title">Components</h4></div>
    <div class="card-body">
      <p style="margin: 0 0 12px;">Seven surfaces lifted from the campaigns_app variant kit. Class-based, JS-free.</p>
      <a href="/v2/components/" class="btn btn-primary btn-sm">View components →</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header"><h4 class="card-header-title">Admin shell (kitchen sink)</h4></div>
    <div class="card-body">
      <p style="margin: 0 0 12px;">Full campaigns-style admin surface rendered with v2 CSS. Compare against the kit source.</p>
      <a href="/v2/admin-shell/" class="btn btn-primary btn-sm">Open shell →</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header"><h4 class="card-header-title">Migration plan</h4></div>
    <div class="card-body">
      <p style="margin: 0 0 12px;">Why v2 exists, drift report, file structure, decisions log.</p>
      <a href="https://github.com/NextCommerceCo/app-ui-framework/blob/main/docs/_drafts/migration-v2.md" class="btn btn-white btn-sm">Read on GitHub →</a>
    </div>
  </div>
</div>

## Versioning + v1 coexistence

v1 (`next-app-ui.min.css`) ships unchanged at the same CDN URL it always did. v2 ships at a *new* URL (`app-v2.min.css`) so existing v1 consumers aren't disturbed. Migrate on your own schedule.

## Source

- Migration plan: [`docs/_drafts/migration-v2.md`](https://github.com/NextCommerceCo/app-ui-framework/blob/main/docs/_drafts/migration-v2.md)
- v2 SCSS: [`src/scss/`](https://github.com/NextCommerceCo/app-ui-framework/tree/main/src/scss)
- Components lifted from: [`design-system/variants/claude-design-2026-04-19/project/ui_kits/campaigns_app/`](https://github.com/NextCommerceCo/design-system/tree/main/variants/claude-design-2026-04-19/project/ui_kits/campaigns_app)
- Decisions log: [`design-system/DESIGN.md`](https://github.com/NextCommerceCo/design-system/blob/main/DESIGN.md#decisions-log) (entries dated 2026-05-08)
