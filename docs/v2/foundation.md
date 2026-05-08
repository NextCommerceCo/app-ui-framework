---
layout: v2-layout
title: "Foundation tokens"
description: "Color, typography, spacing, radius, shadow — the foundation tokens that drive everything else."
permalink: /v2/foundation/
---

<h1>Foundation tokens</h1>
<p class="lede">
  CSS custom properties defined on <code>:root</code>. Every component
  composes against these. Reference any of them in your own CSS as
  <code>var(--ds-name)</code>.
</p>

## Brand

<div class="swatches">
  <div class="swatch">
    <div class="chip" style="background: var(--ds-primary);"></div>
    <div class="name">--ds-primary</div>
    <div class="value">#3c7dff (NEXT)</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-primary-light);"></div>
    <div class="name">--ds-primary-light</div>
    <div class="value">#79a5ff</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-primary-muted);"></div>
    <div class="name">--ds-primary-muted</div>
    <div class="value">rgba(60, 125, 255, 0.08)</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: #fff; border-color: var(--ds-primary-border);"></div>
    <div class="name">--ds-primary-border</div>
    <div class="value">rgba(60, 125, 255, 0.20)</div>
  </div>
</div>

Sellmore brand swap (opt-in via `<html data-brand="sellmore">`):

<div class="swatches">
  <div class="swatch">
    <div class="chip" style="background: #3366ff;"></div>
    <div class="name">--ds-primary</div>
    <div class="value">#3366ff (Sellmore)</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: #6080ff;"></div>
    <div class="name">--ds-primary-light</div>
    <div class="value">#6080ff</div>
  </div>
</div>

## Surfaces

<div class="swatches">
  <div class="swatch">
    <div class="chip" style="background: var(--ds-bg); border: 1px solid var(--ds-border-2);"></div>
    <div class="name">--ds-bg</div>
    <div class="value">#fafafa — page background</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-bg-elevated); border: 1px solid var(--ds-border-2);"></div>
    <div class="name">--ds-bg-elevated</div>
    <div class="value">#ffffff — panels, cards</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-bg-2); border: 1px solid var(--ds-border-2);"></div>
    <div class="name">--ds-bg-2</div>
    <div class="value">#f4f4f5</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-bg-3); border: 1px solid var(--ds-border-2);"></div>
    <div class="name">--ds-bg-3</div>
    <div class="value">#f4f4f5 — table headers</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-bg-hover); border: 1px solid var(--ds-border-2);"></div>
    <div class="name">--ds-bg-hover</div>
    <div class="value">#f4f7fb — hover state</div>
  </div>
</div>

## Borders

<div class="swatches">
  <div class="swatch">
    <div class="chip" style="background: #fff; border-color: var(--ds-border);"></div>
    <div class="name">--ds-border</div>
    <div class="value">#e4e4e7</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: #fff; border-color: var(--ds-border-2);"></div>
    <div class="name">--ds-border-2</div>
    <div class="value">#d4d4d8</div>
  </div>
</div>

## Text (Zinc scale)

<div class="swatches">
  <div class="swatch">
    <div class="chip" style="background: var(--ds-txt);"></div>
    <div class="name">--ds-txt</div>
    <div class="value">#09090b — primary</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-txt-2);"></div>
    <div class="name">--ds-txt-2</div>
    <div class="value">#27272a — secondary</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-txt-3);"></div>
    <div class="name">--ds-txt-3</div>
    <div class="value">#71717a — muted</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-txt-4);"></div>
    <div class="name">--ds-txt-4</div>
    <div class="value">#a1a1aa — disabled</div>
  </div>
</div>

## Semantic colors

<div class="swatches">
  <div class="swatch">
    <div class="chip" style="background: var(--ds-green-bg); border-color: var(--ds-green-border);"></div>
    <div class="name">--ds-green</div>
    <div class="value">#22c55e — success</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-yellow-bg); border-color: var(--ds-yellow-border);"></div>
    <div class="name">--ds-yellow</div>
    <div class="value">#f59e0b — warning</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-red-bg); border-color: var(--ds-red-border);"></div>
    <div class="name">--ds-red</div>
    <div class="value">#f87171 — error</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: var(--ds-orange-bg); border-color: var(--ds-orange-border);"></div>
    <div class="name">--ds-orange</div>
    <div class="value">#fb923c — pending</div>
  </div>
</div>

Each semantic color has matching `-bg` (8% rgba) and `-border` (20% rgba) variants in light mode. Used by status pills, notice variants, table cell highlights.

