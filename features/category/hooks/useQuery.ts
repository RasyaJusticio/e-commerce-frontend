import { getCategories } from "../services/categoryService";
import { Category } from "../types/Category";
import { APISuccessResponse } from "@/types/apiResponse";
import { useQuery } from "@tanstack/react-query";

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    retry: 3,
  });
};
