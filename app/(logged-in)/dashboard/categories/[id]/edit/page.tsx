"use client";

import React from "react";
import { useParams } from "next/navigation";
import CategoryUpdateForm from "@/features/category/components/forms/UpdateForm";

const DashboardCategoriesUpdate = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <h1 className="mb-3 text-3xl font-bold">Edit Category</h1>
      <CategoryUpdateForm id={Number(id)} />
    </>
  );
};

export default DashboardCategoriesUpdate;
