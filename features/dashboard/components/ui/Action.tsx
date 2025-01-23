"use client";

import React from "react";
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
  data: { id: number; slug?: string };
  noView?: boolean;
  noEdit?: boolean;
  noDelete?: boolean;
};

const DashboardRowAction: React.FC<DashboardRowActionProps> = ({ data, noView, noEdit, noDelete }) => {
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
        <DropdownMenuItem className="cursor-pointer">View</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-500">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardRowAction;
