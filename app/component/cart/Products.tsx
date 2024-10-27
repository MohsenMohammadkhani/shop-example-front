import React, { useEffect, useState } from "react";
import numberHelper from "../../../helpers/number";
import useAppState from "../../../state/useAppState";

export default function Products() {
  const { state, dispatch } = useAppState();

  function decreaseValueInput(productID) {
    if (!document.querySelector(`#count-product-on-cart-${productID}`)) {
      return;
    }
    let tagHtml = document.querySelector(`#count-product-on-cart-${productID}`);
    let countProduct = parseInt(tagHtml.value);

    dispatch({
      type: "SUBTRACT_PRODUCT_TO_CART",
      payload: {
        productID: productID,
      },
    });

    if (countProduct == 1) {
      return;
    }
    if (countProduct == 2) {
      const tagHtmlButtonDecrease = document.querySelector(
        `#row-product-on-cart-${productID} .btn.btn-danger`
      );
      const iconMinus = document.querySelector(
        `#row-product-on-cart-${productID} .btn-danger .fa-minus`
      );

      tagHtmlButtonDecrease.removeChild(iconMinus);
      const iconTrash = document.createElement("i");
      iconTrash.classList = "fa fa-trash";
      tagHtmlButtonDecrease.appendChild(iconTrash);
    }
    tagHtml = document.querySelector(`#count-product-on-cart-${productID}`);
    tagHtml.value = countProduct - 1;
  }

  function increaseValueInput(productID) {
    if (!document.querySelector(`#count-product-on-cart-${productID}`)) {
      return;
    }
    let tagHtml = document.querySelector(`#count-product-on-cart-${productID}`);
    tagHtml.value = parseInt(tagHtml.value) + 1;
  }

  function addProductToCart(productID) {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: {
        productID: productID,
      },
    });
    increaseValueInput(productID);
  }

  return (
    <>
      <div className="table-responsive">
        <table className="table vl-custom-table">
          <thead>
            <tr>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>مجموع</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(state.cart).map(function (item) {
              const product = item["1"];
              return (
                <tr id={`row-product-on-cart-${product.productID}`}>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href={product.slug} target="_blank" className="mr-4">
                        <img
                          className="rounded"
                          width="100"
                          src={product.thumbnail}
                          alt=""
                        />
                      </a>
                      <a href="#" className="text-dark text-nowrap">
                        {product.title}
                      </a>
                    </div>
                  </td>
                  <td>
                    <strong>
                      <span className="letter-spacing-finance-number pl-2">
                        {numberHelper.toPersianNum(
                          numberHelper.toFormatFinanceNumber(product.price)
                        )}
                      </span>
                      تومان
                    </strong>
                  </td>
                  <td data-product-id={product.productID}>
                    <div className="d-flex">
                      <span
                        className="btn btn-success hover"
                        onClick={() => {
                          addProductToCart(product.productID);
                        }}
                      >
                        <i className="fa fa-plus"></i>
                      </span>
                      <span>
                        <span
                          id={`count-product-on-cart-${product.productID}`}
                          className="form-control w-100 hide-top-bottom-icon"
                        >
                          {product.count}
                        </span>
                      </span>
                      <span
                        className="btn btn-danger hover"
                        onClick={(e) => {
                          e.preventDefault();
                          decreaseValueInput(product.productID);
                        }}
                      >
                        <i className="fa fa-minus"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <strong>
                      <span className="letter-spacing-finance-number pl-2">
                        {numberHelper.toPersianNum(
                          numberHelper.toFormatFinanceNumber(
                            product.count * product.price
                          )
                        )}
                      </span>
                      تومان
                    </strong>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
