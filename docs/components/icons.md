---
layout: page-content
group: components
order: 5
title: "Icons"
description: "<a href='https://tabler.io/icons' target='_blank'>Tabler icons</a> comes fully bundled for a large selection of over 5,900 icons for UI elements that need a little extra spark."
---
<div class="card mb-5">
    <div class="card-header">
        <div>
            <h4 class="card-header-title">Icon Usage</h4>
        </div>
    </div>
    <div class="card-body">
        <p>Example Icons</p>
            <i class="ti ti-arrow-up"></i>
            <i class="ti ti-arrow-down"></i>
            <i class="ti ti-activity"></i>
            <i class="ti ti-chevron-left"></i>
            <i class="ti ti-chevron-right"></i>
            <i class="ti ti-search"></i>
    </div>
<div class="card-footer">
    <a class="btn btn-white btn-sm" data-bs-toggle="collapse" href="#dismissableBadges" role="button" aria-expanded="false" aria-controls="dismissableBadges">
    See Markup Example
    </a>
    <div id="dismissableBadges" class="collapse" markdown="1">

```html
<i class="ti ti-arrow-up"></i>
<i class="ti ti-arrow-down"></i>
<i class="ti ti-activity"></i>
<i class="ti ti-chevron-left"></i>
<i class="ti ti-chevron-right"></i>
<i class="ti ti-search"></i>
```

</div>
</div>
</div>
<style>
#iconsCard .icons-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0.5rem;
}
#iconsCard .ti {
    font-size: 2rem;
    color: var(--bs-gray-dark)
}
#iconsCard .item .name {
    font-size: 10px;
}
#iconsCard .icon-square {
aspect-ratio: 1 / 1;
  width: 100%;
  min-width: 0;
  background: transparent;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon-click {
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.icon-click:hover .icon-square {
  box-shadow: 0 0 0 2px var(--bs-blue);
  background: rgba(13,110,253,0.05);
}
@media (max-width: 960px) {
  #iconsCard .icons-grid,
  .icons-grid {
    grid-template-columns: repeat(9, 1fr);
  }
}
@media (max-width: 750px) {
  #iconsCard .icons-grid,
  .icons-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
@media (max-width: 576px) {
  #iconsCard .icons-grid,
  .icons-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
<div class="card mb-5">
    <div class="card-header">
        <div>
            <h4 class="card-header-title">All Icons</h4>
        </div>
    </div>
    <div class="card-body" id="iconsCard">
        <input class="search form-control mb-3" placeholder="Search icons by name or tag..." />
        <div class="icons-grid list">
            {% for icon in site.data.icons %}
                {% assign icon_name = icon[0] %}
                {% assign icon_obj = icon[1] %}
                <div class="item icon-click" data-icon="{{ icon_name }}" data-tags="{{ icon_obj.tags | default: '' | join: ' ' }}">
                    <div class="icon-square border rounded d-flex flex-column align-items-center justify-content-center">
                        <span class="ti ti-{{ icon_name }}"></span>
                        <span class="d-none name">{{ icon_name }}</span>
                    </div>
                </div>
            {% endfor %}
        </div>
        <div class="row align-items-center mt-5">
            <div class="col">
                <ul class="pagination justify-content-end mb-0"></ul>
            </div>
        </div>
    </div>
</div>
<!-- Bootstrap Modal -->
<div class="modal fade" id="iconModal" tabindex="-1" aria-labelledby="iconModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Icon</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex flex-column align-items-center">
        <div id="iconModalPreview" class="" style="font-size:6rem;"></div>
        <div id="iconModalLabel" class="badge bg-secondary-light mb-3"></div>
        <div id="iconModalMeta" class="mb-3"></div>
      </div>
      <div class="modal-footer d-block">
        <button id="iconModalCopy" class="btn btn-white btn-sm w-100">Copy Icon Code</button>
      </div>
    </div>
  </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js"></script>
<script>
//custom JS for icon docs search    
  const cardContainer = document.getElementById('iconsCard');
  const options = {
    listClass: 'list',
    valueNames: [
        'name',
        { name: 'tags', attr: 'data-tags' }
    ],
    page: 144,
    pagination: true
  };
  const iconList = new List(cardContainer, options);
  function updatePagination() {
    const paginationContainer = cardContainer.querySelector('.pagination');
    if (!paginationContainer) return;
    const paginationItems = paginationContainer.querySelectorAll('li');
    paginationItems.forEach((li) => {
      li.classList.add('page-item');
      const a = li.querySelector('a');
      if (a) {
        a.classList.add('page-link');
        a.style.cursor = 'pointer';
      }
      if (li.classList.contains('active')) {
        li.classList.add('active');
      }
    });
  }
  updatePagination();
  iconList.on('updated', updatePagination);
  const paginationContainer = cardContainer.querySelector('.pagination');
  if (paginationContainer) {
    const observer = new MutationObserver(updatePagination);
    observer.observe(paginationContainer, { childList: true, subtree: true });
  }
  let iconModalInstance = null;
  function bindIconClicks() {
    const iconModalLabel = document.getElementById('iconModalLabel');
    const iconModalPreview = document.getElementById('iconModalPreview');
    const iconModalMeta = document.getElementById('iconModalMeta');
    const iconModalCopy = document.getElementById('iconModalCopy');
    document.querySelectorAll('.icon-click').forEach(el => {
      el.onclick = null;
      el.addEventListener('click', function () {
        const iconName = this.getAttribute('data-icon');
        iconModalLabel.textContent = iconName;
        iconModalPreview.innerHTML = `<span class="ti ti-${iconName}" style="font-size:6rem;"></span>`;
        iconModalMeta.innerHTML = `<code>&lt;i class="ti ti-${iconName}"&gt;&lt;/i&gt;</code>`;
        iconModalCopy.onclick = function() {
          navigator.clipboard.writeText(`<i class="ti ti-${iconName}"></i>`);
          iconModalCopy.textContent = "Copied!";
          setTimeout(() => iconModalCopy.textContent = "Copy Icon", 1200);
        };
        // Only create the modal instance once
        if (!iconModalInstance) {
          iconModalInstance = new bootstrap.Modal(document.getElementById('iconModal'));
        }
        iconModalInstance.show();
      });
    });
  }
  // Initial bind
  document.addEventListener('DOMContentLoaded', function () {
    bindIconClicks();
  });

  // Always remove modal-backdrop on modal close
  document.getElementById('iconModal').addEventListener('hidden.bs.modal', function () {
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
  });

  // Re-bind after every List.js update (pagination, search, etc)
  iconList.on('updated', bindIconClicks);
</script>


