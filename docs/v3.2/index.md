---
layout: v3-2-layout
title: "Next Commerce Design System — v3.2"
description: Performance Commerce Command Center — proposed-design integration on the v3 base.
permalink: /v3.2/
---

<div class="op-shell">
  <aside class="op-rail">
    <div class="op-rail__brand"><span class="op-rail__dot"></span> Next Commerce</div>

    <div class="op-rail__group">Operate</div>
    <a class="op-rail__link is-active" href="#"><i class="ti ti-credit-card"></i> Payments</a>
    <a class="op-rail__link" href="#"><i class="ti ti-shopping-cart"></i> Orders</a>
    <a class="op-rail__link" href="#"><i class="ti ti-repeat"></i> Subscriptions</a>
    <a class="op-rail__link" href="#"><i class="ti ti-shield-half"></i> Disputes</a>

    <div class="op-rail__group">Grow</div>
    <a class="op-rail__link" href="#"><i class="ti ti-rocket"></i> Campaigns</a>
    <a class="op-rail__link" href="#"><i class="ti ti-building-store"></i> Stores</a>
    <a class="op-rail__link" href="#"><i class="ti ti-puzzle"></i> Apps</a>

    <div class="op-rail__spacer"></div>
    <button id="themeToggle" class="op-rail__toggle" data-theme="light"><i class="ti ti-moon"></i> <span data-theme-label>Dark mode</span></button>
  </aside>

  <main class="op-main">
    <header class="op-command-bar">
      <div>
        <h1 class="op-command-bar__title">Payments &middot; Transactions</h1>
        <p class="op-command-bar__sub">All stores &middot; last 30 days</p>
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-white btn-sm"><i class="ti ti-download"></i> Export</button>
        <button class="btn btn-primary btn-sm"><i class="ti ti-plus"></i> New payout</button>
      </div>
    </header>

    <div class="op-canvas">
      <div class="op-section-label">Today</div>
      <div class="op-metrics mb-4">
        <div class="op-metric">
          <div class="op-metric__label">GMV</div>
          <div class="op-metric__value">$248,910</div>
          <div class="op-metric__delta is-up">&#9650; 12.4% vs prior</div>
        </div>
        <div class="op-metric">
          <div class="op-metric__label">Auth rate</div>
          <div class="op-metric__value">94.2%</div>
          <div class="op-metric__delta is-up">&#9650; 0.8 pts</div>
        </div>
        <div class="op-metric">
          <div class="op-metric__label">Open disputes</div>
          <div class="op-metric__value">7</div>
          <div class="op-metric__delta is-down">&#9660; 3 new today</div>
        </div>
        <div class="op-metric">
          <div class="op-metric__label">Sub. recovery</div>
          <div class="op-metric__value">81.5%</div>
          <div class="op-metric__delta is-up">&#9650; 2.1 pts</div>
        </div>
      </div>

      <div class="row g-4 mb-4">
        <div class="col-lg-8">
          <div class="card h-100">
            <div class="card-header">
              <div>
                <h4 class="card-header-title">Recent transactions</h4>
                <p class="card-header-subtitle">Authorized &amp; settled across all gateways</p>
              </div>
              <span class="op-status op-status--success">Live</span>
            </div>
            <div class="table-responsive">
              <table class="table table-sm table-hover mb-0">
                <thead>
                  <tr>
                    <th>Transaction</th>
                    <th>Customer</th>
                    <th>Gateway</th>
                    <th>Status</th>
                    <th class="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#" class="op-value">txn_8841207</a></td>
                    <td>Maya Chen<br><span class="text-muted">maya@example.com</span></td>
                    <td>Adyen</td>
                    <td><span class="op-status op-status--success">Settled</span></td>
                    <td class="text-end op-money">$184.00</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="op-value">txn_8841198</a></td>
                    <td>Liam Ortega<br><span class="text-muted">liam@example.com</span></td>
                    <td>Adyen</td>
                    <td><span class="op-status op-status--warning">Pending</span></td>
                    <td class="text-end op-money">$1,299.00</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="op-value">txn_8841173</a></td>
                    <td>Priya Nair<br><span class="text-muted">priya@example.com</span></td>
                    <td>Klarna</td>
                    <td><span class="op-status op-status--risk">Disputed</span></td>
                    <td class="text-end op-money">$642.50</td>
                  </tr>
                  <tr>
                    <td><a href="#" class="op-value">txn_8841150</a></td>
                    <td>Noah Weber<br><span class="text-muted">noah@example.com</span></td>
                    <td>Adyen</td>
                    <td><span class="op-status op-status--neutral">Refunded</span></td>
                    <td class="text-end op-money">$59.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="op-premium mb-4">
            <div class="op-premium__label">Rolling reserve released</div>
            <div class="op-premium__value">$42,180</div>
            <div class="op-premium__hint">Cleared to available balance &middot; 2 hours ago</div>
          </div>
          <div class="card">
            <div class="card-header"><h4 class="card-header-title">Payout summary</h4></div>
            <div class="card-body">
              <div class="d-flex justify-content-between py-2 border-bottom">
                <span class="text-muted">Available</span><span class="op-money">$118,402.10</span>
              </div>
              <div class="d-flex justify-content-between py-2 border-bottom">
                <span class="text-muted">In transit</span><span class="op-money">$36,910.00</span>
              </div>
              <div class="d-flex justify-content-between py-2">
                <span class="text-muted">Reserved</span><span class="op-money">$12,500.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header"><h4 class="card-header-title">Payout settings</h4></div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Payout schedule</label>
              <select class="form-select form-select-sm">
                <option>Daily</option><option selected>Weekly</option><option>Monthly</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label">Minimum threshold</label>
              <input type="text" class="form-control form-control-sm op-value" value="$1,000.00">
            </div>
          </div>
        </div>
      </div>

      <div class="op-save-bar">
        <span class="op-save-bar__hint">2 unsaved changes</span>
        <div class="d-flex gap-2">
          <button class="btn btn-white btn-sm">Discard</button>
          <button class="btn btn-primary btn-sm">Save changes</button>
        </div>
      </div>
    </div>
  </main>
</div>
