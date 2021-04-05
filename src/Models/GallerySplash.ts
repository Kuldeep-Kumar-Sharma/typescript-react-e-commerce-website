export interface GallerySplash {
  imageSource: string;
  imageAltText: string;
  splashName: string;
  splashDiscription: string;
  searchID: string;
}

export interface GallerySplashs {
  gallerySplashes: Array<GallerySplash>;
}
