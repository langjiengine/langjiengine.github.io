# LANGII Product Showcase — First Version

An English B2B product catalog for engine-component buyers. V8 engine blocks are shown first; cylinder blocks, cylinder heads, head assemblies, and crankshafts follow as supporting products.

## Outline

1. Run and verify the site
2. Review the implemented catalog
3. Maintain product data
4. Replace launch placeholders
5. Publish or migrate the site

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Verification:

```bash
npm run lint
npm run build
node --test tests/rendered-html.test.mjs
```

## Publish to GitHub Pages

The repository includes an automated GitHub Pages workflow for the root site at `https://langjiengine.github.io`.

```bash
npm run build:pages
```

This creates a fully static catalog in `dist/client`, including all product-detail pages, `robots.txt`, and `sitemap.xml`. A push to the `main` branch runs the same build and publishes the result through GitHub Actions.

## Implemented

- Minimal LANGII visual identity and buyer-focused English copy
- VPW-inspired left-side category navigation
- One-image, one-description, and pricing-status product cards
- Uniform 4:3 landscape image frames with proportional `contain` scaling
- 10 featured V8 block records, including the supplemental LS3 product
- 61 supporting spreadsheet records with 58 mapped source images
- Search by product name, engine family, category, catalog reference, and part number
- A maintained detail route for every one of the 71 listed records
- Product galleries, specification tables, confirmation notices, related products, metadata, JSON-LD, sitemap, and robots controls
- Inquiry form with product context; no login, database, checkout, ERP, WMS, inventory, or payment dependency
- Small LANGII social-sharing treatment and one temporary true-alpha LS3 cutout

## Product-data rules

- Do not invent price ranges. Display `Price on request` until approved commercial data is supplied.
- Do not infer the workbook's weight or dimension units. The original values remain visible with a confirmation warning.
- Keep source photos unchanged on detail pages. AI-assisted cutouts are optional temporary listing assets only.
- Preserve unresolved source conflicts as explicit confirmation notices.
- Confirm fitment against engine family and part number before quotation.

## Data locations

- V8 catalog: `app/data/products.ts`
- Supporting catalog: `app/data/supporting-products.json`
- V8 source images: `public/products/v8/`
- Supporting source images: `public/products/support/`
- Temporary transparent cutout: `public/products/cutouts/ls3-v2.png`
- Social-sharing cover: `public/og-v2.png`

## Required before public sales use

- Official company descriptor or tagline
- Public sales email, phone/WhatsApp, and business address
- Approved price ranges or a decision to keep quote-only pricing
- MOQ, lead time, Incoterms, currency, warranty, and quality/certification statements
- Confirmed units for spreadsheet weight and dimensions
- Missing images for SUP-016, SUP-046, and SUP-052
- Confirmation of LS400 and Ford 6.0L/6.4L specifications
- Resolution of the GM 454 4.277 rear-main-seal source conflict
- Privacy, warranty, shipping, and returns language if the site later collects data or sells online

## Architecture

- Vinext / React / TypeScript
- Data-first static product records
- Cloudflare-compatible runtime for the existing hosted version
- Automated static export and deployment for `https://langjiengine.github.io`
- Portable content and images for later migration to the final custom domain

The current detailed roadmap is in `outputs/README_LANGII_Technical_Roadmap_v2.md`.
