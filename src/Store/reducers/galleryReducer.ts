import {
  LOAD_SPLASH_IMAGES,
  GalleryActionTypes,
} from "../actions/galleryTypes";
import { GallerySplashs } from "../../Models/GallerySplash";

//use normal redux

const initialState: GallerySplashs = {
  gallerySplashes: [],
};

const galleryReducer = (
  state: GallerySplashs = initialState,
  action: GalleryActionTypes
): GallerySplashs => {
  switch (action.type) {
    case LOAD_SPLASH_IMAGES:
      console.log(state);
      return {
        ...state,
        gallerySplashes: state.gallerySplashes.concat(action.gallerySplashes),
      };
    default:
      return state;
  }
};

export default galleryReducer;
