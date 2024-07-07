import React, { useEffect, useRef, useState } from "react";
import ProductItem from "./item";
import Pagination from "../../partials/Pagination";
import httpHelper from "../../../../helpers/http";
import spinnerHelper from "../../../../helpers/spinner";
import Slider from "@material-ui/core/Slider";
import numberHelper from "../../../../helpers/number";

export default function index({ products: productsParam }) {
  const [products, setProducts] = useState(productsParam.data.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [countPage, setCountPage] = useState(productsParam.data.last_page);
  const [value, setValue] = useState([0, 100000]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [title, setTitle] = useState("");

  function rangeSelector(event, newValue) {
    setValue(newValue);
  }

  function rangeSelectorCommit(event, newValue){
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  }

  useEffect(() => {
    getProducts();
  }, [currentPage, minPrice, maxPrice, title]);

  const scrollForSeeMessage = () => {
    const element = document.querySelector("#container-all-products");
    element.scrollIntoView();
  };

  async function getProducts() {
    const searchFilterQuery = getSearchFilterQuery();
    spinnerHelper.showSpinner(spinnerHelper.ID_TAG_CONTENT_WRAPPER_TAG);
    let resultGetProducts = await sendRequestGetProducts(searchFilterQuery);
    spinnerHelper.removeSpinner(spinnerHelper.ID_TAG_CONTENT_WRAPPER_TAG);

    if (!resultGetProducts.result) {
      return;
    }
    scrollForSeeMessage();
    resultGetProducts = resultGetProducts.data.data;
    setProducts(resultGetProducts.data);
    setCountPage(resultGetProducts.last_page);
  }

  const getSearchFilterQuery = () => {
    let searchFilterQuery = "";
    if (title) {
      searchFilterQuery = `${searchFilterQuery}&title=${title}`;
    }

    if (minPrice) {
      searchFilterQuery = `${searchFilterQuery}&price_from=${minPrice}`;
    }

    if (maxPrice) {
      searchFilterQuery = `${searchFilterQuery}&price_to=${maxPrice}`;
    }

    return searchFilterQuery;
  };

  function paginationItemOnClickHandler(e: any) {
    if (!e.target.attributes[1]) {
      return;
    }
    setCurrentPage(e.target.attributes[1].value);
  }

  async function sendRequestGetProducts(searchFilterQuery) {
    try {
      const resultRequest = await httpHelper.get(
        `/api/v1/shop/products?page=${currentPage}${searchFilterQuery}`
      );

      return {
        result: true,
        data: resultRequest.data,
      };
    } catch (error) {
      return {
        result: false,
        message: "ddd",
      };
    }
  }

  const generatePagination = () => {
    return (
      <div className="py-2 d-flex flex-column flex-md-row  align-items-md-center  ">
        <Pagination
          countPage={countPage}
          currentPage={currentPage}
          paginationItemOnClickHandler={paginationItemOnClickHandler}
        />
      </div>
    );
  };

  function generateProductsTags() {
    return (
      <>
        <div className="row">
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
        <div className="py-2 d-flex flex-column flex-md-row align-items-md-center justify-content-center ">
          {countPage > 1 ? generatePagination() : <></>}
        </div>
      </>
    );
  }

  function generateDoNotHaveProducts() {
    return (
      <div className="alert alert-warning">محصولی با این مشخصات موجود نیست</div>
    );
  }
   
  return (
    <div className="container pt-5" id="container-all-products">
      <div className="row pt-5">
        <div className="col-12 col-lg-9">
          {products.length == 0 && title != null
            ? generateDoNotHaveProducts()
            : generateProductsTags()}
        </div>
        <div className="col-12 col-lg-3">
          <div>
            <div className="form-group">
              <div className="icon-field">
                <i className="vl-search"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="جستجو"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
            </div>

            <div
              style={{
                margin: "auto",
                display: "block",
                width: "fit-content",
              }}
            >
              <p id="range-slider">بازه قیمت خود را انتخاب کنید</p>
              <Slider
                value={value}
                min={0}
                max={100000}
                onChange={rangeSelector}
                onChangeCommitted={rangeSelectorCommit}
              />
              <div>
                <div>
                  <span>حداقل قیمت</span>
                  <span className="px-2">:</span>
                  <span className="number-finance">
                    {numberHelper.toPersianNum(
                      numberHelper.toFormatFinanceNumber(value[0])
                    )}
                  </span>
                </div>
                <div className="py-2">
                  <span>حداکثر قیمت</span>
                  <span className="px-2">:</span>
                  <span className="number-finance">
                    {numberHelper.toPersianNum(
                      numberHelper.toFormatFinanceNumber(value[1])
                    )}{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
