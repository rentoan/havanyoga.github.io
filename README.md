# HAVAN (`havan.fit`)

Static English-language editorial website for calm at-home movement guidance. No build step or backend is required.

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
- The current provider link is not an affiliate link.
- Update `disclosure.html` and `privacy.html` before enabling affiliate tracking, analytics, pixels, forms or a newsletter.
- The hero image is AI-generated specifically for HAVAN and is not vendor media.
