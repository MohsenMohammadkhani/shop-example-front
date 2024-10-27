import React from "react";

export default function Header() {
  return (
    <>
      <section className="py-2 bg-gray-">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <small className="font-size-14">
                هر سوالی دارید؟ با ما تماس بگیرید: 09129245508
              </small>
            </div>
            <div className="col-md-5 text-md-right">
              <ul className="list-inline m-0 d-inline mr-2">
                <li className="list-inline-item font-size-14">
                  <a href="/login" className="text-dark">
                    ورود
                  </a>
                </li>
                {/* <li className="list-inline-item font-size-14 ml-2">
                  <span href="#" className="text-dark">
                    ایجاد حساب کاربری
                  </span>
                </li> */}
              </ul>
              {/* <a href="#" className="text-decoration-none text-dark ml-2"> */}
              {/* <i className="vl-cart1"></i> */}
              {/* </a> */}
            </div>
          </div>
        </div>
      </section>

      <header className="app-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="branding-wrap">
                <div className="navbar-brand float-left">
                  <a className="" href="#">
                    <img
                      className="logo-light"
                      src="assets/img/logo.png"
                      srcset="assets/img/logo@2x.png 2x"
                      alt="CLab"
                    />
                    <img
                      className="logo-dark"
                      src="assets/img/logo-dark.png"
                      srcset="assets/img/logo-dark@2x.png 2x"
                      alt="CLab"
                    />
                  </a>
                </div>
                <div className="nav-btn hamburger hamburger--slider js-hamburger ">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>

              <nav id="vl-menu">
                 
                <ul class="vlmenu light-sub-menu slide-effect float-right fade-effect">
                  <li>
                    <a href="/products">محصولات</a>
                  </li>
                  <li>
                    <a href="/cart">سبد خرید</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
