import React from "react";
import numberHelper from "../../../../helpers/number";

export default function item(props: any) {
  return (
    <div className="col-md-6">
      <div className="card border-0 mb-4 box-hover">
        <div className="position-relative">
          <div className="ft-tag ft-inside-tr">ویژه</div>
          <img
            className="card-img-top img-fluid"
            src={props["thumbnail-image"]}
            alt="card image"
          />
        </div>
        <div className="card-body py-4 text-center">
          <h6 className="mb-2 font-size-16">
            <a href="#">{props.title}</a>
          </h6>
          <div className="price mb-3">
            <span className="pl-2">
              {numberHelper.toPersianNum(
                numberHelper.toFormatFinanceNumber(props.price)
              )}
            </span>
            تومان
          </div>
          <a href="#" className="btn btn-sm btn-pill btn-outline">
            افزودن به سبد خرید
          </a>
        </div>
      </div>
    </div>
  );
}
