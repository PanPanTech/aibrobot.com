import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.aibrobot.com',
  output: 'static',
  compressHTML: true,
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/left'),
      changefreq: 'weekly',
      lastmod: new Date('2026-11-16'),
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'min-light' },
  },
  vite: {
    server: { watch: { usePolling: false } },
  },
});
