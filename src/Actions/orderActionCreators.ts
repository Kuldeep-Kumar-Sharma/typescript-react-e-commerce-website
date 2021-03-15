import { ADD_ORDER, CANCEL_ORDER, OrderActionTypes } from "./orderTypes";
import { Order } from "../Models/Order";

export function addOrder(order: Order): OrderActionTypes {
  return {
    type: ADD_ORDER,
    order: order,
  };
}

export function cancelOrder(order: Order): OrderActionTypes {
  return {
    type: CANCEL_ORDER,
    order: order,
  };
}
