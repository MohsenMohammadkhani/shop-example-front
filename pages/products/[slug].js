import { useRouter } from "next/router";
import React from "react";
import ShopLayout from "../../app/component/layouts/Shop";
import SingleProduct from "../../app/component/products/single";
import getEnvs from "../../envs";

export default function singleProduct({ product }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <ShopLayout title="محصول">
      <SingleProduct product={product} />
    </ShopLayout>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const response = await fetch(
    getEnvs()["API_URL"] + "/api/v1/shop/products/" + slug,
    { cache: "force-cache" }
  );

  const product = await response.json();

  return {
    props: {
      product: product.data,
    },
  };
}

export async function getStaticPaths() {
  let page = 1;
  let lastPage;
  let paramsPath = [];
  let response = await fetch(`
    ${getEnvs()["API_URL"]}/api/v1/shop/products/all-products-slug?page=${page}
  `);

  let products = await response.json();
  products.data.data.forEach((product) => {
    paramsPath.push({
      params: { slug: product.slug },
    });
  });

  lastPage = products.data.last_page;
  for (let page = 2; page <= lastPage; page++) {
    let response = await fetch(`
      ${
        getEnvs()["API_URL"]
      }/api/v1/shop/products/all-products-slug?page=${page}
    `);
    let products = await response.json();

    products.data.data.forEach((product) => {
      paramsPath.push({
        params: { slug: product.slug },
      });
    });
  }

  return {
    paths: paramsPath,
    fallback: true,
  };
}
