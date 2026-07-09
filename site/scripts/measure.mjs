import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args:["--disable-gpu"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
await new Promise(r=>setTimeout(r,1800));
const data = await page.evaluate(() => {
  const rect = (s) => { const e=document.querySelector(s); if(!e) return null; const r=e.getBoundingClientRect(); return {top:Math.round(r.top),bottom:Math.round(r.bottom),h:Math.round(r.height),opacity:getComputedStyle(e).opacity}; };
  return {
    section: rect("#top"),
    h1: rect("#top h1"),
    eyebrow: rect("#top p"),
    stats: rect("#top .grid"),
    svh: window.innerHeight,
  };
});
console.log(JSON.stringify(data,null,2));
await browser.close();
