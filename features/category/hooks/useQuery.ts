import { getCategories, getCategory } from "../services/categoryService";
import { useQuery } from "@tanstack/react-query";

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    retry: 3,
  });
};

export const useCategoryQuery = (id: number) => {
  return useQuery({
    queryKey: ["categories", id],
    queryFn: () => getCategory(id),
    retry: 3,
  });
};
