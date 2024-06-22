import React from "react";
import Link from "next/link";

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
                  <span href="#" className="text-dark">
                    ورود
                  </span>
                </li>
                <li className="list-inline-item font-size-14 ml-2">
                  <span href="#" className="text-dark">
                    ایجاد حساب کاربری
                  </span>
                </li>
              </ul>
              {/* <Link href="#" className="text-decoration-none text-dark ml-2"> */}
              {/* <i className="vl-cart1"></i> */}
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* <header className="app-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="branding-wrap">
                <div className="navbar-brand float-left">
                  <Link className="" href="#">
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
                  </Link>
                </div>
                <div className="nav-btn hamburger hamburger--slider js-hamburger ">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>

              <nav id="vl-menu">
                <div className="float-right nav-extra-link">
                  <span href="#" className="btn btn-sm btn-pill btn-theme mt-3">
                    هم اکنون بخرید
                  </span>
                </div>
                <ul className="vlmenu light-sub-menu slide-effect float-right fade-effect">
                  <li>
                    <span href="#">
                      {" "}
                      فروشگاه
                      <i className="fa fa-angle-down"></i>
                      <i className="arrow fa fa-angle-right"></i>
                    </span>
                    <ul>
                      <li>
                        شبکه فروشگاه 2 <Link href="#">شبکه فروشگاه 2 </Link>{" "}
                      </li>
                      <li>
                        شبکه فروشگاه 2 <Link href="#">شبکه فروشگاه 3 </Link>{" "}
                      </li>
                      <li>
                        شبکه فروشگاه 2 <Link href="#">شبکه فروشگاه 4 </Link>
                      </li>
                      <li>
                        شبکه فروشگاه 2 <Link href="#">تک فروش </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
}
