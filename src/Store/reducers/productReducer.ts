import { RETRIVE_PRODUCTS, ProductActionTypes } from "../actions/productTypes";
import { Product } from "../../Models/Product";

const initialState: Product[] = [];

export const cartReducer = (
  state: Product[] = initialState,
  action: ProductActionTypes
): Product[] => {
  switch (action.type) {
    case RETRIVE_PRODUCTS:
      return {
        ...state,
        ...action.products,
      };
    default:
      return state;
  }
};
