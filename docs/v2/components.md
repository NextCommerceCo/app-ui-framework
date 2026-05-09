---
layout: v2-layout
title: "Components"
description: "Component reference for app-ui-framework v2 — Layout, Actions, Feedback, Data, App shell."
permalink: /v2/components/
---

<h1>Components</h1>
<p class="lede">
  Components for building admin / dashboard surfaces. Bootstrap 5.3 grid + utilities + form/button/card primitives are bundled in. Each component below renders live against the shipped <code>app-v2.min.css</code>.
</p>

<!-- ════════════════════════════════════════════════════════ -->
<!-- LAYOUT                                                   -->
<!-- ════════════════════════════════════════════════════════ -->

<h2 id="cards">Cards</h2>
<p>Container surface. Bootstrap card with v2 token treatment — elevated panel, 1px border, 8px radius, subtle drop shadow for material lift.</p>

<h3 style="font-size: var(--ds-text-base); margin-top: 20px;">Basic</h3>

<div class="demo">
  <div class="render bg">
    <div class="card">
      <div class="card-header">
        <h4 class="card-header-title">Card title</h4>
      </div>
      <div class="card-body">
        <p style="margin: 0;">Body content sits in the card-body. Border-color, radius, and padding all read from <code>--ds-*</code> tokens.</p>
      </div>
      <div class="card-footer">Footer</div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="card"&gt;
  &lt;div class="card-header"&gt;
    &lt;h4 class="card-header-title"&gt;Card title&lt;/h4&gt;
  &lt;/div&gt;
  &lt;div class="card-body"&gt;
    &lt;p&gt;Body content.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="card-footer"&gt;Footer&lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

<h3 style="font-size: var(--ds-text-base); margin-top: 24px;">Header with actions</h3>

<div class="demo">
  <div class="render bg">
    <div class="card">
      <div class="card-header">
        <div>
          <h4 class="card-header-title">Recent activity</h4>
          <div class="card-header-subtitle">Last 24 hours · 47 events</div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-white btn-sm"><i class="ti ti-filter"></i> Filter</button>
          <button class="btn btn-primary btn-sm"><i class="ti ti-plus"></i> New</button>
        </div>
      </div>
      <div class="card-body">
        <p style="margin: 0; color: var(--ds-txt-2);">First child of <code>.card-header</code> takes <code>flex: 1</code>, so right-aligned actions sit at the right edge automatically.</p>
      </div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="card"&gt;
  &lt;div class="card-header"&gt;
    &lt;div&gt;
      &lt;h4 class="card-header-title"&gt;Recent activity&lt;/h4&gt;
      &lt;div class="card-header-subtitle"&gt;Last 24 hours · 47 events&lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;button class="btn btn-white btn-sm"&gt;&lt;i class="ti ti-filter"&gt;&lt;/i&gt; Filter&lt;/button&gt;
      &lt;button class="btn btn-primary btn-sm"&gt;&lt;i class="ti ti-plus"&gt;&lt;/i&gt; New&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="card-body"&gt; … &lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

<h3 style="font-size: var(--ds-text-base); margin-top: 24px;">Kitchen sink</h3>
<p>Card composing multiple primitives — title with badge, subtitle, header actions, embedded data table, footer with pagination.</p>

