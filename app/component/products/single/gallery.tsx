import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";

export default function gallery({ imagesPath }) {
  const images = imagesPath.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <div className="col-12 col-md-6">
      {" "}
      <ImageGallery items={images} />{" "}
    </div>
  );
}
