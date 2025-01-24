"use client";

import React, { useState } from "react";
import DashboardHeader from "@/features/dashboard/components/layout/Header";
import DashboardSidebar from "@/features/dashboard/components/layout/Sidebar";

export type DashboardLayoutProps = {
  children: React.ReactNode;
  modal?: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  modal,
}) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  return (
    <>
      <div className="flex min-h-screen flex-row-reverse items-center">
        <div className="z-10 flex min-h-screen flex-1 flex-col">
          <DashboardHeader setSidebarVisible={setSidebarVisible} />
          <main className="px px-6 py-8">{children}</main>
        </div>

        <DashboardSidebar
          isSidebarVisible={isSidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
      </div>
      {modal}
    </>
  );
};

export default DashboardLayout;
