export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  product_id: string;
}

interface RemoverFromCartAction {
  type: typeof REMOVE_FROM_CART;
  product_id: string;
}

export type CartActionTypes = AddToCartAction | RemoverFromCartAction;
export type DispatchType = (args: CartActionTypes) => CartActionTypes;
