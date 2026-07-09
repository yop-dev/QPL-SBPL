# QPL Asset Inventory

Everything scraped from **https://www.qpl.com.ph/** on 2026-07-08, for the website revamp.

- `CONTENT.md` — all reusable text/copy (company info, plant specs, org, leadership, CSR, awards, news, contact).
- `asset-manifest.csv` — every image with category, dimensions, file size, and source URL.
- Image folders below (110 images, all downloaded successfully, no login/hotlink protection).

## Folders

| Folder | Count | What's in it |
|---|---|---|
| `brand/` | 2 | Logo (200×62 PNG) + old homepage graphic (249×249) |
| `plant/` | 19 | Power plant + facility photos (the money shots for a power company) |
| `leadership/` | 3 | Exec headshots (Thiel, Saengpredekorn, Laptew) — 249×249 |
| `csr-section-headers/` | 5 | Small tiles for Education/Health/Livelihood/Environment/Host |
| `csr-gallery/` | 73 | Community program event photos, 2015–2018 |
| `news/` | 5 | Recent article images (incl. the only hi-res shots) |

## ⚠️ The big caveat: resolution

**Nearly every image is 700×371px** — sized for a 2016-era site. That is too small for the
full-bleed hero sections, background video posters, and retina/2x displays a modern site uses.

**Usable as-is:** logo (redraw as SVG ideally), exec headshots (small circular avatars),
CSR/news thumbnails in cards and galleries.

**NOT good enough for heroes/large sections:**
- `news/qpl2723.jpg` — 1430×953 — the ONE decent-res plant/aerial shot. Best hero candidate.
- `news/amcham.jpg` 950×607, `news/IMG_2994.jpg` 768×1024 (phone, portrait) — usable at medium size.
- Everything in `plant/` maxes at 852×570 (`qplabout.jpg`, `qmsi.jpg`) or 700×371.

## Recommendation for the revamp

1. **Reuse now:** all the text/copy in `CONTENT.md`, the logo, headshots, and CSR/news photos
   as gallery/card thumbnails. That covers structure and storytelling immediately.
2. **Re-shoot or re-source the hero imagery.** For a modern power-company site you'll want
   high-res wide shots: plant exterior at golden hour, aerial/drone of the Mauban facility,
   the transmission line, control room, and coal-handling equipment. Ask QPL for their original
   full-resolution photo library or press kit — the website only ever hosted downscaled copies.
3. **Rebuild the logo as SVG** so it stays crisp at any size.
4. **Add what's missing:** no social links, no downloadable reports/PDFs, no data-privacy/CSR
   PDFs were on the site — worth requesting sustainability reports and an official fact sheet.

## Legal note

These are QPL's own assets and you're doing the revamp for them — reuse is fine with their
sign-off. The site is maintained by Tagline Communications; confirm who owns the photo originals
before publishing, and get the full-res source files from whoever shot them.
