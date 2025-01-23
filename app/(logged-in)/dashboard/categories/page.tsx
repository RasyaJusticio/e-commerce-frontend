import React from "react";
import { categoryColumns } from "@/features/category/types/Category";
import DataTable from "@/features/dashboard/components/ui/DataTable";

const DashboardCategories = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Categories</h1>
      <DataTable
        columns={categoryColumns}
        data={[
          {
            id: 1,
            name: "Appliances",
            created_at: "2024-12-29",
            updated_at: "2024-12-29",
          },
          {
            id: 1,
            name: "Appliances",
            created_at: "2024-12-29",
            updated_at: "2024-12-29",
          },
          {
            id: 1,
            name: "Appliances",
            created_at: "2024-12-29",
            updated_at: "2024-12-29",
          },
          {
            id: 1,
            name: "Appliances",
            created_at: "2024-12-29",
            updated_at: "2024-12-29",
          },
        ]}
      />
    </>
  );
};

export default DashboardCategories;
