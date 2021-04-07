import { LOAD_SPLASH_IMAGES, GalleryActionTypes } from "./galleryTypes";
import { GallerySplash } from "../../Models/GallerySplash";

export class Creators {
  loadGallerySplashes(gallerySplashes: GallerySplash[]): GalleryActionTypes {
    return {
      type: LOAD_SPLASH_IMAGES,
      gallerySplashes: gallerySplashes,
    };
  }
}
