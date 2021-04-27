import {
  LOAD_SPLASH_IMAGES,
  LOAD_PRODUCT_CARDS,
  GalleryActionTypes,
} from "../actions/galleryTypes";
import { GalleryState } from "../../Models";

//use normal redux
const initialState: GalleryState = {
  gallerySplashes: [],
  productCardProps: [],
};

export const galleryReducer = (
  state: GalleryState = initialState,
  action: GalleryActionTypes
): GalleryState => {
  switch (action.type) {
    case LOAD_SPLASH_IMAGES:
      console.log("*************************************");
      console.log(state);
      return {
        ...state,
        gallerySplashes: state.gallerySplashes.concat(action.gallerySplashes),
      };

    case LOAD_PRODUCT_CARDS:
      console.log("*************************************");
      console.log(state);
      return {
        ...state,
        productCardProps: state.productCardProps.concat(
          action.productCardProps
        ),
      };
    default:
      return state;
  }
};
