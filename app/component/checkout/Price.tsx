import React from "react";
import numberHelper from "../../../helpers/number";
import useAppState from "../../../state/useAppState";
import {  toast } from "react-toastify";
import toastHelper from "../../../helpers/toast";


export default function Price() {
  const payDelivery = 30 * 1000;
  const { state, dispatch } = useAppState();
  let totalCountProduct = 0,
    totalPrice = 0;
  Object.entries(state.cart).map(function (item) {
    const product = item["1"];
    totalCountProduct = totalCountProduct + product.count;
    totalPrice = totalPrice + product.price;
  });

  function getDataOrder() {
    const state = JSON.parse(window.localStorage.getItem("state"));
    let cart = state.cart;
    cart = Object.entries(cart).map((item) => {
      const itemCart = item[1];
      return {
        count: itemCart.count,
        price: itemCart.price,
        totalPrice: itemCart.price * itemCart.count,
        productID: itemCart.productID,
      };
    });

    const stateTag = document.querySelector("#state");
    const stateText = stateTag.options[stateTag.selectedIndex].text;

    return {
      delivery_date: document.querySelector("input.day-deliver:checked").value,
      cart: cart,
      delivery_detail: {
        address: document.querySelector("#address").value,
        state: stateText,
        city: document.querySelector("#city").value,
        postalCode: document.querySelector("#postal-code").value,
        phoneNumber: document.querySelector("#phone-number").value,
      },
    };
  }

  async function paymentButtonClick(e) {
    e.preventDefault();
    if (!document.querySelector("input.day-deliver:checked")) {
      alert("لطفا تاریخ تحویل را انتخاب کنید.")
      // toast.error(
        // "لطفا تاریخ تحویل را انتخاب کنید.",
      //   "aaaass",
      //   toastHelper.getOptionErrorToast()
      // );
      return;
    }
    // await addOrder();
  }

  async function addOrder() {}

  async function sendRequestAddOrder() {}

  return (
    <>
      <div className="card p-4">
        <h6>مجموع سبد</h6>
        <hr />
        <div className="row  ">
          <div className="col-7 font-weight-normal">قمیت سبد خرید کل</div>
          <div className="col-5 d-flex">
            <span className="letter-spacing-finance-number pl-2">
              {numberHelper.toPersianNum(
                numberHelper.toFormatFinanceNumber(totalPrice)
              )}
            </span>
            <span>تومان</span>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-7 font-weight-normal">تعداد اقلام</div>
          <div className="col-5">
            <span className="letter-spacing-finance-number pl-2">
              {numberHelper.toPersianNum(
                numberHelper.toFormatFinanceNumber(totalCountProduct)
              )}
            </span>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-7 font-weight-normal">هزینه ارسال</div>
          <div className="col-5">
            <span className="letter-spacing-finance-number pl-2">
              {numberHelper.toPersianNum(
                numberHelper.toFormatFinanceNumber(payDelivery)
              )}
            </span>
            <span>تومان</span>
          </div>
        </div>
        <div className="row">
          <div className="col-7">مجموع کل</div>
          <div className="col-5 d-flex">
            <span className="letter-spacing-finance-number pl-2">
              {numberHelper.toPersianNum(
                numberHelper.toFormatFinanceNumber(totalPrice + payDelivery)
              )}
            </span>
            <span>تومان</span>
          </div>
        </div>
        <div className="pt-3">
          <button
            onClick={paymentButtonClick}
            className="btn btn-pill btn-block btn-theme hover"
          >
            پرداخت
          </button>
        </div>
      </div>
      <div className="card mt-2 p-4">
        <h6>کد تخفیف</h6>
        <hr />
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="کد تخفیف خود را وارد کنید"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-theme">
              اعمال
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
