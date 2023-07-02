"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAnswersStore, usePathStore } from "@/store";

export default async function PageClient({ path }: { path: string[] }) {
  const router = useRouter();

  useEffect(() => {
    usePathStore.setState({ path });
    useAnswersStore.setState({ answers: [] });

    router.push(`/questions/${path[0]}`);
  }, []);

  return <></>;
}
