import allQuestions from "@/data/questionarie.json";
import { getMultipleRandom } from "../utils/utils";
import QuestionCard from "@/components/questionCard";

export default function Page() {
  const questions = getMultipleRandom(allQuestions, 4);
  return (
    <main className="center">
        <QuestionCard question={questions[0]} ></QuestionCard>
    </main>
  );
}
