# HAVAN content workflow

The site is built with Eleventy. Source pages stay in their existing locations so public URLs remain unchanged; production output is generated in `_site/`.

## Add a Journal article

1. Create `journal/<slug>.html` with YAML front matter before the doctype.
2. Add the required metadata shown below. The `journal` tag and `order` place the article automatically on the home page and Journal archive. The `topic` adds it to the matching topic archive.
3. Add the article body and its SEO metadata. Put licensed media in `assets/journal/` and record the source in `MEDIA_SOURCES.md`.
4. Run `npm run check`. This builds `_site`, generates the sitemap, validates SEO/product data and rejects broken internal links.

```yaml
---
tags: journal
title: Article title
summary: One-sentence home-page description.
readingTime: 6 minutes
contentType: Guide
topic: movement-breaks
order: 5
---
```

Available topic slugs are `movement-breaks`, `starting-points` and `buyer-guides`. Topic names and descriptions live in `_data/topics.json`; add a topic there once and Eleventy creates its archive automatically.

## Local preview

```powershell
npm install
npm run serve
```

Do not edit `_site/`; it is generated and ignored by Git. GitHub Actions builds and deploys that directory after every push to `master`.
