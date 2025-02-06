"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import client from "@/lib/axios";
import { CircleUserRound, LogOut, Menu } from "lucide-react";

export type DashboardHeaderProps = {
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  setSidebarVisible,
}) => {
  return (
    <header className="sticky top-0 flex h-16 w-full items-center border-b border-zinc-800 bg-zinc-900 px-4 md:px-5 lg:px-8">
      <button
        onClick={() => setSidebarVisible(true)}
        className="block size-9 text-zinc-500 hover:text-zinc-400 lg:hidden"
      >
        <Menu />
      </button>

      <div className="ml-auto">
        <Profile />
      </div>
    </header>
  );
};

const Profile = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await client.post("api/auth/logout");

      router.push("/login");
    } catch (error) {
      console.log(error);
    } finally {
      document.cookie =
        "is_logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>
            {localStorage
              .getItem("name")
              ?.split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex items-center gap-2">
            <CircleUserRound size={18} />
            <p>{localStorage.getItem("name")}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <div className="flex items-center gap-2">
            <LogOut size={18} />
            Sign Out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardHeader;
