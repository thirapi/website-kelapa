// Final masonry visibility check.
import { chromium } from "playwright-core";

const BASE = process.env.BASE || "http://localhost:3226";
const shell = "/home/thirafi/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell";
const browser = await chromium.launch({ executablePath: shell });
for (const w of [390, 1280]) {
  const page = await browser.newPage({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: w, height: 800 });
  await page.goto(BASE + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(1500);
  const info = await page.evaluate(() => {
    const sec = document.querySelector('[aria-label="Sourcing and heritage"]');
    const mob = sec.querySelector(".space-y-4");
    const desk = sec.querySelector("[data-masonry-col]")?.parentElement;
    const vis = (el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return { display: cs.display, w: Math.round(r.width), h: Math.round(r.height) };
    };
    return {
      viewport: window.innerWidth,
      mobile: mob ? vis(mob) : null,
      desktop: desk ? vis(desk) : null,
      mobileClass: mob?.className,
      deskClass: desk?.className,
    };
  });
  console.log(JSON.stringify(info));
  await page.close();
}
await browser.close();
