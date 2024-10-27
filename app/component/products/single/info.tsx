import React, { useEffect, useState } from "react";
import numberHelper from "../../../../helpers/number";
import useAppState from "../../../../state/useAppState";

export default function info({ product }) {
  const { state, dispatch } = useAppState();
  const [isClient, setIsClient] = useState(false);

  function decreaseValueInput() {
    if (!document.querySelector("#count-product-on-cart")) {
      return;
    }
    let currentValue = parseInt(
      document.querySelector("#count-product-on-cart").value
    );
   
 
    if ( currentValue == 2) {
      const tagHtmlButtonDecrease = document.querySelector(
        `.btn-danger`
      );
      const iconMinus = document.querySelector(
        `.btn-danger .fa-minus`
      );

      tagHtmlButtonDecrease.removeChild(iconMinus);
      const iconTrash = document.createElement("i");
      iconTrash.classList = "fa fa-trash";
      tagHtmlButtonDecrease.appendChild(iconTrash);
    }
    document.querySelector("#count-product-on-cart").value = currentValue - 1;
  }

  function increaseValueInput() {
    if (!document.querySelector("#count-product-on-cart")) {
      return;
    }
    let currentValue = parseInt(
      document.querySelector("#count-product-on-cart").value
    );
    document.querySelector("#count-product-on-cart").value = currentValue + 1;
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  function addProductToCart(e) {
    e.preventDefault();
   
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: {
        productID: product.id,
        price: product.price,
        title: product.title,
        slug: "/products/" + product.slug,
        count: 1,
        thumbnail: product["attributes"]["images_path"][0],
      },
    });
    increaseValueInput();
  }

  function subtractProductToCart(e) {
    e.preventDefault();
    dispatch({
      type: "SUBTRACT_PRODUCT_TO_CART",
      payload: {
        productID: product.id,
      },
    });
    decreaseValueInput();
  }

  function showCountSelectUser() {
    const cart = state.cart;
    const productID = product.id;

    if (cart === undefined) {
      return (
        <div className="btn btn-primary hover" onClick={addProductToCart}>
          <i className="fa fa-shopping-cart pr-3"></i>افزودن به سبد خرید
        </div>
      );
    }

    if (cart[productID] === undefined) {
      return (
        <div className="btn btn-primary hover" onClick={addProductToCart}>
          <i className="fa fa-shopping-cart pr-3"></i>افزودن به سبد خرید
        </div>
      );
    }
    return (
      <>
        <span className="btn btn-success hover" onClick={addProductToCart}>
          <i className="fa fa-plus"></i>
        </span>
        <input
          type="number"
          id="count-product-on-cart"
          defaultValue={state.cart[productID].count}
          className="form-control form-qty w-25 hide-top-bottom-icon "
          placeholder="1"
        />
        <span className="btn btn-danger hover" onClick={subtractProductToCart}>
          <i className="fa fa-minus"></i>
        </span>
      </>
    );
  }

  return (
    <>
      {isClient ? (
        <div className="col-md-6" suppressHydrationWarning={true}>
          <h3 className="mb-3">{product.title}</h3>
          <div className="price mb-4">
            <span className="h5">
              <span className="pl-2 letter-spacing-finance-number">
                {numberHelper.toPersianNum(
                  numberHelper.toFormatFinanceNumber(product.price)
                )}
              </span>
              تومان
            </span>
          </div>
          <p className="text-muted">{product.description}</p>
          <div className="form-inline my-lg-5 mb-4">
            {showCountSelectUser()}
          </div>
          <div className="card border-0 font-size-14">
            <div className="">
              <strong className="pr-2">تعداد:</strong>
            </div>
            <div className="">
              <strong className="pr-2">دسته:</strong>{" "}
              {/* <a href="#" rel="tag">
            لباس
          </a> */}
              .
            </div>
            <div className="">
              <strong className="pr-2">برچسب ها:</strong>
              {/* <a href="#" rel="tag">
            قرمز
          </a> */}
              ,
              {/* <a href="#" rel="tag">
            دراز
          </a> */}
              ,
              {/* <a href="#" rel="tag">
            لباس
          </a> */}
              ,
              {/* <a href="#" rel="tag">
            چاپ شده
          </a> */}
              .
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