<div class="demo">
  <div class="render bg">
    <div class="card">
      <div class="card-header">
        <div>
          <h4 class="card-header-title">Active campaigns <span class="badge bg-success-light">8 live</span></h4>
          <div class="card-header-subtitle">Acme Co · last 30 days</div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-white btn-sm"><i class="ti ti-filter"></i> Filter</button>
          <button class="btn btn-white btn-sm"><i class="ti ti-download"></i> Export</button>
        </div>
      </div>
      <div class="card-body" style="padding: 0;">
        <table class="data" style="border: 0; border-radius: 0; margin: 0;">
          <thead>
            <tr>
              <th>Campaign</th>
              <th>Status</th>
              <th class="num">Sessions</th>
              <th class="num">Revenue</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div class="camp"><div class="thumb">A1</div><div><div class="name">Spring serum launch</div><div class="sub">item_7x4q</div></div></div></td>
              <td><span class="stat live">Live</span></td>
              <td class="num">48,412</td>
              <td class="amount">$92,340.00</td>
              <td><div class="rowactions"><button class="iconbtn"><i class="ti ti-external-link"></i></button></div></td>
            </tr>
            <tr>
              <td><div class="camp"><div class="thumb" style="background: linear-gradient(135deg, #22c55e, #16a34a);">A2</div><div><div class="name">Retargeting funnel</div><div class="sub">item_4j8p</div></div></div></td>
              <td><span class="stat paused">Paused</span></td>
              <td class="num">12,104</td>
              <td class="amount">$14,812.00</td>
              <td><div class="rowactions"><button class="iconbtn"><i class="ti ti-external-link"></i></button></div></td>
            </tr>
            <tr>
              <td><div class="camp"><div class="thumb" style="background: linear-gradient(135deg, #a78bfa, #8b5cf6);">A3</div><div><div class="name">TikTok video hero</div><div class="sub">item_2k8w</div></div></div></td>
              <td><span class="stat draft">Draft</span></td>
              <td class="num" style="color: var(--ds-txt-3);">—</td>
              <td class="amount" style="color: var(--ds-txt-3);">—</td>
              <td><div class="rowactions"><button class="iconbtn"><i class="ti ti-external-link"></i></button></div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer" style="display: flex; align-items: center; justify-content: space-between;">
        <span>Showing 3 of 8</span>
        <nav>
          <ul class="pagination pagination-sm" style="margin: 0;">
            <li class="page-item disabled"><a class="page-link" href="#"><i class="ti ti-chevron-left"></i></a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#"><i class="ti ti-chevron-right"></i></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="card"&gt;
  &lt;div class="card-header"&gt;
    &lt;div&gt;
      &lt;h4 class="card-header-title"&gt;Active campaigns &lt;span class="badge bg-success-light"&gt;8 live&lt;/span&gt;&lt;/h4&gt;
      &lt;div class="card-header-subtitle"&gt;Acme Co · last 30 days&lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;button class="btn btn-white btn-sm"&gt;Filter&lt;/button&gt;
      &lt;button class="btn btn-white btn-sm"&gt;Export&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="card-body" style="padding: 0;"&gt;
    &lt;table class="data"&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th&gt;Campaign&lt;/th&gt;&lt;th&gt;Status&lt;/th&gt;
          &lt;th class="num"&gt;Sessions&lt;/th&gt;&lt;th class="num"&gt;Revenue&lt;/th&gt;
          &lt;th&gt;&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt; … &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/div&gt;
  &lt;div class="card-footer"&gt;
    &lt;span&gt;Showing 3 of 8&lt;/span&gt;
    &lt;nav&gt;&lt;ul class="pagination pagination-sm"&gt; … &lt;/ul&gt;&lt;/nav&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

<h2 id="tables">Tables</h2>
<p>Standard Bootstrap table with v2 token treatment. For dense transactional/admin lists, prefer the <a href="#data-table">Data table</a> component.</p>

<div class="demo">
  <div class="render bg">
    <table class="table" style="background: var(--ds-bg-elevated); border: 1px solid var(--ds-border); border-radius: var(--ds-radius-md); overflow: hidden; margin: 0;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Last seen</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Rina Okafor</td><td>Admin</td><td>2 minutes ago</td></tr>
        <tr><td>Marcus Hill</td><td>Editor</td><td>1 hour ago</td></tr>
        <tr><td>Yuki Tanaka</td><td>Viewer</td><td>3 days ago</td></tr>
      </tbody>
    </table>
  </div>
  <pre><code class="language-html">&lt;table class="table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Role&lt;/th&gt;&lt;th&gt;Last seen&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;…&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
