import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args:["--disable-gpu"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
await new Promise(r=>setTimeout(r,1500));
const data = await page.evaluate(() => {
  const sec = document.querySelector("#top");
  const cs = getComputedStyle(sec);
  const kids = [...sec.children].map(c => {
    const r = c.getBoundingClientRect();
    return { tag:c.tagName, cls:(c.className||"").toString().slice(0,40), top:Math.round(r.top), h:Math.round(r.height), pos:getComputedStyle(c).position };
  });
  const inner = sec.querySelector(".flex-col");
  const ics = inner ? getComputedStyle(inner) : {};
  return { secH:Math.round(sec.getBoundingClientRect().height), secMinH:cs.minHeight, secDisplay:cs.display, innerMinH:ics.minHeight, innerH: inner?Math.round(inner.getBoundingClientRect().height):null, innerJustify:ics.justifyContent, kids };
});
console.log(JSON.stringify(data,null,2));
await browser.close();
