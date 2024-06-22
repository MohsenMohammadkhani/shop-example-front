import React from "react";

export default function info() {
  return (
    <div className="col-md-5">
      <h3 className="mb-3">نام عنوان محصول</h3>
      <div className="price mb-4">
        <del className="text-muted mr-2">
          <span className="h6">49.000 تومان</span>
        </del>
        <span className="h5">32.000 تومان</span>
      </div>
      <p className="text-muted">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
        صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با
        تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
      </p>
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
