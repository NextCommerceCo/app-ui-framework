---
layout: v2-layout
title: "Components"
description: "Seven components lifted from the campaigns_app variant kit. Class-based, JS-free."
permalink: /v2/components/
---

<h1>Components</h1>
<p class="lede">
  Seven surfaces lifted from <a href="https://github.com/NextCommerceCo/design-system/tree/main/variants/claude-design-2026-04-19/project/ui_kits/campaigns_app">design-system/variants/claude-design-2026-04-19/project/ui_kits/campaigns_app/</a>. Class-based, JS-free, all token-pure.
</p>

<p>Each component below renders live against the actual <code>app-v2.min.css</code> shipped from this build. Copy the markup, drop it into your app's HTML, done.</p>

<hr>

<h2 id="sidebar">Sidebar</h2>
<p>Fixed-width 248px sidebar with brand lockup → org picker → grouped nav with inline counts → user footer. Selector: <code>aside.app</code>.</p>

<div class="demo">
  <div class="render contained">
    <iframe src="/v2/admin-shell/" title="Sidebar — full admin shell" style="width: 100%; height: 540px; border: 0; display: block;"></iframe>
  </div>
  <pre><code class="language-html">&lt;aside class="app"&gt;
  &lt;div class="brand"&gt;…brand mark…&lt;/div&gt;

  &lt;div class="orgpick"&gt;
    &lt;div class="logo"&gt;&lt;/div&gt;
    &lt;div class="name"&gt;&lt;b&gt;Org name&lt;/b&gt;&lt;span&gt;slug · LIVE&lt;/span&gt;&lt;/div&gt;
    &lt;svg…/&gt;
  &lt;/div&gt;

  &lt;nav class="nav"&gt;
    &lt;h5&gt;Workspace&lt;/h5&gt;
    &lt;a href="#" class="active"&gt;&lt;svg…/&gt;Campaigns&lt;span class="count"&gt;24&lt;/span&gt;&lt;/a&gt;
    &lt;a href="#"&gt;&lt;svg…/&gt;Orders&lt;span class="count"&gt;1.4k&lt;/span&gt;&lt;/a&gt;
    …
  &lt;/nav&gt;

  &lt;div class="user"&gt;
    &lt;div class="av"&gt;RO&lt;/div&gt;
    &lt;div&gt;&lt;b&gt;User name&lt;/b&gt;&lt;span&gt;Role&lt;/span&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/aside&gt;</code></pre>
</div>

<hr>

<h2 id="pagehead">Page head</h2>
<p>Top-of-page block: breadcrumb crumb → H1 with optional env badge → right-aligned action buttons. Selectors: <code>.pagehead</code>, <code>.crumb</code>, <code>.envbadge</code>, <code>.pageactions</code>.</p>

<div class="demo">
  <div class="render contained">
    <div class="pagehead" style="background: var(--ds-bg-elevated); border-bottom: 1px solid var(--ds-border);">
      <div>
        <div class="crumb"><a href="#">Clearform</a> / Campaigns</div>
        <h1 style="font-size: var(--ds-text-xl); margin: 0;">Campaigns <span class="envbadge">Test mode</span></h1>
      </div>
      <div class="pageactions">
        <button class="btn btn-white">Export</button>
        <button class="btn btn-primary">New campaign</button>
      </div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="pagehead"&gt;
  &lt;div&gt;
    &lt;div class="crumb"&gt;&lt;a href="#"&gt;Clearform&lt;/a&gt; / Campaigns&lt;/div&gt;
    &lt;h1&gt;Campaigns &lt;span class="envbadge"&gt;Test mode&lt;/span&gt;&lt;/h1&gt;
  &lt;/div&gt;
  &lt;div class="pageactions"&gt;
    &lt;button class="btn btn-white"&gt;Export&lt;/button&gt;
    &lt;button class="btn btn-primary"&gt;New campaign&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

<p><strong>Env badge variants:</strong> <span class="envbadge">Test mode</span> (default yellow), <span class="envbadge live">Live</span>, <span class="envbadge draft">Draft</span>. Apply as <code>.envbadge.live</code> / <code>.envbadge.draft</code>.</p>

<hr>

<h2 id="metrics">Metric strip</h2>
<p>4-up KPI strip below the page head. Hairline dividers via <code>gap: 1px</code> grid trick. Selectors: <code>.metrics</code>, <code>.metric</code>, <code>.metric .delta</code>.</p>

