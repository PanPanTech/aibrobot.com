import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

export async function GET(context: { site?: URL }) {
  let posts: Awaited<ReturnType<typeof getCollection<'blog'>>> = [];
  try { posts = await getCollection('blog'); } catch { posts = []; }
  posts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'AIB Robot Journal',
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => {
      const slug = post.data.slug || post.id.replace(/\.mdx?$/, '').replace(/^.*\//, '');
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${slug}/`,
        categories: post.data.tags,
      };
    }),
    customData: '<language>en-us</language>',
  });
}
