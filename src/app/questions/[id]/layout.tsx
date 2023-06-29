export default async function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="center">{children}</main>;
}
