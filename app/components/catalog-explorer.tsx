"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./product-card";
import {
  allProducts,
  catalogCategories,
  getCategoryCount,
  supportingProducts,
  v8Products,
} from "../data/products";

type Category = (typeof catalogCategories)[number];

function matchesProduct(product: (typeof allProducts)[number], query: string, brand: string, category: Category) {
  const matchesCategory = category === "All products" || product.category === category;
  const matchesBrand = brand === "All families" || product.applicationBrand === brand;
  const haystack = [
    product.id,
    product.name,
    product.family,
    product.applicationBrand,
    product.category,
    product.partNumbers.join(" "),
    product.specifications.map((item) => `${item.label} ${item.value}`).join(" "),
  ].join(" ").toLowerCase();
  return matchesCategory && matchesBrand && (!query || haystack.includes(query));
}

export function CatalogExplorer() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All families");
  const [category, setCategory] = useState<Category>("All products");

  const brands = useMemo(() => [
    "All families",
    ...Array.from(new Set(allProducts.map((product) => product.applicationBrand))).sort(),
  ], []);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredV8 = v8Products.filter((product) => matchesProduct(product, normalizedQuery, brand, category));
  const filteredSupport = supportingProducts.filter((product) => matchesProduct(product, normalizedQuery, brand, category));
  const resultCount = filteredV8.length + filteredSupport.length;

  function clearFilters() {
    setQuery("");
    setBrand("All families");
    setCategory("All products");
  }

  return (
    <section className="catalog-shell" aria-label="Product catalog">
      <aside className="catalog-sidebar">
        <div className="sidebar-heading">
          <span>Browse products</span>
          <strong>{allProducts.length} records</strong>
        </div>
        <nav aria-label="Product categories">
          {catalogCategories.map((item) => (
            <button
              className={category === item ? "is-active" : ""}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              <span>{item}</span>
              <small>{String(getCategoryCount(item)).padStart(2, "0")}</small>
            </button>
          ))}
        </nav>
        <div className="sidebar-note">
          <strong>Buyer checklist</strong>
          <p>Send the engine family, reference number, quantity, machining state, and application.</p>
        </div>
      </aside>

      <div className="catalog-main">
        <div className="catalog-toolbar">
          <label className="catalog-search">
            <span>Search name, engine family, or part number</span>
            <input
              type="search"
              placeholder="Example: LS3, C15, 19170538"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label className="catalog-select">
            <span>Engine / application family</span>
            <select value={brand} onChange={(event) => setBrand(event.target.value)}>
              {brands.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <div className="catalog-results-bar">
          <span><strong>{resultCount}</strong> products shown</span>
          {(query || brand !== "All families" || category !== "All products") && (
            <button type="button" onClick={clearFilters}>Clear filters</button>
          )}
        </div>

        {filteredV8.length > 0 && (
          <section className="catalog-group" id="featured-v8">
            <div className="catalog-group-heading">
              <div>
                <p className="eyebrow">Priority range</p>
                <h2>V8 engine blocks</h2>
              </div>
              <p>Key specifications are visible on each detail page. Pricing is confirmed against quantity and machining requirements.</p>
            </div>
            <div className="product-grid catalog-product-grid">
              {filteredV8.map((product) => <ProductCard product={product} key={product.slug} />)}
            </div>
          </section>
        )}

        {filteredSupport.length > 0 && (
          <section className="catalog-group catalog-support-group" id="other-components">
            <div className="catalog-group-heading">
              <div>
                <p className="eyebrow">Other components</p>
                <h2>Heads, blocks &amp; crankshafts</h2>
              </div>
              <p>Every catalog record opens to a dedicated page with its available application, family and reference information.</p>
            </div>
            <div className="product-grid catalog-product-grid support-product-grid">
              {filteredSupport.map((product) => <ProductCard product={product} key={product.slug} />)}
            </div>
          </section>
        )}

        {resultCount === 0 && (
          <div className="empty-state">
            <p>No matching catalog records.</p>
            <button type="button" onClick={clearFilters}>Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
