import { put, call } from "typed-redux-saga";
import axios from "../../axios-instance";
import { GallerySplash } from "../../Models/GallerySplash";
import { loadGallerySplashes } from "../../Store/actions/galleryActionCreators";

// get call to bring splash screens
function* getCall() {
  try {
    return axios.get<GallerySplash[]>("/splashes");
  } catch (error) {
    console.log(error);
  }
}

export function* initGallerySplashSaga(actions:) {
  try {
    const response: any = yield* call(getCall);
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
