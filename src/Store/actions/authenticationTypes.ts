import { User } from "../Models/User";
export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

interface LoginAction {
  type: typeof LOGIN;
  user_data: {
    auth_id: string;
    password: string;
  };
}

interface SignupAction {
  type: typeof SIGNUP;
  user_data: User;
}

export type AuthenticationActionTypes = LoginAction | SignupAction;
export type DispatchType = (
  args: AuthenticationActionTypes
) => AuthenticationActionTypes;
