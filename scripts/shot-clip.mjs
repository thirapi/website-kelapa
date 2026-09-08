// Clip screenshots of specific sections for close inspection.
// Usage: BASE=... node scripts/shot-clip.mjs
import { chromium } from "playwright-core";
import fs from "node:fs";

const BASE = process.env.BASE || "http://localhost:3226";
const ROUTE = process.env.ROUTE || "/";
const OUT = new URL("../shots/", import.meta.url).pathname;
fs.mkdirSync(OUT, { recursive: true });

const shell = "/home/thirafi/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell";
const browser = await chromium.launch({ executablePath: shell });
const page = await browser.newPage({ reducedMotion: "reduce" });
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto(BASE + ROUTE, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2500);

const clips =
  ROUTE === "/"
    ? [
        ["hero", '[aria-label="Hero"]'],
        ["masonry", '[aria-label="Sourcing and heritage"]'],
        ["why", '[aria-label="Why COCO KATAPIANG"]'],
        ["quality", '[aria-label="Quality and traceability"]'],
      ]
    : [["page-hero", "main > div > section:first-child"]];
for (const [name, sel] of clips) {
  const el = page.locator(sel);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  // Lewati seluruh section perlahan agar lazy-image terpicu
  const absTop = await el.evaluate((node) => {
    const r = node.getBoundingClientRect();
    return window.scrollY + r.top;
  });
  const h = await el.evaluate((node) => node.getBoundingClientRect().height);
  const vh = page.viewportSize().height;
  for (let y = absTop - vh; y <= absTop + h; y += 400) {
    await page.evaluate((yy) => window.scrollTo(0, Math.max(0, yy)), y);
    await page.waitForTimeout(200);
  }
  await el.scrollIntoViewIfNeeded({ block: "start" });
  await page.waitForTimeout(800);
  const slug = ROUTE === "/" ? "" : `${ROUTE.replaceAll("/", "")}-`;
  await el.screenshot({ path: `${OUT}clip-${slug}${name}.png` });
  console.log("saved", `${slug}${name}`);
}
await browser.close();
