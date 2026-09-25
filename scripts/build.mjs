import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";
import { siteMetadata } from "../src/siteMetadata.js";
import { websitesSeo } from "../src/data/websitesContent.js";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..");
const distDir = path.resolve(projectRoot, "dist");
const serverEntry = path.resolve(distDir, "server/entry-server.js");
const indexHtmlPath = path.resolve(distDir, "index.html");

function metaTagsFor({ title, description, canonical }) {
  return `
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteMetadata.ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${siteMetadata.ogImage}" />`;
}

await build({
  root: projectRoot,
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

process.env.PORTFOLIO_SSR = "1";
await build({
  root: projectRoot,
  build: {
    ssr: "src/entry-server.jsx",
    outDir: "dist/server",
    emptyOutDir: false,
  },
});
delete process.env.PORTFOLIO_SSR;

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverEntry).href),
  fs.readFile(indexHtmlPath, "utf8"),
]);

const homeHtml = template
  .replace("<!--app-head-->", metaTagsFor({
    title: siteMetadata.title,
    description: siteMetadata.description,
    canonical: siteMetadata.siteUrl,
  }))
  .replace("<!--app-html-->", render("/"));

await fs.writeFile(indexHtmlPath, homeHtml);

const websitesDir = path.resolve(distDir, "websites");
await fs.mkdir(websitesDir, { recursive: true });

const websitesHtml = template
  .replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${websitesSeo.title}</title>`,
  )
  .replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${websitesSeo.description}" />`,
  )
  .replace("<!--app-head-->", metaTagsFor({
    title: websitesSeo.title,
    description: websitesSeo.description,
    canonical: `${siteMetadata.siteUrl}/websites`,
  }))
  .replace("<!--app-html-->", render("/websites"));

await fs.writeFile(path.resolve(websitesDir, "index.html"), websitesHtml);
