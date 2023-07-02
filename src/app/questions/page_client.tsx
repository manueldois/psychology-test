"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { usePathStore } from "@/store";

export default async function PageClient({ path }: { path: string[] }) {
  const pathname = usePathname();
  const router = useRouter();

  console.count("Rerender");

  useEffect(() => {
    usePathStore.setState({ path });

    if (pathname === "/questions") {
      router.push(`/questions/${path[0]}`);
    }
  }, []);

  return <></>;
}
