"use client";

import classNames from "classnames";
import { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Question } from "@/app/types/questionarie";
import QuestionCard from "./questionCard";
import { PathContext } from "../pathContext";

function PageClient({ question }: { question: Question }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const path: string[] = useContext(PathContext);

  const answers: string[] =
    searchParams
      .get("answers")
      ?.split(",")
      .filter((id) => !!id)
      .map((id) => id.trim()) ?? [];

  const step = path.findIndex((id) => id == question.id);

  const [answer, setAnswer] = useState<string | undefined>(answers[step]);

  const onClickNext = () => {
    answers[step] = answer!;

    const nextId = path[step + 1];

    router.push(
      `/questions/${nextId}?answers=${answers.join(",")}`
    );
  };

  const onClickSubmit = () => {
    answers[step] = answer!;

    router.push(
      `/results?&answers=${answers.join(",")}`,
      {}
    );
  };

  return (
    <>
      <br style={{ marginTop: 20 }} />
      <h1>
        {" "}
        Question {step} / {path.length}{" "}
      </h1>
      <QuestionCard
        question={question}
        value={answer}
        onChange={setAnswer}
      ></QuestionCard>
      <br style={{ marginTop: 20 }} />
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
    </>
  );
}

export default PageClient;
