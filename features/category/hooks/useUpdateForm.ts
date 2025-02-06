import {
  CategoryUpdateSchema,
  categoryUpdateSchema,
} from "../schemas/updateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useCategoryUpdateForm = () => {
  return useForm<CategoryUpdateSchema>({
    resolver: zodResolver(categoryUpdateSchema),
  });
};

export default useCategoryUpdateForm;
