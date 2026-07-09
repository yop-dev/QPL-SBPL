import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const b64 = readFileSync("public/img/qpl-logo.png").toString("base64");
const src = "data:image/png;base64," + b64;
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 700, height: 300, deviceScaleFactor: 2 });
await page.setContent(`<div style="margin:0;background:#0a0e16;padding:24px;display:flex;gap:24px;align-items:center">
  <img src="${src}" style="height:36px"/>
  <img src="${src}" style="height:36px;filter:brightness(0) invert(1)"/>
  <div style="background:#fff;border-radius:8px;padding:8px 12px;display:inline-flex"><img src="${src}" style="height:28px"/></div>
</div>
<div style="background:#0a0e16;padding:0 24px 24px;color:#888;font:12px monospace">left: raw &nbsp; middle: brightness(0) invert(1) &nbsp; right: on white chip</div>`);
await new Promise(r=>setTimeout(r,300));
await page.screenshot({ path: "scripts/logo-preview.png" });
await browser.close();
console.log("done");
