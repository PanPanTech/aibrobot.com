#!/usr/bin/env node
/**
 * Import English journal articles from incoming-articles/
 * into src/content/blog/, normalizing frontmatter.
 *
 * Expected frontmatter: title, slug, description, date, tags, wordCount.
 * Safe to re-run. Does not invent posts. Skips incomplete files.
 *
 * Usage (from the project root):
 *   npm run import-blog
 *   node scripts/import-blog.mjs [source-dir]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DEFAULT_SRC = path.join(ROOT, 'incoming-articles');
const DEST = path.join(ROOT, 'src/content/blog');
const srcDir = path.resolve(process.argv[2] || DEFAULT_SRC);

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const fm = {};
  let key = null;
  let inList = false;
  for (const line of m[1].split(/\r?\n/)) {
    const listItem = line.match(/^\s*-\s+(.+)$/);
    if (inList && listItem) {
      fm[key].push(clean(listItem[1]));
      continue;
    }
    inList = false;
    const kv = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (!kv) continue;
    key = kv[1];
    let val = kv[2].trim();
    if (val === '' || val === '[]') {
      if (val === '[]') { fm[key] = []; inList = false; }
      else { fm[key] = []; inList = true; }
      continue;
    }
    if (val.startsWith('[') && val.endsWith(']')) {
      fm[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) => clean(s))
        .filter(Boolean);
      continue;
    }
    fm[key] = clean(val);
  }
  return { fm, body: m[2].replace(/^\s+/, '') };
}

function clean(s) {
  s = String(s).trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1);
  }
  return s;
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function yamlValue(v) {
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    return '\n' + v.map((x) => `  - ${JSON.stringify(x)}`).join('\n');
  }
  if (typeof v === 'number') return String(v);
  return JSON.stringify(String(v));
}

if (!fs.existsSync(srcDir)) {
  console.log(`Source folder not found: ${srcDir}`);
  console.log('No articles imported. The journal will show an empty state until this folder exists and contains .md files.');
  process.exit(0);
}

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.md') && !f.startsWith('.') && f.toLowerCase() !== 'index.md');
if (!files.length) {
  console.log(`No .md files in ${srcDir}. Nothing imported.`);
  process.exit(0);
}

fs.mkdirSync(DEST, { recursive: true });
// Remove previously imported files? Only those with our marker, keep any hand-written.
const report = [];
let imported = 0;
let skipped = 0;

for (const file of files) {
  const raw = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const parsed = parseFrontmatter(raw);
  if (!parsed) {
    console.warn(`SKIP (no frontmatter): ${file}`);
    skipped += 1;
    continue;
  }
  const { fm, body } = parsed;
  if (!fm.title || !fm.description || !body || body.trim().length < 200) {
    console.warn(`SKIP (incomplete title/description/body): ${file}`);
    skipped += 1;
    continue;
  }
  const slug = slugify(fm.slug || file.replace(/\.md$/, ''));
  if (!slug) {
    console.warn(`SKIP (bad slug): ${file}`);
    skipped += 1;
    continue;
  }
  let wordCount = fm.wordCount ? Number(String(fm.wordCount).replace(/[^\d]/g, '')) : 0;
  if (!wordCount) {
    wordCount = body.trim().split(/\s+/).filter(Boolean).length;
  }
  const tags = Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : []);
  const date = fm.date || new Date().toISOString().slice(0, 10);
  const out = [
    '---',
    `title: ${yamlValue(fm.title)}`,
    `slug: ${yamlValue(slug)}`,
    `description: ${yamlValue(fm.description)}`,
    `date: ${yamlValue(date)}`,
    `tags: ${yamlValue(tags)}`,
    `wordCount: ${wordCount}`,
    '---',
    '',
    body.trim(),
    '',
  ].join('\n');
  const dest = path.join(DEST, `${slug}.md`);
  fs.writeFileSync(dest, out, 'utf8');
  imported += 1;
  report.push({ file, slug, title: fm.title, wordCount, dest });
  console.log(`OK  ${slug}.md  —  "${fm.title}"  (${wordCount} words)`);
}

console.log('');
console.log(`Imported ${imported} of ${files.length} file(s). Skipped ${skipped}.`);
console.log(`Destination: ${DEST}`);
if (imported) {
  console.log('Run `npm run build` to include them in the static site.');
}
