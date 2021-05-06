import { User } from "../../Models/User";
import {
  EDIT_PROFILE,
  RETRIVE_PROFILE,
  ProfileActionTypes,
} from "./profileTypes";

export function editProfile(user: User): ProfileActionTypes {
  return {
    type: EDIT_PROFILE,
    user_data: user,
  };
}

export function retriveProfile(user: User): ProfileActionTypes {
  return {
    type: RETRIVE_PROFILE,
    user_data: user,
  };
}
