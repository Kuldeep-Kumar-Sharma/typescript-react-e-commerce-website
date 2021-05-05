import { User } from "../../Models/User";
import { EDIT_PROFILE, RETRIVE_PROFILE } from "./profileTypes";

export function editProfile(user: User):  {
  return {
    type: EDIT_PROFILE,
    product_id: user,
  };
}


export function editProfile(user: User):  {
  return {
    type: RETRIVE_PROFILE,
    product_id: user,
  };
}
