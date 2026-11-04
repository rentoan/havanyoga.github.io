# HAVAN (`havan.fit`)

Static English-language editorial website for calm at-home movement guidance. No build step or backend is required.

## Product guide architecture

- `/products/index.html` is the public program-guide hub.
- `/products/<slug>.html` contains a unique long-form guide for each product.
- `/products/catalog.json` is the structured source of truth for product status, verification and affiliate metadata.
- `/products/README.md` documents the publishing and editorial workflow.
- `scripts/validate-products.mjs` prevents deployment when catalog entries, page IDs, disclosures or CTA tracking IDs are inconsistent.
- `program.html` preserves the old URL and redirects to the current Hyperbolic Stretching guide.

Run the product-system check locally with:

```powershell
node scripts/validate-products.mjs
```

## SEO checks

The deployment workflow rebuilds `sitemap.xml` from indexable HTML files and uses the latest Git commit date for each URL. It then checks every indexable page for a title, description, canonical URL, favicon, Open Graph metadata, Twitter card and valid JSON-LD.

```powershell
node scripts/build-sitemap.mjs
node scripts/validate-seo.mjs
```

Local mobile Lighthouse baseline after the SEO/performance pass: Performance 98, Accessibility 100, Best Practices 100 and SEO 100. Results can vary by device, network and deployment response time.

## Local preview

Run a static server from this directory, for example:

```powershell
npx --yes http-server . -p 8080 -c-1
```

Then open `http://localhost:8080`.

## Publish with GitHub Pages

1. Commit and push these files to the `master` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Wait for the `Deploy static site to Pages` workflow to finish.
5. In **Settings → Pages → Custom domain**, confirm `havan.fit` and enable **Enforce HTTPS** after the certificate is ready.

The included `CNAME` file declares `havan.fit`.

## DNS for `havan.fit`

At the domain registrar/DNS provider, add these GitHub Pages records for the apex domain:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `<your-github-username>.github.io` |

Verify these values against GitHub's current documentation before changing DNS, then also add/verify `www.havan.fit` in GitHub if you want that hostname.

Do not delete unrelated MX/TXT records used for email or domain verification. DNS and HTTPS propagation can take time.

## Content boundaries

- The Hyperbolic Stretching page is an informational overview, not a first-person product review.
- The program page uses a ClickBank HopLink with separate Tracking IDs for its hero, middle and final CTA placements.
- Affiliate disclosures are shown near the links and documented in `disclosure.html` and `privacy.html`.
- Update `privacy.html` before enabling first-party analytics, pixels, forms or a newsletter.
- The hero image is AI-generated specifically for HAVAN and is not vendor media.
