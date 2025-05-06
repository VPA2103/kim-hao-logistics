// ClientLayout.tsx
"use client";

import { ReactNode, useState, useEffect } from "react";
import LoadingSpinner from "@components/LoadingSpinner/loading";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingSpinner /> : children;
}