</div>

<!-- ════════════════════════════════════════════════════════ -->
<!-- ACTIONS                                                  -->
<!-- ════════════════════════════════════════════════════════ -->

<h2 id="buttons">Buttons</h2>
<p>Bootstrap buttons themed via v2 tokens. <code>.btn-white</code> is the canonical secondary — neutral surface, line-strong border. Full Bootstrap color palette + outline variants are available.</p>

<h3 style="font-size: var(--ds-text-base); margin-top: 20px;">Sizes</h3>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <button type="button" class="btn btn-primary btn-lg">Large button</button>
      <button type="button" class="btn btn-primary">Standard button</button>
      <button type="button" class="btn btn-primary btn-sm">Small button</button>
    </div>
  </div>
  <pre><code class="language-html">&lt;button type="button" class="btn btn-primary btn-lg"&gt;Large button&lt;/button&gt;
&lt;button type="button" class="btn btn-primary"&gt;Standard button&lt;/button&gt;
&lt;button type="button" class="btn btn-primary btn-sm"&gt;Small button&lt;/button&gt;</code></pre>
</div>

<h3 style="font-size: var(--ds-text-base); margin-top: 24px;">Colors</h3>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-white">White</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
    </div>
  </div>
  <pre><code class="language-html">&lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-white"&gt;White&lt;/button&gt;
&lt;button type="button" class="btn btn-secondary"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-success"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-danger"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-warning"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-info"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-light"&gt;Light&lt;/button&gt;
&lt;button type="button" class="btn btn-dark"&gt;Dark&lt;/button&gt;
&lt;button type="button" class="btn btn-link"&gt;Link&lt;/button&gt;</code></pre>
</div>

<h3 style="font-size: var(--ds-text-base); margin-top: 24px;">Outline colors</h3>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
    </div>
  </div>
  <pre><code class="language-html">&lt;button type="button" class="btn btn-outline-primary"&gt;Primary&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-secondary"&gt;Secondary&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-success"&gt;Success&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-danger"&gt;Danger&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-warning"&gt;Warning&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-info"&gt;Info&lt;/button&gt;
&lt;button type="button" class="btn btn-outline-dark"&gt;Dark&lt;/button&gt;</code></pre>
</div>

<h3 style="font-size: var(--ds-text-base); margin-top: 24px;">With icon</h3>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <button class="btn btn-primary"><i class="ti ti-plus"></i> New</button>
      <button class="btn btn-white"><i class="ti ti-download"></i> Export</button>
      <button class="btn btn-white"><i class="ti ti-filter"></i> Filter</button>
      <button class="btn btn-outline-danger"><i class="ti ti-trash"></i> Delete</button>
      <button class="btn btn-primary btn-sm"><i class="ti ti-edit"></i> Edit</button>
    </div>
  </div>
  <pre><code class="language-html">&lt;button class="btn btn-primary"&gt;
  &lt;i class="ti ti-plus"&gt;&lt;/i&gt; New
&lt;/button&gt;</code></pre>
</div>

<h3 style="font-size: var(--ds-text-base); margin-top: 24px;">Disabled</h3>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <button class="btn btn-primary" disabled>Primary</button>
      <button class="btn btn-white" disabled>Secondary</button>
      <button class="btn btn-outline-primary" disabled>Outline</button>
    </div>
  </div>
  <pre><code class="language-html">&lt;button class="btn btn-primary" disabled&gt;Primary&lt;/button&gt;
&lt;button class="btn btn-white" disabled&gt;Secondary&lt;/button&gt;</code></pre>
</div>

<h2 id="forms">Forms</h2>
<p>Bootstrap form controls themed via v2 tokens. Inputs sit on white over the page's <code>--ds-bg</code>.</p>

