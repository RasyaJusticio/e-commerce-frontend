import React from "react";
import CategoryCreateForm from "@/features/category/components/forms/CreateForm";
import DashboardModal from "@/features/dashboard/components/layout/Modal";

const DashboardCategoriesCreateIntercept = () => {
  return (
    <DashboardModal title="Create Category" description="Create a new category">
      <CategoryCreateForm />
    </DashboardModal>
  );
};

export default DashboardCategoriesCreateIntercept;
