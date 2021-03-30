import { put } from "redux-saga/effects";
import axios from "../../axios-instance";
import * as actions from "../actions";

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get("/splashes");
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
