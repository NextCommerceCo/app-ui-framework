---
layout: page-content
group: components
order: 3
title: "Date Picker"
description: flatpickr.js is an excellent full featured date picker library that comes bundled and styled to work natively. See <a target="_blank" href="https://flatpickr.js.org/examples/">flatpickr.js docs</a> for additional options to when initializing.
---

<div class="card mb-5">
  <div class="card-header">
    <div>
        <h4 class="card-header-title">Date Picker</h4>
    </div>
    <div>
        <div class="btn-group">
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Last 7 Days
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Today</a></li>
                <li><a class="dropdown-item" href="#">Yesterday</a></li>
                <li><a class="dropdown-item" href="#">Last 7 Days</a></li>
                <li><a class="dropdown-item" href="#">Last 30 Days</a></li>
                <li><a class="dropdown-item" href="#">Last 90 Days</a></li>
                <li><a class="dropdown-item" href="#">Last Month</a></li>
                <li><a class="dropdown-item" href="#">Month to Date</a></li>
                <li><a class="dropdown-item" href="#">Quarter to Date</a></li>
            </ul>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Mar 11 - Apr 9
            </button>
            <div class="dropdown-menu dropdown-menu-end" style="width:350px">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                           <div class="form-group">
                                <label class="form-label">Date From</label>
                                <input class="form-control" data-datepicker value="2025-01-01" />
                           </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label class="form-label">Date To</label>
                                <input class="form-control" data-datepicker value="2025-01-01"  />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                              <div class="d-grid mt-3">
                                    <button class="btn btn-sm btn-primary">Apply Date Range</button>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  </div>
    <div class="card-body">
    <p>Initialize a date picker using <code>data-datepicker</code> property on your form input.</p>
    <p>Customize the date picker options by passing valid JSON, such as <code>data-datepicker='{"mode": "range"}'</code>.</p>
        <div class="my-3">
            <label class="form-label">Date Picker Example</label>
            <input class="form-control" data-datepicker  placeholder="Example Date Picker" />
        </div>
        <div class="my-3">
             <label class="form-label">Range Picker Example</label>
            <input class="form-control" data-datepicker='{"mode": "range"}' placeholder="Example Date Range Picker" />
        </div>
    </div>
    <div class="card-footer">
    <a class="btn btn-white btn-sm" data-bs-toggle="collapse" href="#dataPickerExamples" role="button" aria-expanded="false" aria-controls="dataPickerExamples">
    See Markup Example
    </a>
    <div id="dataPickerExamples" class="collapse" markdown="1">

```html

<div class="my-3">
    <label class="form-label">Date Picker Example</label>
    <input class="form-control" data-datepicker  placeholder="Example Date Picker" />
</div>
<div class="my-3">
    <label class="form-label">Range Picker Example</label>
    <input class="form-control" data-datepicker='{"mode": "range"}' placeholder="Example Date Range Picker" />
</div>
```
</div>
</div>
