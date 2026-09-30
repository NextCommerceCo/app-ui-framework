# Next Commerce App UI Framework

A UI Framework for creating apps with a seemless UX in the dashboard.

[See documentation](https://app-ui.nextcommerce.com/)

### How to Use

#### Include via CDN

The easiest way to use the files is via CDN, just copy from below and include in the head of your html file.

```html
<link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/next-app-ui.min.css" rel="stylesheet" crossorigin="anonymous">
```

```html
<script src="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/js/next-app-ui.min.js"></script>
```

### Compile from Source

Compile with your asset pipeline by downloading the source files.

Source files for the UI are written in [Sass](https://sass-lang.com/) and can be found in the `src/scss` directory. You can copy and include the Sass files in your own or compile using the `src/scss/main.scss` file with any Sass compiler.


### Bundled Libraries
- **Grid System & Base Components** - [Bootstrap 5](https://getbootstrap.com/)
- **Charts** - [ChartJS](https://www.chartjs.org/)
- **Dropdowns** - [Choices](https://choices-js.github.io/Choices/)
- **Date Picker** - [Flatpicker](https://flatpickr.js.org/examples/)
- **Icons** - [Tabler Icons](https://tabler.io/icons)


### Contributing

#### Run on Local

The docs site is built with [Eleventy](https://www.11ty.dev/) and needs Node.js 20 or newer. In a terminal, navigate to the directory with these files and run:

```
make start
```

This installs dependencies and serves the docs site at http://localhost:4000 with live reload. Pages live in `docs/`, and the site's CSS compiles from `src/scss` via `docs/assets/css/main.scss`.

To build the framework's `dist/` files, run `npx gulp` (or `npx gulp watch` to rebuild on change).

#### Create a Pull Request

Create a new branch with your changes and create a pull request to be reviewed before merging into the main branch.

