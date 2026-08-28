"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";
import { LANGII_CONTACT } from "../data/contact";

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getProductFromLocation() {
  return new URLSearchParams(window.location.search).get("product") ?? "";
}

export function QuoteForm({ initialProduct = "" }: { initialProduct?: string }) {
  const [notice, setNotice] = useState("");
  const queryProduct = useSyncExternalStore(subscribeToLocation, getProductFromLocation, () => "");
  const [editedProduct, setEditedProduct] = useState<string | null>(null);
  const product = editedProduct ?? (initialProduct || queryProduct);

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      ["Company", data.get("company")],
      ["Contact", data.get("name")],
      ["Email", data.get("email")],
      ["Delivery country / region", data.get("country")],
      ["Product / engine family", data.get("product")],
      ["Reference / casting number", data.get("reference")],
      ["Quantity", data.get("quantity")],
      ["Application and specification", data.get("details")],
    ];
    const body = fields.map(([label, value]) => `${label}: ${value || "Not supplied"}`).join("\n");
    const brief = `LANGII product inquiry\n\n${body}`;
    const subject = `LANGII product inquiry — ${data.get("product") || "engine component"}`;
    try {
      await navigator.clipboard.writeText(brief);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = brief;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
    setNotice(`Inquiry brief copied. Your email application is opening a message to ${LANGII_CONTACT.email}.`);
    window.location.href = `mailto:${LANGII_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(brief)}`;
  }

  return (
    <form className="quote-form" onSubmit={submitQuote}>
      <div className="form-grid">
        <label><span>Company *</span><input name="company" required autoComplete="organization" /></label>
        <label><span>Your name *</span><input name="name" required autoComplete="name" /></label>
        <label><span>Business email *</span><input type="email" name="email" required autoComplete="email" /></label>
        <label><span>Delivery country / region *</span><input name="country" required autoComplete="country-name" placeholder="Country or region" /></label>
        <label className="form-span-2"><span>Product or engine family *</span><input name="product" required value={product} onChange={(event) => setEditedProduct(event.target.value)} placeholder="Example: GM 454, 4.496 in" /></label>
        <label><span>Reference / casting number</span><input name="reference" placeholder="If available" /></label>
        <label><span>Quantity *</span><input name="quantity" type="number" min="1" required defaultValue="1" /></label>
        <label className="form-span-2"><span>Application and specification *</span><textarea name="details" required rows={6} placeholder="Vehicle or equipment, bore, machining state, material, inspection, delivery postcode, and any other requirements." /></label>
      </div>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit">Open email application</button>
        <small>The inquiry is copied as a backup, then opened in your email application addressed to LANGII sales.</small>
      </div>
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
