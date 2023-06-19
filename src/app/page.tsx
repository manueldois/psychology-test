import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Psychology test
      </h1>

      <h2>
        <Link href="/questions/1" className={styles.btn} style={{marginTop: '100px'}} >
          Start Test
          </Link>
      </h2>
    </main>
  );
}
