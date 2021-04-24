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

export const loadGallerySplashes = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("http://localhost:3004/splashes")
      .then((response) => {
        console.log(response);
        dispatch(setGallerySplashes(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
