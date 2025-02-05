"use client";

import { useDeleteCategoryMutation } from "../hooks/useDeleteMutation";
import DashboardRowAction from "@/features/dashboard/components/ui/Action";
import { ColumnDef } from "@tanstack/react-table";

type Category = {
  id: number;
  slug: string;
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
    cell: ({ getValue }) => {
      const date = new Date(getValue() as string);
      return date.toLocaleDateString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const deleteMutation = useDeleteCategoryMutation();

      return (
        <DashboardRowAction
          editLink={`categories/${row.original.id}/edit`}
          canDelete
          onDelete={(setIsOpen, setIsDeleting) => {
            setIsDeleting(true);
            deleteMutation.mutate(
              { id: row.original.id },
              {
                onSuccess: () => {
                  setIsOpen(false);
                  setIsDeleting(false);
                },
              },
            );
          }}
        />
      );
    },
  },
];

export { categoryColumns };
export type { Category };
