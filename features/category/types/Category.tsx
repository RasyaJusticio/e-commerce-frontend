"use client";

import DashboardRowAction from "@/features/dashboard/components/ui/Action";
import { ColumnDef } from "@tanstack/react-table";

type Category = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <DashboardRowAction data={row.original} />;
    },
  },
];

export { categoryColumns };
export type { Category };
