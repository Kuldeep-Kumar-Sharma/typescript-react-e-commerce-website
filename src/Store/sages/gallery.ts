import { put } from "typed-redux-saga";
import axios from "../../axios-instance";
import { GallerySplash } from "../../Models/GallerySplash";
import { Creators } from "../actions/galleryActionCreators";

// get call to bring splash screens
function getCall(): any {
  const values: any[] = [];
  try {
    axios.get<GallerySplash[]>("/splashes").then((response) => {
      for (const value of response.data) {
        values.push(value);
      }
      return values;
    });
  } catch (error) {
    console.log(error);
  }
}

export function* initGallerySplashSaga(actions: Creators) {
  try {
    const response: any = yield* getCall();
    yield put(actions.loadGallerySplashes(response));
  } catch (error) {
    console.log("--[initGallerySplashSaga]--");
    yield put(actions.loadGallerySplashes([]));
  }
}
