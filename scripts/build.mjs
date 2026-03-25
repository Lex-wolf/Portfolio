import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";
import { siteMetadata } from "../src/siteMetadata.js";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const distDir = path.resolve(projectRoot, "dist");
const serverEntry = path.resolve(distDir, "server/entry-server.js");
const indexHtmlPath = path.resolve(distDir, "index.html");

const metaTags = `
    <link rel="canonical" href="${siteMetadata.siteUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${siteMetadata.title}" />
    <meta property="og:description" content="${siteMetadata.description}" />
    <meta property="og:url" content="${siteMetadata.siteUrl}" />
    <meta property="og:image" content="${siteMetadata.ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${siteMetadata.title}" />
    <meta name="twitter:description" content="${siteMetadata.description}" />
    <meta name="twitter:image" content="${siteMetadata.ogImage}" />`;

await build({
  root: projectRoot,
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

await build({
  root: projectRoot,
  build: {
    ssr: "src/entry-server.jsx",
    outDir: "dist/server",
    emptyOutDir: false,
  },
});

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverEntry).href),
  fs.readFile(indexHtmlPath, "utf8"),
]);

const html = template
  .replace("<!--app-head-->", metaTags)
  .replace("<!--app-html-->", render());

await fs.writeFile(indexHtmlPath, html);
