import React, { useState } from "react";
import validateMobile from "../../../validations/mobile";
import { ToastContainer, toast } from "react-toastify";
import toastHelper from "../../../helpers/toast";
import spinnerHelper from "../../../helpers/spinner";
import httpHelper from "../../../helpers/http";
import getEnvs from "../../../envs";
import Cookies from "js-cookie";

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState();

  async function sendRequestLoginWithSmsCode(bodyRequest) {
    try {
      const resultRequest = await httpHelper.post(
        "/api/v1/dashboard/auth/login-with-sms-code",
        bodyRequest,
        {}
      );

      return {
        result: true,
        token: resultRequest.data.token,
      };
    } catch (error) {
      return {
        result: false,
        message: error.response.data.message,
      };
    }
  }

  async function enterToDashboard() {
    const smsCode = document.querySelector("#sms-code").value;

    spinnerHelper.showSpinner(spinnerHelper.ID_TAG_CONTENT_WRAPPER_TAG);
    const resultSendRequestLoginWithSmsCode = await sendRequestLoginWithSmsCode(
      {
        "mobile-number": mobileNumber,
        "sms-code": smsCode,
      }
    );
    spinnerHelper.removeSpinner(spinnerHelper.ID_TAG_CONTENT_WRAPPER_TAG);

    if (!resultSendRequestLoginWithSmsCode.result) {
      toast.error(
        resultSendRequestLoginWithSmsCode.message,
        toastHelper.getOptionErrorToast()
      );
      return;
    }

    Cookies.set("she-token", resultSendRequestLoginWithSmsCode.token, {
      expires: 2,
    });

    spinnerHelper.showSpinner(spinnerHelper.ID_TAG_CONTENT_WRAPPER_TAG);
    const userInfoResult = await sendRequestGetUserInfo(
      resultSendRequestLoginWithSmsCode.token
    );
    spinnerHelper.removeSpinner(spinnerHelper.ID_TAG_CONTENT_WRAPPER_TAG);

    // let userInfo = {
    //   "first-name": userInfoResult.data["first-name"],
    //   "last-name": userInfoResult.data["last-name"],
    //   "national-code": userInfoResult.data["national-code"],
    //   birthday: userInfoResult.data.birthday,
    //   "mobile-number": userInfoResult.data["mobile_number"],
    // };
 
    // Cookies.set("user-info", JSON.stringify(userInfo), {
    //   expires: 2,
    // });

    toast.success("ورود شما مو.فقیت آمیز بود", {
      ...toastHelper.getOptionErrorToast(),
      autoClose: toastHelper.timeClose,
      onClose: () => {
        window.location = "/";
      },
    });
  }

  async function sendRequestGetUserInfo(token) {
    try {
      const result = await httpHelper.get("/api/v1/dashboard/user/get-info", {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        result: true,
        data: result.data.info,
      };
    } catch (error) {
      toast.error(
        error.response.data.message,
        toastHelper.getOptionErrorToast()
      );
      return {
        result: false,
        message: error.response.data.message,
      };
    }
  }

  function showFormEnterSmsCode() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          enterToDashboard();
        }}
      >
        <p className="login-box-msg"> کد داخل پیامک را وارد کنید</p>
        <div className="py-2">
          <input
            className="form-control text-center"
            type="number"
            placeholder="کد ورود"
            id="sms-code"
            name="sms-code"
            onWheel={(e) => e.target.blur()}
          />
        </div>
        <div className="py-2">
          <button className="btn btn-primary w-100 ">ورود</button>
        </div>
      </form>
    );
  }

  function showFormEnterMobileNumber() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendSmsCodeLogin();
        }}
      >
        <p className="login-box-msg">شماره موبایل خود را وارد کنید</p>
        <div className="input-group mb-2 mr-sm-2  ">
          <input
            onWheel={(e) => e.target.blur()}
            style={{ fontSize: "30px" }}
            className="form-control text-right hide-top-bottom-icon "
            type="number"
            placeholder="۱۲۹۲۴۵۵۰۸"
            id="mobile-number"
            name="mobile-number"
          />
          <div className="input-group-prepend">
            <div className="input-group-text">۰۹</div>
          </div>
        </div>
        <div className="py-2">
          <button className="btn btn-primary w-100">ارسال کد</button>
        </div>
      </form>
    );
  }

  async function sendSmsCodeLogin() {
    const mobileNumber = "09" + document.querySelector("#mobile-number").value;
    const resultValidateMobile = validateMobile(mobileNumber);
    if (!resultValidateMobile.result) {
      toast.error(
        resultValidateMobile.message,
        toastHelper.getOptionErrorToast()
      );
      return;
    }

    spinnerHelper.showSpinner(spinnerHelper.ID_TAG_CONTENT_WRAPPER_TAG);
    const resultSendRequestSendSmsCodeForLogin =
      await sendRequestSendSmsCodeForLogin(mobileNumber);
    spinnerHelper.removeSpinner(spinnerHelper.ID_TAG_CONTENT_WRAPPER_TAG);
    if (!resultSendRequestSendSmsCodeForLogin.result) {
      toast.error(
        resultValidateMobile.message,
        toastHelper.getOptionErrorToast()
      );
      return;
    }

    document.querySelector("#mobile-number").value = "";
    setMobileNumber(mobileNumber);
  }

  async function sendRequestSendSmsCodeForLogin(mobileNumber) {
    try {
      await httpHelper.post(
        "/api/v1/dashboard/auth/send-sms-code-login",
        { "mobile-number": mobileNumber },
        {}
      );
      return {
        result: true,
      };
    } catch (error) {
      toast.error(
        error.response.data.message,
        toastHelper.getOptionErrorToast()
      );
      return {
        result: false,
        message: error.response.data.message,
      };
    }
  }

  return (
    <div className="container pt-5">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-4 ">
          <div className="login-box">
            <div className="login-logo text-center pb-3">
              <b style={{ fontSize: "30px" }}>ورود</b>
            </div>
            <div className="card">
              <div className="card-body login-card-body">
                {mobileNumber
                  ? showFormEnterSmsCode()
                  : showFormEnterMobileNumber()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
