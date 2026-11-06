# HAVAN (`havan.fit`)

Static English-language editorial website for calm at-home movement guidance, built with Eleventy and deployed to GitHub Pages.

## Content architecture

- Eleventy builds the production site into `_site/`; never edit that directory directly.
- Journal front matter drives the home-page article cards and collection order.
- `sitemap.njk` generates `sitemap.xml` from the pages Eleventy builds.
- `CONTENT_WORKFLOW.md` is the operating guide for adding articles and licensed media.

## Product guide architecture

- `/products/index.html` is the public program-guide hub.
- `/products/<slug>.html` contains a unique long-form guide for each product.
- `/products/catalog.json` is the structured source of truth for product status, verification and affiliate metadata.
- `/products/README.md` documents the publishing and editorial workflow.
- `scripts/validate-products.mjs` prevents deployment when catalog entries, page IDs, disclosures or CTA tracking IDs are inconsistent.
- `program.html` preserves the old URL and redirects to the current Hyperbolic Stretching guide.

Run the complete production check locally with:

```powershell
npm install
npm run check
```

## SEO checks

The deployment workflow builds `_site`, generates `sitemap.xml`, and checks every indexable page for a title, description, canonical URL, favicon, Open Graph metadata, Twitter card, valid JSON-LD and working internal links.

```powershell
npm run check
```

Local mobile Lighthouse baseline after the SEO/performance pass: Performance 98, Accessibility 100, Best Practices 100 and SEO 100. Results can vary by device, network and deployment response time.

## Local preview

Install dependencies and start Eleventy’s local server:

```powershell
npm install
npm run serve
```

Then open `http://localhost:8080`.

## Publish with GitHub Pages

1. Commit and push these files to the `master` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Wait for the `Deploy static site to Pages` workflow to finish.
5. In **Settings → Pages → Custom domain**, confirm `havan.fit` and enable **Enforce HTTPS** after the certificate is ready.

The included `CNAME` file declares `havan.fit`.

Journal navigation is generated from article front matter. `/journal/` lists every article and `_data/topics.json` drives the topic archive pages, so publishing a correctly tagged article requires no manual archive edits.

Do not select **Deploy from a branch** for this repository. Branch deployment publishes Eleventy source files before they are rendered; only the GitHub Actions workflow uploads the generated `_site/` artifact.

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

## Analytics and consent

- Google Analytics 4 uses measurement ID `G-FVLMZX34P9` and loads only after a visitor selects **Allow**.
- `app.js` sends `journal_click`, `program_click` and `provider_click` funnel events after consent.
- Declining analytics prevents the Google tag from loading. Advertising storage, ad user data and ad personalization remain disabled.

