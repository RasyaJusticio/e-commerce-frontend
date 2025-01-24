import { CategoryCreateSchema } from "../schemas/createSchema";
import { Category } from "../types/Category";
import client from "@/lib/axios";
import { APISuccessResponse } from "@/types/apiResponse";

export const createCategory = async (category: CategoryCreateSchema) => {
  const response = await client.post("api/dashboard/categories", category);
  return response.data;
};

export type GetCategoriesData = {
  categories: Category[];
  meta: {
    page: number;
    per_page: number;
    total_page: number;
  };
};

export const getCategories = async () => {
  const response = await client.get<APISuccessResponse<GetCategoriesData>>(
    "api/dashboard/categories",
  );
  return response.data.data;
};
