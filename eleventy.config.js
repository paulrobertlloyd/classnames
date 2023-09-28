const process = require('node:process')
const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
const dfn = require('./lib/filters/dfn.js')
const siteUrl = 'https://classnames.paulrobertlloyd.com'
const repoUrl = 'https://github.com/paulrobertlloyd/classnames'

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#c39',
    canvasBackgroundColour: '#f9f9fc',
    focusColour: '#fce',
    fontFamily: 'Space Grotesk, system-ui',
    linkColour: '#06c',
    linkActiveColour: '#039',
    linkHoverColour: '#939',
    linkVisitedColour: '#06c',
    pageWidth: '800px',
    textColour: '#334',
    secondaryTextColour: '#556',
    icons: {
      mask: `${siteUrl}/assets/mask-icon.svg`,
      shortcut: `${siteUrl}/assets/favicon.ico`,
      touch: `${siteUrl}/assets/apple-touch-icon.png`
    },
    themeColour: '#336',
    opengraphImageUrl: `${siteUrl}/assets/opengraph-image.png`,
    url: process.env.GITHUB_ACTIONS
      ? siteUrl
      : '/',
    header: {
      organisationLogo: false,
      organisationName: 'Classnames'
    },
    footer: {
      contentLicence: {
        html: `Licensed under the <a class="govuk-footer__link" href="${repoUrl}/blob/main/LICENSE">MIT License</a>.`
      },
      copyright: {
        text: '© Paul Robert Lloyd'
      },
      meta: {
        items: [{
          href: repoUrl,
          text: 'Contribute'
        }]
      }
    }
  })

  // Filters
  eleventyConfig.addFilter('dfn', dfn)

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      layouts: '../lib/layouts'
    }
  }
}
