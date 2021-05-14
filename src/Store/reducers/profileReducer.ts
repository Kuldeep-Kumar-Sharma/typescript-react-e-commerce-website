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
    case EDIT_PROFILE:
      return {
        ...state,
      };

    case RETRIVE_PROFILE:
      return {
        ...state,
        ),
      };
    default:
      return state;
  }
};
