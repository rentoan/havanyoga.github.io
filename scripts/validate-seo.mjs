import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const excluded = new Set(["404.html", "program.html"]);

async function walk(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const relative = path.posix.join(prefix, entry.name);
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolute, relative)));
    else if (entry.name.endsWith(".html") && !excluded.has(relative)) files.push(relative);
  }
  return files;
}

const requirements = [
  [/<title>[^<]+<\/title>/, "title"],
  [/<meta\s+name="description"\s+content="[^"]+"/, "meta description"],
  [/<link\s+rel="canonical"\s+href="https:\/\/havan\.fit\/[^"]*"/, "canonical URL"],
  [/<link\s+rel="icon"/, "favicon"],
  [/<meta\s+property="og:title"/, "Open Graph title"],
  [/<meta\s+property="og:description"/, "Open Graph description"],
  [/<meta\s+property="og:image"/, "Open Graph image"],
  [/<meta\s+name="twitter:card"/, "Twitter card"],
  [/<script\s+type="application\/ld\+json">/, "JSON-LD"],
];

const errors = [];
for (const file of await walk(root)) {
  const html = await readFile(path.join(root, file), "utf8");
  for (const [pattern, label] of requirements) if (!pattern.test(html)) errors.push(`${file}: missing ${label}.`);
  for (const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch { errors.push(`${file}: invalid JSON-LD.`); }
  }
}

for (const asset of ["assets/havan-mark.svg", "assets/og-havan.webp", "robots.txt", "sitemap.xml"]) {
  try { await access(path.join(root, asset)); } catch { errors.push(`Missing SEO asset: ${asset}.`); }
}
if (errors.length) {
  console.error("SEO validation failed:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log("SEO metadata and assets validated.");
