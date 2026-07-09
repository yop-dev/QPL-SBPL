import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const b64 = readFileSync("public/img/qpl-logo.png").toString("base64");
const src = "data:image/png;base64," + b64;
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 900, height: 500, deviceScaleFactor: 2 });
// checkerboard so transparency is visible; enlarge the left mark region
await page.setContent(`<div style="margin:0;background:
  conic-gradient(#ddd 90deg,#fff 90deg 180deg,#ddd 180deg 270deg,#fff 270deg) 0 0/24px 24px;padding:20px;display:flex;gap:30px;align-items:flex-start">
  <div><div style="font:12px monospace">full lockup 6x</div>
    <img src="${src}" style="height:${62*6}px;image-rendering:pixelated"/></div>
</div>
<div style="background:#0a0e16;padding:20px;display:flex;gap:30px;align-items:center">
  <div><div style="font:12px monospace;color:#888">mark only, ~10x, on dark</div>
    <img src="${src}" style="height:${62*10}px;image-rendering:pixelated;object-fit:none;object-position:left;width:${62*10}px"/></div>
</div>`);
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: "scripts/shots/logo-inspect.png" });
await browser.close();
console.log("done");
