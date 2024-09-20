import { instance } from "./instance.ts";

export function useUser() {
  const getUser = () => {
    return instance().get("me");
  };

  const depositMoney = (count: number) => {
    return instance().put("me", { balance: count });
  };

  return {
    getUser,
    depositMoney,
  };
}
