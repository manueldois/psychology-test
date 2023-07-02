"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { Question } from "@/app/types/questionarie";
import QuestionCard from "./questionCard";
import { useAnswersStore, usePathStore } from "@/store";

function PageClient({ question }: { question: Question }) {
  const router = useRouter();

  const { path } = usePathStore();

  const { getAnswer, setAnswer, answers } = useAnswersStore();

  const step = path.findIndex((id) => id == question.id);

  const answer = getAnswer(step);

  const onClickNext = () => {
    const nextId = path[step + 1];

    router.push(`/questions/${nextId}`);
  };

  const onClickSubmit = async () => {
    const { resultId } = await fetch(`/results/calculate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path, answers }),
    }).then((res) => res.json());

    router.push(`/results/${resultId}`);
  };

  return (
    <>
      <br style={{ marginTop: 20 }} />
      <h1>
        Question {step + 1} / {path.length}
      </h1>
      <QuestionCard
        question={question}
        value={answer}
        onChange={(a) => setAnswer(step, a)}
      ></QuestionCard>
      <br style={{ marginTop: 20 }} />
      {path.length > 0 && (
        <section style={{ display: "flex", justifyContent: "flex-end" }}>
          {path[step + 1] ? (
            <button
              onClick={onClickNext}
              className={classNames("btn", {
                primary: !!answer,
                disabled: !answer,
              })}
            >
              Next
            </button>
          ) : (
            <button
              onClick={onClickSubmit}
              className={classNames("btn", {
                primary: !!answer,
                disabled: !answer,
              })}
            >
              Submit
            </button>
          )}
        </section>
      )}
    </>
  );
}

export default PageClient;
