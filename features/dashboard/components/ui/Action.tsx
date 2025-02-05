"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAlertDialog } from "@/components/AlertDialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader2, MoreHorizontal } from "lucide-react";

export type DashboardRowActionProps = {
  viewLink?: string;
  editLink?: string;
  canDelete?: boolean;
  onDelete?: (
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
};

const DeleteRowButton: React.FC<{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete?: DashboardRowActionProps["onDelete"];
}> = ({ setIsOpen, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Button
      key={String(isDeleting)}
      variant={'destructive'}
      onClick={() => onDelete && onDelete(setIsOpen, setIsDeleting)}
    >
      {isDeleting && <Loader2 className="animate-spin" />}
      Delete
    </Button>
  );
};

const DashboardRowAction: React.FC<DashboardRowActionProps> = ({
  viewLink,
  editLink,
  canDelete,
  onDelete,
}) => {
  const alertDialog = useAlertDialog();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {viewLink && (
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href={viewLink}>View</Link>
          </DropdownMenuItem>
        )}
        {editLink && (
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href={editLink}>Edit</Link>
          </DropdownMenuItem>
        )}
        {canDelete && (
          <DropdownMenuItem
            className="cursor-pointer text-red-500"
            onClick={() => {
              alertDialog.open({
                title: "Are you absolutely sure?",
                description:
                  "This action cannot be undone. This will permanently delete this category and remove it from the servers.",
                actionLabel: (setIsOpen) => (
                  <DeleteRowButton setIsOpen={setIsOpen} onDelete={onDelete} />
                ),
              });
            }}
          >
            Delete
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardRowAction;
