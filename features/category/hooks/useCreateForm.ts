import {
  CategoryCreateSchema,
  categoryCreateSchema,
} from "../schemas/createSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useCategoryCreateForm = () => {
  return useForm<CategoryCreateSchema>({
    resolver: zodResolver(categoryCreateSchema),
  });
};

export default useCategoryCreateForm;
