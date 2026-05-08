---
layout: v2-layout
title: "Components"
description: "Seven app-shell components — sidebar, page head, metric strip, filter bar, data table, status pill, notice. Class-based, JS-free."
permalink: /v2/components/
---

<h1>Components</h1>
<p class="lede">
  Seven app-shell components for building admin / dashboard surfaces on the
  Next Commerce platform. Each renders below against the actual
  <code>app-v2.min.css</code> shipped from this build. Copy the markup, drop it
  into your app's HTML.
</p>

<h2 id="sidebar">Sidebar</h2>
<p>Fixed-width 248px sidebar. Selector: <code>aside.app</code>. Sub-elements: <code>.brand</code>, <code>.orgpick</code>, <code>.nav</code>, <code>.user</code>.</p>

<div class="demo">
  <div class="render contained">
    <div style="display: grid; grid-template-columns: 248px 1fr; height: 540px; background: var(--ds-bg);">
      <aside class="app" style="position: relative; height: 100%;">
        <div class="brand" style="padding: 0 20px 16px;">
          <span style="display: inline-flex; align-items: center; gap: 8px;">
            <span style="width: 22px; height: 22px; border-radius: 5px; background: linear-gradient(135deg, #3c7dff, #79a5ff); display: inline-block;"></span>
            <b style="font-weight: 700; font-size: 15px;">App</b>
          </span>
        </div>

        <div class="orgpick">
          <div class="logo"></div>
          <div class="name"><b>Acme Co</b><span>acme · LIVE</span></div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 15 5 5 5-5M7 9l5-5 5 5"/></svg>
        </div>

        <nav class="nav">
          <h5>Workspace</h5>
          <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>Dashboard</a>
          <a href="#" class="active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-5"/></svg>Reports<span class="count">24</span></a>
          <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Customers</a>

          <h5>Develop</h5>
          <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/></svg>API keys</a>
          <a href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Logs</a>
        </nav>

        <div class="user">
          <div class="av">RO</div>
          <div><b>Rina Okafor</b><span>Admin</span></div>
        </div>
      </aside>
      <div></div>
    </div>
  </div>
  <pre><code class="language-html">&lt;aside class="app"&gt;
  &lt;div class="brand"&gt; … &lt;/div&gt;

  &lt;div class="orgpick"&gt;
    &lt;div class="logo"&gt;&lt;/div&gt;
    &lt;div class="name"&gt;
      &lt;b&gt;Acme Co&lt;/b&gt;
      &lt;span&gt;acme · LIVE&lt;/span&gt;
    &lt;/div&gt;
    &lt;svg /&gt;
  &lt;/div&gt;

  &lt;nav class="nav"&gt;
    &lt;h5&gt;Workspace&lt;/h5&gt;
    &lt;a href="#" class="active"&gt;
      &lt;svg /&gt;Reports&lt;span class="count"&gt;24&lt;/span&gt;
    &lt;/a&gt;
  &lt;/nav&gt;

  &lt;div class="user"&gt;
    &lt;div class="av"&gt;RO&lt;/div&gt;
    &lt;div&gt;&lt;b&gt;Rina Okafor&lt;/b&gt;&lt;span&gt;Admin&lt;/span&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/aside&gt;</code></pre>
</div>

<h2 id="pagehead">Page head</h2>
<p>Top-of-page block: breadcrumb → H1 with optional env badge → right-aligned action buttons. Selectors: <code>.pagehead</code>, <code>.crumb</code>, <code>.envbadge</code>, <code>.pageactions</code>.</p>

<div class="demo">
  <div class="render contained">
    <div class="pagehead">
      <div>
        <div class="crumb"><a href="#">Acme Co</a> / Reports</div>
        <h1 style="font-size: var(--ds-text-xl); margin: 0;">Reports <span class="envbadge">Test mode</span></h1>
      </div>
      <div class="pageactions">
        <button class="btn btn-white">Export</button>
        <button class="btn btn-primary">New report</button>
      </div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="pagehead"&gt;
  &lt;div&gt;
    &lt;div class="crumb"&gt;&lt;a href="#"&gt;Acme Co&lt;/a&gt; / Reports&lt;/div&gt;
    &lt;h1&gt;Reports &lt;span class="envbadge"&gt;Test mode&lt;/span&gt;&lt;/h1&gt;
  &lt;/div&gt;
  &lt;div class="pageactions"&gt;
    &lt;button class="btn btn-white"&gt;Export&lt;/button&gt;
    &lt;button class="btn btn-primary"&gt;New report&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

