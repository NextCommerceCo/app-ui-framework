const markdownIt = require("markdown-it");
const yaml = require("yaml");

module.exports = function (eleventyConfig) {
  // --- YAML data file support ---
  eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.parse(contents));

  // --- Markdown config ---
  // Enable HTML in markdown so existing <div markdown="1"> blocks render.
  // We post-process to handle the markdown="1" attribute.
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });
  eleventyConfig.setLibrary("md", md);

  // --- Passthrough copy ---
  eleventyConfig.addPassthroughCopy("docs/assets/css");
  eleventyConfig.addPassthroughCopy("docs/assets/js");
  eleventyConfig.addPassthroughCopy("docs/assets/img");

  // --- Global data ---
  eleventyConfig.addGlobalData("site", {
    title: "NEXT Commerce Design System",
    lang: "en-US",
    baseurl: "",
  });

  // --- Custom filters ---
  // Jekyll's relative_url filter — prepend baseurl
  eleventyConfig.addFilter("relative_url", function (url) {
    return url; // baseurl is empty for GitHub Pages org site
  });

  // Jekyll's prepend filter
  eleventyConfig.addFilter("prepend", function (value, prepend) {
    return (prepend || "") + value;
  });

  // Jekyll's where filter — filter array by key/value
  eleventyConfig.addFilter("where", function (array, key, value) {
    if (!array) return [];
    return array.filter((item) => item.data ? item.data[key] === value : item[key] === value);
  });

  // Sort filter (works on arrays of objects)
  eleventyConfig.addFilter("sort_by", function (array, key) {
    if (!array) return [];
    return [...array].sort((a, b) => {
      const aVal = a.data ? a.data[key] : a[key];
      const bVal = b.data ? b.data[key] : b[key];
      if (aVal === undefined) return 1;
      if (bVal === undefined) return -1;
      if (typeof aVal === "number" && typeof bVal === "number") return aVal - bVal;
      return String(aVal).localeCompare(String(bVal));
    });
  });

  // --- Collections ---
  // Components collection sorted by order
  eleventyConfig.addCollection("components", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("docs/components/*.md")
      .sort((a, b) => {
        const aOrder = a.data.order || 999;
        const bOrder = b.data.order || 999;
        if (aOrder !== bOrder) return aOrder - bOrder;
        return a.data.title.localeCompare(b.data.title);
      });
  });

  // --- Transform: handle markdown="1" ---
  // Strip the markdown="1" attribute from output HTML.
  // The markdown inside these divs is already processed by markdown-it
  // because 11ty processes the whole file as markdown first.
  eleventyConfig.addTransform("strip-markdown-attr", function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      return content.replace(/ markdown="1"/g, "");
    }
    return content;
  });

  return {
    dir: {
      input: "docs",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["md", "html", "liquid", "njk"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
