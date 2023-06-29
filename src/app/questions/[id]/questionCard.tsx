"use client";

import classNames from "classnames";
import { Question } from "@/app/types/questionarie";
import styles from "./questionCard.module.scss";

export default function QuestionCard({
  question: { id, question, options },
  value,
  onChange = () => {},
}: {
  question: Question;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <article className={styles.questionCard}>
      <small> ID {id} </small>
      <h2> {question} </h2>
      <section className={styles.options}>
        <label className={classNames("btn", { primary: value === "A" })}>
          <b>[A] </b> {options.A}
          <input
            type="radio"
            value={"A"}
            checked={value === "A"}
            name={`question-${id}`}
            onChange={(e) => e.target.checked && onChange("A")}
          />
        </label>
        <label className={classNames("btn", { primary: value === "B" })}>
          <b>[B] </b> {options.B}
          <input
            type="radio"
            value={"B"}
            checked={value === "B"}
            name={`question-${id}`}
            onChange={(e) => e.target.checked && onChange("B")}
          />
        </label>
        <label className={classNames("btn", { primary: value === "C" })}>
          <b>[C] </b> {options.C}
          <input
            type="radio"
            value={"C"}
            checked={value === "C"}
            name={`question-${id}`}
            onChange={(e) => e.target.checked && onChange("C")}
          />
        </label>
        <label className={classNames("btn", { primary: value === "D" })}>
          <b>[D] </b> {options.D}
          <input
            type="radio"
            value={"D"}
            checked={value === "D"}
            name={`question-${id}`}
            onChange={(e) => e.target.checked && onChange("D")}
          />
        </label>
      </section>
    </article>
  );
}
