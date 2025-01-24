import React from "react";
import CategoryCreateForm from "@/features/category/components/forms/CreateForm";

const DashboardCategoriesCreate = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-3">Create Category</h1>
      <CategoryCreateForm />
    </>
  );
};

export default DashboardCategoriesCreate;
