"use client";

import { useEffect } from "react";
import { PathContext } from "./pathContext";
import { usePathname, useRouter } from "next/navigation";

export default async function Providers({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string[];
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/questions") {
      router.push(`/questions/${path[0]}`);
    }
  }, []);

  return <PathContext.Provider value={path}>{children}</PathContext.Provider>;
}
