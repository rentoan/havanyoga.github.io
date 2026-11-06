# HAVAN SEO operations

## Search-engine registration

1. Verify the Domain property `havan.fit` in Google Search Console with the DNS TXT value supplied by Google.
2. Submit `https://havan.fit/sitemap.xml` in Search Console.
3. Inspect and request indexing for the home page, `/products/`, the current product guide and priority Journal pages.
4. Import the verified Google property into Bing Webmaster Tools, or verify it separately.
5. Monitor indexing, Core Web Vitals, search queries, manual actions and sitemap processing after each material release.

## Automated technical controls

- Eleventy’s `sitemap.njk` discovers built pages and writes their public URLs and modification dates.
- `scripts/validate-seo.mjs` checks the built `_site` for titles, descriptions, canonical URLs, favicon, Open Graph data, Twitter cards and valid JSON-LD.
- `scripts/validate-products.mjs` checks built product pages, product IDs, disclosures and affiliate TIDs.
- `scripts/validate-links.mjs` rejects broken internal links in the built site.
- GitHub Actions runs the full `npm run check` workflow before deployment.

## Content rules

- Use one clear search intent per page and unique title/description text.
- Link Journal articles to the most relevant guide, not every product.
- Keep provider claims, independent findings and unknowns separate.
- Do not add Review/rating schema until HAVAN has genuine first-hand evidence supporting it.
- Update product facts and `reviewedAt` when provider pages or checkout terms change.
- Add new public pages to the site navigation or internal content links; the sitemap is discovery support, not a substitute for internal linking.
