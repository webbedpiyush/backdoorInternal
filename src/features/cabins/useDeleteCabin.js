import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins as deleteCabinsApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabins } = useMutation({
    mutationFn: deleteCabinsApi,
    onSuccess: () => {
      toast.success("data deleted successfully");
      // cache ko invalidate karane ke liye
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCabins };
}
