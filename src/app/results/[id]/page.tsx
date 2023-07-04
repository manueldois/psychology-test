import { getAllResults, getResult } from "@/app/db";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const allResults = await getAllResults();
  return allResults.map((r) => ({ id: r.id }));
}

async function Page({ params: { id } }: { params: { id: string } }) {
  const result = await getResult(id);
  return (
    <>
      <h1>Result:</h1>
      <h2 style={{textDecoration: 'underline'}}> {result?.title} </h2>
      <small> ID {result?.id} </small>
      <p> {result?.description1} </p>
      <p> {result?.description2} </p>

      <section style={{ display: "flex", justifyContent: "center" }}>
        <Link
          href="/questions"
          className="btn primary"
          style={{ marginTop: "50px" }}
        >
          Restart Test
        </Link>
      </section>
    </>
  );
}

export default Page;
