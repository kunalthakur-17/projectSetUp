import { apiEndpoints } from "../../Api/endPoints";
import { apiServices } from "../../Api/apiCore";
import { handleApi } from "../../utils/handleApis";

const { login } = apiEndpoints;

const { get, post, update, deleteReq } = apiServices;

export const loginApi = (data) => {
  console.log("loginApi", data);
  return handleApi(post, login, {
    email: data?.data?.email,
    password: data?.data?.password,
  });
};
