import puppeteer from "puppeteer-core";
import { readFileSync } from "node:fs";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const VEC = process.argv[2];
const png = "data:image/png;base64," + readFileSync("public/img/qpl-logo.png").toString("base64");
const svg = readFileSync(VEC + "/logo-mark.svg", "utf8");
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const p = await b.newPage();
await p.setViewport({ width: 720, height: 520, deviceScaleFactor: 2 });
await p.setContent(`
<div style="background:#fff;padding:24px;display:flex;gap:40px;align-items:center">
  <div style="text-align:center;font:11px monospace"><div>ORIGINAL png</div><img src="${png}" style="height:70px;object-fit:none;object-position:left;width:44px"/></div>
  <div style="text-align:center;font:11px monospace"><div>NEW svg 70px</div><div style="height:70px">${svg.replace('<svg','<svg height=70')}</div></div>
  <div style="text-align:center;font:11px monospace"><div>NEW svg 140px</div><div style="height:140px">${svg.replace('<svg','<svg height=140')}</div></div>
</div>
<div style="background:#0a0e16;padding:24px;display:flex;gap:40px;align-items:center;color:#889">
  <div style="text-align:center;font:11px monospace"><div>original clip</div><div style="height:64px;width:29px;overflow:hidden"><img src="${png}" style="height:64px"/></div></div>
  <div style="text-align:center;font:11px monospace"><div>svg on dark 64px</div><div style="height:64px">${svg.replace('<svg','<svg height=64')}</div></div>
  <div style="text-align:center;font:11px monospace"><div>svg 28px</div><div style="height:28px">${svg.replace('<svg','<svg height=28')}</div></div>
</div>`);
await new Promise(r=>setTimeout(r,300));
await p.screenshot({ path: "scripts/shots/logo-compare.png" });
await b.close();
console.log("done");
