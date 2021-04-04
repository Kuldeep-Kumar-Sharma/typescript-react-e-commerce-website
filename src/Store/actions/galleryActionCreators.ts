import { LOAD_SPLASH_IMAGES, GalleryActionTypes } from "./galleryTypes";
import { GallerySplash } from "../../Models/GallerySplash";

export function loadGallerySplashes(
  gallerySplashes: GallerySplash[]
): GalleryActionTypes {
  return {
    type: LOAD_SPLASH_IMAGES,
    gallerySplashes: gallerySplashes,
  };
}
