import { redirect } from "next/navigation";
import { getMultipleRandom } from "../utils";
import { getQuestionIds } from "../db";

export default async function Page() {
  const path = getMultipleRandom(await getQuestionIds(), 4);

  redirect(`/questions/${path[0]}?path=${path.join(",")}`);
}
