import {
  DeleteCategoryProps,
  deleteCategory,
} from "../services/categoryService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, DeleteCategoryProps>({
    mutationFn: deleteCategory,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["categories", variables.id] });
    },
  });
};
