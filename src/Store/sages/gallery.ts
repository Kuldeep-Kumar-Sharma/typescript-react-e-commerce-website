import { put } from "redux-saga/effects";
import axios from "../../axios-instance";
import { GallerySplash } from "../../Models/GallerySplash";
import * as actions from "../actions";

declare function getCall(): Promise<User>;

export function* initIngredientsSaga(action) {
  try {
    const response = yield call(axios.get<GallerySplash[]>("/splashes"));
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
