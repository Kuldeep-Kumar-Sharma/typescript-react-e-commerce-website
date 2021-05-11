import { GallerySplash } from "./GallerySplash";
import { ProductCardProps } from "./ProductCard";
import { Cart } from "./Cart";

export interface GalleryState {
  gallerySplashes: Array<GallerySplash>;
  productCardProps: Array<ProductCardProps>;
}

export interface AppState {
  gyRr: GalleryState;
  ctRr: Cart;
  //Authentication
  //Search
}
