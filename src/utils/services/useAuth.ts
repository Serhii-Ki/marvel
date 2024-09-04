import { instance } from "./instance.ts";
import { SignInType, SignUpType } from "../types/authTypes.ts";

export function useAuth() {
  const signUp = (userData: SignUpType) => {
    instance().post("signup", userData);
  };

  const signIn = (userData: SignInType) => {
    instance().post("signin", userData);
  };

  return {
    signUp,
    signIn,
  };
}
