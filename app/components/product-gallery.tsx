"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const activeIndex = images.indexOf(activeImage);

  return (
    <div className="product-gallery">
      <div className="gallery-stage">
        <img src={activeImage} alt={`${name} production view ${activeIndex + 1}`} />
        <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </div>
      <div className="gallery-thumbs" aria-label={`${name} image gallery`}>
        {images.map((image, index) => (
          <button
            className={image === activeImage ? "is-active" : ""}
            key={image}
            onClick={() => setActiveImage(image)}
            type="button"
            aria-label={`Show production view ${index + 1}`}
            aria-pressed={image === activeImage}
          >
            <img src={image} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
