import { put, call } from "typed-redux-saga";
import axios from "../../axios-instance";
import { GallerySplash } from "../../Models/GallerySplash";
import { Creators } from "../actions/galleryActionCreators";

// get call to bring splash screens
function getCall() {
  try {
    return axios.get<GallerySplash[]>("/splashes");
  } catch (error) {
    console.log(error);
  }
}

export function* initGallerySplashSaga(actions: Creators) {
  try {
    const response: any = yield* call(getCall);
    yield put(actions.loadGallerySplashes(response));
  } catch (error) {
    console.log("--[initGallerySplashSaga]--");
    yield put(actions.loadGallerySplashes([]));
  }
}
