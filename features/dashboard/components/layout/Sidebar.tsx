"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "@/components/ui/Brand";
import { cn } from "@/lib/utils";
import { Home, Tag } from "lucide-react";

export type DashboardSidebarProps = {
  isSidebarVisible: boolean;
  setSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const routes = [
  {
    label: "Dashboard",
    Icon: Home,
    url: "/dashboard",
  },
  {
    label: "Categories",
    Icon: Tag,
    url: "/dashboard/categories",
  },
];

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isSidebarVisible,
  setSidebarVisible,
}) => {
  const pathname = usePathname();

  return (
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
        <nav className="flex w-full flex-1 flex-col gap-1 bg-zinc-900 px-6 py-8 lg:bg-zinc-950">
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
                  size={20}
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
  );
};

export default DashboardSidebar;
