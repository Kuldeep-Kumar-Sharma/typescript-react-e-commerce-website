import { Product } from "../../Models/Product";
export const RETRIVE_PRODUCTS = "RETRIVE_PROFILE";

interface RetriveProductAction {
  type: typeof RETRIVE_PRODUCTS;
  products: Product[];
}

export type ProductActionTypes = RetriveProductAction;
export type DispatchType = (args: ProductActionTypes) => ProductActionTypes;
