"use client";

import React from "react";
import { useRouter } from "next/navigation";
import useCategoryCreateForm from "../../hooks/useCreateForm";
import { useCreateCategoryMutation } from "../../hooks/useCreateMutation";
import { CategoryCreateSchema } from "../../schemas/createSchema";
import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { APIFailResponse } from "@/types/apiResponse";
import axios from "axios";

export type CategoryCreateFormProps = {
  className?: string;
};

const CategoryCreateForm = () => {
  const createMutation = useCreateCategoryMutation();
  const createForm = useCategoryCreateForm();

  const router = useRouter();

  const submit = async (data: CategoryCreateSchema) => {
    createMutation.mutate(data, {
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
                  createForm.setError("name", {
                    message: data[key] as string,
                    type: "manual",
                  });
                } else {
                  createForm.setError(key as "name" | "slug", {
                    message: data[key] as string,
                    type: "manual",
                  });
                }
              }
            }
          }
        }
      },
    });
  };

  return (
    <>
      <Form {...createForm}>
        <form className="space-y-2" onSubmit={createForm.handleSubmit(submit)}>
          <FormInput
            control={createForm.control}
            type="text"
            name="name"
            label="Name"
          />
          <FormInput
            control={createForm.control}
            type="text"
            name="slug"
            label="Slug"
          />

          <div className="!mt-4 flex items-center gap-2">
            <Button type="submit">Create</Button>
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

export default CategoryCreateForm;
