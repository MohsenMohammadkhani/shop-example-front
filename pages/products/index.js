import React from "react";
import ShopLayout from "../../app/component/layouts/Shop";
import ProductList from "../../app/component/products/List";
import toastHelper from "../../helpers/toast";
import { ToastContainer, toast } from "react-toastify";

export default function products({ products }) {
  if (!products) {
    toast.error(
      "مشکلی در دریافت محصولات به وجود آمده است.",
      toastHelper.getOptionErrorToast()
    );
  }

  return (
    <ShopLayout title="فروشگاه - خانه">
      {products && <ProductList products={products} />}
    </ShopLayout>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(process.env.API_URL + "/api/v1/shop/products");
    const products = await response.json();
    return {
      props: {
        products: products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: false,
      },
    };
  }
}
