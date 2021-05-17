import { Product } from "../../Models/Product";
import { RETRIVE_PRODUCTS, ProductActionTypes } from "./productTypes";

export function retriveProducts(products: Product[]): ProductActionTypes {
  return {
    type: RETRIVE_PRODUCTS,
    products: products,
  };
}
