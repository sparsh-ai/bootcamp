/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Recohut Data Bootcamp",
  "tagline": "Embrace excellence, embrace changes, embrace data",
  "url": "https://www.recohut.com",
  "baseUrl": "/",
  "onBrokenLinks": "ignore",
  "onBrokenMarkdownLinks": "ignore",
  "trailingSlash": false,
  "favicon": "/img/branding/favicon-black.svg",
  "organizationName": "sparsh-ai",
  "projectName": "recohut",
  "themes": [
    [
      "/Users/sparshagarwal/Desktop/projects/de/de-main/node_modules/@easyops-cn/docusaurus-search-local/dist/server/server/index.js",
      {
        "hashed": true
      }
    ],
    "@saucelabs/theme-github-codeblock",
    "@docusaurus/theme-mermaid"
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "markdown": {
    "mermaid": true
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/Users/sparshagarwal/Desktop/projects/de/de-main/sidebars.js",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "remarkPlugins": [
            null
          ],
          "rehypePlugins": [
            null
          ]
        },
        "theme": {
          "customCss": "/Users/sparshagarwal/Desktop/projects/de/de-main/src/css/custom.css"
        },
        "gtag": {
          "trackingID": "G-B4S1B1ZDTT",
          "anonymizeIP": false
        },
        "sitemap": {
          "changefreq": "weekly",
          "priority": 0.5,
          "ignorePatterns": [
            "/tags/**"
          ],
          "filename": "sitemap.xml"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Bootcamp",
      "logo": {
        "alt": "Recohut Logo",
        "src": "/img/branding/favicon-color.svg"
      },
      "items": [
        {
          "label": "Docs",
          "position": "left",
          "to": "docs/introduction"
        },
        {
          "to": "blog",
          "position": "left",
          "label": "Blog"
        },
        {
          "href": "https://github.com/sparsh-ai/recohut",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "docs": {
      "sidebar": {
        "autoCollapseCategories": true,
        "hideable": true
      },
      "versionPersistence": "localStorage"
    },
    "footer": {
      "style": "dark",
      "links": [],
      "copyright": "Copyright © 2023 Bootcamp. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "metadata": [
      {
        "name": "keywords",
        "content": "data science, data engineering, data analytics"
      }
    ],
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    },
    "mermaid": {
      "theme": {
        "dark": "dark",
        "light": "default"
      },
      "options": {}
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};