<div class="demo">
  <div class="render">
    <form style="max-width: 480px; display: grid; gap: 12px;">
      <div>
        <label for="ex-email" class="form-label">Email</label>
        <input type="email" id="ex-email" class="form-control" placeholder="you@example.com">
      </div>
      <div>
        <label for="ex-role" class="form-label">Role</label>
        <select id="ex-role" class="form-select">
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
      </div>
      <div>
        <label for="ex-notes" class="form-label">Notes</label>
        <textarea id="ex-notes" class="form-control" rows="2" placeholder="Add a note…"></textarea>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="ex-tos">
        <label class="form-check-label" for="ex-tos">I agree to the terms</label>
      </div>
    </form>
  </div>
  <pre><code class="language-html">&lt;label for="email" class="form-label"&gt;Email&lt;/label&gt;
&lt;input type="email" id="email" class="form-control"&gt;

&lt;label for="role" class="form-label"&gt;Role&lt;/label&gt;
&lt;select id="role" class="form-select"&gt;
  &lt;option&gt;Admin&lt;/option&gt;
&lt;/select&gt;

&lt;textarea class="form-control" rows="2"&gt;&lt;/textarea&gt;

&lt;div class="form-check"&gt;
  &lt;input class="form-check-input" type="checkbox" id="tos"&gt;
  &lt;label class="form-check-label" for="tos"&gt;I agree&lt;/label&gt;
&lt;/div&gt;</code></pre>
</div>

<h2 id="nav-tabs">Nav tabs</h2>
<p>Bootstrap nav tabs. Active tab gets a primary-colored bottom border. Use for sub-navigation inside a card or page section.</p>

<div class="demo">
  <div class="render">
    <ul class="nav nav-tabs">
      <li class="nav-item"><a class="nav-link active" href="#">Overview</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Activity</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>
    </ul>
  </div>
  <pre><code class="language-html">&lt;ul class="nav nav-tabs"&gt;
  &lt;li class="nav-item"&gt;&lt;a class="nav-link active" href="#"&gt;Overview&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;Activity&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;Settings&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
</div>

<h2 id="pagination">Pagination</h2>

<div class="demo">
  <div class="render">
    <nav>
      <ul class="pagination" style="margin: 0;">
        <li class="page-item"><a class="page-link" href="#"><i class="ti ti-chevron-left"></i></a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#"><i class="ti ti-chevron-right"></i></a></li>
      </ul>
    </nav>
  </div>
  <pre><code class="language-html">&lt;nav&gt;
  &lt;ul class="pagination"&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;
      &lt;i class="ti ti-chevron-left"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item"&gt;&lt;a class="page-link" href="#"&gt;1&lt;/a&gt;&lt;/li&gt;
    &lt;li class="page-item active"&gt;&lt;a class="page-link" href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
    …
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
</div>

<!-- ════════════════════════════════════════════════════════ -->
<!-- FEEDBACK                                                 -->
<!-- ════════════════════════════════════════════════════════ -->

<h2 id="notice">Notice</h2>
<p>Inline message with full subtle background + matching border on all sides. Use for banners, dismissible alerts, and contextual feedback.</p>

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

<h2 id="status-pill">Status pill</h2>
<p>Pill with leading dot in matching tone, full border. Use for state in tables and inline anywhere.</p>

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

<h2 id="badges">Badges</h2>
<p>Compact counts and tag-style labels for headings, buttons, and inline lists. Light variants are the default — they sit comfortably alongside <a href="#status-pill">status pills</a>. Solid variants are available for stronger emphasis. Pill shape (round) is opt-in.</p>