<div class="demo">
  <div class="render contained">
    <div class="metrics">
      <div class="metric"><div class="label">Revenue (30d)</div><div class="value">$184,230</div><div class="delta up">↑ 12.4% vs prev</div></div>
      <div class="metric"><div class="label">Orders</div><div class="value">2,417</div><div class="delta up">↑ 8.1%</div></div>
      <div class="metric"><div class="label">AOV</div><div class="value">$76.22</div><div class="delta up">↑ 4.0%</div></div>
      <div class="metric"><div class="label">Failed charges</div><div class="value">47</div><div class="delta down">↑ 2.1% — review routing</div></div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="metrics"&gt;
  &lt;div class="metric"&gt;
    &lt;div class="label"&gt;Revenue (30d)&lt;/div&gt;
    &lt;div class="value"&gt;$184,230&lt;/div&gt;
    &lt;div class="delta up"&gt;↑ 12.4% vs prev&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="metric"&gt;
    &lt;div class="label"&gt;Failed charges&lt;/div&gt;
    &lt;div class="value"&gt;47&lt;/div&gt;
    &lt;div class="delta down"&gt;↑ 2.1% — review routing&lt;/div&gt;
  &lt;/div&gt;
  …
&lt;/div&gt;</code></pre>
</div>

<p><strong>Delta variants:</strong> <code>.delta.up</code> (green), <code>.delta.down</code> (red), <code>.delta.flat</code> (muted).</p>
<p><strong>Strip variants:</strong> <code>.metrics-2</code> / <code>.metrics-3</code> / <code>.metrics-5</code> override column count.</p>

<hr>

<h2 id="filterbar">Filter bar</h2>
<p>Segmented chip filter row with right-aligned mono search. Selectors: <code>.filterbar</code>, <code>.chip</code>, <code>.chip.chip-add</code>, <code>.search</code>.</p>

<div class="demo">
  <div class="render contained">
    <div class="filterbar">
      <button class="chip active">All <span class="mono">24</span></button>
      <button class="chip">Live <span class="mono">8</span></button>
      <button class="chip">Paused <span class="mono">3</span></button>
      <button class="chip">Draft <span class="mono">13</span></button>
      <button class="chip chip-add">+ Add filter</button>
      <div class="search">
        <input type="text" placeholder="Search campaigns…">
      </div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="filterbar"&gt;
  &lt;button class="chip active"&gt;All &lt;span class="mono"&gt;24&lt;/span&gt;&lt;/button&gt;
  &lt;button class="chip"&gt;Live &lt;span class="mono"&gt;8&lt;/span&gt;&lt;/button&gt;
  &lt;button class="chip chip-add"&gt;&lt;svg…/&gt;Add filter&lt;/button&gt;
  &lt;div class="search"&gt;
    &lt;svg…/&gt;
    &lt;input type="text" placeholder="Search…"&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

<hr>

<h2 id="data-table">Data table</h2>
<p>Transactional/admin list. Class is <code>.data</code> (used as <code>&lt;table class="data"&gt;</code>) so it doesn't fight Bootstrap's <code>.table</code>. Inline mono helpers for cells: <code>.mono</code>, <code>.amount</code>. Campaign-cell pattern: <code>.camp</code>. Row actions: <code>.rowactions</code>, <code>.iconbtn</code>.</p>

<div class="demo">
  <div class="render contained" style="padding: 16px;">
    <div class="tablewrap" style="padding: 0;">
      <table class="data">
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Status</th>
            <th>Sessions</th>
            <th>Revenue</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div class="camp"><div class="thumb">CF</div><div><div class="name">Clearform — Serum launch</div><div class="sub">camp_7x4q · landing v2</div></div></div></td>
            <td><span class="stat live">Live</span></td>
            <td class="mono">48,412</td>
            <td class="amount">$92,340.00</td>
            <td><div class="rowactions"><button class="iconbtn">↗</button><button class="iconbtn">⋯</button></div></td>
          </tr>
          <tr>
            <td><div class="camp"><div class="thumb" style="background: linear-gradient(135deg, #22c55e, #16a34a);">RS</div><div><div class="name">Retargeting — Serum 50% off</div><div class="sub">camp_4j8p · upsell bump</div></div></div></td>
            <td><span class="stat paused">Paused</span></td>
            <td class="mono">12,104</td>
            <td class="amount">$14,812.00</td>
            <td><div class="rowactions"><button class="iconbtn">↗</button><button class="iconbtn">⋯</button></div></td>
          </tr>
          <tr>
            <td><div class="camp"><div class="thumb" style="background: linear-gradient(135deg, #f87171, #dc2626);">LQ</div><div><div class="name">Low-inventory quiz funnel</div><div class="sub">camp_1f3r · quiz landing</div></div></div></td>
            <td><span class="stat fail">Routing failed</span></td>
            <td class="mono">842</td>
            <td class="amount">$0.00</td>
            <td><div class="rowactions"><button class="iconbtn">↗</button><button class="iconbtn">⋯</button></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <pre><code class="language-html">&lt;table class="data"&gt;
  &lt;thead&gt;…&lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;
        &lt;div class="camp"&gt;
          &lt;div class="thumb"&gt;CF&lt;/div&gt;
          &lt;div&gt;
            &lt;div class="name"&gt;Clearform — Serum launch&lt;/div&gt;
            &lt;div class="sub"&gt;camp_7x4q · landing v2&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/td&gt;
      &lt;td&gt;&lt;span class="stat live"&gt;Live&lt;/span&gt;&lt;/td&gt;
      &lt;td class="mono"&gt;48,412&lt;/td&gt;
      &lt;td class="amount"&gt;$92,340.00&lt;/td&gt;
      &lt;td&gt;&lt;div class="rowactions"&gt;
        &lt;button class="iconbtn"&gt;…&lt;/button&gt;
      &lt;/div&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
