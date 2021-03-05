import { ADD_TO_CART, REMOVE_FROM_CART, CartActionTypes } from "./types";

export function addToCart(ProductId: string): CartActionTypes {
  return {
    type: ADD_TO_CART,
    product_id: ProductId,
  };
}

export function removeromCart(ProductId: string): CartActionTypes {
  return {
    type: REMOVE_FROM_CART,
    product_id: ProductId,
  };
}
