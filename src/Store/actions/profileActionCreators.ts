import { EDIT_PROFILE, RETRIVE_PROFILE } from "./profileTypes";

export function editProfile(ProductId: string): CartActionTypes {
  return {
    type: EDIT_PROFILE,
    product_id: ProductId,
  };
}

export function removeromCart(ProductId: string): CartActionTypes {
  return {
    type: RETRIVE_PROFILE,
    product_id: ProductId,
  };
}
