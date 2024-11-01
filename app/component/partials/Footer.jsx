import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="app-footer bg-dark pb-0 border-0 text-md-left text-center">
      
        <div className="container">
          <div className="row align-items-center mb-md-5 mb-3">
            <div className="col-md-4">
              <img
                className="pr-3 mb-md-0 mb-4"
                src="/static/assets/img/logo-color.png"
                srcSet="/static/assets/img/logo-color@2x.png 2x"
              />
            </div>
            <div className="col-md-8">
              <span className="font-lora h5 font-weight-normal">
                - یک بسته ساز قدرتمند خلاق برای بوت استرپ 4
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-md-0 mb-4">
              <p className="text-muted">
                یک مجموعه بزرگ و قدرتمند از بسته بندی جزء مدرن برای ساختن وب
                سایت بهتر برای پروژه بعدی شما
              </p>
            </div>
            <div className="col-md-2 mb-md-0 mb-4">
              <h6 className="mb-4">حرکت کن</h6>
              <ul className="footer-link">
                <li className="d-block">
                  <Link href="#">پیش نمایش</Link>
                </li>
                <li className="d-block">
                  <Link href="#">صفحات فرود</Link>
                </li>
                <li className="d-block">
                  <Link href="#">صفحات اپ</Link>
                </li>
                <li className="d-block">
                  <Link href="#">صفحات داخلی</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-4">
              <h6 className="mb-4">پلتفرم</h6>
              <ul className="footer-link">
                <li className="d-block">
                  <Link href="#">iOS مک و </Link>
                </li>
                <li className="d-block">
                  <Link href="#">آندروید و جاوا</Link>
                </li>
                <li className="d-block">
                  <Link href="#">ویندوز</Link>
                </li>
                <li className="d-block">
                  <Link href="#">لینوکس</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-4">
              <h6 className="mb-4">جامعه</h6>
              <ul className="footer-link">
                <li className="d-block">
                  <Link href="#">پایگاه دانش</Link>
                </li>
                <li className="d-block">
                  <Link href="#">یک کارشناس استخدام کنید</Link>
                </li>
                <li className="d-block">
                  <Link href="#">گفت و گو</Link>
                </li>
                <li className="d-block">
                  <Link href="#">تماس</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-4">
              <h6 className="mb-4">شرکت</h6>
              <ul className="footer-link">
                <li className="d-block">
                  <Link href="#">درباره شرکت</Link>
                </li>
                <li className="d-block">
                  <Link href="#">تاریخ</Link>
                </li>
                <li className="d-block">
                  <Link href="#">تیم</Link>
                </li>
                <li className="d-block">
                  <Link href="#">سرمایه گذاری</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
        <div className="app-secondary-footer mt-md-5 mt-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <span className="copyright">
                  © 2019 کلاب. تمام حقوق محفوظ است.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src="/static/assets/vendor/jquery/jquery.min.js"></script>
      <script src="/static/assets/vendor/popper.min.js"></script>
      <script src="/static/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="/static/assets/vendor/vl-nav/js/vl-menu.js"></script>
      <script src="/static/assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
      <script src="/static/assets/vendor/owl/owl.carousel.min.js"></script>
      <script src="/static/assets/vendor/jquery.animateNumber.min.js"></script>
      <script src="/static/assets/vendor/jquery.countdown.min.js"></script>
      <script src="/static/assets/vendor/typist.js"></script>
      <script src="/static/assets/vendor/jquery.isotope.js"></script>
      <script src="/static/assets/vendor/imagesloaded.js"></script>
      <script src="/static/assets/vendor/visible.js"></script>
      <script src="/static/assets/vendor/wow.min.js"></script>
      <script src="/static/assets/js/scripts.js"></script>
    </>
  );
}