<h3 style="font-size: var(--ds-text-base); margin-top: 20px;">Light (default)</h3>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <span class="badge bg-primary-light">Primary</span>
      <span class="badge bg-secondary-light">Secondary</span>
      <span class="badge bg-success-light">Success</span>
      <span class="badge bg-info-light">Info</span>
      <span class="badge bg-warning-light">Warning</span>
      <span class="badge bg-danger-light">Danger</span>
    </div>
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-top: 16px;">
      <h4 style="margin: 0; font-size: var(--ds-text-base); font-weight: var(--ds-weight-semibold);">Messages <span class="badge bg-primary-light">12</span></h4>
      <h4 style="margin: 0; font-size: var(--ds-text-base); font-weight: var(--ds-weight-semibold);">Open issues <span class="badge bg-info-light">5</span></h4>
      <h4 style="margin: 0; font-size: var(--ds-text-base); font-weight: var(--ds-weight-semibold);">Failed <span class="badge bg-danger-light">3</span></h4>
    </div>
  </div>
  <pre><code class="language-html">&lt;span class="badge bg-primary-light"&gt;Primary&lt;/span&gt;
&lt;span class="badge bg-secondary-light"&gt;Secondary&lt;/span&gt;
&lt;span class="badge bg-success-light"&gt;Success&lt;/span&gt;
&lt;span class="badge bg-info-light"&gt;Info&lt;/span&gt;
&lt;span class="badge bg-warning-light"&gt;Warning&lt;/span&gt;
&lt;span class="badge bg-danger-light"&gt;Danger&lt;/span&gt;

&lt;h4&gt;Messages &lt;span class="badge bg-primary-light"&gt;12&lt;/span&gt;&lt;/h4&gt;</code></pre>
</div>

<h3 style="font-size: var(--ds-text-base); margin-top: 24px;">Solid (high-emphasis)</h3>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <span class="badge bg-primary">Primary</span>
      <span class="badge bg-secondary">Secondary</span>
      <span class="badge bg-success">Success</span>
      <span class="badge bg-info">Info</span>
      <span class="badge bg-warning">Warning</span>
      <span class="badge bg-danger">Danger</span>
    </div>
  </div>
  <pre><code class="language-html">&lt;span class="badge bg-primary"&gt;Primary&lt;/span&gt;
&lt;span class="badge bg-success"&gt;Success&lt;/span&gt;
&lt;span class="badge bg-info"&gt;Info&lt;/span&gt;</code></pre>
</div>

<h3 style="font-size: var(--ds-text-base); margin-top: 24px;">Pill shape</h3>
<p>Add <code>.rounded-pill</code> for fully-round badges — useful for inline counts where a ticked label would feel boxy.</p>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
      <span class="badge bg-primary-light rounded-pill">12</span>
      <span class="badge bg-success-light rounded-pill">Live</span>
      <span class="badge bg-warning-light rounded-pill">3 pending</span>
      <span class="badge bg-info-light rounded-pill">New</span>
    </div>
  </div>
  <pre><code class="language-html">&lt;span class="badge bg-primary-light rounded-pill"&gt;12&lt;/span&gt;
&lt;span class="badge bg-success-light rounded-pill"&gt;Live&lt;/span&gt;</code></pre>
</div>

<h2 id="loaders">Loaders</h2>
<p>Bootstrap spinners.</p>

<div class="demo">
  <div class="render">
    <div style="display: flex; gap: 24px; align-items: center;">
      <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading…</span></div>
      <div class="spinner-border text-secondary spinner-border-sm" role="status"><span class="visually-hidden">Loading…</span></div>
      <div class="spinner-grow text-primary" role="status"><span class="visually-hidden">Loading…</span></div>
      <button class="btn btn-primary" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style="vertical-align: -2px; margin-right: 6px;"></span>
        Saving…
      </button>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="spinner-border text-primary" role="status"&gt;
  &lt;span class="visually-hidden"&gt;Loading…&lt;/span&gt;
&lt;/div&gt;

&lt;div class="spinner-border spinner-border-sm" role="status"&gt;…&lt;/div&gt;
&lt;div class="spinner-grow text-primary" role="status"&gt;…&lt;/div&gt;

&lt;button class="btn btn-primary" disabled&gt;
  &lt;span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"&gt;&lt;/span&gt;
  Saving…
