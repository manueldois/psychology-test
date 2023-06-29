"use client";

import classNames from "classnames";
import { Question } from "@/types/questionarie";
import styles from "@/styles/questionCard.module.scss";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function QuestionCard({
  question: { id, question, options },
}: {
  question: Question;
}) {
  const [answers, setAnswers] = useLocalStorage("answers", "");

  const setValue = (v: string) => {
    setAnswers((ans: Record<string, string>) => ({ ...ans, [id]: v }));
  };

  const value = answers[id];

  return (
    <article className={styles.questionCard}>
      <h2> {question} </h2>
      <section className={styles.options}>
        <label className={classNames("btn", { primary: value === "A" })}>
          <b>[A] </b> {options.A}
          <input
            type="radio"
            value={"A"}
            checked={value === "A"}
            name={`question-${id}`}
            onChange={(e) => e.target.checked && setValue("A")}
          />
        </label>
        <label className={classNames("btn", { primary: value === "B" })}>
          <b>[B] </b> {options.B}
          <input
            type="radio"
            value={"B"}
            checked={value === "B"}
            name={`question-${id}`}
            onChange={(e) => e.target.checked && setValue("B")}
          />
        </label>
        <label className={classNames("btn", { primary: value === "C" })}>
          <b>[C] </b> {options.C}
          <input
            type="radio"
            value={"C"}
            checked={value === "C"}
            name={`question-${id}`}
            onChange={(e) => e.target.checked && setValue("C")}
          />
        </label>
        <label className={classNames("btn", { primary: value === "D" })}>
          <b>[D] </b> {options.D}
          <input
            type="radio"
            value={"D"}
            checked={value === "D"}
            name={`question-${id}`}
            onChange={(e) => e.target.checked && setValue("D")}
          />
        </label>
      </section>
    </article>
  );
}
