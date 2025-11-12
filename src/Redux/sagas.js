import { all, fork } from "redux-saga/effects";
import authSaga from "./Auth/saga";

function* rootSaga() {
  return yield all([fork(authSaga)]);
}

export default rootSaga;
