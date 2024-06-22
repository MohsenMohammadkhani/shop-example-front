import React from "react";
import ProductItem from "./item";

export default function index({products}) {
  return (
    <div className="container">
      <div className="row">
        {products.data.data.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
