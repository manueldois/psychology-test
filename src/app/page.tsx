import Link from "next/link";

export default function Home() {
  return (
    <main className="center-h" style={{fontSize: '1.5em', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 30}}>
      <h1>
        Psychology test
      </h1>

      <h2>
        <Link href="/questions/1" className="btn" style={{marginTop: '100px'}} >
          Start Test
          </Link>
      </h2>
    </main>
  );
}
