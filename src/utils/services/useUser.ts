import { instance } from "./instance.ts";

export function useUser() {
  const getUser = (token: string) => {
    return instance().get("me");
  };
}