**Env badge variants:** <span class="envbadge">Test mode</span> (default yellow) · <span class="envbadge live">Live</span> · <span class="envbadge draft">Draft</span>. Apply as `.envbadge.live` / `.envbadge.draft`.

<h2 id="metrics">Metric strip</h2>
<p>4-up KPI strip. Hairline dividers via <code>gap: 1px</code>. Selectors: <code>.metrics</code>, <code>.metric</code>, <code>.metric .delta</code>.</p>

<div class="demo">
  <div class="render contained">
    <div class="metrics">
      <div class="metric"><div class="label">Revenue (30d)</div><div class="value">$184,230</div><div class="delta up">↑ 12.4% vs prev</div></div>
      <div class="metric"><div class="label">Orders</div><div class="value">2,417</div><div class="delta up">↑ 8.1%</div></div>
      <div class="metric"><div class="label">AOV</div><div class="value">$76.22</div><div class="delta up">↑ 4.0%</div></div>
      <div class="metric"><div class="label">Failed charges</div><div class="value">47</div><div class="delta down">↑ 2.1%</div></div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="metrics"&gt;
  &lt;div class="metric"&gt;
    &lt;div class="label"&gt;Revenue (30d)&lt;/div&gt;
    &lt;div class="value"&gt;$184,230&lt;/div&gt;
    &lt;div class="delta up"&gt;↑ 12.4% vs prev&lt;/div&gt;
  &lt;/div&gt;
  …
&lt;/div&gt;</code></pre>
</div>

**Delta variants:** `.delta.up` (green) · `.delta.down` (red) · `.delta.flat` (muted)
**Strip variants:** `.metrics-2` · `.metrics-3` · `.metrics-5` (override column count)

<h2 id="filterbar">Filter bar</h2>
<p>Segmented chip filter row + right-aligned search. Selectors: <code>.filterbar</code>, <code>.chip</code>, <code>.chip.chip-add</code>, <code>.search</code>.</p>

<div class="demo">
  <div class="render contained">
    <div class="filterbar">
      <button class="chip active">All <span class="mono">24</span></button>
      <button class="chip">Live <span class="mono">8</span></button>
      <button class="chip">Paused <span class="mono">3</span></button>
      <button class="chip">Draft <span class="mono">13</span></button>
      <button class="chip chip-add">+ Add filter</button>
      <div class="search">
        <input type="text" placeholder="Search…">
      </div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="filterbar"&gt;
  &lt;button class="chip active"&gt;All &lt;span class="mono"&gt;24&lt;/span&gt;&lt;/button&gt;
  &lt;button class="chip"&gt;Live &lt;span class="mono"&gt;8&lt;/span&gt;&lt;/button&gt;
  &lt;button class="chip chip-add"&gt;+ Add filter&lt;/button&gt;
  &lt;div class="search"&gt;
    &lt;input type="text" placeholder="Search…"&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

<h2 id="data-table">Data table</h2>
<p>Selector: <code>table.data</code>. Inline helpers for cells: <code>.mono</code> (IDs/codes only), <code>.amount</code> (money). Campaign-cell pattern: <code>.camp</code>. Row actions: <code>.rowactions</code>, <code>.iconbtn</code>.</p>

<div class="demo">
  <div class="render contained" style="padding: 16px;">
    <table class="data">
      <thead>
        <tr>
          <th>Item</th>
          <th>Status</th>
          <th>Sessions</th>
          <th>Revenue</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="camp">
              <div class="thumb">A1</div>
              <div>
                <div class="name">Spring serum launch</div>
                <div class="sub">item_7x4q · landing v2</div>
              </div>
            </div>
          </td>
          <td><span class="stat live">Live</span></td>
          <td>48,412</td>
          <td class="amount">$92,340.00</td>
          <td><div class="rowactions"><button class="iconbtn">↗</button><button class="iconbtn">⋯</button></div></td>
        </tr>
        <tr>
          <td>
            <div class="camp">
              <div class="thumb" style="background: linear-gradient(135deg, #22c55e, #16a34a);">A2</div>
              <div>
                <div class="name">Retargeting funnel</div>
                <div class="sub">item_4j8p · upsell bump</div>
              </div>
            </div>
          </td>
          <td><span class="stat paused">Paused</span></td>
          <td>12,104</td>
          <td class="amount">$14,812.00</td>
          <td><div class="rowactions"><button class="iconbtn">↗</button><button class="iconbtn">⋯</button></div></td>
        </tr>
        <tr>
          <td>
            <div class="camp">
              <div class="thumb" style="background: linear-gradient(135deg, #f87171, #dc2626);">A3</div>
              <div>
                <div class="name">Quiz funnel</div>
                <div class="sub">item_1f3r · quiz landing</div>
              </div>
            </div>
          </td>
          <td><span class="stat fail">Routing failed</span></td>
          <td>842</td>
          <td class="amount">$0.00</td>
          <td><div class="rowactions"><button class="iconbtn">↗</button><button class="iconbtn">⋯</button></div></td>
        </tr>
      </tbody>
    </table>
  </div>
  <pre><code class="language-html">&lt;table class="data"&gt;
  &lt;thead&gt;…&lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;
        &lt;div class="camp"&gt;
          &lt;div class="thumb"&gt;A1&lt;/div&gt;
          &lt;div&gt;
            &lt;div class="name"&gt;Spring serum launch&lt;/div&gt;
            &lt;div class="sub"&gt;item_7x4q · landing v2&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/td&gt;
      &lt;td&gt;&lt;span class="stat live"&gt;Live&lt;/span&gt;&lt;/td&gt;
      &lt;td&gt;48,412&lt;/td&gt;
      &lt;td class="amount"&gt;$92,340.00&lt;/td&gt;
      &lt;td&gt;&lt;div class="rowactions"&gt;
        &lt;button class="iconbtn"&gt;…&lt;/button&gt;
      &lt;/div&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
