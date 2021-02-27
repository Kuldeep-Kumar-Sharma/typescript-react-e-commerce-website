import { Product } from "./Product";

export interface Order {
  date: string;
  product: Product;
  time: string;
}
