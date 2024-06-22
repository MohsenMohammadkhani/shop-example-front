import React from "react";

export default function top() {
  return (
    <section className="component-section section-top bg-gray">
      <div className="hero-img bg-overlay" data-overlay="1"></div>
      <div className="container">
        <div className="row justify-content-between align-items-center mt-5 text-lg-left text-center">
          <div className="col-md-6">
            <h3 className="">فروشگاه تک</h3>
          </div>
          <div className="col-md-6">
            <nav aria-label="breadcrumb" className="float-lg-right">
              <ol className="breadcrumb bg-white btn-pill px-5 mb-0">
                <li className="breadcrumb-item">
                  {/* <a href="#" className="text-dark">
                    بررسی
                  </a> */}
                </li>
                <li className="breadcrumb-item">
                  {/* <a href="#" className="text-dark">
                    فروشگاه
                  </a> */}
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  فروشگاه تک
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
