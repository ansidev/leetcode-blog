import fs from 'node:fs'

import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'
import purgecss from 'astro-purgecss'

import { loadEnv } from './dotenv.config'

loadEnv()

const baseURL = process.env.ASTRO_BASE_URL || ''

if (baseURL.length === 0) {
  console.log('Missing environment variable \'ASTRO_BASE_URL\'.')
  process.exit(1)
}

// https://astro.build/config
export default defineConfig({
  site: baseURL,
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sitemap(),
    purgecss(),
    compress(),
  ],
  vite: {
    plugins: [rawFonts(['.ttf', '.woff'])],
    optimizeDeps: {
      exclude: [
        '@resvg/resvg-js',
      ],
    },
  },
})

// vite plugin to import fonts
function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id)
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        }
      }
    },
  }
}
