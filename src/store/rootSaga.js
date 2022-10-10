import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/saga";
import classSaga from "./class/saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(classSaga)]);
}
