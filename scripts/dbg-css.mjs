// Compare navbar (works) vs masonry (broken?) display utilities.
import { chromium } from "playwright-core";

const BASE = process.env.BASE || "http://localhost:3226";
const shell = "/home/thirafi/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell";
const browser = await chromium.launch({ executablePath: shell });
const page = await browser.newPage({ reducedMotion: "reduce" });
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto(BASE + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(1500);

const info = await page.evaluate(() => {
  const hits = [];
  const walk = (rules) => {
    for (const r of rules) {
      if (r.selectorText && /hidden|md\\:grid|lg\:flex/.test(r.selectorText)) {
        hits.push(`${r.selectorText} {${r.style.cssText.slice(0, 80)}} @${r.parentRule ? r.parentRule.conditionText || r.parentRule.name : "root"}`);
      }
      if (r.cssRules) walk(r.cssRules);
    }
  };
  let total = 0;
  for (const sh of document.styleSheets) {
    try {
      total += sh.cssRules.length;
      walk(sh.cssRules);
    } catch { /* cross-origin */ }
  }
  const burger = document.querySelector('[aria-label="Toggle menu"], [aria-label="Open menu"], [aria-label="Close menu"]');
  const deskNav = document.querySelector('nav[aria-label="Primary"] ul');
  const mobDiv = document.querySelector('[aria-label="Sourcing and heritage"] .space-y-4');
  return {
    topLevelRules: total,
    relevant: hits.slice(0, 20),
    burger: burger ? getComputedStyle(burger).display : "notfound",
    deskNavUl: deskNav ? getComputedStyle(deskNav).display : "notfound",
    mobDiv: mobDiv ? getComputedStyle(mobDiv).display : "notfound",
  };
});
console.log(JSON.stringify(info, null, 1));
await browser.close();
