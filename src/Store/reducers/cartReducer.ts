import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartActionTypes,
} from "../actions/cartTypes";
import { Cart } from "../../Models/Cart";

//use normal redux

const initialState: Cart = {
  products: [],
};

export const cartReducer = (
  state: Cart = initialState,
  action: CartActionTypes
): Cart => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state);
      return {
        ...state,
        products: state.products.concat(action.product_id),
      };
    case REMOVE_FROM_CART:
      const updatedProducts: string[] = state.products.filter(
        (id) => id !== action.product_id
      );
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};
