import IBMPlexMonoRegular from '@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff'
import IBMPlexMonoBold from '@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-700-normal.woff'
import { Resvg } from '@resvg/resvg-js'
import type { APIContext } from 'astro'
import { getCollection, getEntryBySlug } from 'astro:content'
import satori from 'satori'
import { html } from 'satori-html'

import siteConfig from '@/configs/site'

const dimensions = {
  width: 1200,
  height: 630,
}

const { author } = siteConfig

export async function get({ site, params }: APIContext) {
  const url = new URL(site)
  const domain = url.hostname.replace(/^[^.]+\./g, '')

  const post = await getEntryBySlug('leetcode-solutions', params.slug)
  const { title, pubDate } = post?.data || { title: '', pubDate: new Date() }

  const titleArr = title.split('. ')
  const leetcodeProblemNumber = titleArr[0]
  const postTitle = titleArr[1]

  const date = new Date(pubDate).toLocaleDateString('en-US', {
    dateStyle: 'full',
  })

  const markup = html`<div tw="bg-white flex flex-col w-full h-full">
  <div tw="flex items-center w-full h-4/5 p-10">
    <div tw="flex flex-col">
      <div tw="text-black text-2xl mb-4">${date}</div>
      <div tw="flex text-5xl w-full font-bold leading-snug tracking-tight text-black">
        <img
          src="${site}logo-leetcode-dark.png"
          tw="h-15"
        />
        <span tw="ml-4">#${leetcodeProblemNumber}</span>
      </div>
      <div tw="flex text-5xl w-full font-bold leading-snug tracking-tight text-black">
        ${postTitle}
      </div>
    </div>
  </div>
  <div tw="w-full h-1/5 border-t border-black flex p-10 items-center justify-between text-2xl">
    <div tw="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
      </svg>
      <span tw="ml-3 text-blue-500">${domain}</span>
    </div>
    <div tw="flex items-center">
      <img
        src="${site}${author.avatar}"
        tw="w-15 h-15"
      />
      <div tw="flex flex-col ml-4">
        <span tw="text-black">${author.name}</span>
        <span tw="text-blue-500">@${author.nickname}</span>
      </div>
    </div>
  </div>
</div>`

  const svg = await satori(markup, {
    fonts: [
      {
        name: 'Inter',
        data: Buffer.from(IBMPlexMonoRegular),
        weight: 400,
      },
      {
        name: 'Inter',
        data: Buffer.from(IBMPlexMonoBold),
        weight: 700,
      },
    ],
    height: dimensions.height,
    width: dimensions.width,
  })

  const image = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: dimensions.width,
    },
  }).render()

  return {
    body: image.asPng(),
    encoding: 'binary',
  }
}

export async function getStaticPaths() {
  const posts = await getCollection('leetcode-solutions')
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    }
  })
  return paths
}
