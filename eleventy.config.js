const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL, fileURLToPath } = require("node:url");
const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
// Pinned to the Sass version Jekyll used, so docs CSS is byte-identical to the Jekyll build.
// The gulp build for dist/ keeps using the regular `sass` package.
const sass = require("sass-docs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  // Keeps Jekyll's `{% include file.html key=value %}` / `include.key` syntax working
  eleventyConfig.setLiquidOptions({ jekyllInclude: true });

  eleventyConfig.ignores.add("docs/_drafts/**");
  eleventyConfig.ignores.add("docs/_sass/**");

  eleventyConfig.addPassthroughCopy({
    "docs/assets/img": "assets/img",
    "docs/assets/js": "assets/js",
    "docs/favicon.ico": "favicon.ico",
  });

  eleventyConfig.addFilter("relative_url", (url) => eleventyConfig.getFilter("url")(url));

  // Sidebar component list: by `order`, then `title` (same as the old Jekyll group_by_exp/sort chain)
  eleventyConfig.addCollection("components", (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.data.group === "components")
      .sort((a, b) =>
        (a.data.order ?? 999999) - (b.data.order ?? 999999) || a.data.title.localeCompare(b.data.title)
      )
  );

  // Markdown: reproduce kramdown's output so the published HTML doesn't change
  const md = markdownIt({ html: true, typographer: true });

  // Rouge-style wrappers; highlight.js does the actual highlighting in the browser
  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx];
    const lang = token.info.trim().split(/\s+/)[0] || "plaintext";
    return `<div class="language-${lang} highlighter-rouge"><div class="highlight"><pre class="highlight"><code>${md.utils.escapeHtml(token.content)}</code></pre></div></div>\n`;
  };
  md.renderer.rules.code_inline = (tokens, idx) =>
    `<code class="language-plaintext highlighter-rouge">${md.utils.escapeHtml(tokens[idx].content)}</code>`;

  // kramdown auto_ids: lowercase, drop punctuation, spaces to dashes, dedupe with -1, -2...
  md.core.ruler.push("kramdown_ids", (state) => {
    const seen = {};
    state.tokens.forEach((token, i) => {
      if (token.type !== "heading_open") return;
      let id = state.tokens[i + 1].content
        .toLowerCase()
        .replace(/[^a-z0-9 _-]/g, "")
        .trim()
        .replace(/ /g, "-")
        .replace(/^[^a-z]+/, "") || "section";
      if (seen[id] !== undefined) id = `${id}-${++seen[id]}`;
      else seen[id] = 0;
      token.attrSet("id", id);
    });
  });
  eleventyConfig.setLibrary("md", md);

  // kramdown consumed markdown="1"; markdown-it leaves it in the output
  eleventyConfig.addTransform("strip-markdown-attr", (content) => content.replaceAll(' markdown="1"', ""));

  // Sass, with a source map written next to the CSS (as jekyll-sass-converter did)
  const sourceMaps = new Map();
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile(inputContent, inputPath) {
      if (path.basename(inputPath).startsWith("_")) return;
      const result = sass.compileString(inputContent, {
        url: pathToFileURL(path.resolve(inputPath)),
        loadPaths: ["src/scss", "docs/_sass"],
        style: "compressed",
        sourceMap: true,
        sourceMapIncludeSources: true,
        quietDeps: true,
        silenceDeprecations: ["import", "global-builtin", "color-functions"],
      });
      this.addDependencies(inputPath, result.loadedUrls);
      return (data) => {
        const mapPath = `${data.page.outputPath}.map`;
        const mapDir = path.dirname(path.resolve(mapPath));
        result.sourceMap.sources = result.sourceMap.sources.map((source) =>
          source.startsWith("file:") ? path.relative(mapDir, fileURLToPath(source)) : source
        );
        result.sourceMap.sourceRoot = "";
        result.sourceMap.file = path.basename(data.page.outputPath);
        sourceMaps.set(mapPath, JSON.stringify(result.sourceMap));
        return `${result.css}/*# sourceMappingURL=${path.basename(mapPath)} */`;
      };
    },
  });
  eleventyConfig.on("eleventy.after", () => {
    for (const [mapPath, map] of sourceMaps) fs.writeFileSync(mapPath, map);
  });

  return {
    dir: {
      input: "docs",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
  };
};
