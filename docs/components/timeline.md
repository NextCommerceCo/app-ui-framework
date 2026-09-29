---
layout: page-content
group: components
order: 7
title: "Timeline"
description: Timelines are a great way to show historical events to and provide context to for how things have changed over time.
---
<div class="card">
    <div class="card-header">
        <div>
            <h4 class="card-header-title">
                Timeline
            </h4>
        </div>
        <div></div>
    </div>
    <div class="card-body">
        <div class="timeline">
            <div class="card-timeline--item">
                <div class="card-timeline--dot"></div>
                <div class="card-timeline--content">
                    Delivered, Garage / Other Door / Other Location at Address
                    <div class="card-timeline--date text-muted">
                         <small>March 26, 2025, 4:36 p.m.</small>
                    </div>
                </div>
            </div>
            <div class="card-timeline--item">
                <div class="card-timeline--dot"></div>
                <div class="card-timeline--content is-dropdown">
                    <div class="card-timeline--dropdown collapsed" data-bs-toggle="collapse"
                        href="#exampleEvent" aria-expanded="false" role="button"  aria-controls="exampleEvent">
                        <span class="">Example timeline event message that has collapsed.</span>
                        <div class="ti ti-chevron-up ml-2 text-primary"></div>
                    </div>
                    <div class="p-2 collapse" id="exampleEvent">
                        <dl>
                            <dt>Example Subheading Details</dt>
                            <dd>Deeper details on the timeline event.</dd>
                            <dt>Example Subheading Details</dt>
                            <dd>Deeper details on the timeline event.</dd>
                            <dt>Example Subheading Details</dt>
                            <dd>Deeper details on the timeline event.</dd>
                        </dl>
                    </div>
                    <div class="card-timeline--date text-muted">
                        <small>March 26, 2025, 4:36 p.m.</small>
                    </div>
                </div>
            </div>
            <div class="card-timeline--item is-note">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-3">
                            <div class="row align-items-start">
                                <div class="col">
                                    <h4 class="mb-1">
                                        James Trapero
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <p>
                            Example longer content shown as a note for reference in the future.
                        </p>
                        <div class="card-timeline--date text-muted">
                            <small>January 02, 2024, 6:29 a.m</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-timeline--item no-event">
               <div class="card-timeline--dot"></div>
            </div>
            <div class="card-timeline--item">
                <div class="card-timeline--dot"></div>
                <div class="card-timeline--content">
                    Out for Delivery
                    <div class="card-timeline--date text-muted">
                        <small>January 02, 2024, 6:29 a.m</small>
                    </div>
                </div>
            </div>
         </div>
    </div>
    <div class="card-footer">
    <a class="btn btn-white btn-sm" data-bs-toggle="collapse" href="#timelineExample" role="button" aria-expanded="false" aria-controls="timelineExample">
    See Markup Example
    </a>
    <div id="timelineExample" class="collapse" markdown="1">

```html
<div class="timeline">
    <div class="card-timeline--item">
        <div class="card-timeline--dot"></div>
        <div class="card-timeline--content">
            Delivered, Garage / Other Door / Other Location at Address
            <div class="card-timeline--date text-muted">
                <small>January 02, 2024, 12:59 a.m</small>
            </div>
        </div>
    </div>
    <div class="card-timeline--item">
        <div class="card-timeline--dot"></div>
        <div class="card-timeline--content is-dropdown">
            <div class="card-timeline--dropdown collapsed" data-bs-toggle="collapse"
                    href="#exampleEvent" aria-expanded="false" role="button"  aria-controls="exampleEvent">
                    <span class="">Example timeline event message that has collapsed.</span>
                    <div class="ti ti-chevron-up ml-2 text-primary"></div>
                </div>
                <div class="p-2 collapse" id="exampleEvent">
                <dl>
                    <dt>Example Subheading Details</dt>
                    <dd>Deeper details on the timeline event.</dd>
                    <dt>Example Subheading Details</dt>
                    <dd>Deeper details on the timeline event.</dd>
                    <dt>Example Subheading Details</dt>
                    <dd>Deeper details on the timeline event.</dd>
                </dl>
            </div>
            <div class="card-timeline--date text-muted">
                <small>January 02, 2024, 12:59 a.m</small>
            </div>
        </div>
    </div>
    <div class="card-timeline--item is-note">
        <div class="card">
            <div class="card-body">
                <div class="mb-3">
                    <div class="row align-items-start">
                        <div class="col">
                            <h4 class="mb-1">
                                James Trapero
                            </h4>
                        </div>
                    </div>
                </div>
                <p>
                    Example longer content shown as a note for reference in the future.
                </p>
                <div class="card-timeline--date text-muted">
                    <small>January 02, 2024, 12:59 a.m</small>
                </div>
            </div>
        </div>
    </div>
    <div class="card-timeline--item no-event">
        <div class="card-timeline--dot"></div>
    </div>
    <div class="card-timeline--item">
        <div class="card-timeline--dot"></div>
        <div class="card-timeline--content">
            Out for Delivery
            <div class="card-timeline--date text-muted">
                <small>January 02, 2024, 6:29 a.m</small>
            </div>
        </div>
    </div>
</div>
```

</div>
</div>
</div>
