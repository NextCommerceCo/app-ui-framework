---
layout: page-content
group: components
order: 3
title: "Cards"
description: Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options. Please read the official <a href="https://getbootstrap.com/docs/5.2/components/card/" target="_blank">Bootstrap documentation</a> for a full list of options.

---

<div class="card mb-5">
    <div class="card-header">
        <div>
        <h4 class="card-header-title">Card with Header Actions</h4>
        </div>
    </div>
    <div class="card-body">

<div class="card">
    <div class="card-header">
        <div>
            <h4 class="card-header-title">Card header with Actions</h4>
            <p class="card-header-subtitle">Card header subtitle <a href="#">Link</a></p>
        </div>
        <div class="d-flex">
        <a href="#" class="btn btn-white btn-sm me-2">
            Example Action
        </a>
        <div class="dropdown">
            <button class="btn btn-sm btn-white dropdown-toggle" type="button"
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                More Actions
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
        </div>
    </div>
    <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div class="card-footer">
    <a href="#" class="btn btn-primary">Action</a>
    </div>
</div>

</div>
    <div class="card-footer">
    <a class="btn btn-white btn-sm" data-bs-toggle="collapse" href="#lightBadges" role="button" aria-expanded="false" aria-controls="lightBadges">
    See Markup Example
    </a>
<div class="collapse" markdown="1" id="lightBadges">

```html

<div class="card">
    <div class="card-header">
        <div>
            <h4 class="card-header-title">Card header with Actions</h4>
            <p class="card-header-subtitle">Card header subtitle <a href="#">Link</a></p>
        </div>
        <div class="d-flex">
        <a href="#" class="btn btn-white btn-sm me-2">
            Example Action
        </a>
        <div class="dropdown">
            <button class="btn btn-sm btn-white dropdown-toggle" type="button"
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                More Actions
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
        </div>
    </div>
    <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div class="card-footer">
    <a href="#" class="btn btn-primary">Action</a>
    </div>
</div>
```

</div>
</div>
</div>

<div class="card mb-5">
    <div class="card-header">
        <div>
        <h4 class="card-header-title">Card with Kitchen Sink</h4>
        </div>
    </div>
    <div class="card-body">

<div class="card">
    <div class="card-header">
        <div class="row align-items-center">
            <div class="col-auto pe-0">
                <i class="ti ti-search text-muted"></i>
            </div>
            <div class="col px-2">
                <form>
                    <input type="search" class="form-control form-control-flush search" placeholder="Search by order number...">
                </form>
            </div>
            <div class="col-auto">
                <div class="d-flex">
                <a href="#" class="btn btn-white btn-sm me-2">
                    Example Action
                </a>
                <div class="dropdown">
                    <button class="btn btn-sm btn-white dropdown-toggle" type="button"
                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        More Actions
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-header">
        <div class="row card-header-widgets">
            <div class="col-lg-2 col-sm-6 col-xs-12 px-3 py-2">
                <div class="row justify-content-between align-items-end">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Active Vistors
                        </h6>
                    </div>
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark" id="total_sales" data-currency="USD">57</span>
                    </div>
                    <div class="col-auto">
                        <span class="pulse-beacon"></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Unique Visitors</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">3,245</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-success h5"><span class="ti ti-arrow-up"></span>87.2%</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Carts Created</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">3,245</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-success h5"><span class="ti ti-arrow-up"></span>17.2%</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Sales</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">$12,245</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-success h5"><span class="ti ti-arrow-up"></span>23.2%</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Conversion Rate</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">80.5%</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-success h5"><span class="ti ti-arrow-up"></span>3.2%</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">AOV</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">$122.23</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-danger h5"><span class="ti ti-arrow-down"></span>3.2%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-body py-2">
        <div>
            <span class="badge bg-secondary-light badge-dismissible">Status: Open <button type="button" class="btn-close"></button></span>
            <span class="badge bg-secondary-light badge-dismissible">Payment Status: Pending <button type="button" class="btn-close"></button></span>
            <span class="badge bg-secondary-light badge-dismissible">Fulfillment Status: Unfulfilled, On Hold <button type="button" class="btn-close"></button></span>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table card-table table-sm ">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="card-footer">
        <div class="row align-items-center">
            <div class="col">
                <h4 class="m-0">Results 39</h4>
            </div>
            <div class="col">
                <ul class="pagination justify-content-end mb-0">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <span class="ti ti-chevrons-left"></span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <span class="ti ti-chevron-left"></span>
                        </a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <span class="ti ti-chevron-right"></span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <span class="ti ti-chevrons-right"></span>
                        </a>
                    </li>
            </ul>
            </div>
        </div>
    </div>
