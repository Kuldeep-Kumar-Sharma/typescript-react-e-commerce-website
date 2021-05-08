import { User } from "../../Models/User";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const RETRIVE_PROFILE = "RETRIVE_PROFILE";

interface EditProfileAction {
  type: typeof EDIT_PROFILE;
  user_data: User;
}

interface RetriveProfileAction {
  type: typeof RETRIVE_PROFILE;
  user_data: User;
}

export type ProfileActionTypes = EditProfileAction | RetriveProfileAction;
export type DispatchType = (args: ProfileActionTypes) => ProfileActionTypes;
