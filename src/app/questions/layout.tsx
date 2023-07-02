import { redirect } from "next/navigation";
import { getQuestionIds } from "../db";
import { getMultipleRandom } from "../utils";
import Providers from "./providers";

export default async function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = getMultipleRandom(await getQuestionIds(), 4);

  console.log({ path });

  return <Providers path={path}>{children}</Providers>;
}
