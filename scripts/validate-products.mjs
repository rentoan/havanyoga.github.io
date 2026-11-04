import { readFile, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const catalogPath = path.join(root, "products", "catalog.json");
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
const errors = [];
const ids = new Set();
const slugs = new Set();

if (catalog.schemaVersion !== 1) errors.push("Unsupported catalog schemaVersion.");
if (!Array.isArray(catalog.products) || catalog.products.length === 0) {
  errors.push("The product catalog must contain at least one product.");
}

for (const product of catalog.products ?? []) {
  const label = product.id || product.slug || "unnamed product";
  for (const field of ["id", "slug", "name", "category", "status", "verification", "url", "reviewedAt"]) {
    if (!product[field]) errors.push(`${label}: missing ${field}.`);
  }
  if (ids.has(product.id)) errors.push(`${label}: duplicate id.`);
  if (slugs.has(product.slug)) errors.push(`${label}: duplicate slug.`);
  ids.add(product.id);
  slugs.add(product.slug);
  if (!/^[a-z0-9-]+$/.test(product.slug ?? "")) errors.push(`${label}: slug must use lowercase letters, numbers and hyphens.`);

  const pagePath = path.join(root, "products", product.url ?? "");
  try {
    await access(pagePath);
    const html = await readFile(pagePath, "utf8");
    if (!html.includes(`data-product-id="${product.id}"`)) errors.push(`${label}: page data-product-id does not match catalog.`);
    if (!html.includes("Affiliate disclosure:")) errors.push(`${label}: missing visible affiliate disclosure.`);
    if (product.affiliate?.enabled) {
      if (!product.affiliate.baseHopLink) errors.push(`${label}: affiliate link enabled without baseHopLink.`);
      for (const placement of ["hero", "mid", "bottom"]) {
        const tid = `${product.affiliate.trackingPrefix}_${placement}`;
        if (!html.includes(`tid=${tid}`)) errors.push(`${label}: missing ${placement} tracking ID (${tid}).`);
      }
    }
  } catch {
    errors.push(`${label}: product page not found at products/${product.url}.`);
  }
}

const hub = await readFile(path.join(root, "products", "index.html"), "utf8");
for (const product of catalog.products ?? []) {
  if (product.status === "published" && !hub.includes(`href="${product.url}"`)) {
    errors.push(`${product.id}: published product is missing from the product hub.`);
  }
}

if (errors.length) {
  console.error("Product system validation failed:\n- " + errors.join("\n- "));
  process.exit(1);
}

console.log(`Validated ${catalog.products.length} product guide(s).`);
