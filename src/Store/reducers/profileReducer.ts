import {
  EDIT_PROFILE,
  RETRIVE_PROFILE,
  ProfileActionTypes,
} from "../actions/profileTypes";
import { GalleryState } from "../../Models";

//use normal redux
const initialState: GalleryState = {
  gallerySplashes: [],
  productCardProps: [],
};

export const galleryReducer = (
  state: GalleryState = initialState,
  action: ProfileActionTypes
): GalleryState => {
  switch (action.type) {
    case LOAD_SPLASH_IMAGES:
      return {
        ...state,
        gallerySplashes: state.gallerySplashes.concat(action.gallerySplashes),
      };

    case LOAD_PRODUCT_CARDS:
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
