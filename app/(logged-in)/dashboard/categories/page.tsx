"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCategoriesQuery } from "@/features/category/hooks/useQuery";
import { categoryColumns } from "@/features/category/types/Category";
import DataTable from "@/features/dashboard/components/ui/DataTable";

const DashboardCategories = () => {
  const categories = useCategoriesQuery();

  return (
    <>
      <div className="mb-6 flex w-full items-center">
        <h1 className="text-3xl font-bold">Categories</h1>

        <div className="ml-auto">
          <Button asChild>
            <Link href={"./categories/create"}>New Category</Link>
          </Button>
        </div>
      </div>
      <DataTable
        columns={categoryColumns}
        data={categories.data?.categories ?? []}
      />
    </>
  );
};

export default DashboardCategories;
