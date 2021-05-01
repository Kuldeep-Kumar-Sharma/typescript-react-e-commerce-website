import { EDIT_PROFILE, RETRIVE_PROFILE } from "./profileTypes";

export function editProfile(ProductId: string): CartActionTypes {
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