</div>
</div>
<div class="card-footer">
    <a class="btn btn-white btn-sm" data-bs-toggle="collapse" href="#dismissableBadges" role="button" aria-expanded="false" aria-controls="dismissableBadges">
    See Markup Example
    </a>
    <div id="dismissableBadges" class="collapse" markdown="1">

```html
<div class="card">
    <div class="card-header">
        <div class="row align-items-center">
            <div class="col-auto pe-0">
                <i class="ti ti-search text-muted"></i>
            </div>
            <div class="col px-2">
                <form>
                    <input type="search" class="form-control form-control-flush search" placeholder="Search by order number...">
                </form>
            </div>
            <div class="col-auto">
                <div class="d-flex">
                <a href="#" class="btn btn-white btn-sm me-2">
                    Example Action
                </a>
                <div class="dropdown">
                    <button class="btn btn-sm btn-white dropdown-toggle" type="button"
                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        More Actions
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-header">
        <div class="row card-header-widgets">
            <div class="col-lg-2 col-sm-6 col-xs-12 px-3 py-2">
                <div class="row justify-content-between align-items-end">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Active Vistors
                        </h6>
                    </div>
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark" id="total_sales" data-currency="USD">57</span>
                    </div>
                    <div class="col-auto">
                        <span class="pulse-beacon"></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Unique Visitors</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">3,245</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-success h5"><span class="ti ti-arrow-up"></span>87.2%</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Carts Created</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">3,245</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-success h5"><span class="ti ti-arrow-up"></span>17.2%</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Sales</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">$12,245</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-success h5"><span class="ti ti-arrow-up"></span>23.2%</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">Conversion Rate</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">80.5%</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-success h5"><span class="ti ti-arrow-up"></span>3.2%</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6  col-xs-12 px-3 py-2 card-header-widget">
                <div class="row">
                    <div class="col-12">
                        <h6 class="text-uppercase text-muted mb-2">AOV</h6>
                    </div>
                </div>
                <div class="row flex-nowrap">
                    <div class="col pb-1 pt-1">
                        <span class="fw-bold mr-2 mb-0 text-dark">$122.23</span>
                    </div>
                    <div class="col text-end pb-1 pt-1">
                        <span class="fw-bold text-danger h5"><span class="ti ti-arrow-down"></span>3.2%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-body py-2">
        <div>
            <span class="badge bg-secondary-light badge-dismissible">Status: Open <button type="button" class="btn-close"></button></span>
            <span class="badge bg-secondary-light badge-dismissible">Payment Status: Pending <button type="button" class="btn-close"></button></span>
            <span class="badge bg-secondary-light badge-dismissible">Fulfillment Status: Unfulfilled, On Hold <button type="button" class="btn-close"></button></span>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table card-table table-sm ">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="card-footer">
        <div class="row align-items-center">
            <div class="col">
                <h4 class="m-0">Results 39</h4>
            </div>
            <div class="col">
                <ul class="pagination justify-content-end mb-0">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <span class="ti ti-chevrons-left"></span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <span class="ti ti-chevron-left"></span>
                        </a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <span class="ti ti-chevron-right"></span>
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            <span class="ti ti-chevrons-right"></span>
                        </a>
                    </li>
            </ul>
            </div>
        </div>
    </div>
</div>
```

</div>
</div>











