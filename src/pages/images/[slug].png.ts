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
  const siteAddr = url.host

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
        <svg width="264" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
                <path d="M67.507 83.066a6.367 6.367 0 0 1 9.016.015 6.394 6.394 0 0 1-.015 9.032L65.435 103.17c-10.216 10.2-26.875 10.349-37.263.343-.06-.057-4.685-4.593-19.945-19.556-10.152-9.954-11.163-25.882-1.61-36.11l17.812-19.072c9.481-10.153 26.958-11.263 37.799-2.496l16.177 13.083a6.394 6.394 0 0 1 .956 8.98 6.368 6.368 0 0 1-8.965.958L54.219 36.217c-5.67-4.584-15.587-3.955-20.48 1.284L15.929 56.573c-4.65 4.98-4.141 13.001 1.218 18.256a546172.33 546172.33 0 0 0 19.851 19.465c5.401 5.202 14.134 5.124 19.437-.17l11.073-11.058Z" fill="#FFA116" fill-rule="nonzero"/>
                <path d="M40.607 72.001c-3.521 0-6.375-2.859-6.375-6.386s2.854-6.386 6.375-6.386h47.018c3.52 0 6.375 2.859 6.375 6.386s-2.854 6.386-6.375 6.386H40.607Z" fill="#B3B3B3"/>
                <path d="M49.412 2.023a6.367 6.367 0 0 1 9.011-.3 6.394 6.394 0 0 1 .3 9.027L15.929 56.573c-4.65 4.979-4.141 13 1.218 18.256l19.763 19.38a6.394 6.394 0 0 1 .097 9.031 6.367 6.367 0 0 1-9.016.097L8.227 83.957c-10.152-9.955-11.163-25.883-1.61-36.11L49.413 2.022ZM131.914 38.883v42.031c0 1.615.573 2.995 1.719 4.14 1.146 1.147 2.526 1.72 4.14 1.72h11.368c.99 0 1.836.351 2.539 1.054a3.461 3.461 0 0 1 1.054 2.54v.077c0 .99-.351 1.823-1.054 2.5A3.461 3.461 0 0 1 149.14 94h-11.367c-3.62 0-6.705-1.276-9.257-3.828-2.552-2.552-3.828-5.638-3.828-9.258V38.883c0-.99.351-1.836 1.054-2.54.703-.676 1.537-1.015 2.5-1.015h.117c.964 0 1.797.339 2.5 1.016a3.461 3.461 0 0 1 1.055 2.539Zm45.274 19.765c-3.907 0-7.24 1.38-10 4.141-2.735 2.76-4.102 6.094-4.102 10 0 .703.052 1.393.156 2.07l24.727-11.171c-2.813-3.36-6.406-5.04-10.781-5.04Zm19.375 5.157c.416.885.455 1.797.117 2.734-.339.912-.964 1.576-1.875 1.992-3.646 1.64-8.438 3.802-14.375 6.485L166.094 81.5c2.812 3.594 6.51 5.39 11.094 5.39 3.046 0 5.807-.898 8.28-2.695 2.397-1.744 4.076-4.01 5.04-6.797.573-1.614 1.719-2.421 3.437-2.421 1.224 0 2.2.507 2.93 1.523.703.99.846 2.07.43 3.242-1.459 4.219-4.01 7.63-7.657 10.235-3.724 2.682-7.877 4.023-12.46 4.023-5.886 0-10.912-2.083-15.079-6.25-4.166-4.167-6.25-9.193-6.25-15.078 0-5.886 2.084-10.912 6.25-15.078 4.167-4.167 9.193-6.25 15.078-6.25 4.245 0 8.125 1.159 11.641 3.476 3.464 2.266 6.042 5.26 7.734 8.985Zm28.164-5.157c-3.907 0-7.24 1.38-10 4.141-2.735 2.76-4.102 6.094-4.102 10 0 .703.052 1.393.156 2.07l24.727-11.171c-2.813-3.36-6.406-5.04-10.781-5.04Zm19.375 5.157c.416.885.455 1.797.117 2.734-.339.912-.964 1.576-1.875 1.992-3.646 1.64-8.438 3.802-14.375 6.485L213.633 81.5c2.812 3.594 6.51 5.39 11.094 5.39 3.046 0 5.807-.898 8.28-2.695 2.397-1.744 4.076-4.01 5.04-6.797.573-1.614 1.719-2.421 3.437-2.421 1.224 0 2.2.507 2.93 1.523.703.99.846 2.07.43 3.242-1.459 4.219-4.01 7.63-7.656 10.235C233.464 92.659 229.31 94 224.726 94c-5.886 0-10.912-2.083-15.079-6.25-4.166-4.167-6.25-9.193-6.25-15.078 0-5.886 2.084-10.912 6.25-15.078 4.167-4.167 9.193-6.25 15.079-6.25 4.244 0 8.125 1.159 11.64 3.476 3.464 2.266 6.042 5.26 7.735 8.985Zm11.68-28.477c.963 0 1.796.339 2.5 1.016a3.461 3.461 0 0 1 1.054 2.539v12.46h7.031c.964 0 1.797.352 2.5 1.055a3.461 3.461 0 0 1 1.055 2.54v.078c0 .99-.352 1.823-1.055 2.5-.703.703-1.536 1.054-2.5 1.054h-7.031v24.336c0 1.068.378 1.98 1.133 2.735.755.755 1.68 1.132 2.773 1.132h3.125c.964 0 1.797.352 2.5 1.055a3.461 3.461 0 0 1 1.055 2.54v.077c0 .99-.352 1.823-1.055 2.5-.703.703-1.536 1.055-2.5 1.055h-3.125c-3.073 0-5.703-1.08-7.89-3.242-2.162-2.188-3.243-4.805-3.243-7.852V38.883c0-.99.352-1.836 1.055-2.54.703-.676 1.537-1.015 2.5-1.015h.117Zm47.968 0c2.474 0 4.909.3 7.305.899 1.797.468 2.695 1.614 2.695 3.437v.117c0 1.146-.469 2.084-1.406 2.813-.912.703-1.927.911-3.047.625a22.186 22.186 0 0 0-5.547-.703c-6.094 0-11.302 2.161-15.625 6.484s-6.484 9.544-6.484 15.664c0 6.12 2.161 11.341 6.484 15.664 4.323 4.297 9.531 6.445 15.625 6.445 1.875 0 3.724-.22 5.547-.664 1.12-.286 2.135-.078 3.047.625.937.704 1.406 1.641 1.406 2.813v.078c0 1.849-.898 3.008-2.695 3.477-2.396.599-4.831.898-7.305.898-8.099 0-15.013-2.865-20.742-8.594-5.73-5.729-8.594-12.643-8.594-20.742s2.865-15.013 8.594-20.742c5.729-5.73 12.643-8.594 20.742-8.594Zm36.406 23.32c-3.906 0-7.24 1.38-10 4.141-2.734 2.76-4.101 6.094-4.101 10 0 3.88 1.367 7.2 4.101 9.961 2.76 2.76 6.094 4.14 10 4.14 3.907 0 7.227-1.38 9.961-4.14 2.76-2.76 4.14-6.08 4.14-9.96 0-3.907-1.38-7.24-4.14-10-2.734-2.761-6.054-4.142-9.96-4.142Zm0-7.304c5.886 0 10.912 2.083 15.078 6.25 4.167 4.166 6.25 9.192 6.25 15.078 0 5.885-2.083 10.911-6.25 15.078-4.166 4.167-9.192 6.25-15.078 6.25-5.885 0-10.911-2.083-15.078-6.25s-6.25-9.193-6.25-15.078c0-5.886 2.083-10.912 6.25-15.078 4.167-4.167 9.193-6.25 15.078-6.25Zm48.125 7.304c-3.906 0-7.24 1.38-10 4.141-2.734 2.76-4.101 6.094-4.101 10 0 3.88 1.367 7.2 4.101 9.961 2.76 2.76 6.094 4.14 10 4.14 3.907 0 7.227-1.38 9.961-4.14 2.76-2.76 4.14-6.08 4.14-9.96 0-3.907-1.38-7.24-4.14-10-2.734-2.761-6.054-4.142-9.96-4.142Zm17.774-23.32c.963 0 1.797.339 2.5 1.016a3.461 3.461 0 0 1 1.054 2.539v33.906c-.026 5.86-2.122 10.86-6.289 15-4.166 4.14-9.18 6.211-15.039 6.211-5.885 0-10.911-2.083-15.078-6.25s-6.25-9.193-6.25-15.078c0-5.886 2.083-10.912 6.25-15.078 4.167-4.167 9.193-6.25 15.078-6.25 5.365 0 10.065 1.784 14.102 5.351V38.883c0-.99.351-1.836 1.055-2.54.703-.676 1.536-1.015 2.5-1.015h.117Zm31.523 23.32c-3.906 0-7.24 1.38-10 4.141-2.734 2.76-4.101 6.094-4.101 10 0 .703.052 1.393.156 2.07l24.726-11.171c-2.812-3.36-6.406-5.04-10.78-5.04Zm19.375 5.157c.417.885.456 1.797.117 2.734-.338.912-.963 1.576-1.875 1.992-3.646 1.64-8.437 3.802-14.375 6.485L426.484 81.5c2.813 3.594 6.51 5.39 11.094 5.39 3.047 0 5.807-.898 8.281-2.695 2.396-1.744 4.076-4.01 5.04-6.797.572-1.614 1.718-2.421 3.437-2.421 1.224 0 2.2.507 2.93 1.523.703.99.846 2.07.43 3.242-1.459 4.219-4.011 7.63-7.657 10.235-3.724 2.682-7.878 4.023-12.46 4.023-5.886 0-10.912-2.083-15.079-6.25s-6.25-9.193-6.25-15.078c0-5.886 2.083-10.912 6.25-15.078 4.167-4.167 9.193-6.25 15.078-6.25 4.245 0 8.125 1.159 11.64 3.476 3.464 2.266 6.042 5.26 7.735 8.985Z" fill="#000"/>
            </g>
        </svg>
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
      <span tw="ml-3 text-blue-500">${siteAddr}</span>
    </div>
    <div tw="flex items-center">
      <img
        src="https://avatars.githubusercontent.com/u/6688235?v=4"
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