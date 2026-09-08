// Debug Tailwind responsive display utilities.
import { chromium } from "playwright-core";

const BASE = process.env.BASE || "http://localhost:3226";
const shell = "/home/thirafi/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell";
const browser = await chromium.launch({ executablePath: shell });
const page = await browser.newPage({ reducedMotion: "reduce" });
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto(BASE + "/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(1500);

const info = await page.evaluate(() => {
  const all = [...document.querySelectorAll('[aria-label="Sourcing and heritage"] > div')];
  const probe = document.createElement("div");
  probe.className = "hidden md:grid test-probe-xyz";
  document.body.appendChild(probe);
  const probeDisplay = getComputedStyle(probe).display;
  probe.remove();
  // cek apakah rule .md\:grid ada di stylesheet manapun
  let mdGridFound = false;
  let hiddenFound = false;
  for (const sh of document.styleSheets) {
    let rules;
    try {
      rules = sh.cssRules;
    } catch {
      continue;
    }
    for (const r of rules) {
      if (r.type === 4) {
        for (const inner of r.cssRules) {
          if (inner.selectorText?.includes("md\\:grid")) mdGridFound = true;
          if (inner.selectorText?.includes("md\\:hidden")) mdGridFound = true;
        }
      } else {
        if (r.selectorText === ".hidden") hiddenFound = true;
      }
    }
  }
  return {
    innerWidth: window.innerWidth,
    mq768: window.matchMedia("(min-width: 768px)").matches,
    mq48rem: window.matchMedia("(min-width: 48rem)").matches,
    rootFont: getComputedStyle(document.documentElement).fontSize,
    directChildren: all.map((d) => d.className),
    probeDisplay,
    mdGridFound,
    hiddenFound,
    styleSheets: document.styleSheets.length,
  };
});
console.log(JSON.stringify(info, null, 1));
await browser.close();
