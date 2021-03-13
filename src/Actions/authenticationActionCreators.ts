import {
  LOGIN,
  SIGNUP,
  AuthenticationActionTypes,
} from "./authenticationTypes";
import { User } from "../Models/User";

export function login(
  auth_id: string,
  password: string
): AuthenticationActionTypes {
  return {
    type: LOGIN,
    user_data: {
      auth_id: auth_id,
      password: password,
    },
  };
}

export function signup(user: User): AuthenticationActionTypes {
  return {
    type: SIGNUP,
    user_data: user,
  };
}