</div>

<hr>

<h2 id="status-pill">Status pill</h2>
<p>Pill with leading dot in matching tone, full border. Specifically <strong>not</strong> a colored-left-border alert (DESIGN.md AI Slop Blacklist item #9).</p>

<div class="demo">
  <div class="render">
    <span class="stat live">Live</span> &nbsp;
    <span class="stat paused">Paused</span> &nbsp;
    <span class="stat draft">Draft</span> &nbsp;
    <span class="stat fail">Routing failed</span> &nbsp;
    <span class="stat pending">Pending</span>
  </div>
  <pre><code class="language-html">&lt;span class="stat live"&gt;Live&lt;/span&gt;
&lt;span class="stat paused"&gt;Paused&lt;/span&gt;
&lt;span class="stat draft"&gt;Draft&lt;/span&gt;
&lt;span class="stat fail"&gt;Routing failed&lt;/span&gt;
&lt;span class="stat pending"&gt;Pending&lt;/span&gt;</code></pre>
</div>

<p><strong>Variants:</strong></p>
<ul>
  <li><code>.stat.live</code> — green (success)</li>
  <li><code>.stat.paused</code> — yellow (warning)</li>
  <li><code>.stat.draft</code> — neutral (muted)</li>
  <li><code>.stat.fail</code> — red (error)</li>
  <li><code>.stat.pending</code> — orange (in progress)</li>
</ul>

<hr>

<h2 id="notice">Notice</h2>
<p>Notice not Alert pattern (DESIGN.md §Component Patterns). Full subtle background + matching border on all sides. Class is <code>.notice</code>; <code>.banner</code> is kept as a kit-back-compat alias.</p>

<div class="demo">
  <div class="render">
    <div class="notice" style="margin: 0 0 12px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
      <span><b>You're in test mode.</b> Transactions here won't charge customers.</span>
      <button class="x" aria-label="Dismiss">×</button>
    </div>
    <div class="notice notice-success" style="margin: 0 0 12px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      <span><b>Live keys active.</b> Transactions are being charged.</span>
    </div>
    <div class="notice notice-warning" style="margin: 0 0 12px;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>
      <span><b>Approaching CB threshold.</b> 0.78% / Visa 0.9%.</span>
    </div>
    <div class="notice notice-danger" style="margin: 0;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
      <span><b>Routing failed.</b> Last 14 transactions returned 5xx — investigate gateway.</span>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="notice"&gt;
  &lt;svg…/&gt;
  &lt;span&gt;&lt;b&gt;Title.&lt;/b&gt; Body text.&lt;/span&gt;
  &lt;button class="x" aria-label="Dismiss"&gt;×&lt;/button&gt;
&lt;/div&gt;

&lt;div class="notice notice-success"&gt;…&lt;/div&gt;
&lt;div class="notice notice-warning"&gt;…&lt;/div&gt;
&lt;div class="notice notice-danger"&gt;…&lt;/div&gt;
&lt;div class="notice notice-pending"&gt;…&lt;/div&gt;</code></pre>
</div>

<hr>

## Bootstrap layer

v2 ships Bootstrap 5.3 grid + utilities + form/button/card/badge/etc. primitives. Use them normally. Bootstrap's `--bs-primary` reads through `var(--ds-primary)` so the brand swap (`<html data-brand="sellmore">`) flows through Bootstrap components too.

```html
<!-- Bootstrap buttons, themed with NEXT or Sellmore primary -->
<button class="btn btn-primary">Primary action</button>
<button class="btn btn-white">Secondary</button>
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-danger">Destructive</button>
```

<div class="demo">
  <div class="render">
    <button class="btn btn-primary">Primary action</button>
    <button class="btn btn-white">Secondary</button>
    <button class="btn btn-outline-primary">Outline</button>
    <button class="btn btn-danger">Destructive</button>
  </div>
</div>
