import process from "node:process";
import { govukEleventyPlugin } from "@x-govuk/govuk-eleventy-plugin";
import { dfn } from "./lib/filters/dfn.js";
const siteUrl = "https://classnames.paulrobertlloyd.com";
const repoUrl = "https://github.com/paulrobertlloyd/classnames";

// eslint-disable-next-line unicorn/no-anonymous-default-export
export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      mask: `${siteUrl}/assets/mask-icon.svg`,
      shortcut: `${siteUrl}/assets/favicon.ico`,
      touch: `${siteUrl}/assets/icon.png`,
    },
    stylesheets: [
      "/assets/application.css",
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@450;700&display=swap",
    ],
    themeColor: "#336",
    opengraphImageUrl: `${siteUrl}/assets/opengraph-image.png`,
    url: process.env.GITHUB_ACTIONS && siteUrl,
    titleSuffix: "Classnames",
    showBreadcrumbs: false,
    header: {
      logotype: {
        text: "Classnames",
      },
    },
    footer: {
      contentLicence: {
        html: `Licensed under the <a class="govuk-footer__link" href="${repoUrl}/blob/main/LICENSE">MIT License</a>.`,
      },
      copyright: {
        text: "© Paul Robert Lloyd",
      },
      meta: {
        items: [
          {
            href: repoUrl,
            text: "Contribute",
          },
        ],
      },
    },
  });

  // Filters
  eleventyConfig.addFilter("dfn", dfn);

  // Passthrough
  eleventyConfig.addPassthroughCopy("./docs/assets");

  // Config
  return {
    dir: {
      input: "docs",
    },
  };
}
