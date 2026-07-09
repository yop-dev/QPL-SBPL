import puppeteer from "puppeteer-core";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = process.argv[2] || "scripts/shots";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});
const page = await browser.newPage();
// iPhone 13/14 logical viewport
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1800));

await page.screenshot({ path: `${OUT}/m-full.png`, fullPage: true });

const sections = ["#top", "#plant", "#legacy", "#impact", "#awards", "#contact"];
for (const id of sections) {
  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  }, id);
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${OUT}/m-${id.replace("#", "")}.png` });
}

// Report any element wider than the viewport (horizontal overflow offenders)
const overflow = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const bad = [];
  document.querySelectorAll("*").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width > vw + 1 || r.right > vw + 1) {
      bad.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className || "").toString().slice(0, 60),
        right: Math.round(r.right),
        width: Math.round(r.width),
      });
    }
  });
  return { vw, docScrollW: document.documentElement.scrollWidth, bad: bad.slice(0, 15) };
});
console.log("viewport:", overflow.vw, "docScrollWidth:", overflow.docScrollW);
console.log("overflow offenders:", JSON.stringify(overflow.bad, null, 2));
await browser.close();
