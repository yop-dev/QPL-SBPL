import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = process.argv[2] || ".";
const URL = "http://localhost:3000/";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: "networkidle0" });

// Let hero on-load animation and fonts settle
await new Promise((r) => setTimeout(r, 1800));

// Full page
await page.screenshot({ path: `${OUT}/pp-full.png`, fullPage: true });

// Per-section by scrolling the anchor to top, then capturing the viewport
const sections = ["#top", "#plant", "#legacy", "#impact", "#awards", "#contact"];
for (const id of sections) {
  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  }, id);
  await new Promise((r) => setTimeout(r, 1100)); // let whileInView reveals play
  await page.screenshot({ path: `${OUT}/pp-${id.replace("#", "")}.png` });
}

const height = await page.evaluate(() => document.body.scrollHeight);
console.log("document height:", height);
await browser.close();
