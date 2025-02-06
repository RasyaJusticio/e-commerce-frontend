"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/features/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type GuestLayoutProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

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
  return (
    <QueryClientProvider client={queryClient}>
      {showContent && children}
    </QueryClientProvider>
  );
};

export default LoggedInLayout;
