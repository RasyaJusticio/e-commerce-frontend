"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type GuestLayoutProps = {
  children: React.ReactNode;
};

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("logged-in");
    if (isLoggedIn) {
      router.push("/");
    }
  }, [router]);

  return <>{!localStorage.getItem("logged-in") && children}</>;
};

export default GuestLayout;
