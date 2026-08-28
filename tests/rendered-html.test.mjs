import assert from "node:assert/strict";
import test from "node:test";

async function request(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`https://catalog.example${pathname}`, { headers: { accept: "text/html", host: "catalog.example", "x-forwarded-host": "catalog.example", "x-forwarded-proto": "https" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the English V8 product showcase", async () => {
  const response = await request();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="en"/i);
  assert.match(html, /V8 engine blocks\./i);
  assert.match(html, /United States/i);
  assert.match(html, /Australia/i);
  assert.match(html, /61(?:<!-- -->)? supplied records/i);
  assert.match(html, /https:\/\/catalog\.example\/og\.png/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

for (const [slug, title, image] of [
  ["ford-351", "Ford 351 V8 Cylinder Block", "/products/v8/ford-351-01.jpg"],
  ["gm-454-4-496", "GM 454 V8 Cylinder Block", "/products/v8/gm-454-4-496-01.jpg"],
]) {
  test(`renders route-specific metadata for ${slug}`, async () => {
    const response = await request(`/products/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(title));
    assert.match(html, new RegExp(`https://catalog\\.example${image.replaceAll(".", "\\.")}`));
    assert.match(html, /twitter:card[^>]+summary_large_image|summary_large_image[^>]+twitter:card/i);
    assert.match(html, /application\/ld\+json/i);
    assert.doesNotMatch(html, /https:\/\/catalog\.example\/og\.png/i);
  });
}

test("renders the quote route and visible placeholder warning", async () => {
  const response = await request("/request-a-quote?product=GM%20350");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Inquiry details/i);
  assert.match(html, /sales@example\.com/i);
  assert.match(html, /GM 350/i);
});
