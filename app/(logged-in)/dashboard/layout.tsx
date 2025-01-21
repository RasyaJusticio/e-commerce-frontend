"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Brand from "@/components/ui/Brand";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import client from "@/lib/axios";
import { cn } from "@/lib/utils";
import { CircleUserRound, Home, LogOut, Menu } from "lucide-react";

export type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      label: "Dashboard",
      Icon: Home,
      url: "/dashboard",
    },
  ];

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
    <div className="flex min-h-screen flex-row-reverse items-center">
      <div className="z-10 flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 flex h-16 w-full items-center border-b border-zinc-800 bg-zinc-900 px-4">
          <button
            onClick={() => setSidebarVisible(true)}
            className="block size-9 text-zinc-500 hover:text-zinc-400 lg:hidden"
          >
            <Menu />
          </button>

          <div className="ml-auto">
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
          </div>
        </header>
        <main className="py-8">{children}</main>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 z-20 h-screen w-screen transition-opacity lg:sticky lg:w-80 lg:transition-none",
          isSidebarVisible
            ? "opacity-100"
            : "pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100",
        )}
      >
        <div
          onClick={() => setSidebarVisible(false)}
          className={cn(
            "absolute -z-10 block h-full w-full bg-zinc-950/50 lg:hidden",
          )}
        ></div>
        <div
          className={cn(
            "z-20 flex h-full w-80 flex-col border-r border-zinc-800 transition-transform lg:w-full lg:border-r-0 lg:transition-none",
            isSidebarVisible
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0",
          )}
        >
          <header className="flex h-16 w-full items-center justify-start border-b border-zinc-800 bg-zinc-900 px-6">
            <Link href={"/dashboard"}>
              <Brand />
            </Link>
          </header>
          <nav className="flex w-full flex-1 flex-col bg-zinc-900 px-6 py-8 lg:bg-zinc-950">
            {routes.map((route, index) => {
              const isCurrent = route.url === pathname;

              return (
                <Link
                  href={route.url}
                  key={index}
                  className={cn(
                    "flex items-center gap-3 rounded-md p-2 text-sm hover:bg-zinc-800/70",
                    isCurrent && "bg-zinc-800/70 text-emerald-500",
                  )}
                >
                  <route.Icon
                    className={cn(
                      isCurrent ? "text-emerald-500" : "text-zinc-400",
                    )}
                  />
                  <p className="font-medium">{route.label}</p>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default DashboardLayout;
