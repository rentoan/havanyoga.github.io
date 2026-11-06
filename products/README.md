# HAVAN product guide system

Each product has a dedicated editorial page under `/products/`. The system stays simple for GitHub Pages: unique long-form HTML for search and reader value, shared site styles, and a structured catalog for governance.

## Source of truth

`catalog.json` records product identity, category, verification status, canonical page, provider URL and affiliate configuration. Keep it aligned with every published guide.

Verification values: `provider-information-only`, `independently-tested`, or `mixed`.

Publication status values: `draft`, `published`, `paused`, or `archived`.

## Adding a product

1. Research the current provider page, checkout terms and affiliate rules.
2. Add one object to `catalog.json` with a unique lowercase slug.
3. Copy an existing guide to `<slug>.html` and rewrite every section for that product. Do not publish a thin template with swapped names.
4. Set a canonical URL: `https://havan.fit/products/<slug>.html`.
5. Add the guide to `products/index.html`. Eleventy adds the built page to `sitemap.xml` automatically.
6. Use unique ClickBank TIDs or equivalent tracking IDs for hero, middle and final CTAs.
7. Put a plain-language commission disclosure before the first affiliate link and near later CTAs.
8. Update privacy/disclosure pages when a new network or tracking technology changes data handling.
9. Validate HTML, local links, mobile layout and outbound redirects before publishing.

## Editorial rules

- Keep provider claims, independent findings and unknowns visibly separate.
- Do not use first-person review language until the verification status supports it.
- Do not copy vendor media without documented permission.
- Do not promise health outcomes or present a general program as treatment.
- Time-stamp prices, bonuses and refund terms or defer to the current checkout.
- Affiliate commission must not determine whether a guide is favorable.
