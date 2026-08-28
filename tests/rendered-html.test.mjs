import assert from "node:assert/strict";
import test from "node:test";

async function request(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`https://catalog.example${pathname}`, { headers: { accept: "text/html", host: "catalog.example" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the English LANGII catalog", async () => {
  const response = await request();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="en"/i);
  assert.match(html, /Engine components,.*clearly specified/i);
  assert.match(html, /71(?:<!-- -->)? records/i);
  assert.match(html, /Featured V8 Blocks/i);
  assert.match(html, /Cylinder Head Assemblies/i);
  assert.match(html, /LS3 Aluminum 6\.2L V8 Cylinder Block/i);
  assert.match(html, /og-v3\.png/i);
  assert.doesNotMatch(html, /target markets?|United States|Australia|sign.?in.?with.?chatgpt/i);
});

for (const [slug, title, detail] of [
  ["ford-351w", "351W Small-Block V8 Cylinder Block", "9.500 in"],
  ["ls3-aluminum-6-2l", "LS3 Aluminum 6.2L V8 Cylinder Block", "12621766"],
  ["01-cummins-isx15-single-overhead-camshaft-cylinder-head", "Cummins ISX15 Single Overhead Camshaft Cylinder Head", "4298236"],
  ["16-cummins-isde4-5-cylinder-block", "Cummins ISDE4.5 Cylinder Block", "16-cummins-isde4-5.png"],
  ["46-caterpillar-c7-cylinder-head-assembly", "Caterpillar C7 Cylinder Head Assembly", "46-caterpillar-c7.png"],
]) {
  test(`renders maintained product details for ${slug}`, async () => {
    const response = await request(`/products/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, new RegExp(detail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, /Prepare inquiry/i);
    assert.match(html, /application\/ld\+json/i);
    assert.doesNotMatch(html, /target markets?|United States|Australia/i);
  });
}

test("renders the inquiry route with the selected product", async () => {
  const response = await request("/request-a-quote?product=LS3%20Aluminum%206.2L");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Inquiry details/i);
  assert.match(html, /Continue to email options/i);
  assert.match(html, /Gmail, Outlook or your email application/i);
  assert.match(html, /LS3 Aluminum 6\.2L/i);
  assert.match(html, /Delivery country \/ region/i);
  assert.match(html, /jane@langjitech\.com/i);
  assert.match(html, /wa\.me\/8613757409660/i);
  assert.doesNotMatch(html, /sales@langii\.example|intentional placeholder|sales contact pending/i);
  assert.doesNotMatch(html, /Select market|United States|Australia/i);
});
