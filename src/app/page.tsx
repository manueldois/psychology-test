import Link from "next/link";

export default function Home() {
  return (
    <main
      className="center"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 30,
      }}
    >
      <h1>Psychology test</h1>

      <h2>
        <Link
          href="/questions"
          className="btn primary"
          style={{ marginTop: "100px" }}
        >
          Start Test
        </Link>
      </h2>
    </main>
  );
}
