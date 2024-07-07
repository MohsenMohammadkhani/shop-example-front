import React from "react";
import numberHelper from "../../../../helpers/number";

export default function info({ product }) {
  return (
    <div className="col-md-6">
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
      <form className="form-inline my-lg-5 mb-4">
        <input
          type="number"
          className="form-control form-qty mr-2 w-25"
          placeholder="1"
        />
        <button type="submit" className="btn btn-primary">
          <i className="fa fa-shopping-cart pr-3"></i>افزودن به سبد خرید
        </button>
      </form>
      <div className="card border-0 font-size-14">
        <div className="">
          <strong className="pr-2">تعداد:</strong> 1234567
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
  );
}