</div>

**Cell helpers:** `.amount` (money — Inter, tabular-nums, right-aligned) · `.mono` (only when the value is genuinely an identifier or code).

<h2 id="status-pill">Status pill</h2>
<p>Pill with leading dot in matching tone, full border. Use for state cells in tables and inline anywhere. Selector: <code>.stat</code> with one of the variants below.</p>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <span class="stat live">Live</span>
      <span class="stat paused">Paused</span>
      <span class="stat draft">Draft</span>
      <span class="stat fail">Routing failed</span>
      <span class="stat pending">Pending</span>
    </div>
  </div>
  <pre><code class="language-html">&lt;span class="stat live"&gt;Live&lt;/span&gt;
&lt;span class="stat paused"&gt;Paused&lt;/span&gt;
&lt;span class="stat draft"&gt;Draft&lt;/span&gt;
&lt;span class="stat fail"&gt;Routing failed&lt;/span&gt;
&lt;span class="stat pending"&gt;Pending&lt;/span&gt;</code></pre>
</div>

| Variant | Use |
|---|---|
| `.stat.live` | Active / success |
| `.stat.paused` | Warning / paused |
| `.stat.draft` | Neutral / not started |
| `.stat.fail` | Error / failed |
| `.stat.pending` | In progress / queued |

<h2 id="notice">Notice</h2>
<p>Full subtle background + matching border on all sides. <strong>Never</strong> a colored-left-border alert. Selector: <code>.notice</code> (or <code>.banner</code> alias) plus an optional variant class.</p>

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
      <span><b>Approaching threshold.</b> Review configuration before next batch runs.</span>
    </div>
    <div class="notice notice-danger" style="margin: 0;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
      <span><b>Routing failed.</b> Last 14 transactions returned 5xx — investigate gateway.</span>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="notice"&gt;
  &lt;svg /&gt;
  &lt;span&gt;&lt;b&gt;Title.&lt;/b&gt; Body text.&lt;/span&gt;
  &lt;button class="x" aria-label="Dismiss"&gt;×&lt;/button&gt;
&lt;/div&gt;

&lt;div class="notice notice-success"&gt;…&lt;/div&gt;
&lt;div class="notice notice-warning"&gt;…&lt;/div&gt;
&lt;div class="notice notice-danger"&gt;…&lt;/div&gt;
&lt;div class="notice notice-pending"&gt;…&lt;/div&gt;</code></pre>
</div>

<h2>Bootstrap layer</h2>
<p>Bootstrap 5.3 grid + utilities + form/button/card/badge primitives ship in the bundle. Use them normally. Bootstrap's <code>--bs-primary</code> reads through <code>var(--ds-primary)</code> so the brand swap (<code>&lt;html data-brand="sellmore"&gt;</code>) flows through Bootstrap components too.</p>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <button class="btn btn-primary">Primary action</button>
      <button class="btn btn-white">Secondary</button>
      <button class="btn btn-outline-primary">Outline</button>
      <button class="btn btn-danger">Destructive</button>
    </div>
  </div>
  <pre><code class="language-html">&lt;button class="btn btn-primary"&gt;Primary action&lt;/button&gt;
&lt;button class="btn btn-white"&gt;Secondary&lt;/button&gt;
&lt;button class="btn btn-outline-primary"&gt;Outline&lt;/button&gt;
&lt;button class="btn btn-danger"&gt;Destructive&lt;/button&gt;</code></pre>
</div>
