import {
  ADD_ORDER,
  CANCEL_ORDER,
  OrderActionTypes,
} from "../actions/orderTypes";
import { Order } from "../../Models/Order";

const initialState: Order[] = [];

export const orderReducer = (
  state: Order[] = initialState,
  action: OrderActionTypes
): Order[] => {
  switch (action.type) {
    case ADD_ORDER:
      //TODO
      return {
        ...state,
        ...action.order,
      };
    case CANCEL_ORDER:
      //TODO
      return {
        ...state,
        ...action.order,
      };
    default:
      return state;
  }
};