&lt;/button&gt;</code></pre>
</div>

<h2 id="tooltips">Tooltips</h2>
<p>Bootstrap tooltips. Requires Bootstrap JS bundle and explicit initialization.</p>

<div class="demo">
  <div class="render">
    <button type="button" class="btn btn-white" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Hover me</button>
  </div>
  <pre><code class="language-html">&lt;button type="button" class="btn btn-white"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"&gt;
  Hover me
&lt;/button&gt;

&lt;script&gt;
  // Initialize tooltips on page load
  const triggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  triggers.forEach(el =&gt; new bootstrap.Tooltip(el));
&lt;/script&gt;</code></pre>
</div>

<!-- ════════════════════════════════════════════════════════ -->
<!-- DATA                                                     -->
<!-- ════════════════════════════════════════════════════════ -->

<h2 id="metrics">Metric strip</h2>
<p>4-up KPI strip. Hairline dividers via <code>gap: 1px</code>.</p>

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
**Strip variants:** `.metrics-2` · `.metrics-3` · `.metrics-5`

<h2 id="data-table">Data table</h2>
<p>Dense transactional list. Selector: <code>table.data</code>. Inline cell helpers: <code>.amount</code> (money) and <code>.mono</code> (IDs/codes).</p>

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
          <td><div class="camp"><div class="thumb">A1</div><div><div class="name">Spring serum launch</div><div class="sub">item_7x4q · landing v2</div></div></div></td>
          <td><span class="stat live">Live</span></td>
          <td>48,412</td>
          <td class="amount">$92,340.00</td>
          <td><div class="rowactions"><button class="iconbtn"><i class="ti ti-external-link"></i></button><button class="iconbtn"><i class="ti ti-dots"></i></button></div></td>
        </tr>
        <tr>
          <td><div class="camp"><div class="thumb" style="background: linear-gradient(135deg, #22c55e, #16a34a);">A2</div><div><div class="name">Retargeting funnel</div><div class="sub">item_4j8p · upsell bump</div></div></div></td>
          <td><span class="stat paused">Paused</span></td>
          <td>12,104</td>
          <td class="amount">$14,812.00</td>
          <td><div class="rowactions"><button class="iconbtn"><i class="ti ti-external-link"></i></button><button class="iconbtn"><i class="ti ti-dots"></i></button></div></td>
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
      &lt;td&gt;&lt;div class="rowactions"&gt;…&lt;/div&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
</div>

<h2 id="filterbar">Filter bar</h2>

<div class="demo">
  <div class="render contained">
    <div class="filterbar">
      <button class="chip active">All <span class="mono">24</span></button>
      <button class="chip">Live <span class="mono">8</span></button>
      <button class="chip">Paused <span class="mono">3</span></button>
      <button class="chip chip-add"><i class="ti ti-plus"></i> Add filter</button>
      <div class="search">
        <i class="ti ti-search"></i>
        <input type="text" placeholder="Search…">
      </div>
    </div>
  </div>
  <pre><code class="language-html">&lt;div class="filterbar"&gt;
  &lt;button class="chip active"&gt;All &lt;span class="mono"&gt;24&lt;/span&gt;&lt;/button&gt;
  &lt;button class="chip"&gt;Live &lt;span class="mono"&gt;8&lt;/span&gt;&lt;/button&gt;
  &lt;button class="chip chip-add"&gt;
    &lt;i class="ti ti-plus"&gt;&lt;/i&gt; Add filter
  &lt;/button&gt;
  &lt;div class="search"&gt;
    &lt;i class="ti ti-search"&gt;&lt;/i&gt;
    &lt;input type="text" placeholder="Search…"&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
</div>

<h2 id="timeline">Timeline</h2>
<p>Vertical event list with dots and connector line. Use for activity/audit/log surfaces.</p>

