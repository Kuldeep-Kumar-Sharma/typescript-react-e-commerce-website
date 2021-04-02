import { takeEvery, all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../../actions/actionTypes";

export function* watchCart() {
  yield all([takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga)]);
}
