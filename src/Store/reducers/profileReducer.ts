import {
  EDIT_PROFILE,
  RETRIVE_PROFILE,
  ProfileActionTypes,
} from "../actions/profileTypes";
import { User } from "../../Models/User";

//use normal redux
const initialState: User = {
  name: "",
  phone: "",
};

export const profileReducer = (
  state: User = initialState,
  action: ProfileActionTypes
): User => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        ...action.user_data,
      };
    case RETRIVE_PROFILE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
