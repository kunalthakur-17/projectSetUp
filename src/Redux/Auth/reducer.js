// redux/reducers/loginReducer.js

import { auth } from "./constant";

const initialState = {
  data: null,
  message: "",
  loading: "idle", // 'idle' | 'loading' | 'success' | 'error'
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN_LOADING:
      return {
        ...state,
        loading: "loading",
        message: "",
      };

    case auth.LOGIN_SUCCESS:
      return {
        ...state,
        loading: "success",
        data: action.payload,
        message: "Login successful",
      };
    case auth.LOGIN_ERROR:
      return {
        ...state,
        data: action.payload,
        loading: "error",
        message: action.payload || "Something went wrong",
      };

    case auth.LOGIN_RESET:
      return initialState;

    default:
      return state;
  }
};
