"use client";

/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";

export function ProductGallery({ images, name, cardImage, rotateSource = false }: { images: string[]; name: string; cardImage?: string; rotateSource?: boolean }) {
  const displayImages = useMemo(() => cardImage ? [cardImage, ...images.filter((image) => image !== cardImage)] : images, [cardImage, images]);
  const [activeImage, setActiveImage] = useState(displayImages[0] ?? "");
  const activeIndex = activeImage ? displayImages.indexOf(activeImage) : -1;
  const sourceIsRotated = rotateSource && activeImage !== cardImage;

  return (
    <div className="product-gallery">
      <div className={`gallery-stage${cardImage && activeImage === cardImage ? " gallery-stage-cutout" : ""}${sourceIsRotated ? " gallery-stage-rotated" : ""}`}>
        {activeImage ? (
          <img src={activeImage} alt={`${name} product view ${activeIndex + 1}`} />
        ) : (
          <div className="gallery-missing">Product image pending</div>
        )}
        {displayImages.length > 0 && <span>{String(activeIndex + 1).padStart(2, "0")} / {String(displayImages.length).padStart(2, "0")}</span>}
      </div>
      {displayImages.length > 1 && (
        <div className="gallery-thumbs" aria-label={`${name} image gallery`}>
          {displayImages.map((image, index) => (
            <button
              className={`${image === activeImage ? "is-active" : ""}${rotateSource && image !== cardImage ? " is-rotated" : ""}`}
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
