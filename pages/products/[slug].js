import { useRouter } from "next/router";
import React from "react";
import ShopLayout from "../../app/component/layouts/Shop";
import SingleProduct from "../../app/component/products/single";

export default function singleProduct({ product }) {
  const router = useRouter();
  const { slug } = router.query;
  return <ShopLayout title="محصول"><SingleProduct product={product} /></ShopLayout>;
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const response = await fetch(
    process.env.API_URL + "/api/v1/shop/products/" + slug
  );
  const product = await response.json();
  return {
    props: {
      product: product.data,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    process.env.API_URL + "/api/v1/shop/products/all-products-slug"
  );
  const products = await response.json();
  const paths = products.data.data.map((product) => {
    return {
      params: { slug: product.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
