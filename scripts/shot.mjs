// Visual QA: full-page screenshots per route × viewport.
// Usage: BASE=http://localhost:3226 node scripts/shot.mjs [route...]
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.BASE || "http://localhost:3226";
const OUT = new URL("../shots/", import.meta.url).pathname;
fs.mkdirSync(OUT, { recursive: true });

const routes = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["/", "/about", "/products", "/process", "/contact"];
const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
  { name: "wide", width: 1600, height: 900 },
];

const shell = "/home/thirafi/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell";
const browser = await chromium.launch({ executablePath: shell });
const page = await browser.newPage({ reducedMotion: "reduce" });

for (const route of routes) {
  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(BASE + route, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(1200);
    // Guard: pastikan CSS termuat (probe .hidden harus display:none)
    const cssOk = await page.evaluate(() => {
      const el = document.createElement("div");
      el.className = "hidden";
      el.style.position = "absolute";
      document.body.appendChild(el);
      const ok = getComputedStyle(el).display === "none";
      el.remove();
      return ok;
    });
    if (!cssOk) throw new Error(`CSS tidak termuat untuk ${route} @${vp.name} — hentikan, jangan tangkap basi`);
    // Scroll perlahan top→bottom agar lazy-image terpicu
    const h = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y <= h; y += 600) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(120);
    }
    await page.waitForTimeout(800);
    const slug = route === "/" ? "home" : route.replaceAll("/", "").replaceAll("[slug]", "slug");
    const file = path.join(OUT, `${slug}-${vp.name}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log("saved", file);
  }
}
await browser.close();
