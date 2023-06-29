import { getQuestion } from "@/app/db";
import PageClient from "./page_client";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const question = (await getQuestion(id))!;
  return (
    <PageClient question={question}></PageClient>
  );
}
