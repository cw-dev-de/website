import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, PAGES } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

for (const key of Object.keys(PAGES)) {
  const { head, html } = render(key);
  const out = template.replace("<!--head-->", head).replace("<!--app-->", html);
  fs.writeFileSync(path.join(dist, PAGES[key].file), out);
  console.log("prerendered", PAGES[key].file);
}

fs.rmSync(ssrDir, { recursive: true, force: true });