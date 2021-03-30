import { Order } from "../Models/Order";
export const ADD_ORDER = "ADD_ORDER";
export const CANCEL_ORDER = "CANCEL_ORDER";

interface AddOrderAction {
  type: typeof ADD_ORDER;
  order: Order;
}

interface CancelOrderAction {
  type: typeof CANCEL_ORDER;
  order: Order;
}

export type OrderActionTypes = AddOrderAction | CancelOrderAction;
export type DispatchType = (args: OrderActionTypes) => OrderActionTypes;
