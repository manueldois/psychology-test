import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const answers: string[] =
    searchParams.answers
      ?.split(",")
      .filter((id) => !!id)
      .map((id) => id.trim()) ?? [];

  const score = answers.reduce((acc: number, answer: string) => {
    const values = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
    };

    return acc + values[answer as keyof typeof values] || 0;
  }, 0);

  const result = Math.round(1 * (score / answers.length));

  redirect("/results/" + result);
}
