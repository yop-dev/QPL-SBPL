import puppeteer from "puppeteer-core";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const OUT = process.argv[2]; // absolute dir to write blue.png / dark.png
mkdirSync(OUT, { recursive: true });
const src = "data:image/png;base64," + readFileSync("public/img/qpl-logo.png").toString("base64");

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new" });
const page = await browser.newPage();
const result = await page.evaluate(async (src) => {
  const img = new Image();
  img.src = src;
  await img.decode();
  const W = img.naturalWidth, H = img.naturalHeight;
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const { data } = ctx.getImageData(0, 0, W, H);
  const isBlue = (r, g, b, a) => a > 120 && b > 110 && b - r > 45;
  const isDark = (r, g, b, a) => a > 120 && r < 95 && g < 95 && b < 95;

  // bounding box of mark pixels (blue OR dark)
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4, r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
    if (isBlue(r,g,b,a) || isDark(r,g,b,a)) {
      if (x < x0) x0 = x; if (x > x1) x1 = x;
      if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
  }
  const pad = 2;
  x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad);
  x1 = Math.min(W - 1, x1 + pad); y1 = Math.min(H - 1, y1 + pad);
  const mw = x1 - x0 + 1, mh = y1 - y0 + 1;

  // upscale with NEAREST-NEIGHBOR (no smoothing) so thin strokes and the
  // ribbon's open counter are preserved exactly; potrace smooths the curves.
  const scale = 16;
  const big = document.createElement("canvas");
  big.width = mw * scale; big.height = mh * scale;
  const bctx = big.getContext("2d");
  bctx.imageSmoothingEnabled = false;
  bctx.drawImage(img, x0, y0, mw, mh, 0, 0, big.width, big.height);
  const bd = bctx.getImageData(0, 0, big.width, big.height).data;

  function mask(pred) {
    const m = document.createElement("canvas");
    m.width = big.width; m.height = big.height;
    const mc = m.getContext("2d");
    mc.fillStyle = "#fff"; mc.fillRect(0, 0, m.width, m.height);
    const out = mc.getImageData(0, 0, m.width, m.height);
    for (let p = 0; p < bd.length; p += 4) {
      if (pred(bd[p], bd[p+1], bd[p+2], bd[p+3])) {
        out.data[p] = out.data[p+1] = out.data[p+2] = 0; out.data[p+3] = 255;
      }
    }
    mc.putImageData(out, 0, 0);
    return m.toDataURL("image/png");
  }
  return {
    mw, mh, bw: big.width, bh: big.height,
    blue: mask(isBlue),
    dark: mask(isDark),
  };
}, src);
await browser.close();

const strip = (u) => Buffer.from(u.split(",")[1], "base64");
writeFileSync(OUT + "/blue.png", strip(result.blue));
writeFileSync(OUT + "/dark.png", strip(result.dark));
writeFileSync(OUT + "/meta.json", JSON.stringify({ mw: result.mw, mh: result.mh, bw: result.bw, bh: result.bh }));
console.log(JSON.stringify({ markW: result.mw, markH: result.mh, bigW: result.bw, bigH: result.bh }));
