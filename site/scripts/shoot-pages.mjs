import puppeteer from "puppeteer-core";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = "scripts/shots";
const routes = ["", "about", "plant", "sustainability", "awards", "news", "contact"];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--hide-scrollbars", "--disable-gpu"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

async function triggerReveals() {
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    const step = window.innerHeight * 0.7;
    for (let y = 0; y <= h; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((res) => setTimeout(res, 500));
}

for (const r of routes) {
  await page.goto(`http://localhost:3000/${r}`, { waitUntil: "networkidle0" });
  await new Promise((res) => setTimeout(res, 1200));
  const name = r || "home";
  await page.screenshot({ path: `${OUT}/pg-${name}.png` }); // top viewport (hero/header)
  await triggerReveals(); // scroll through so whileInView reveals fire
  await page.screenshot({ path: `${OUT}/pg-${name}-full.png`, fullPage: true });
}

// Mobile nav open
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto("http://localhost:3000/about", { waitUntil: "networkidle0" });
await new Promise((res) => setTimeout(res, 800));
await page.click('button[aria-label="Open menu"]');
await new Promise((res) => setTimeout(res, 500));
await page.screenshot({ path: `${OUT}/pg-mobile-menu.png` });

await browser.close();
console.log("captured", routes.length, "routes + mobile menu");
