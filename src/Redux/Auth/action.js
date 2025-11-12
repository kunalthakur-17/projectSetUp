import { auth } from "./constant";

export const authLogin = (data) => {
  console.log(data, "authLogin");
  return {
    type: auth.LOGIN,
    data,
  };
};


export const loginActionReset = () => {
  return {
    type: auth.LOGIN_RESET,
  };
};

