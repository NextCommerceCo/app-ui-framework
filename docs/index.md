---
layout: playground
title: "Next Commerce Design System"
description: The frontend framework for apps that integrate with the NEXT platform.
---

<p class="text-muted mb-4">The Next Commerce Design System is the frontend framework for apps that integrate with the NEXT platform.</p>

<h2 class="display-6 mb-2">Quick start</h2>
<p class="text-muted mb-4">Include CSS in your app html document <code>&lt;head&gt;</code>.</p>

```html
<link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/next-app-ui.min.css" rel="stylesheet" crossorigin="anonymous">
```

<p class="text-muted mb-4">Include Javascript in your app html document just before the <code>&lt;/body&gt;</code>.</p>

```html
<script src="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/js/next-app-ui.min.js"></script>
```

<h2 class="display-6 mb-2">Versioning</h2>
<p class="text-muted mb-4">Pin your app to a <a href="https://github.com/NextCommerceCo/app-ui-framework/releases">release version</a> by specifying in the CDN url such as <code>@0.1.4</code>.</p>

<h2 class="display-6 mb-2">CDN links</h2>
<p class="text-muted mb-4">As a reference, here are our primary CDN links.</p>

<div class="card mb-4">
<div class="card-header">
<div>
<h4 class="card-header-title">CDN Links</h4>
</div>
</div>
<div class="table-responsive">
<table class="table table-sm mb-0">
    <thead>
        <tr>
            <th>Description</th>
            <th>URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CSS</td>
            <td><code class="text-break">https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/next-app-ui.min.css</code></td>
        </tr>
        <tr>
            <td>JS</td>
            <td><code class="text-break">https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/js/next-app-ui.min.js</code></td>
        </tr>
    </tbody>
</table>
</div>
</div>

<h2 class="display-6 mb-2">Base Layout</h2>
<p class="text-muted mb-4">Below is an example base layout to get started with the Next Commerce Design System.</p>
<p class="text-muted mb-4">Copy the html below into a new <code>layout.html</code> in your project and you're well on your way.</p>

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App Base Layout</title>
    <link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/next-app-ui.min.css"
        rel="stylesheet" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="row align-items-center my-4">
            <div class="col">
                <div class="d-flex align-items-center">
                    <div>
                        <h1 class="header-title h2">Widgets</h1>
                    </div>
                </div>
            </div>
            <div class="col-auto">
                <a href="#" class="btn btn-primary">New Widget</a>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div>
                    <h4 class="card-header-title">Campaigns</h4>
                </div>
            </div>
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/js/next-app-ui.min.js"></script>
</body>

</html>
```
