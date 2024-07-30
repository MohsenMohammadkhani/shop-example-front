import React, { useEffect, useState } from "react";
import numberHelper from "../../../../helpers/number";
import useAppState from "../../../../state/useAppState";

export default function info({ product }) {
  const { state, dispatch } = useAppState();
  const [isClient, setIsClient] = useState(false);
  console.log("==1==")
  console.log(state)
  console.log("==1==")
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
        count: 1,
        thumbnail: product.thumbnail,
      },
    });
  }

  function showCountSelectUser() {
    const cart = state.cart;
    const productID = product.id;

    if (cart[productID] === undefined) {
      return;
    }
    return (
      <input
        type="number"
        defaultValue={state.cart[productID].count}
        className="form-control form-qty mr-2 w-25  "
        placeholder="1"
      />
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
            <div className="btn btn-primary hover" onClick={addProductToCart}>
              <i className="fa fa-shopping-cart pr-3"></i>افزودن به سبد خرید
            </div>
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
