import puppeteer from "puppeteer-core";
import { readFileSync, writeFileSync } from "node:fs";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const VEC = process.argv[2]; // scratch dir containing logo-mark.svg
const APP = "src/app";

// Pull the two traced paths (blue drop, charcoal ribbon) from the vector.
const markSvg = readFileSync(VEC + "/logo-mark.svg", "utf8");
const ds = [...markSvg.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]);
const [dropD, ribbonD] = ds;

// Compose the favicon: just the mark, transparent background.
// The ribbon is the authentic charcoal on light tabs, and swaps to light on
// dark tabs (SVG prefers-color-scheme) so it never disappears.
const S = 960;
const markW = 640, markH = 896; // mark's own viewBox
const tx = (S - markW) / 2, ty = (S - markH) / 2;
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}">
  <style>.qp-ribbon{fill:#303030}@media (prefers-color-scheme:dark){.qp-ribbon{fill:#e9edf3}}</style>
  <g transform="translate(${tx} ${ty})">
    <path d="${dropD}" fill="#0070c0"/>
    <path d="${ribbonD}" class="qp-ribbon"/>
  </g>
</svg>`;
writeFileSync(`${APP}/icon.svg`, icon);

// Rasterize PNGs from the SVG for Apple + .ico fallback.
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--force-device-scale-factor=1"] });
const page = await browser.newPage();
const dataUrl = "data:image/svg+xml;base64," + Buffer.from(icon).toString("base64");

async function png(size) {
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
  await page.goto(`data:text/html,<style>*{margin:0}</style><img src="${dataUrl}" width="${size}" height="${size}">`);
  await new Promise((r) => setTimeout(r, 150));
  const el = await page.$("img");
  return await el.screenshot({ omitBackground: true }); // PNG buffer
}

const apple = await png(180);
writeFileSync(`${APP}/apple-icon.png`, apple);
const preview = await png(64);
writeFileSync("scripts/shots/favicon-64.png", preview);

// Build a favicon.ico (PNG-in-ICO container) at 32 + 48 for the classic tab.
async function icoFrom(sizes) {
  const imgs = [];
  for (const s of sizes) imgs.push({ s, buf: await png(s) });
  const count = imgs.length;
  const header = Buffer.alloc(6 + 16 * count);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(count, 4);
  let offset = 6 + 16 * count;
  const parts = [header];
  imgs.forEach((im, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(im.s >= 256 ? 0 : im.s, e);      // width
    header.writeUInt8(im.s >= 256 ? 0 : im.s, e + 1);  // height
    header.writeUInt8(0, e + 2); header.writeUInt8(0, e + 3);
    header.writeUInt16LE(1, e + 4); header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(im.buf.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += im.buf.length;
    parts.push(im.buf);
  });
  return Buffer.concat(parts);
}
writeFileSync(`${APP}/favicon.ico`, await icoFrom([32, 48]));

await browser.close();
console.log("wrote icon.svg, apple-icon.png (180), favicon.ico (32+48), preview 64");
