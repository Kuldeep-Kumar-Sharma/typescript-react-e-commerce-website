import { takeEvery, takeLatest } from "redux-saga/effects";
import { initGallerySplashSaga } from "./gallery";

import * as galleryTypes from "../actions/galleryTypes";

export function* watchGallery() {
  yield* takeEvery(galleryTypes.LOAD_SPLASH_IMAGES, initGallerySplashSaga);
}
