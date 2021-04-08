import { put, call } from "typed-redux-saga";
import axios from "../../axios-instance";
import { GallerySplash } from "../../Models/GallerySplash";
import { Creators } from "../actions/galleryActionCreators";

export function* initGallerySplashSaga(actions: Creators) {
  try {
    const response: any = yield* call(axios.get<GallerySplash[]>("/splashes"));
    yield put(actions.loadGallerySplashes(response));
  } catch (error) {
    console.log("--[initGallerySplashSaga]--");
    yield put(actions.loadGallerySplashes([]));
  }
}
