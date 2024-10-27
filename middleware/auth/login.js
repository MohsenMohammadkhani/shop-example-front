import httpHelper from "../../helpers/http";
import { cookies } from "next/headers";

export default async function checkIsUserLogin(request) {
  const token = cookies().get("she-token");
  if (token == undefined) {
    return false;
  }
  const resultCheckToken = await checkToken(token.value);
  if (!resultCheckToken.result) {
    return false;
  }
  return true;
}

async function checkToken(token) {
  try {
    const resultRequest = await httpHelper.get(
      "/api/v1/dashboard/user/get-info",
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      result: true,
      data: resultRequest.data,
    };
  } catch (error) {
    return {
      result: false,
      message: error.response.data.message,
    };
  }
}
