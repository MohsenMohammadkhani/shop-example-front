import React from "react";
import Top from "./top";
import Gallery from "./gallery";
import Info from "./info";
import Detail from "./detail";

export default function index(props: any) {
  const product = props["product"];
  return (
    <>
      <Top />
      <section className="section-gap">
        <div className="container">
          <div className="row justify-content-between mb-lg-5 mb-4">
            <Gallery imagesPath={product.attributes.images_path} />
            <Info product={product} />
          </div>
          <Detail product={product} />
        </div>
      </section>
    </>
  );
}
