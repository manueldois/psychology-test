import { getResult } from "@/app/db";
import Link from "next/link";

export const dynamic = "error";

async function Page({ params: { id } }: { params: { id: string } }) {
  const result = await getResult(id);
  return (
    <>
      <h1> {result?.title} </h1>
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
