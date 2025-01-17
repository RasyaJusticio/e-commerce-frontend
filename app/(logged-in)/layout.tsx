"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type LoggedInLayoutProps = {
  children: React.ReactNode;
};

const LoggedInLayout: React.FC<LoggedInLayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("logged-in");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return <>{localStorage.getItem("logged-in") && children}</>;
};

export default LoggedInLayout;