<div class="demo">
  <div class="render">
    <ul class="timeline" style="max-width: 480px;">
      <li class="timeline-item">
        <div class="timeline-dot filled green"></div>
        <div class="timeline-content">
          <div class="timeline-meta">2 min ago · Rina Okafor</div>
          <div class="timeline-title">Payment captured</div>
          <p>$240.00 · ch_3PaB7zABCDEF</p>
        </div>
      </li>
      <li class="timeline-item">
        <div class="timeline-dot blue"></div>
        <div class="timeline-content">
          <div class="timeline-meta">14 min ago · System</div>
          <div class="timeline-title">Webhook delivered</div>
          <p>checkout.session.completed · 200 OK</p>
        </div>
      </li>
      <li class="timeline-item">
        <div class="timeline-dot yellow"></div>
        <div class="timeline-content">
          <div class="timeline-meta">1 hour ago · Marcus Hill</div>
          <div class="timeline-title">Status changed to Paused</div>
          <p>Manual override pending review.</p>
        </div>
      </li>
      <li class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-meta">3 days ago · System</div>
          <div class="timeline-title">Resource created</div>
        </div>
      </li>
    </ul>
  </div>
  <pre><code class="language-html">&lt;ul class="timeline"&gt;
  &lt;li class="timeline-item"&gt;
    &lt;div class="timeline-dot filled green"&gt;&lt;/div&gt;
    &lt;div class="timeline-content"&gt;
      &lt;div class="timeline-meta"&gt;2 min ago · Rina Okafor&lt;/div&gt;
      &lt;div class="timeline-title"&gt;Payment captured&lt;/div&gt;
      &lt;p&gt;$240.00 · ch_3PaB...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  …
&lt;/ul&gt;</code></pre>
</div>

**Dot variants:** outline (default), `.filled` (solid). Color: `.green` · `.yellow` · `.red` · `.blue`. Combine, e.g. `<div class="timeline-dot filled green"></div>`.

<h2 id="charts">Charts</h2>
<p>Bring your own chart library. Recommended: <a href="https://www.chartjs.org/">Chart.js</a>. Use the <code>--ds-*</code> tokens for series colors so charts inherit brand + light-mode treatment.</p>

```javascript
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Revenue',
      data: [12, 19, 14, 22, 28],
      borderColor: getComputedStyle(document.documentElement).getPropertyValue('--ds-primary'),
      backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--ds-primary-muted'),
      fill: true,
      tension: 0.35,
    }],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { color: getComputedStyle(document.documentElement).getPropertyValue('--ds-border') } },
    },
  },
});
```

Wrap the canvas in a fixed-height container so it sizes correctly on resize:

```html
<div style="position: relative; height: 240px;">
  <canvas id="my-chart"></canvas>
</div>
```

<h2 id="icons">Icons</h2>
<p><a href="https://tabler.io/icons">Tabler icons</a> ship with the bundle — 5,000+ outline icons. Use the <code>ti ti-*</code> class on an <code>&lt;i&gt;</code> tag.</p>

<div class="demo">
  <div class="render">
    <div style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 12px; font-size: 22px; color: var(--ds-txt-2);">
      <div style="text-align: center;"><i class="ti ti-home"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">home</div></div>
      <div style="text-align: center;"><i class="ti ti-user"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">user</div></div>
      <div style="text-align: center;"><i class="ti ti-settings"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">settings</div></div>
      <div style="text-align: center;"><i class="ti ti-search"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">search</div></div>
      <div style="text-align: center;"><i class="ti ti-bell"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">bell</div></div>
      <div style="text-align: center;"><i class="ti ti-plus"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">plus</div></div>
      <div style="text-align: center;"><i class="ti ti-check"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">check</div></div>
      <div style="text-align: center;"><i class="ti ti-x"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">x</div></div>
      <div style="text-align: center;"><i class="ti ti-arrow-up"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">arrow-up</div></div>
      <div style="text-align: center;"><i class="ti ti-arrow-down"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">arrow-down</div></div>
      <div style="text-align: center;"><i class="ti ti-trash"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">trash</div></div>
      <div style="text-align: center;"><i class="ti ti-edit"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">edit</div></div>
      <div style="text-align: center;"><i class="ti ti-download"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">download</div></div>
      <div style="text-align: center;"><i class="ti ti-external-link"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">external-link</div></div>
      <div style="text-align: center;"><i class="ti ti-dots"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">dots</div></div>
      <div style="text-align: center;"><i class="ti ti-chevron-right"></i><div style="font-size: 11px; color: var(--ds-txt-3); font-family: var(--ds-font-mono); margin-top: 4px;">chevron-right</div></div>
    </div>
  </div>
  <pre><code class="language-html">&lt;i class="ti ti-home"&gt;&lt;/i&gt;
