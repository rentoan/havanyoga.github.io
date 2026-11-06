import { statSync } from "node:fs";

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("permalink", () => (data) =>
    `${data.page.filePathStem}.${data.page.outputFileExtension}`,
  );
  for (const path of ["assets", "styles.css", "app.js", "CNAME", ".nojekyll", "robots.txt", "products/catalog.json"]) {
    eleventyConfig.addPassthroughCopy(path);
  }

  eleventyConfig.addCollection("journal", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("journal/*.html")
      .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999)),
  );

  eleventyConfig.addFilter("isoFileDate", (inputPath) => {
    try {
      return statSync(inputPath).mtime.toISOString().slice(0, 10);
    } catch {
      return new Date().toISOString().slice(0, 10);
    }
  });
  eleventyConfig.addFilter("publicUrl", (url) =>
    url === "/index.html" ? "/" : url.replace(/\/index\.html$/, "/"),
  );

  return {
    dir: { input: ".", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["html", "njk"],
    htmlTemplateEngine: "njk",
  };
}
