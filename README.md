# AIB Robot

English-language storefront for [aibrobot.com](https://aibrobot.com). AI Bionic Robot (AIB Robot) is a category site for AI bionic and companion robots. The expression-head figure in the catalog does not walk. The adult companion figures are transitional products. Checkout is an order request. The site is for adults, 18 and older.

## Stack

- [Astro](https://astro.build) 5, static output.
- Vanilla JavaScript for the age gate, filters, inquiry bag (localStorage), and forms.

## Install and build

```bash
npm ci
npm run dev
```

Production build:

```bash
npm ci
npm run build
```

The static site is written to `dist/`. Node 20 or newer is recommended.

`npm run import-blog` copies Markdown articles from a folder (default `incoming-articles/` in the project, or a path you pass) into `src/content/blog/`. It does not invent posts. If the folder is missing, nothing is imported.
