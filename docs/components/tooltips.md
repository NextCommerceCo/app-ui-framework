---
layout: page-content
group: components
order: 7
title: "Tooltips"
description: Please read the official <a href="https://getbootstrap.com/docs/5.2/components/tooltips/" target="_blank">Bootstrap documentation</a> for a full list of options.

---

  <div class="card mb-5">
    <div class="card-header">
        <div>
        <h4 class="card-header-title">Tooltips</h4>
        </div>
    </div>
    <div class="card-body">
     <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
        Tooltip on top
        </button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
        Tooltip on right
        </button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
        Tooltip on bottom
        </button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
        Tooltip on left
        </button>
    </div>
    <div class="card-footer">
    <a class="btn btn-white btn-sm" data-bs-toggle="collapse" href="#tooltipExample" role="button" aria-expanded="false" aria-controls="tooltipExample">
    See Markup Example
    </a>
    <div id="tooltipExample" class="collapse" markdown="1">

```html

<button type="button" class="btn btn-" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
    Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
    Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
    Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
    Tooltip on left
</button>
```

</div>
</div>
</div>
