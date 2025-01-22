"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/features/auth";

type GuestLayoutProps = {
  children: React.ReactNode;
};

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/");
    } else {
      setShowContent(true);
    }
  }, [router]);

  return (
    <div className="grid items-center min-h-screen">
      {showContent && children}
    </div>
  );
};

export default GuestLayout;
