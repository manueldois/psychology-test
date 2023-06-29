export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="center" style={{maxWidth: '800px'}}>{children}</main>;
}
