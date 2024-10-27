import React from "react";
import numberHelper from "../../../helpers/number";
import useAppState from "../../../state/useAppState";

export default function Price() {
  const { state, dispatch } = useAppState();
  let totalCountProduct = 0,
    totalPrice = 0;
  Object.entries(state.cart).map(function (item) {
    const product = item["1"];
    totalCountProduct = totalCountProduct + product.count;
    totalPrice = totalPrice + product.price;
  });

  return (
    <div className="card p-4">
      <h6>مجموع سبد</h6>
      <hr />
      <div className="row  ">
        <div className="col-7 font-weight-normal">مجموع کل</div>
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
      <div className="row">
        <div className="col-7">مجموع کل</div>
        <div className="col-5 d-flex">
          <span className="letter-spacing-finance-number pl-2">
            {numberHelper.toPersianNum(
              numberHelper.toFormatFinanceNumber(totalPrice)
            )}
          </span>
          <span>تومان</span>
        </div>
      </div>
      <div className="pt-3">
        <a href="/checkout" className="btn btn-pill btn-block btn-theme">
          مرحله بعد
        </a>
      </div>
    </div>
  );
}
