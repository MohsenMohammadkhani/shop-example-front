import React from "react";
import Top from "./top";
import Gallery from "./gallery";
import Info from "./info";

export default function index(props: any) {
  const imagesPath=props["product"].attributes.images_path
  return (
    <>
      <Top />
      <section className="section-gap">
        <div className="container">
          <div className="row justify-content-between mb-lg-5 mb-4">
            <Gallery imagesPath={imagesPath} />
            {/* <Info /> */}
          </div>
        </div>
      </section>
    </>
  );
}
