import { ProductCardProps } from "./ProductCard";

export interface filterItem {
  eventKey: string;
  name: string;
}
export interface SearchProps {
  term: string;
  productCards: Array<ProductCardProps>;
  filters: Array<filterItem>;
}
