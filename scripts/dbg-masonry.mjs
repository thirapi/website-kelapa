// Debug masonry render state.
import { chromium } from "playwright-core";

const BASE = process.env.BASE || "http://localhost:3226";
const shell = "/home/thirafi/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell";
const browser = await chromium.launch({ executablePath: shell });
const page = await browser.newPage({ reducedMotion: "reduce" });
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto(BASE + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(2000);

const info = await page.evaluate(() => {
  const sec = document.querySelector('[aria-label="Sourcing and heritage"]');
  const cols = [...document.querySelectorAll("[data-masonry-col]")];
  const figs = [...document.querySelectorAll('[aria-label="Sourcing and heritage"] figure')];
  const mobile = document.querySelector('[aria-label="Sourcing and heritage"] .md\\:hidden');
  const desk = document.querySelector('[aria-label="Sourcing and heritage"] .md\\:grid');
  return {
    sectionFound: !!sec,
    sectionWidth: sec?.getBoundingClientRect().width,
    cols: cols.length,
    figsPerCol: cols.map((c) => c.querySelectorAll("figure").length),
    totalFigs: figs.length,
    mobileDisplay: mobile ? getComputedStyle(mobile).display : "n/a",
    deskDisplay: desk ? getComputedStyle(desk).display : "n/a",
    imgs: figs.map((f) => {
      const img = f.querySelector("img");
      return img ? { src: img.currentSrc.slice(-30), w: img.naturalWidth, h: img.clientHeight } : null;
    }),
  };
});
console.log(JSON.stringify(info, null, 1));
await browser.close();
