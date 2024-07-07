import React from "react";

export default function detail({ product }) {
  let attributes = Object.keys(product.attributes)
    .filter((key) => key !== "images_path")
    .reduce((obj, key) => {
      obj[key] = product.attributes[key];
      return obj;
    }, {});
  return (
    <div className="row justify-content-center ">
      <div className="col-md-12">
        <ul className="nav nav-line mb-md-5 mb-3" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="branding-tab"
              data-toggle="tab"
              href="#branding"
              role="tab"
              aria-controls="branding"
              aria-selected="true"
            >
              توضیحات
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="ui-tab"
              data-toggle="tab"
              href="#ui"
              role="tab"
              aria-controls="ui"
              aria-selected="false"
            >
              مشخصات
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="frontend-tab"
              data-toggle="tab"
              href="#frontend"
              role="tab"
              aria-controls="frontend"
              aria-selected="false"
            >
              نظرات
            </a>
          </li>
        </ul>
        <div className="tab-content text-left">
          <div
            className="tab-pane fade active show"
            id="branding"
            role="tabpanel"
            aria-labelledby="branding-tab"
          >
            <h4 className="mb-3">توضیحات</h4>
            <p className="text-muted">{product.description}</p>
          </div>
          <div
            className="tab-pane fade"
            id="ui"
            role="tabpanel"
            aria-labelledby="ui-tab"
          >
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <tbody>
                  {Object.keys(attributes).map((key, index) => {
                    return (
                      <tr>
                        <td>{key}</td>
                        <td>{attributes[key]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="tab-pane fade single-post"
            id="frontend"
            role="tabpanel"
            aria-labelledby="frontend-tab"
          >
            <div className="comments">نظرات</div>
          </div>
        </div>
      </div>
    </div>
  );
}
