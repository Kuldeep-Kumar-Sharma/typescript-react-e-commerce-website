import {
  LOAD_SPLASH_IMAGES,
  LOAD_PRODUCT_CARDS,
  GalleryActionTypes,
} from "../actions/galleryTypes";
import { GallerySplash } from "../../Models/GallerySplash";
import { ProductCardProps } from "../../Models/ProductCard";

//use normal redux

interface InitialState {
  gallerySplashes: GallerySplash[];
  productCardProps: ProductCardProps[];
}
const initialState: InitialState = {
  gallerySplashes = [],
  productCardProps = [],
};

export const galleryReducer = (
  state: InitialState = initialState,
  action: GalleryActionTypes
): GallerySplash[] | ProductCardProps[] => {
  switch (action.type) {
    case LOAD_SPLASH_IMAGES:
      console.log("*************************************");
      console.log(state);
      return state.gallerySplashes.concat(action.gallerySplashes);
    case LOAD_SPLASH_IMAGES:
      console.log("*************************************");
      console.log(state);
      return state.productCardProps.concat(action.productCardProps);
    default:
      return state;
  }
};
