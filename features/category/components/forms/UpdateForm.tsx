"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCategoryQuery } from "../../hooks/useQuery";
import useCategoryUpdateForm from "../../hooks/useUpdateForm";
import { useUpdateCategoryMutation } from "../../hooks/useUpdateMutation";
import { CategoryUpdateSchema } from "../../schemas/updateSchema";
import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { APIFailResponse } from "@/types/apiResponse";
import axios from "axios";

export type CategoryUpdateFormProps = {
  id: number;
};

const CategoryUpdateForm: React.FC<CategoryUpdateFormProps> = ({ id }) => {
  const category = useCategoryQuery(id);
  const updateMutation = useUpdateCategoryMutation();
  const updateForm = useCategoryUpdateForm();

  const router = useRouter();

  const submit = async (data: CategoryUpdateSchema) => {
    updateMutation.mutate(
      { id, data },
      {
        onSuccess: () => {
          router.back();
        },
        onError: (error) => {
          if (axios.isAxiosError<APIFailResponse>(error)) {
            if (error.response?.data && error.response.data.data) {
              const data = error.response.data.data;

              for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                  if (key === "message") {
                    updateForm.setError("name", {
                      message: data[key] as string,
                      type: "manual",
                    });
                  } else {
                    updateForm.setError(key as "name" | "slug", {
                      message: data[key] as string,
                      type: "manual",
                    });
                  }
                }
              }
            }
          }
        },
      },
    );
  };

  useEffect(() => {
    if (category.isSuccess) {
      const categoryData = category.data.category;

      updateForm.setValue("name", categoryData.name);
    }
  }, [category.isSuccess]);

  return (
    <>
      <Form {...updateForm}>
        <form className="space-y-2" onSubmit={updateForm.handleSubmit(submit)}>
          <FormInput
            control={updateForm.control}
            type="text"
            name="name"
            label="Name"
          />
          <FormInput
            control={updateForm.control}
            type="text"
            name="slug"
            label="Slug"
          />

          <div className="!mt-4 flex items-center gap-2">
            <Button type="submit">Save</Button>
            <Button
              type="button"
              onClick={() => router.back()}
              variant={"secondary"}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CategoryUpdateForm;
