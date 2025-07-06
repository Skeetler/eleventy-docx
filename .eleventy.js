module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode(
    "pagebreak",
    () => `<div class="page-break"></div>`,
  );

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "components",
      layouts: "layouts",
    },
  };
};
