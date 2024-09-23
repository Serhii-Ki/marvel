import { instance } from "./instance.ts";
import {
  ResponseSignInType,
  ResponseSignUpType,
  SignInType,
  SignUpType,
} from "../types/authTypes.ts";

export function useAuth() {
  const signUp = (userData: SignUpType) => {
    return instance().post<ResponseSignUpType>("signup", userData);
  };

  const signIn = (userData: SignInType) => {
    return instance().post<ResponseSignInType>("signin", userData);
  };

  const logOut = () => {
    return instance().post("destroy-session");
  };

  return {
    signUp,
    signIn,
    logOut,
  };
}
