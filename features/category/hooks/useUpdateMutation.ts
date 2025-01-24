import {
  UpdateCategoryProps,
  updateCategory,
} from "../services/categoryService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, UpdateCategoryProps>({
    mutationFn: updateCategory,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["categories", variables.id] });
    },
  });
};
