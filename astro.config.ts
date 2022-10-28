import { defineConfig } from "astro/config"
import { loadEnv } from "vite"
import tailwind from "@astrojs/tailwind"
import { remarkReadingTime } from "./src/plugins/remark-reading-time"
import { getWikiLinks } from "./src/plugins/link"
import wikiLinkPlugin from "remark-wiki-link-plus"
import sitemap from "@astrojs/sitemap"

const env = loadEnv(import.meta.env.MODE, process.cwd())
const siteURL = env.VITE_BASE_URL || "http://localhost:3000"

console.log(`\x1b[30m${new Date().toLocaleTimeString()}`, "\x1b[94m[env]\x1b[0m   Environment mode:", import.meta.env.MODE)
console.log(`\x1b[30m${new Date().toLocaleTimeString()}`, "\x1b[94m[env]\x1b[0m   Site URL:", siteURL)

// https://astro.build/config
export default defineConfig({
  site: siteURL,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          permalinks: getWikiLinks(),
          hrefTemplate: (permalink: string) => `/${permalink}`
        }
      ],
      remarkReadingTime,
    ],
    extendDefaultPlugins: true,
  }
});
