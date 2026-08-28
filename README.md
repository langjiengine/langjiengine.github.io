# V8 Blocks Product Showcase — MVP

An English, specification-led engine component showcase for United States and Australian buyers. V8 cylinder blocks are the flagship range; diesel and heavy-duty engine components are presented as a supporting catalog.

## Outline

1. Run and verify the site
2. Review the implemented product experience
3. Replace launch placeholders
4. Approve source-data corrections
5. Extend the catalog after MVP approval

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Verification:

```bash
npm run build
npm run lint
node --test tests/rendered-html.test.mjs
```

## Implemented in this MVP

- Responsive industrial English homepage
- Searchable and filterable product catalog
- Nine V8 cylinder-block detail routes
- Sixty source-supplied V8 product images
- Supporting catalog overview covering 61 source records
- Product gallery, source-backed specification table, and related products
- Quote-request form that prepares an email locally
- Per-product titles, descriptions, canonical URLs, Open Graph/X metadata, Product JSON-LD, breadcrumbs, sitemap, and robots directives
- Social-sharing card for the US/Australian market positioning

## Product-data rules

- No price, stock, fitment, certification, material, or machining claim is published without source evidence.
- `GM302/351C` is shown as a source conflict and requires confirmation.
- `LS400` requires exact engine-family confirmation.
- Bore values appear only where the V8 source file provides them.
- The supporting range is grouped by brand in this MVP; individual record pages are a next-phase migration.

## Required before public launch

- Final company name, logo, domain, business email, phone, and addresses
- Approved quotation recipient in place of `sales@example.com`
- Final legal, privacy, warranty, shipping, and returns copy
- Confirmation of the two ambiguous V8 records
- Units for weight and dimensions in the supporting spreadsheet
- Approved markets, Incoterms, MOQ, lead-time language, and certifications

## Architecture

- Vinext / React / TypeScript
- Cloudflare-compatible Sites runtime
- Data-first product records in `app/data/products.ts`
- Static source photography in `public/products/v8/`
- No database, ERP, inventory, checkout, or payment dependency for this showcase MVP

The full phased roadmap and source audit are in `outputs/README_Product_Showcase_Technical_Roadmap.md`.