## Typography

<div class="scale">
  <div class="scale-row"><span class="lbl">text-3xl</span><span class="px">36px</span><span class="sample" style="font-size: var(--ds-text-3xl); font-weight: 700;">Page title — H1</span></div>
  <div class="scale-row"><span class="lbl">text-2xl</span><span class="px">30px</span><span class="sample" style="font-size: var(--ds-text-2xl); font-weight: 700;">Section heading</span></div>
  <div class="scale-row"><span class="lbl">text-xl</span><span class="px">24px</span><span class="sample" style="font-size: var(--ds-text-xl); font-weight: 600;">Page-head H1</span></div>
  <div class="scale-row"><span class="lbl">text-lg</span><span class="px">19px</span><span class="sample" style="font-size: var(--ds-text-lg); font-weight: 600;">Card title</span></div>
  <div class="scale-row"><span class="lbl">text-base</span><span class="px">16px</span><span class="sample" style="font-size: var(--ds-text-base);">Body text — long-form</span></div>
  <div class="scale-row"><span class="lbl">text-sm</span><span class="px">14px</span><span class="sample" style="font-size: var(--ds-text-sm);">Body text (default)</span></div>
  <div class="scale-row"><span class="lbl">text-xs</span><span class="px">13px</span><span class="sample" style="font-size: var(--ds-text-xs);">UI labels, table cells, captions</span></div>
  <div class="scale-row"><span class="lbl">text-2xs</span><span class="px">12px</span><span class="sample" style="font-size: var(--ds-text-2xs);">Badges, tags, metadata</span></div>
  <div class="scale-row"><span class="lbl">text-3xs</span><span class="px">11px</span><span class="sample" style="font-size: var(--ds-text-3xs); text-transform: uppercase; letter-spacing: 0.06em; color: var(--ds-txt-3);">FINE PRINT, NAV LABELS</span></div>
</div>

**Stack:**

```css
--ds-font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--ds-font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

**Body base size:** 14px (`--ds-text-sm`). Larger sizes for headings, smaller for UI labels and metadata.

## Spacing (4px base)

<div class="spacing-track">
  <div class="spacing-row"><span class="lbl">space-2xs</span><span class="px">2px</span><div class="bar" style="width: 2px;"></div></div>
  <div class="spacing-row"><span class="lbl">space-xs</span><span class="px">4px</span><div class="bar" style="width: 4px;"></div></div>
  <div class="spacing-row"><span class="lbl">space-sm</span><span class="px">8px</span><div class="bar" style="width: 8px;"></div></div>
  <div class="spacing-row"><span class="lbl">space-md</span><span class="px">12px</span><div class="bar" style="width: 12px;"></div></div>
  <div class="spacing-row"><span class="lbl">space-base</span><span class="px">16px</span><div class="bar" style="width: 16px;"></div></div>
  <div class="spacing-row"><span class="lbl">space-lg</span><span class="px">24px</span><div class="bar" style="width: 24px;"></div></div>
  <div class="spacing-row"><span class="lbl">space-xl</span><span class="px">32px</span><div class="bar" style="width: 32px;"></div></div>
  <div class="spacing-row"><span class="lbl">space-2xl</span><span class="px">48px</span><div class="bar" style="width: 48px;"></div></div>
  <div class="spacing-row"><span class="lbl">space-3xl</span><span class="px">64px</span><div class="bar" style="width: 64px;"></div></div>
</div>

## Radius

<div class="swatches">
  <div class="swatch">
    <div class="chip" style="background: #fff; border-radius: var(--ds-radius-sm);"></div>
    <div class="name">--ds-radius-sm</div>
    <div class="value">6px</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: #fff; border-radius: var(--ds-radius-md);"></div>
    <div class="name">--ds-radius-md</div>
    <div class="value">8px</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: #fff; border-radius: var(--ds-radius-lg);"></div>
    <div class="name">--ds-radius-lg</div>
    <div class="value">12px</div>
  </div>
  <div class="swatch">
    <div class="chip" style="background: #fff; border-radius: var(--ds-radius-full); height: 32px; width: 32px;"></div>
    <div class="name">--ds-radius-full</div>
    <div class="value">9999px (pills, avatars)</div>
  </div>
</div>

## Shadow (flat aesthetic)

DESIGN.md §Shadow uses borders over drop-shadow. Two tokens for the rare cases shadow is the right call:

```css
--ds-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06);
--ds-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
```
