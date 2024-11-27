export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>Shared Header</header>
      <main>{children}</main>
      <footer>Shared Footer</footer>
    </div>
  );
}
