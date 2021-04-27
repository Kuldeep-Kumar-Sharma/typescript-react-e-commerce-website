import {
  LOAD_SPLASH_IMAGES,
  LOAD_PRODUCT_CARDS,
  GalleryActionTypes,
} from "./galleryTypes";
import { GallerySplash } from "../../Models/GallerySplash";
import { ProductCardProps } from "../../Models/ProductCard";
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

export const setProductCards = (
  productCardProps: ProductCardProps[]
): GalleryActionTypes => {
  return {
    type: LOAD_PRODUCT_CARDS,
    productCardProps: productCardProps,
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

export const loadProductCards = () => {
  return (dispatch: Dispatch) => {
    axios
      .get("http://localhost:3004/products")
      .then((response) => {
        console.log(response);
        dispatch(setProductCards(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
