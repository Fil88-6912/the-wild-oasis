import { useMutation } from "@tanstack/react-query";
import { singup as singupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSingup() {
  const { mutate: singup, isLoading } = useMutation({
    mutationFn: singupApi,
    onSuccess: (user) => {
      //console.log(user);
      toast.success(
        "Account successfully created! Plese verify the new account from the user's email address."
      );
    },
  });

  return { singup, isLoading };
}
