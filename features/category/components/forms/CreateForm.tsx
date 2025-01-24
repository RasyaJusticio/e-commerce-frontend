"use client";

import React from "react";
import useCategoryCreateForm from "../../hooks/useCreateForm";
import FormInput from "@/components/forms/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

export type CategoryCreateFormProps = {
  className?: string;
};

const CategoryCreateForm = () => {
  const createForm = useCategoryCreateForm();

  return (
    <>
      <Form {...createForm}>
        <form>
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
          <Button type="submit">Create</Button>
        </form>
      </Form>
    </>
  );
};

export default CategoryCreateForm;
