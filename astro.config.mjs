import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

const blogDirectory = new URL('./src/content/blog/', import.meta.url);
const blogDates = new Map();
for (const filename of readdirSync(blogDirectory).filter((name) => name.endsWith('.md'))) {
  const frontmatter = readFileSync(new URL(filename, blogDirectory), 'utf8').split(/^---\s*$/m, 3)[1] ?? '';
  const slug = frontmatter.match(/^slug:[ \t]*["']?([^"'\r\n]+)/m)?.[1].trim() ?? filename.replace(/\.md$/, '');
  const modified = frontmatter.match(/^updatedDate:[ \t]*["']?(\d{4}-\d{2}-\d{2})/m)?.[1]
    ?? frontmatter.match(/^date:[ \t]*["']?(\d{4}-\d{2}-\d{2})/m)?.[1];
  if (modified) blogDates.set(`/blog/${slug}`, new Date(modified).toISOString());
}
const latestBlogDate = [...blogDates.values()].sort().at(-1);

export default defineConfig({
  site: 'https://www.aibrobot.com',
  output: 'static',
  compressHTML: true,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/left'),
      changefreq: 'weekly',
      lastmod: new Date('2026-11-16'),
      serialize(item) {
        const pathname = new URL(item.url).pathname.replace(/\/$/, '');
        const articleDate = blogDates.get(pathname);
        if (pathname === '/blog' || pathname.startsWith('/blog/')) {
          item.url = new URL(`${pathname}/`, item.url).toString();
          item.lastmod = articleDate ?? latestBlogDate;
        }
        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'min-light' },
  },
  vite: {
    server: { watch: { usePolling: false } },
  },
});
