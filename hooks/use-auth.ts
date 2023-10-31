import { useAuth as useFronteggAuth } from "@frontegg/nextjs";
import { useRouter } from "next/router";

export const useAuth = () => {
  const { user } = useFronteggAuth();
  const router = useRouter();

  const logout = () => {
    router.replace("/account/logout");
  };

  return {
    user,
    logout,
  };
};
