# Next Commerce App UI Framework

A UI Framework for creating apps with a seamless UX in the Next Commerce dashboard.

[See documentation](https://nextcommerceco.github.io/app-ui-framework/)

### How to Use

#### Include via CDN

The easiest way to use the files is via CDN, just copy from below and include in the head of your html file.

```html
<link href="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/css/main.css" rel="stylesheet" crossorigin="anonymous">
```

```html
<script src="https://cdn.jsdelivr.net/gh/NextCommerceCo/app-ui-framework@latest/dist/js/next-app-ui.min.js"></script>
```

### Compile from Source

Compile with your asset pipeline by downloading the source files.

Source files for the UI are written in [Sass](https://sass-lang.com/) and can be found in the `src/scss` directory. You can copy and include the Sass files in your own project or compile using the `src/scss/main.scss` file with any Sass compiler.

```bash
npm run scss
```

### Bundled Libraries
- **Grid System & Base Components** - [Bootstrap 5.3](https://getbootstrap.com/)
- **Charts** - [ChartJS](https://www.chartjs.org/)
- **Dropdowns** - [Choices](https://choices-js.github.io/Choices/)
- **Date Picker** - [Flatpicker](https://flatpickr.js.org/examples/)
- **Icons** - [Tabler Icons](https://tabler.io/icons)


### Contributing

#### Run on Local

The docs site uses [Eleventy](https://www.11ty.dev/) as the static site generator. Make sure you have Node.js installed.

```bash
npm install
npm run dev
```

You should now have the full docs site up and running at `http://localhost:8080`.

#### Create a Pull Request

Create a new branch with your changes and create a pull request to be reviewed before merging into the main branch.
