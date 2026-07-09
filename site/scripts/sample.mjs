import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();

async function palette(file, label) {
  const dataUrl = "data:image/png;base64," + readFileSync(file).toString("base64");
  await page.goto("about:blank");
  const colors = await page.evaluate(async (src) => {
    const img = new Image();
    img.src = src;
    await img.decode();
    const c = document.createElement("canvas");
    c.width = img.naturalWidth; c.height = img.naturalHeight;
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const { data, width, height } = ctx.getImageData(0, 0, c.width, c.height);
    const buckets = {};
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
      if (a < 200) continue;
      // skip near-white and near-black backgrounds
      if (r > 240 && g > 240 && b > 240) continue;
      const key = `${Math.round(r/16)*16},${Math.round(g/16)*16},${Math.round(b/16)*16}`;
      buckets[key] = (buckets[key]||0)+1;
    }
    return Object.entries(buckets).sort((a,b)=>b[1]-a[1]).slice(0,10)
      .map(([k,v])=>{const[r,g,b]=k.split(",").map(Number);const hex="#"+[r,g,b].map(x=>x.toString(16).padStart(2,"0")).join("");return `${hex}  (${v}px)`;});
  }, dataUrl);
  console.log(`\n=== ${label} ===`);
  colors.forEach(c=>console.log("  "+c));
}

await palette("C:/Users/tharraleos/projects/cold-websites/qpl-assets/brand/logo.png", "LOGO");
await palette("C:/Users/tharraleos/projects/cold-websites/qpl-assets/brand/qpl-frontpage.png", "FRONTPAGE PHOTO");
await browser.close();
