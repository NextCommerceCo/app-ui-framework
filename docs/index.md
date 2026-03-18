---
layout: page-content
title: "Getting Started"
description: Getting started with the NEXT Commerce Design System
---
The NEXT Commerce Design System is the frontend framework for apps that integrate with the NEXT platform.


## Quick start

Include CSS in your app html document `<head>`.
```html
<link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/next-app-ui.min.css" rel="stylesheet" crossorigin="anonymous">
```

Include Javascript in your app html document just before the `</body>`.
```html
<script src="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/js/next-app-ui.min.js"></script>
```

### Versioning

Pin your app to a [release version](https://github.com/NextCommerceCo/app-ui-framework/releases) by specifying in the CDN url such as `@0.1.4`.


### CDN links

As a reference, here are our primary CDN links.

<div class="card">
<div class="card-header">
<div>
<h4 class="card-header-title">CDN Links</h4>
</div>
</div>
<table class="table table-sm bg-white">
    <thead>
        <tr>
            <th>Description</th>
            <th>URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CSS</td>
            <td>https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/next-app-ui.min.css</td>
        </tr>
        <tr>
            <td>JS</td>
            <td>https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/js/next-app-ui.min.js</td>
        </tr>
    </tbody>
</table>
</div>

### Base Layout

Below is an example base layout to get started with the NEXT Commerce Design System.

Copy the html below into a new `layout.html` in your project and you're well on your way.

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


### Next Steps

Once you have your base layout, you can start using components such as [cards](/components/cards/) in your design.

