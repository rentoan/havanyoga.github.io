import { readdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = path.resolve(process.argv[2] || "_site");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolute)));
    else if (entry.name.endsWith(".html")) files.push(absolute);
  }
  return files;
}

const errors = [];
for (const file of await walk(root)) {
  const html = await readFile(file, "utf8");
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean) continue;
    let target = clean.startsWith("/") ? path.join(root, clean) : path.resolve(path.dirname(file), clean);
    if (target.endsWith(path.sep)) target = path.join(target, "index.html");
    try { await access(target); } catch { errors.push(`${path.relative(root, file)}: broken link ${href}`); }
  }
}

if (errors.length) {
  console.error("Internal link validation failed:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log("Internal links validated in built site.");
