"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [activeImage, setActiveImage] = useState(images[0] ?? "");
  const activeIndex = activeImage ? images.indexOf(activeImage) : -1;

  return (
    <div className="product-gallery">
      <div className="gallery-stage">
        {activeImage ? (
          <img src={activeImage} alt={`${name} product view ${activeIndex + 1}`} />
        ) : (
          <div className="gallery-missing">Product image pending</div>
        )}
        {images.length > 0 && <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>}
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbs" aria-label={`${name} image gallery`}>
          {images.map((image, index) => (
            <button
              className={image === activeImage ? "is-active" : ""}
              key={image}
              onClick={() => setActiveImage(image)}
              type="button"
              aria-label={`Show product view ${index + 1}`}
              aria-pressed={image === activeImage}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
