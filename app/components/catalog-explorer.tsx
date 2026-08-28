"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./product-card";
import { supportingRanges, v8Products } from "../data/products";

type View = "v8" | "support";

export function CatalogExplorer() {
  const [view, setView] = useState<View>("v8");
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All brands");

  const filteredV8 = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return v8Products.filter((product) => {
      const matchesBrand = brand === "All brands" || product.brand === brand;
      const haystack = `${product.name} ${product.family} ${product.sourceLabel} ${product.bore}`.toLowerCase();
      return matchesBrand && (!needle || haystack.includes(needle));
    });
  }, [brand, query]);

  const filteredSupport = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return supportingRanges.filter((range) => {
      const matchesBrand = brand === "All brands" || range.brand === brand;
      const haystack = `${range.brand} ${range.focus} ${range.examples.join(" ")}`.toLowerCase();
      return matchesBrand && (!needle || haystack.includes(needle));
    });
  }, [brand, query]);

  const brands = view === "v8"
    ? ["All brands", "Ford", "GM", "Brand to confirm"]
    : ["All brands", ...supportingRanges.map((range) => range.brand)];
  const resultCount = view === "v8" ? filteredV8.length : filteredSupport.length;

  function changeView(nextView: View) {
    setView(nextView);
    setBrand("All brands");
    setQuery("");
  }

  return (
    <>
      <div className="catalog-toolbar">
        <div className="catalog-tabs" aria-label="Catalog range">
          <button className={view === "v8" ? "is-active" : ""} onClick={() => changeView("v8")} type="button">
            V8 blocks <span>09</span>
          </button>
          <button className={view === "support" ? "is-active" : ""} onClick={() => changeView("support")} type="button">
            Supporting range <span>61</span>
          </button>
        </div>
        <label className="catalog-search">
          <span>Search product, family, or source label</span>
          <input
            type="search"
            placeholder={view === "v8" ? "Try GM 454 or 4.496" : "Try C15 or cylinder head"}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label className="catalog-select">
          <span>Brand</span>
          <select value={brand} onChange={(event) => setBrand(event.target.value)}>
            {brands.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="catalog-results-bar">
        <strong>{resultCount}</strong> {view === "v8" ? "product groups" : "brand ranges"} shown
      </div>

      {view === "v8" ? (
        <section className="product-grid catalog-product-grid" aria-live="polite">
          {filteredV8.map((product, index) => (
            <ProductCard product={product} index={index} key={product.slug} />
          ))}
        </section>
      ) : (
        <section className="support-grid catalog-support-grid" aria-live="polite">
          {filteredSupport.map((range) => (
            <article className="support-card support-card-large" key={range.brand}>
              <span>{String(range.count).padStart(2, "0")} records</span>
              <h3>{range.brand}</h3>
              <p>{range.focus}</p>
              <small>{range.examples.join(" · ")}</small>
              <a href={`/request-a-quote?product=${encodeURIComponent(`${range.brand} supporting range`)}`}>Ask about this range →</a>
            </article>
          ))}
        </section>
      )}

      {resultCount === 0 && (
        <div className="empty-state">
          <p>No matching catalog records.</p>
          <button type="button" onClick={() => { setQuery(""); setBrand("All brands"); }}>Clear filters</button>
        </div>
      )}
    </>
  );
}
