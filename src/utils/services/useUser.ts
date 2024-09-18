import { instance } from "./instance.ts";

export function useUser() {
  const getUser = () => {
    return instance().get("me");
  };

  return {
    getUser,
  };
}
