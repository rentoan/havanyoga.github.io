import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";

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

async function lastModified(file) {
  try {
    const result = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], { cwd: root, encoding: "utf8" }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(result)) return result;
  } catch {}
  return (await stat(path.join(root, file))).mtime.toISOString().slice(0, 10);
}

function publicUrl(file) {
  if (file === "index.html") return "https://havan.fit/";
  if (file.endsWith("/index.html")) return `https://havan.fit/${file.slice(0, -10)}`;
  return `https://havan.fit/${file}`;
}

const files = (await walk(root)).sort((a, b) => publicUrl(a).localeCompare(publicUrl(b)));
const urls = [];
for (const file of files) {
  const html = await readFile(path.join(root, file), "utf8");
  if (html.includes('name="robots"') && html.includes("noindex")) continue;
  urls.push(`  <url><loc>${publicUrl(file)}</loc><lastmod>${await lastModified(file)}</lastmod></url>`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
await writeFile(path.join(root, "sitemap.xml"), xml, "utf8");
console.log(`Generated sitemap.xml with ${urls.length} URL(s).`);
