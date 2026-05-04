/**
 * One-off / CI: resizes and writes WebP next to large raster project images.
 * Run: node scripts/optimize-project-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "../src/assets");

const FILES = [
  "weather.jpeg",
  "todo.png",
  "profile2.png",
  "FTP2.png",
  "geobrasil.png",
  "PizzaBar.png",
  "roseauto.png",
  "ec-website.png",
  "ec-app.png",
  "thomasr-app.png",
  "brandi-c-website.png",
  "aceparking-app.png",
  "pridestudy.png",
  "ec-forums.png",
  "pj-website.jpg",
  "thomasr-website.png",
  "to-the-stars-website.png",
  "astro.png",
  "chicana2.png",
  "taco-garage.png",
  "aspire-1.png",
  "aspire-2.png",
  "aspire-3.png",
  "aspire-4.png",
  "obagi-1.png",
  "obagi-2.png",
  "obagi-3.png",
  "obagi-4.png",
  "obagi-5.png",
  "obagi-6.png",
  "ourrescue-website.png",
  "work.jpg",
];

const maxWidth = 1400;
const quality = 82;

for (const name of FILES) {
  const input = path.join(assetsDir, name);
  const base = path.parse(name).name;
  const outPath = path.join(assetsDir, `${base}.webp`);
  try {
    await fs.access(input);
  } catch {
    console.warn("skip (missing):", name);
    continue;
  }
  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(outPath);
  const inStat = await fs.stat(input);
  const outStat = await fs.stat(outPath);
  console.log(
    `${name} -> ${base}.webp (${(inStat.size / 1024).toFixed(0)}KB -> ${(outStat.size / 1024).toFixed(0)}KB)`,
  );
}

console.log("Done. Update projectsData.js imports to .webp where generated.");
