# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org).

## [v3.0.1](https://github.com/ansidev/leetcode-blog/compare/v3.0.0...v3.0.1) (2025-05-01)

### Bug Fixes

- error while rendering page `/rss.xml`

Full Changelog: [v3.0.0...v3.0.1](https://github.com/ansidev/leetcode-blog/compare/v3.0.0...v3.0.1)

## [v3.0.0](https://github.com/ansidev/leetcode-blog/compare/v2.2.7...v3.0.0) (2025-05-01)

### Bug Fixes

- **config**: migrate husky configurations
- **config**: migrate to eslint flat config
- **config**: ts check errors

### BREAKING CHANGES

- **tailwindcss:** upgrade TailwindCSS to v4
- **astro:** upgrade Astro to v5
- **astro-plugin:** upgrade astro-purgecss to v5
- **deps:** upgrade pnpm to v10
- **cli**: upgrade commander to v12 and refactor the utility command `pnpm lc:new`
- Removed TailwindCSS plugin `tailwindcss-themer`.
- Removed Astro plugin `@astrojs/tailwind`.
- Removed package `sass`.

### Dependencies

| Package                            | Version                        |
| ---------------------------------- | ------------------------------ |
| `@astrojs/check`                   | `^0.9.0`                       |
| `@astrojs/partytown`               | `^1.2.3` `->` `^2.0.2`         |
| `@astrojs/rss`                     | `^2.4.4` `->` `^4.0.0`         |
| `@astrojs/sitemap`                 | `^2.0.1` `->` `^3.0.3`         |
| `@astrojs/tailwind`                | removed                        |
| `@commitlint/cli`                  | `^17.6.7` `->` `^19.0.0`       |
| `@commitlint/config-conventional`  | `^17.6.7` `->` `^19.0.0`       |
| `@eslint/js`                       | added `^9.25.1`                |
| `@iconify-json/bi`                 | `^1.1.18` `->` `^1.1.20`       |
| `@otterlord/astro-compress`        | replaced with `astro-compress` |
| `@resvg/resvg-js`                  | `^2.4.1` `->` `^2.6.0`         |
| `@tailwindcss/postcss`             | added `^4.1.4`                 |
| `@tailwindcss/typography`          | `^0.5.9` `->` `^0.5.10`        |
| `@tailwindcss/vite`                | added `^4.1.4`                 |
| `@types/lodash.get`                | `^4.4.7` `->` `^4.4.8`         |
| `@types/lodash.kebabcase`          | `^4.1.7` `->` `^4.1.8`         |
| `@types/mustache`                  | `^4.2.2` `->` `^4.2.4`         |
| `@types/node`                      | `^20.4.8` `->` `^22.0.8`       |
| `@typescript-eslint/eslint-plugin` | removed                        |
| `@typescript-eslint/parser`        | `^6.3.0` `->` `^8.0.0`         |
| `astro-compress`                   | added `^2.2.2`                 |
| `astro-purgecss`                   | `^2.3.0` `->` `^5.0.0`         |
| `astro`                            | `2.10.3` `->` `5.7.10`         |
| `commander`                        | `^11.0.0` `->` `^13.0.0`       |
| `dayjs`                            | `^1.11.9` `->` `^1.11.10`      |
| `eslint-plugin-astro`              | `^0.28.0` `->` `^1.0.3`        |
| `eslint-plugin-simple-import-sort` | `^10.0.0` `->` `^12.0.0`       |
| `eslint`                           | `^8.46.0` `->` `^9.0.0`        |
| `husky`                            | `^8.0.3` `->` `^9.0.11`        |
| `lodash.get`                       | `^4.4.2` `->` `^4.4.2`         |
| `lodash.kebabcase`                 | `^4.1.1` `->` `^4.1.1`         |
| `mustache`                         | `^4.2.0` `->` `^4.2.0`         |
| `pnpm`                             | `8.6.12` `->` `10.10.0`        |
| `postcss`                          | added `^8.5.3`                 |
| `prettier-plugin-astro`            | added `^0.14.0`                |
| `sass`                             | removed                        |
| `satori`                           | `^0.10.2` `->` `^0.12.0`       |
| `tailwindcss-themer`               | removed                        |
| `tailwindcss`                      | `^3.3.3` `->` `^4.1.4`         |
| `tsx`                              | `^3.12.7` `->` `^4.2.0`        |
| `typescript-eslint`                | added `^8.0.0`                 |
| `typescript`                       | `^5.1.6` `->` `^5.3.3`         |

Full Changelog: [v2.2.7...v3.0.0](https://github.com/ansidev/leetcode-blog/compare/v2.2.7...v3.0.0)

## [v2.2.7](https://github.com/ansidev/leetcode-blog/compare/v2.2.6...v2.2.7) (2025-04-30)

### Features

- **config:** update renovate config

Full Changelog: [v2.2.6...v2.2.7](https://github.com/ansidev/leetcode-blog/compare/v2.2.6...v2.2.7)

## [v2.2.6](https://github.com/ansidev/leetcode-blog/compare/v2.2.5...v2.2.6) (2023-08-08)

### Bug Fixes

- **github-workflow:** update parameter name

- **deps:** replace astro-compress by [@otterlord/astro-compress](https://www.npmjs.com/package/@otterlord/astro-compress)

### Dependencies

| Package                            | Version                  |
| ---------------------------------- | ------------------------ |
| `@astrojs/rss`                     | `^2.4.3` `->` `^2.4.4`   |
| `@astrojs/sitemap`                 | `^1.3.3` `->` `^2.0.1`   |
| `@astrojs/tailwind`                | `^3.1.3` `->` `^4.0.0`   |
| `astro`                            | `^2.6.3` `->` `^2.10.3`  |
| `astro-purgecss`                   | `^2.0.1` `->` `^2.3.0`   |
| `tailwindcss`                      | `^3.3.2` `->` `^3.3.3`   |
| `@commitlint/cli`                  | `^17.6.5` `->` `^17.6.7` |
| `@commitlint/config-conventional`  | `^17.6.5` `->` `^17.6.7` |
| `@fontsource/ibm-plex-mono`        | `^5.0.3` `->` `^5.0.8`   |
| `@iconify-json/bi`                 | `^1.1.17` `->` `^1.1.18` |
| `@types/node`                      | `^20.2.1` `->` `^20.4.8` |
| `@typescript-eslint/eslint-plugin` | `^5.59.11` `->` `^6.3.0` |
| `@typescript-eslint/parser`        | `^5.59.11` `->` `^6.3.0` |
| `dayjs`                            | `^1.11.8` `->` `^1.11.9` |
| `dotenv`                           | `^16.1.4` `->` `^16.3.1` |
| `eslint`                           | `^8.42.0` `->` `^8.46.0` |
| `eslint-plugin-astro`              | `^0.27.1` `->` `^0.28.0` |
| `sass`                             | `^1.63.3` `->` `^1.64.2` |
| `satori`                           | `^0.10.1` `->` `^0.10.2` |
| `typescript`                       | `^5.1.3` `->` `^5.1.6`   |

Full Changelog: [v2.2.5...v2.2.6](https://github.com/ansidev/leetcode-blog/compare/v2.2.5...v2.2.6)

## [v2.2.5](https://github.com/ansidev/leetcode-blog/compare/v2.2.4...v2.2.5) (2023-06-13)

### Bug Fixes

- **github-workflow:** wrong github environment url

### Code Refactoring

- **github-workflow:** apply GitHub Actions from ghacts

- **github-workflow:** apply GitHub Actions from ghacts/gitflow

### Dependencies

| Package                            | Version                   |
| ---------------------------------- | ------------------------- |
| `@astrojs/sitemap`                 | `^1.3.2` `->` `^1.3.3`    |
| `astro`                            | `^2.5.6` `->` `2.6.3`     |
| `astro-compress`                   | `^1.1.46` `->` `^1.1.47`  |
| `@fontsource/ibm-plex-mono`        | `^5.0.2` `->` `^5.0.3`    |
| `@iconify-json/bi`                 | `^1.1.16` `->` `^1.1.17`  |
| `@typescript-eslint/eslint-plugin` | `^5.59.8` `->` `^5.59.11` |
| `@typescript-eslint/parser`        | `^5.59.8` `->` `^5.59.11` |
| `dayjs`                            | `^1.11.7` `->` `^1.11.8`  |
| `dotenv`                           | `^16.1.1` `->` `^16.1.4`  |
| `eslint`                           | `^8.41.0` `->` `^8.42.0`  |
| `sass`                             | `^1.62.1` `->` `^1.63.3`  |
| `satori`                           | `^0.9.1` `->` `^0.10.1`   |
| `typescript`                       | `^5.0.4` `->` `^5.1.3`    |

Full Changelog: [v2.2.4...v2.2.5](https://github.com/ansidev/leetcode-blog/compare/v2.2.4...v2.2.5)

## [v2.2.4](https://github.com/ansidev/leetcode-blog/compare/v2.2.3...v2.2.4) (2023-05-31)

### Content

- added solution for LeetCode problem [#2468](https://leetcode.ansidev.xyz/2468-split-message-based-on-limit/).

### Bug Fixes

- **ci:deploy** add debug step

### Dependencies

| Package                            | Version                  |
| ---------------------------------- | ------------------------ |
| `@astrojs/partytown`               | `^1.2.2` `->` `^1.2.3`   |
| `@astrojs/rss`                     | `^2.4.2` `->` `^2.4.3`   |
| `@astrojs/sitemap`                 | `^1.3.1` `->` `^1.3.2`   |
| `astro`                            | `^2.4.5` `->` `2.5.6`    |
| `astro-compress`                   | `^1.1.44` `->` `^1.1.46` |
| `@commitlint/cli`                  | `^17.6.3` `->` `^17.6.5` |
| `@commitlint/config-conventional`  | `^17.6.3` `->` `^17.6.5` |
| `@fontsource/ibm-plex-mono`        | `^4.5.13` `->` `^5.0.2`  |
| `@typescript-eslint/eslint-plugin` | `^5.59.6` `->` `^5.59.8` |
| `@typescript-eslint/parser`        | `^5.59.6` `->` `^5.59.8` |
| `dotenv`                           | `^16.0.3` `->` `^16.1.1` |
| `eslint-plugin-astro`              | `^0.27.0` `->` `^0.27.1` |
| `satori`                           | `^0.8.1` `->` `^0.9.1`   |

Full Changelog: [v2.2.3...v2.2.4](https://github.com/ansidev/leetcode-blog/compare/v2.2.3...v2.2.4)

## [v2.2.3](https://github.com/ansidev/leetcode-blog/compare/v2.2.2...v2.2.3) (2023-05-21)

### Dev features

- **renovate**: update config.
- **taskfile**: update task files.
- **ci**: use pnpm v8 for workflow `deploy_to_netlify`.

### Dependencies

| Package                            | Version                   |
| ---------------------------------- | ------------------------- |
| `@astrojs/partytown`               | `^1.0.3` `->` `^1.2.2`    |
| `@astrojs/rss`                     | `^2.1.1` `->` `^2.4.2`    |
| `@astrojs/sitemap`                 | `^1.1.0` `->` `^1.3.1`    |
| `@astrojs/tailwind`                | `^3.0.1` `->` `^3.1.3`    |
| `astro`                            | `^2.0.17` `->` `2.4.5`    |
| `astro-compress`                   | `^1.1.35` `->` `^1.1.44`  |
| `tailwindcss`                      | `^3.2.7` `->` `^3.3.2`    |
| `@commitlint/cli`                  | `^17.4.4` `->` `^17.6.3`  |
| `@commitlint/config-conventional`  | `^17.4.4` `->` `^17.6.3`  |
| `@iconify-json/bi`                 | `^1.1.15` `->` `^1.1.16`  |
| `@types/node`                      | `^18.14.6` `->` `^20.2.1` |
| `@typescript-eslint/eslint-plugin` | `^5.54.0` `->` `^5.59.6`  |
| `@typescript-eslint/parser`        | `^5.54.0` `->` `^5.59.6`  |
| `commander`                        | `^10.0.0` `->` `^10.0.1`  |
| `eslint`                           | `^8.35.0` `->` `^8.41.0`  |
| `eslint-plugin-astro`              | `^0.23.0` `->` `^0.27.0`  |
| `sass`                             | `^1.58.3` `->` `^1.62.1`  |
| `satori`                           | `^0.4.1` `->` `^0.8.1`    |
| `tailwindcss-themer`               | `^3.0.1` `->` `^3.1.0`    |
| `tsx`                              | `^3.12.3` `->` `^3.12.7`  |
| `typescript`                       | `^4.9.5` `->` `^5.0.4`    |

Full Changelog: [v2.2.2...v2.2.3](https://github.com/ansidev/leetcode-blog/compare/v2.2.2...v2.2.3)

## [v2.2.2](https://github.com/ansidev/leetcode-blog/compare/v2.2.1...v2.2.2) (2023-03-08)

### Bug Fixes

- **markdown:** update markdown config to nowrap text

- **ui:** update CSS styles for code blocks

Full Changelog: [v2.2.1...v2.2.2](https://github.com/ansidev/leetcode-blog/compare/v2.2.1...v2.2.2)

## [v2.2.1](https://github.com/ansidev/leetcode-blog/compare/v2.2.0...v2.2.1) (2023-03-05)

### Bug Fixes

- **changelog:** wrong repository URL

Full Changelog: [v2.2.0...v2.2.1](https://github.com/ansidev/leetcode-blog/compare/v2.2.0...v2.2.1)

## [v2.2.0](https://github.com/ansidev/leetcode-blog/compare/v2.1.0...v2.2.0) (2023-03-04)

### Features

- Change website font to Inter.
- Add meta fields for SEO.
- Generate post thumbnail using [satori](https://github.com/vercel/satori).

Full Changelog: [v2.1.0...v2.2.0](https://github.com/ansidev/leetcode-blog/compare/v2.1.0...v2.2.0)

## [v2.1.0](https://github.com/ansidev/leetcode-blog/compare/v2.0.1...v2.1.0) (2023-03-01)

### Bug Fixes

- set dir for internal task to avoid wrong working directory

- delete existing branch before initializing

### Features

- **cli-command:** add command `leetcode` for generating new solution post

- **deploy:** update environment variable

- **disqus-comment:** add Disqus comment to post page

- **seo:** add canonical URL meta field

Full Changelog: [v2.0.1...v2.1.0](https://github.com/ansidev/leetcode-blog/compare/v2.0.1...v2.1.0)

## [v2.0.1](https://github.com/ansidev/leetcode-blog/compare/v2.0.0...v2.0.1) (2023-02-26)

### Bug Fixes

- **deployment:** add missing environment variables

Full Changelog: [v2.0.0...v2.0.1](https://github.com/ansidev/leetcode-blog/compare/v2.0.0...v2.0.1)

## v2.0.0 (2023-02-26)

### Features

- TailwindCSS for UI.
- Multiple themes.
- SEO.
- Analytics: Google Analytics, Swetrix Analytics, Counter Analytics.
- Sitemap.
- RSS.
- Posts by tags, difficulty.

Full Changelog: [v2.0.0](https://github.com/ansidev/leetcode-blog/commits/v2.0.0)