&lt;i class="ti ti-user"&gt;&lt;/i&gt;
&lt;i class="ti ti-settings"&gt;&lt;/i&gt;

&lt;!-- Inside a button --&gt;
&lt;button class="btn btn-primary"&gt;
  &lt;i class="ti ti-plus"&gt;&lt;/i&gt; New
&lt;/button&gt;

&lt;!-- Sized inline --&gt;
&lt;i class="ti ti-bell" style="font-size: 18px;"&gt;&lt;/i&gt;</code></pre>
</div>

<p>Browse the full set at <a href="https://tabler.io/icons">tabler.io/icons</a>. Class name is <code>ti-{slug}</code> where the slug matches the icon page on the site.</p>

<!-- ════════════════════════════════════════════════════════ -->
<!-- APP SHELL                                                -->
<!-- ════════════════════════════════════════════════════════ -->

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
          <i class="ti ti-selector" style="color: var(--ds-txt-3); font-size: 14px;"></i>
        </div>

        <nav class="nav">
          <h5>Workspace</h5>
          <a href="#"><i class="ti ti-layout-dashboard"></i>Dashboard</a>
          <a href="#" class="active"><i class="ti ti-chart-line"></i>Reports<span class="count">24</span></a>
          <a href="#"><i class="ti ti-users"></i>Customers</a>

          <h5>Develop</h5>
          <a href="#"><i class="ti ti-key"></i>API keys</a>
          <a href="#"><i class="ti ti-list-search"></i>Logs</a>
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
    &lt;i class="ti ti-selector"&gt;&lt;/i&gt;
  &lt;/div&gt;

  &lt;nav class="nav"&gt;
    &lt;h5&gt;Workspace&lt;/h5&gt;
    &lt;a href="#" class="active"&gt;
      &lt;i class="ti ti-chart-line"&gt;&lt;/i&gt;
      Reports&lt;span class="count"&gt;24&lt;/span&gt;
    &lt;/a&gt;
  &lt;/nav&gt;

  &lt;div class="user"&gt;
    &lt;div class="av"&gt;RO&lt;/div&gt;
    &lt;div&gt;&lt;b&gt;Rina Okafor&lt;/b&gt;&lt;span&gt;Admin&lt;/span&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/aside&gt;</code></pre>
</div>

<h2 id="pagehead">Page head</h2>
<p>Top-of-page block: breadcrumb → H1 with optional env badge → right-aligned action buttons.</p>

<div class="demo">
  <div class="render contained">
    <div class="pagehead">
      <div>
        <div class="crumb"><a href="#">Acme Co</a> / Reports</div>
        <h1 style="font-size: var(--ds-text-xl); margin: 0;">Reports <span class="envbadge">Test mode</span></h1>
      </div>
      <div class="pageactions">
        <button class="btn btn-white"><i class="ti ti-download"></i> Export</button>
        <button class="btn btn-primary"><i class="ti ti-plus"></i> New report</button>
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

**Env badge variants:** <span class="envbadge">Test mode</span> · <span class="envbadge live">Live</span> · <span class="envbadge draft">Draft</span> — apply as `.envbadge.live` / `.envbadge.draft`.
