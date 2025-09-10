import "@src/app/globals.css";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: Promise<Record<string, string>>;
}) {
  return children;
}
