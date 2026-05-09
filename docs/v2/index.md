---
layout: v2-layout
title: "Getting started"
description: "App UI Framework — design system reference for apps built on the Next Commerce platform."
permalink: /v2/
---

<h1>App UI Framework</h1>
<p class="lede">
  Primitives for admin and dashboard surfaces. Bootstrap 5.3 underneath,
  light-first, drop-in via CDN.
</p>

## Install

Add one CSS link to your app's `<head>`:

```html
<link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/app-v2.min.css"
      rel="stylesheet" crossorigin="anonymous">
```

That's it. If you also use Bootstrap JS (modals, dropdowns, tabs), include the bundle the same way:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

## Pin a version

`@latest` follows main. For production, pin to a release:

```html
<link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@v2.0.0/dist/css/app-v2.min.css"
      rel="stylesheet" crossorigin="anonymous">
```

Releases: [github.com/NextCommerceCo/app-ui-framework/releases](https://github.com/NextCommerceCo/app-ui-framework/releases)

## Base layout

A typical app uses a fixed sidebar + main content area. Drop this skeleton into your `<body>`:

```html
<body style="margin: 0; display: grid; grid-template-columns: var(--ds-sidebar-w) minmax(0, 1fr); min-height: 100vh; background: var(--ds-bg);">

  <aside class="app">
    <!-- brand · org picker · nav · user footer -->
  </aside>

  <main class="app">
    <div class="pagehead"> … </div>
    <div class="metrics"> … </div>
    <div class="filterbar"> … </div>
    <div class="tablewrap">
      <table class="data"> … </table>
    </div>
  </main>

</body>
```

Each component is documented on the [Components](/v2/components/) page with copy-pasteable markup.

## What ships

- **Bootstrap 5.3** — grid, utilities, forms, buttons, cards, badges, dropdowns, modals, offcanvas, spinners, tooltips
- **Inter + JetBrains Mono** — loaded from Google Fonts, no extra include needed
- **Tabler icons** — 5,000+ outline icons via `<i class="ti ti-*">` ([reference](/v2/components/#icons))
- **`--ds-*` design tokens** — color, type, spacing, radius, shadow ([reference](/v2/foundation/))
- **App-shell components** — sidebar, page head, metric strip, filter bar, data table, status pill, notice, timeline ([reference](/v2/components/))

## Compatibility

The previous version of this framework (`next-app-ui.min.css`) continues to ship at its existing URL with no changes. v2 is additive — it ships at a new URL, so existing apps consume v1 untouched. Migrate at your own pace.

```html
<!-- v1 (no changes) -->
<link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/next-app-ui.min.css"
      rel="stylesheet" crossorigin="anonymous">

<!-- v2 -->
<link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/app-v2.min.css"
      rel="stylesheet" crossorigin="anonymous">
```
