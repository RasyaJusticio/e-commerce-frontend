"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export type DashboardRowActionProps = {
  viewLink?: string;
  editLink?: string;
  canDelete?: boolean;
};

const DashboardRowAction: React.FC<DashboardRowActionProps> = ({
  viewLink,
  editLink,
  canDelete,
}) => {
  return (
    <DropdownMenu>
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
          <DropdownMenuItem className="cursor-pointer text-red-500">
            Delete
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardRowAction;
