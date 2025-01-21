"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/features/auth";

type GuestLayoutProps = {
  children: React.ReactNode;
};

const LoggedInLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      setShowContent(true);
    }
  }, [router]);

  return <>{showContent && children}</>;
};

export default LoggedInLayout;
