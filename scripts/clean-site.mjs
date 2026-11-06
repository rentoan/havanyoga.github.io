import { rm } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const target = path.join(process.cwd(), "_site");
if (path.basename(target) !== "_site") throw new Error("Refusing to clean an unexpected directory.");
await rm(target, { recursive: true, force: true });
