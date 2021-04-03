import { GallerySplash } from "../../Models/GallerySplash";
export const LOAD_SPLASH_IMAGES = "LOAD_SPLASH_IMAGES";

interface LoadSplashImages {
  type: typeof LOAD_SPLASH_IMAGES;
  gallerySplashes: GallerySplash[];
}

export type GalleryActionTypes = LoadSplashImages;
export type DispatchType = (args: GalleryActionTypes) => GalleryActionTypes;
