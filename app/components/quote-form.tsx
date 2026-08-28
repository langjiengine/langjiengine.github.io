"use client";

import { FormEvent, useState } from "react";

export function QuoteForm({ initialProduct = "" }: { initialProduct?: string }) {
  const [notice, setNotice] = useState("");

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      ["Company", data.get("company")],
      ["Contact", data.get("name")],
      ["Email", data.get("email")],
      ["Country", data.get("country")],
      ["Product / engine family", data.get("product")],
      ["Reference / casting number", data.get("reference")],
      ["Quantity", data.get("quantity")],
      ["Application and specification", data.get("details")],
    ];
    const body = fields.map(([label, value]) => `${label}: ${value || "Not supplied"}`).join("\n");
    const subject = `Engine component inquiry — ${data.get("product") || "specification request"}`;
    setNotice("Your email application is opening with the request details. The recipient address is a placeholder until the supplier contact is approved.");
    window.location.href = `mailto:sales@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="quote-form" onSubmit={submitQuote}>
      <div className="form-grid">
        <label><span>Company *</span><input name="company" required autoComplete="organization" /></label>
        <label><span>Your name *</span><input name="name" required autoComplete="name" /></label>
        <label><span>Business email *</span><input type="email" name="email" required autoComplete="email" /></label>
        <label><span>Destination market *</span><select name="country" required defaultValue=""><option value="" disabled>Select market</option><option>United States</option><option>Australia</option><option>Other</option></select></label>
        <label className="form-span-2"><span>Product or engine family *</span><input name="product" required defaultValue={initialProduct} placeholder="Example: GM 454, 4.496 in" /></label>
        <label><span>Reference / casting number</span><input name="reference" placeholder="If available" /></label>
        <label><span>Quantity *</span><input name="quantity" type="number" min="1" required defaultValue="1" /></label>
        <label className="form-span-2"><span>Application and specification *</span><textarea name="details" required rows={6} placeholder="Vehicle or equipment, bore, machining state, material, inspection, delivery postcode, and any other requirements." /></label>
      </div>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit">Prepare email request</button>
        <small>This MVP prepares an email locally; it does not store or transmit form data to a server.</small>
      </div>
      {notice && <p className="form-notice" role="status">{notice}</p>}
    </form>
  );
}
