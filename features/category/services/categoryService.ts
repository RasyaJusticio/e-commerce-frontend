import { CategoryCreateSchema } from "../schemas/createSchema";
import { CategoryUpdateSchema } from "../schemas/updateSchema";
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

export type GetCategoryData = {
  category: Category;
};

export const getCategory = async (id: number) => {
  const response = await client.get<APISuccessResponse<GetCategoryData>>(
    `api/dashboard/categories/${id}`,
  );
  return response.data.data;
};

export type UpdateCategoryProps = {
  id: number;
  data: CategoryUpdateSchema;
};

export const updateCategory = async ({ id, data }: UpdateCategoryProps) => {
  const response = await client.put(`api/dashboard/categories/${id}`, data);

  return response.data;
};

export type DeleteCategoryProps = {
  id: number;
};

export const deleteCategory = async ({ id }: DeleteCategoryProps) => {
  const response = await client.delete(`api/dashboard/categories/${id}`);

  return response.data;
};
