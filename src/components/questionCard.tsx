import { Question } from "@/types/questionarie";
import styles from '@/styles/questionCard.module.scss'

export default function QuestionCard({
  question: {id, question, options}
}: {question: Question}) {
  return (
    <article className={styles.questionCard}>
      <h1> Question {id} </h1>
      <h2> {question} </h2>

      <section className={styles.options}>
        <button> A: {options.A} </button>
        <button> B: {options.B} </button>
        <button> C: {options.C} </button>
        <button> D: {options.D} </button>
      </section>
    </article>
  );
}
