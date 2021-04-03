import { put, call } from "typed-redux-saga";
import axios from "../../axios-instance";
import { GallerySplash } from "../../Models/GallerySplash";

function* getCall() {
  try {
    return axios.get<GallerySplash[]>("/splashes");
  } catch (e) {}
}

export function* initGallerySplashSaga(actions) {
  try {
    const response: any = yield* call(getCall);
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
