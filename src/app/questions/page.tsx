import { getQuestionIds } from "../db";
import { getMultipleRandom } from "../utils";
import PageClient from "./page_client";

export default async function Page() {
  const path = getMultipleRandom(await getQuestionIds(), 4);

  return <PageClient path={path}></PageClient>;
}
