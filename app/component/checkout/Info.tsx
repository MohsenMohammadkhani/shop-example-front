import React, { useEffect } from "react";
import helpersDate from "../../../helpers/date";
import helpersNumber from "../../../helpers/number";
import { ToastContainer, toast } from "react-toastify";
import toastHelper from "../../../helpers/toast";
import spinnerHelper from "../../../helpers/spinner";
import httpHelper from "../../../helpers/http";

export default function Info() {
  return (
    <div>
      <div className="mb-3">
        <label>آدرس</label>
        <textarea
          className="form-control"
          id="address"
          rows={5}
          placeholder="آدرس خود را در اینجا وارد کنید."
          required
        ></textarea>
        <div className="invalid-feedback">
          لطفا آدرس حمل و نقل خود را وارد کنید.
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>استان</label>
          <select className="custom-select d-block w-100" id="state" required>
            <option value="1">تهران</option>
            <option value="2">گیلان</option>
            <option value="3">آذربایجان شرقی</option>
            <option value="4">خوزستان</option>
            <option value="5">فارس</option>
            <option value="6">اصفهان</option>
            <option value="7">خراسان رضوی</option>
            <option value="8">قزوین</option>
            <option value="9">سمنان</option>
            <option value="10">قم</option>
            <option value="11">مرکزی</option>
            <option value="12">زنجان</option>
            <option value="13">مازندران</option>
            <option value="14">گلستان</option>
            <option value="15">اردبیل</option>
            <option value="16">آذربایجان غربی</option>
            <option value="17">همدان</option>
            <option value="18">کردستان</option>
            <option value="19">کرمانشاه</option>
            <option value="20">لرستان</option>
            <option value="21">بوشهر</option>
            <option value="22">کرمان</option>
            <option value="23">هرمزگان</option>
            <option value="24">چهارمحال و بختیاری</option>
            <option value="25">یزد</option>
            <option value="26">سیستان و بلوچستان</option>
            <option value="27">ایلام</option>
            <option value="28">کهگلویه و بویراحمد</option>
            <option value="29">خراسان شمالی</option>
            <option value="30">خراسان جنوبی</option>
            <option value="31">البرز</option>
          </select>
          <div className="invalid-feedback">
            لطفا یک کشور معتبر را انتخاب کنید
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <label>شهر</label>
          <input className="custom-select d-block w-100" id="city" required />
        </div>
        <div className="col-md-6 mb-3">
          <label>کد پستی</label>
          <input
            type="text"
            className="form-control"
            id="postal-code"
            required
          />
          <div className="invalid-feedback">کد پستی مورد نیاز است</div>
        </div>
        <div className="col-md-6 mb-3">
          <label>تلفن</label>
          <input
            type="text"
            className="form-control"
            id="phone-number"
            required
          />
        </div>
      </div>
      <hr />
      <div className="card p-4">
        <h4>روز تحویل</h4>
        <hr />
        <div className="d-flex">
          <div className="pr-2 text-center ">
            <div className="border border-1 border-dark rounded p-2">
              <div>{helpersDate.getDayNameAfterDay(3)}</div>
              <div className="letter-spacing-finance-number py-3">
                {helpersNumber.toPersianNum(helpersDate.getDateAfterJalali(3))}
              </div>
              <div className="pb-2">۱۱ تا ۲۲</div>
              <div>
                <input
                  type="radio"
                  name="day-deliver"
                  defaultValue={helpersDate.getDateAfterJalali(3)}
                  className="hover day-deliver"
                  required 
                />
              </div>
            </div>
          </div>

          <div className="pr-2 text-center">
            <div className="border border-1 border-dark rounded p-2">
              <div>{helpersDate.getDayNameAfterDay(4)}</div>
              <div className="letter-spacing-finance-number py-3">
                {helpersNumber.toPersianNum(helpersDate.getDateAfterJalali(4))}
              </div>
              <div className="pb-2">۱۱ تا ۲۲</div>
              <div>
                <input
                  type="radio"
                  name="day-deliver"
                  className="hover day-deliver"
                  defaultValue={helpersDate.getDateAfterJalali(4)}
                />
              </div>
            </div>
          </div>

          <div className="pr-2 text-center">
            <div className="border border-1 border-dark rounded p-2">
              <div className=" ">{helpersDate.getDayNameAfterDay(5)}</div>
              <div className="letter-spacing-finance-number py-3">
                {helpersNumber.toPersianNum(helpersDate.getDateAfterJalali(5))}
              </div>
              <div className="pb-2">۱۱ تا ۲۲</div>
              <div>
                <input
                  type="radio"
                  name="day-deliver"
                  className="hover day-deliver"
                  defaultValue={helpersDate.getDateAfterJalali(5)}
                />
              </div>
            </div>
          </div>

          <div className="pr-2 text-center">
            <div className="border border-1 border-dark rounded p-2">
              <div>{helpersDate.getDayNameAfterDay(6)}</div>
              <div className="letter-spacing-finance-number py-3">
                {helpersNumber.toPersianNum(helpersDate.getDateAfterJalali(6))}
              </div>
              <div className="pb-2">۱۱ تا ۲۲</div>
              <div>
                <input
                  type="radio"
                  name="day-deliver"
                  className="hover day-deliver"
                  defaultValue={helpersDate.getDateAfterJalali(6)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-block my-3">
        <span className="pr-3">
          <img
            className="border border-1 p-2 bg-white"
            src="/static/assets/img/zarin-pal.png"
          />
        </span>
        <span>پرداخت با درگاه پرداخت زرین پال</span>
      </div>
    </div>
  );
}
