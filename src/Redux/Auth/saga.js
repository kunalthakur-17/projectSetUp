import { takeEvery, put, call, all, fork } from "redux-saga/effects";
import { auth } from "./constant";
import { loginApi } from "./api";

function* loginSaga(action) {
  console.log(action, "loginSaga");
  try {
    yield put({ type: auth.LOGIN_LOADING });
    console.log(action, "actionaction");
    // const { email, password } = action.payload;
    const response = yield call(loginApi, action);
    if (response?.status == 200) {
      yield put({ type: auth.LOGIN_SUCCESS, payload: response });
    } else {
      yield put({ type: auth.LOGIN_ERROR, payload: response });
    }
  } catch (error) {
    console.log(error, "errorerror");
    yield put({
      type: auth.LOGIN_ERROR,
      payload: error?.response || "Login failed",
    });
  }
}

function* loginWatcher() {
  yield takeEvery(auth.LOGIN, loginSaga);
}

export default function* authSaga() {
  yield all([fork(loginWatcher)]);
}
