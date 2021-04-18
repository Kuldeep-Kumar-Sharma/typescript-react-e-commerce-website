import { LOAD_SPLASH_IMAGES, GalleryActionTypes } from "./galleryTypes";
import { GallerySplash } from "../../Models/GallerySplash";
import { Dispatch } from "redux";
import axios from "../../axios-instance";

export const setGallerySplashes = (
  gallerySplashes: GallerySplash[]
): GalleryActionTypes => {
  return {
    type: LOAD_SPLASH_IMAGES,
    gallerySplashes: gallerySplashes,
  };
};

export const loadGallerySplashes = (action: GalleryActionTypes) => {
  return (dispatch: Dispatch) => {
    axios
      .get("https://react-my-burger.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setGallerySplashes(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
