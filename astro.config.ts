import { defineConfig } from "astro/config"
import { loadEnv } from "vite"
import tailwind from "@astrojs/tailwind"
import { remarkReadingTime } from "./src/plugins/remark-reading-time"
import { getWikiLinks } from "./src/plugins/link"
import wikiLinkPlugin from "remark-wiki-link-plus"
import partytown from "@astrojs/partytown"
import sitemap from "@astrojs/sitemap"

const env = loadEnv(import.meta.env.MODE, process.cwd())
const siteURL = env.VITE_BASE_URL || "http://localhost:3000"

const timeFormatOptions: Intl.DateTimeFormatOptions = {
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}
console.log(`\x1b[30m${new Date().toLocaleTimeString('en-US', timeFormatOptions)}`, "\x1b[94m[env]\x1b[0m   Environment mode:", import.meta.env.MODE)
console.log(`\x1b[30m${new Date().toLocaleTimeString('en-US', timeFormatOptions)}`, "\x1b[94m[env]\x1b[0m   Site URL:", siteURL)

// https://astro.build/config
export default defineConfig({
  site: siteURL,
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]',
        },
      },
    },
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
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
