import { join } from 'path'

const APP_DIR = 'splendid'
const BUILD_DIR = '.'

/** @type {import('splendid').Config} */
const config = {
  appDir: APP_DIR,
  layout: join(APP_DIR, 'layout/main.html'),
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Idio](https://idio.cc)',
    },
  ],
  output: BUILD_DIR,
  url: 'https://idio.cc',
  // to generate sitemaps:
  /* url: https://website.github.io/splendid */
}

export default config