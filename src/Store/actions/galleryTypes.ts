import { GallerySplash } from "../../Models/GallerySplash";
import { ProductCardProps } from "../../Models/ProductCard";
export const LOAD_SPLASH_IMAGES = "LOAD_SPLASH_IMAGES";
export const LOAD_PRODUCT_CARDS = "LOAD_PRODUCT_CARDS";

interface LoadSplashImages {
  type: typeof LOAD_SPLASH_IMAGES;
  gallerySplashes: GallerySplash[];
}

interface LoadProductCards {
  type: typeof LOAD_PRODUCT_CARDS;
  productCardProps: ProductCardProps[];
}

export type GalleryActionTypes = LoadSplashImages | LoadProductCards;
export type DispatchType = (args: GalleryActionTypes) => GalleryActionTypes;
